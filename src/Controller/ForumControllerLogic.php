<?php

namespace App\Controller;

use App\Entity\Categories;
use App\Entity\Post;
use App\Entity\PostAnswer;
use App\Entity\User;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;


class ForumControllerLogic extends AbstractController
{
    #[Route('/allCategories', name: 'allCategories')]
    public function allCategories(Request $request, ManagerRegistry $doctrine, MailerInterface $mailer)
    {
        $entityManager = $doctrine->getManager();
        $categories = [];
        $foundCategories = $entityManager->getRepository(Categories::class)->findAll();
        foreach ($foundCategories as $category) {
            $categories[] = ['name' => $category->getName(), 'description' => $category->getDescription(), 'id' => $category->getId()];
        }
        return $this->json(['success' => true, 'categories' => $categories]);
    }


    #[Route('/newPost', name: 'newPost')]
    public function newPost(Request $request, ManagerRegistry $doctrine)
    {
        $entityManager = $doctrine->getManager();
        $data = json_decode($request->getContent(), true);
        $title = $data['title'];
        $body = $data['body'];
        $category = $data['category'];
        $post = new Post();
        $post->setTitle($title);
        $post->setAuthor($this->getUser()->getUsername());
        $post->setBody($body);

        $post->setCategory($entityManager->getRepository(Categories::class)->findOneBy(['id' => $category]));
        $date = new \DateTime();
        $post->setDateCreated($date);
        $entityManager->persist($post);
        $user = $this->getUser();
        $user->setPostsPublished($user->getPostsPublished() + 1);
        $entityManager->persist($user);
        $entityManager->flush();
        return $this->json(['success' => true]);
    }


    #[Route('/searchPosts', name: 'searchPosts')]
    public function searchPosts(Request $request, ManagerRegistry $doctrine)
    {

        $entityManager = $doctrine->getManager();

        $data = json_decode($request->getContent(), true);
        $query = $data['query'];

        // Query the database for posts containing the search query
        $posts = $entityManager->createQueryBuilder()
            ->select('p')
            ->from(Post::class, 'p')
            ->where('p.title LIKE :query')
            ->orWhere('p.body LIKE :query')
            ->setParameter('query', '%' . $query . '%')
            ->getQuery()
            ->getResult();

        // Serialize the posts to JSON
        $postsJson = $this->serializePostsToJson($posts);

        // Return a JSON response with the search results
        return $this->json($postsJson);
    }

    private function serializePostsToJson($posts)
    {
        $postsJson = array();

        foreach ($posts as $post) {
            $postJson = array(
                'id' => $post->getId(),
                'title' => $post->getTitle(),
                'body' => $post->getBody(),
                'author' => $post->getAuthor(),
                'category' => $post->getCategory()->getName(),
                'date_created' => $post->getDateCreated()->format('Y-m-d')
            );

            $postsJson[] = $postJson;
        }

        return $postsJson;
    }


    #[Route('/showPosts', name: 'showPosts')]
    public function showPosts(Request $request, ManagerRegistry $doctrine)
    {
        $entityManager = $doctrine->getManager();
        $data = json_decode($request->getContent(), true);
        $category = $data['category'];
        $posts = $entityManager->getRepository(Post::class)->findBy(['category' => $category]);
        // Serialize the posts to JSON
        $postsJson = $this->serializePostsToJson($posts);

        // Return a JSON response with the search results
        return $this->json($postsJson);
    }


    #[Route('/read/{category}/{user}/{id}', name: 'read_post')]
    public function readPost(Request $request, ManagerRegistry $doctrine, $id, UrlGeneratorInterface $urlGenerator)
    {
        $entityManager = $doctrine->getManager();

        $post = $entityManager->getRepository(Post::class)->findOneBy(['id' => $id]);
        $user = $entityManager->getRepository(User::class)->findOneBy(['username' => $post->getAuthor()]);
        // Generate the URL for the profile picture


        $replies = $entityManager->getRepository(PostAnswer::class)->findBy(['postId' => $post->getId()]);
        $category = $entityManager->getRepository(Categories::class)->findOneBy(['id' => $post->getCategory()]);

        $processedPost = ['id' => $post->getId(), 'author' => $post->getAuthor(), 'body' => $post->getBody(),
            'title' => $post->getTitle(), 'category' => $category->getName(), 'date' => $post->getDateCreated()->format('Y-m-d H:i'),
            'profilePic' => $user->getProfilePic(), 'loggedIn' => $this->getUser()];

        $proccesedReplies = [];
        foreach ($replies as $reply) {
            $proccesedReplies[] = ['id' => $reply->getId(), 'body' => $reply->getBody(), 'date' => $reply->getDateCreated()->format('Y-m-d H:i'),
                'user' => $reply->getAuthor()->getUsername(), 'profilePic' => $reply->getAuthor()->getProfilePic()];

        }


        return $this->render('form/read.html.twig', ['post' => $processedPost, 'replies' => $proccesedReplies]);
    }


    #[Route('/replyToPost', name: 'replyToPost')]
    public function replyToPost(Request $request, ManagerRegistry $doctrine)
    {
        $entityManager = $doctrine->getManager();
        $data = json_decode($request->getContent(), true);
        $body = $data['body'];
        $id = $data['id'];

        $reply = new PostAnswer();
        $reply->setBody($body);
        $reply->setAuthor($this->getUser());
        $reply->setDateCreated(new \DateTime());

        $reply->setPostId($entityManager->getRepository(Post::class)->findOneBy(['id' => $id]));
        $entityManager->persist($reply);
        $entityManager->flush();


        $replyProcessed[] = ['id' => $reply->getId(), 'body' => $reply->getBody(), 'date' => $reply->getDateCreated()->format('Y-m-d H:i'),
            'user' => $reply->getAuthor()->getUsername(), 'profilePic' => $reply->getAuthor()->getProfilePic()];


        return $this->json(['success' => true, 'replyProcessed' => $replyProcessed]);
    }


    #[Route('/profile/{username}', name: 'profile')]
    public function profile(Request $request, ManagerRegistry $doctrine, $username)
    {
        $entityManager = $doctrine->getManager();
        $user = $entityManager->getRepository(User::class)->findOneBy(['username' => $username]);

        $posts = $entityManager->getRepository(Post::class)->findBy(['author' => $user]);
        $postDetails = array_map(function ($post) {
            return [
                'title' => $post->getTitle(),
                'id' => $post->getId(),
                'category' => $post->getCategory()->getName(),
                // add more attributes as needed
            ];
        }, $posts);


        $replyProcessed[] = ['username' => $user->getUsername(), 'profilePic' => $user->getProfilePic(), 'postsPublished' => $user->getPostsPublished(),
            'postsTitles' => $postDetails, 'dateCreated' => $user->getDateCreated()->format('Y-m-d')];


        return $this->render('form/userDetails.html.twig', ['replyProcessed' => $replyProcessed]);
    }


    #[Route('/show/{category}/{id}', name: 'showPostsByCategory')]
    public function showPostsByCategory(Request $request, ManagerRegistry $doctrine, $id)
    {
        $entityManager = $doctrine->getManager();
        $category = $entityManager->getRepository(Categories::class)->findOneBy(['id' => $id]);
        $posts = $entityManager->getRepository(Post::class)->findBy(['category' => $category]);
        $postsProcessed = array_map(function ($post) {
            return [
                'title' => $post->getTitle(),
                'id' => $post->getId(),
                'category' => $post->getCategory()->getName(),
                'author' => $post->getAuthor(),
                'date'=> $post->getDateCreated()->format('Y-m-d H:i')
                // add more attributes as needed
            ];
        }, $posts);
        $categoryProcessed = [
            'description' => $category->getDescription(),
            'id' => $category->getId(),
            'name' => $category->getName(),

            // add more attributes as needed
        ];
        return $this->render('form/byCategory.html.twig', ['posts' => $postsProcessed, 'category' => $categoryProcessed]);
    }


}
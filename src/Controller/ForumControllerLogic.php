<?php

namespace App\Controller;

use App\Entity\Categories;
use App\Entity\Post;
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
        $post->setCategory($category);
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
            ->setParameter('query', '%'.$query.'%')
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
                'category' => $post->getCategory(),
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
        $posts=$entityManager->getRepository(Post::class)->findBy(['category'=>$category]);
        // Serialize the posts to JSON
        $postsJson = $this->serializePostsToJson($posts);

        // Return a JSON response with the search results
        return $this->json($postsJson);
    }


    #[Route('/watch/{id}', name: 'watch_post')]
    public function readPost(Request $request, ManagerRegistry $doctrine, $id,UrlGeneratorInterface $urlGenerator)
    {
        $entityManager = $doctrine->getManager();

        $post = $entityManager->getRepository(Post::class)->findOneBy(['id' => $id]);
$user=$entityManager->getRepository(User::class)->findOneBy(['username'=>$post->getAuthor()]);
        // Generate the URL for the profile picture
        $profilePictureUrl = $request->getSchemeAndHttpHost() . '/'.$user->getProfilePic();


        return $this->render('form/read.html.twig', ['post' => $post,
            'profilePictureUrl' => $profilePictureUrl, 'user' => $user]);
    }


}
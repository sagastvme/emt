<?php

namespace App\Controller;

use App\Entity\Categories;
use App\Entity\Post;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Routing\Annotation\Route;

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

}
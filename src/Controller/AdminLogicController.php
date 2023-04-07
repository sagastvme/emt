<?php

namespace App\Controller;

use App\Entity\Plans;
use App\Entity\Post;
use App\Entity\SavedPosts;
use App\Entity\Stops;
use App\Entity\TransportPrices;
use App\Entity\User;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class AdminLogicController extends AbstractController
{
    #[Route('/adminDeletesUserAccount', name: 'adminDeletesUserAccount')]
    public function adminDeletesUserAccount(ManagerRegistry $doctrine, Request $request)
    {
        $entityManager = $doctrine->getManager();
        $data = json_decode($request->getContent(), true);
        $username = $data['user'];

        $userdeleted = $entityManager->getRepository(User::class)->findOneBy(['username' => $username]);
        $savedStops = $entityManager->getRepository(Stops::class)->findBy(['username' => $username]);
        foreach ($savedStops as $stop) {
            $entityManager->remove($stop);
        }
        $entityManager->remove($userdeleted);
        $entityManager->flush();
        return $this->json(['success' => true]);
    }

    #[Route('/adminDeletesTransportPlan', name: 'adminDeletesTransportPlan')]
    public function adminDeletesTransportPlan(ManagerRegistry $doctrine, Request $request)
    {
        $entityManager = $doctrine->getManager();
        $data = json_decode($request->getContent(), true);
        $plan = $data['plan'];
        $plandeleted = $entityManager->getRepository(Plans::class)->findOneBy(['id' => $plan]);
        $existingFiles = glob($plandeleted->getPath());
        foreach ($existingFiles as $existingFile) {
            if (is_file($existingFile)) {
                unlink($existingFile);
            }
        }
        $entityManager->remove($plandeleted);
        $entityManager->flush();
        return $this->json(['success' => true]);
    }


    #[Route('/allUsers', name: 'allUsers')]
    public function allUsers(ManagerRegistry $doctrine)
    {
        $entityManager = $doctrine->getManager();
        $allUsers = $entityManager->getRepository(User::class)->findAll();
        $users = [];

        foreach ($allUsers as $user) {
            $users[] = $user->getUsername();
        }

        return $this->json(['users' => $users]);
    }


    #[Route('/allMetroPlans', name: 'allMetroPlans')]
    public function allMetroPlans(ManagerRegistry $doctrine)
    {
        $entityManager = $doctrine->getManager();
        $allPlans = $entityManager->getRepository(Plans::class)->findAll();
        $plans = [];

        foreach ($allPlans as $plan) {
            $plans[$plan->getId()]['path'] = $plan->getPath();
            $plans[$plan->getId()]['name'] = $plan->getTitle();
            $plans[$plan->getId()]['id'] = $plan->getId();
        }

        return $this->json(['plans' => $plans]);
    }


    #[Route('/addMetroPlan', name: 'addMetroPlan')]
    public function addMetroPlan(Request $request, ManagerRegistry $doctrine)
    {
        $entityManager = $doctrine->getManager();
        $file = $request->files->get('metroPic');
        $title = $request->get('title');
        if ($file) {
            $newName = $title . '.' . $file->guessExtension();
            $targetDir = $this->getParameter('metroPlans');
            // Check if a file with the same name exists
            $existingFiles = glob($targetDir . '/' . $newName);
            foreach ($existingFiles as $existingFile) {
                if (is_file($existingFile)) {
                    unlink($existingFile);
                }
            }
            $file = new File($file);
            $file->move($targetDir, $newName);
            $plan = new Plans();
            $plan->setTitle($title);
            $plan->setPath('metroPlans/' . $newName);
            $entityManager->persist($plan);
            $entityManager->flush();
            return $this->json(['success' => true]);
        } else {
            return $this->json(['success' => false]);
        }
    }

    #[Route('/allPrices', name: 'allPrices')]
    public function allPrices(ManagerRegistry $doctrine)
    {
        $entityManager = $doctrine->getManager();
        $allPrices = $entityManager->getRepository(TransportPrices::class)->findAll();
        $prices = [];

        foreach ($allPrices as $price) {
            $prices[] = ['title' => $price->getTitle(), 'price' => $price->getPrice(), 'id' => $price->getId()];

        }

        return $this->json(['plans' => $prices]);
    }


    #[Route('/adminDeletesPlan', name: 'adminDeletesPlan')]
    public function adminDeletesPlan(ManagerRegistry $doctrine, Request $request)
    {
        $entityManager = $doctrine->getManager();
        $data = json_decode($request->getContent(), true);
        $id = $data['plan'];

        $planDeleted = $entityManager->getRepository(TransportPrices::class)->findOneBy(['id' => $id]);
        $entityManager->remove($planDeleted);
        $entityManager->flush();
        return $this->json(['success' => true]);
    }


    #[Route('/addNewPlan', name: 'addNewPlan')]
    public function addNewPlan(ManagerRegistry $doctrine, Request $request)
    {
        $entityManager = $doctrine->getManager();
        $data = json_decode($request->getContent(), true);
        $title = $data['title'];
        $price = $data['price'];
        $transport = new TransportPrices();
        $transport->setTitle($title);
        $transport->setPrice($price);
        $entityManager->persist($transport);
        $entityManager->flush();
        return $this->json(['success' => true, 'id'=>$transport->getId()]);
    }



    #[Route('/loadAllPlans', name: 'loadAllPlans')]
    public function loadAllPlans(ManagerRegistry $doctrine, Request $request)
    {
        $entityManager = $doctrine->getManager();
        $plans=[];
        $allPlans=$entityManager->getRepository(TransportPrices::class)->findAll();
        foreach ($allPlans as $plan) {
            $plans[] = ['title' => $plan->getTitle(), 'price' => $plan->getPrice(), 'id' => $plan->getId()];

        }

        return $this->json(['success' => true, 'plans'=>$plans]);
    }



    #[Route('/getAllPostsForAdmin', name: 'getAllPostsForAdmin')]
    public function getAllPostsForAdmin(ManagerRegistry $doctrine, Request $request)
    {
        $entityManager = $doctrine->getManager();
        $plans=[];
        $allPlans=$entityManager->getRepository(Post::class)->findAll();
        foreach ($allPlans as $plan) {
            $plans[] = [
                'id'=>$plan->getId(),
                'dateCreated'=>$plan->getDateCreated()->format('Y-m-d'),
                'author' => $plan->getAuthor(),
                'title' => $plan->getTitle(),
                'body' => $plan->getBody(),
                'category'=>$plan->getCategory()->getName()
            ];

        }

        return $this->json(['success' => true, 'posts'=>$plans]);
    }








}

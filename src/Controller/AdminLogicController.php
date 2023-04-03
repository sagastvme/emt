<?php

namespace App\Controller;

use App\Entity\Plans;
use App\Entity\Stops;
use App\Entity\User;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
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
            $plans[$plan->getId()]['path'] =  $plan->getPath();
            $plans[$plan->getId()]['name'] = $plan->getTitle();
            $plans[$plan->getId()]['id'] = $plan->getId();
        }

        return $this->json(['plans' => $plans]);
    }
}

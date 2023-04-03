<?php

namespace App\Controller;

use App\Entity\Stops;
use App\Entity\User;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
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
}

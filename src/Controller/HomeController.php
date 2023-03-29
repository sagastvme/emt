<?php

namespace App\Controller;

use App\Entity\Plans;
use App\Entity\Stops;
use App\Entity\User;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;

class HomeController extends AbstractController
{
    #[Route('/home', name: 'ctrl_login')]
    public function index(Request $request): Response
    {
        return $this->render('home/indexTwo.html.twig');
    }

    #[Route('/logout', name: 'ctrl_logout')]
    public function logout()
    {
        return $this->render('home/indexTwo.html.twig');
    }

    #[Route('/app', name: 'app_after_login')]
    public function completeApp()
    {
        try {
            $this->denyAccessUnlessGranted('ROLE_USER');
            //le devuelvo el twig donde voy a usar todo spa
            $test = $this->getUser()->getPassword();
            return $this->render('home/index.html.twig');
        } catch (AccessDeniedException $e) {
            return $this->render('home/indexTwo.html.twig');
        }
    }


    #[Route('/userData', name: 'userData')]
    public function test(Request $request)
    {
        $data = [];
        $data['username'] = $this->getUser()->getUsername();
        $data['password'] = $this->getUser()->getPassword();
        $data['profilePicture'] = $this->getUser()->getProfilePic();
        // Use the 'app.path.profile_pictures' parameter to get the correct path to your pictures
        return new JsonResponse($data);
    }


    #[Route('/checkPassword', name: 'checkPassword')]
    public function check(Request $request)
    {
        $data = json_decode($request->getContent(), true);

        $passwordAttempt = $data['password'];


        $isPasswordCorrect = password_verify($passwordAttempt, $this->getUser()->getPassword());

        return new JsonResponse([
            'isPasswordCorrect' => $isPasswordCorrect,
        ]);
    }




    #[Route('/changeP', name: 'change')]
    public function change(Request $request, ManagerRegistry $doctrine)
    {
        $data = json_decode($request->getContent(), true);

        $password = $data['password'];

        $user = $this->getUser();

        $user->setPassword($password);


        $entityManager = $doctrine->getManager();

        $entityManager->persist($user);
        $entityManager->flush();
        return new JsonResponse([
            'isPasswordCorrect' => $this->getUser()->getPassword(),
            'cambio' => $data['password']
        ]);
    }


    #[Route('/plans', name: 'metroplans')]
    public function sendPlans(ManagerRegistry $doctrine): JsonResponse
    {
        $entityManager = $doctrine->getManager();
        $plansAvailable = $entityManager->getRepository(Plans::class)->findAll();
        $data = [];

        if ($plansAvailable !== null) {
            foreach ($plansAvailable as $plan) {
                $data[$plan->getTitle()] = $this->getParameter('metroPlans') . $plan->getPath();
            }
        }

        return new JsonResponse($data);
    }


    #[Route('/register', name: 'register')]
    public function crearConsulta(Request $request, ManagerRegistry $doctrine): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $username = $data['username'];
        $password = $data['password'];


        $user = new User();
        $user->setPassword($password);
        $user->setUsername($username);
        $user->setProfilePic('profilePictures/null.jpg');


        $entityManager = $doctrine->getManager();

        $entityManager->persist($user);
        $entityManager->flush();
        return $this->json(['message' => 'User registered successfully', 'user' => $data]);

    }


    #[Route('/profile', name: 'change_picture')]
    public function uploadAction(Request $request, ManagerRegistry $doctrine)
    {
        $entityManager = $doctrine->getManager();
        $file = $request->files->get('profilePic');

        if ($file) {
            $username = $this->getUser()->getUsername();
            $newName = $username . '.' . $file->guessExtension();
            $targetDir = $this->getParameter('profilePictures');
            $targetFile = $targetDir . '/' . $newName;

            // Check if a file with the same name exists
            $existingFiles = glob($targetDir . '/' . $username . '.*');
            foreach ($existingFiles as $existingFile) {
                if (is_file($existingFile)) {
                    unlink($existingFile);
                }
            }

            $file = new File($file);
            $file->move($targetDir, $newName);
            $this->getUser()->setProfilePic('profilePictures/' . $newName);
            $entityManager->persist($this->getUser());
            $entityManager->flush();

            return $this->json(['success' => true, 'newPicture' => $this->getUser()->getProfilePic()]);
        } else {
            return $this->json(['success' => false]);
        }
    }


    #[Route('/saveFavourite', name: 'saveFavourite')]
    public function saveFavourite(Request $request, ManagerRegistry $doctrine): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $entityManager = $doctrine->getManager();
        $busCode = $data['busCode'];


        $stopExists = $entityManager->getRepository(Stops::class)->findOneBy(array('stopId' => $busCode, 'username' => $this->getUser()));

        if (!$stopExists) {
            $stop = new Stops();
            $stop->setStopId($busCode);
            $stop->setTimesVisited(0);
            $stop->setUsername($this->getUser());
            $entityManager = $doctrine->getManager();
            $entityManager->persist($stop);
            $entityManager->flush();
            return $this->json(['isFavourite' =>false]);
        }
        return $this->json(['isFavourite' =>true]);

    }




    #[Route('/checkFavourite', name: 'checkFavourite')]
    public function checkFavourite(Request $request, ManagerRegistry $doctrine): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $entityManager = $doctrine->getManager();
        $busCode = $data['busCode'];
        $stopExists = $entityManager->getRepository(Stops::class)->findOneBy(array('stopId' => $busCode, 'username' => $this->getUser()));


        if($stopExists){
            return $this->json(['isFavourite' =>true]);
        }else{
            return $this->json(['isFavourite' =>false]);
        }
    }





}


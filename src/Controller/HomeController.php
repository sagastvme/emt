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
        $stopName = $data['stopName'];
        $buses = $data['buses'];
        $customName = $data['customName'];
        $linesToString = '';
        $first = true;
        foreach ($buses as $bus) {
            if (!$first) {
                $linesToString .= ',';
            } else {
                $first = false;
            }
            $linesToString .= $bus['label'];
        }


        $stopExists = $entityManager->getRepository(Stops::class)->findOneBy(array('stopId' => $busCode, 'username' => $this->getUser()));

        if (!$stopExists) {
            $stop = new Stops();
            $stop->setStopId($busCode);
            $stop->setTimesVisited(0);
            $stop->setUsername($this->getUser());
            $stop->setCustomName($customName);
            $stop->setBuses($linesToString);
            $stop->setStopName($stopName);
            $entityManager = $doctrine->getManager();
            $entityManager->persist($stop);
            $entityManager->flush();
            return $this->json(['isFavourite' => $linesToString]);
        }
        return $this->json(['isFavourite' => true]);

    }


    #[Route('/removeFavourite', name: 'removeFavourite')]
    public function removeFavourite(Request $request, ManagerRegistry $doctrine): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $busCode = $data['busCode'];
        $entityManager = $doctrine->getManager();
        $stop = $entityManager->getRepository(Stops::class)->findOneBy(array('stopId' => $busCode, 'username' => $this->getUser()));
        $entityManager->remove($stop);
        $entityManager->flush();
        return $this->json(['isFavourite' => false]);
    }



    #[Route('/addOneVisit', name: 'addOneVisit')]
    public function addOneVisit(Request $request, ManagerRegistry $doctrine): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $busCode = $data['busCode'];
        $entityManager = $doctrine->getManager();
        $stop = $entityManager->getRepository(Stops::class)->findOneBy(array('stopId' => $busCode, 'username' => $this->getUser()));
       $stop->setTimesVisited($stop->getTimesVisited()+1);
        $entityManager->persist($stop);
        $entityManager->flush();
        return $this->json(['isFavourite' => false]);
    }




    #[Route('/askForUserFavourites', name: 'askForUserFavourites')]
    public function askForUserFavourites(ManagerRegistry $doctrine): JsonResponse
    {
        $entityManager = $doctrine->getManager();
        $stops = $entityManager->getRepository(Stops::class)->findBy(array('username' => $this->getUser()));
        if ($stops) {
            $stopsTransformed = [];
            foreach ($stops as $stop) {


                $stopsTransformed[$stop->getStopId()]['stopId'] = $stop->getStopId();
                $stopsTransformed[$stop->getStopId()]['timesVisited'] = $stop->getTimesVisited();
                $stopsTransformed[$stop->getStopId()]['stopName'] = $stop->getStopName();
                $stopsTransformed[$stop->getStopId()]['customName'] = $stop->getCustomName();
                $stopsTransformed[$stop->getStopId()]['buses'] = explode(',', $stop->getBuses());

            }
            return $this->json(['stopsArray' => $stopsTransformed]);
        }else{
            return $this->json(['stopsArray' => 'Empty']);
        }
    }


    #[Route('/checkFavourite', name: 'checkFavourite')]
    public function checkFavourite(Request $request, ManagerRegistry $doctrine): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $entityManager = $doctrine->getManager();
        $busCode = $data['busCode'];
        $stopExists = $entityManager->getRepository(Stops::class)->findOneBy(array('stopId' => $busCode, 'username' => $this->getUser()));
        if (!$this->getUser()) {
            return $this->json(['isFavourite' => 'notLoggedIn']);
        }
        if ($stopExists) {
            return $this->json(['isFavourite' => true]);
        } else {
            return $this->json(['isFavourite' => false]);
        }
    }

}


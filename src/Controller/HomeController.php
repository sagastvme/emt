<?php

namespace App\Controller;

use App\Entity\Plans;
use App\Entity\User;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
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
            $this->denyAccessUnlessGranted('ROLE_USER_VERIFICADO');
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
        $data['profilePicture'] = $this->getParameter('fotosDePerfil') . '/68Gregorio.png';
        // Use the 'app.path.profile_pictures' parameter to get the correct path to your pictures
        return new JsonResponse($data);
    }

    #[Route('/plans', name: 'metroplans')]
    public function sendPlans(ManagerRegistry $doctrine): JsonResponse
    {
        $entityManager = $doctrine->getManager();
        $plansAvailable=$entityManager->getRepository(Plans::class)->findAll();
        $data = [];

        if ($plansAvailable !== null) {
            foreach ($plansAvailable as $plan) {
                $data[ $plan->getTitle()] = $this->getParameter('metroPlans'). $plan->getPath();
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
        $status = $data['confirmedStatus'];

        $user = new User();
        $user->setPassword($password);
        $user->setUsername($username);
        $user->setConfirmedStatus($status);


        $entityManager = $doctrine->getManager();

        $entityManager->persist($user);
        $entityManager->flush();
        return $this->json(['message' => 'User registered successfully', 'user'=>$data]);

    }


}

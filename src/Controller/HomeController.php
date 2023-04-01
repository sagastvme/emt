<?php

namespace App\Controller;

use App\Entity\Plans;
use App\Entity\User;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
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
            $this->denyAccessUnlessGranted('ROLE_USER_VERIFIED');
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
    public function crearConsulta(Request $request, ManagerRegistry $doctrine, MailerInterface $mailer): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $username = $data['username'];
        $password = $data['password'];
        $user = new User();
        $user->setPassword($password);
        $user->setUsername($username);
        $user->setProfilePic('profilePictures/null.jpg');
        $user->setVerified('N');
        $user->setUniqueAttribute();

        $entityManager = $doctrine->getManager();

        $entityManager->persist($user);
        $entityManager->flush();

        $url = 'http:/' . $_SERVER['HTTP_HOST'];
        $url = $url . $this->generateUrl('confirm_account', ['user' => $user->getUniqueAttribute()]);
        $email = (new Email())
            ->from('elrastro@gmail.com')
            ->to($user->getUsername())
            ->subject('Confirma tu cuenta')
            ->html(
                $this->renderView('confirmAccount/confirmAccount.html.twig', [
                    'url' => $url
                ])
            );
        $mailer->send($email);

        return $this->json(['message' => 'User registered successfully', 'user' => $data]);


    }

    #[Route('/confirmAccount/{user}', name: 'confirm_account')]
    public function confirmAccount(ManagerRegistry $doctrine, $user)
    {

        $entityManager = $doctrine->getManager();
        $userFound = $entityManager->getRepository(User::class)
            ->findOneBy(array('uniqueAttribute' => $user));
        $userFound->setVerified('Y');
        $entityManager->persist($userFound);
        $entityManager->flush();

        return $this->render('confirmAccount/welcome.html.twig', array('user' => $userFound->getUsername()));
    }

    #[Route('/forgotPassword', name: 'forgotPassword')]
    public function sendForgotPasswordEmail(ManagerRegistry $doctrine, Request $request,MailerInterface $mailer)
    {
        $data = json_decode($request->getContent(), true);
        $email = $data['email'];
        $email = $data['email'];

        $entityManager = $doctrine->getManager();
        $userFound = $entityManager->getRepository(User::class)
            ->findOneBy(array('username' => $email));

        if(!$userFound){
            return $this->json(['success' => false]);

        }else{
            //if user found we send an email in order to recover the password
            $url = 'http:/' . $_SERVER['HTTP_HOST'];
            $url = $url . $this->generateUrl('forgot_password_email', ['user' => $this->getUser()->getUniqueAttribute()]);
            $email = (new Email())
                ->from('elrastro@gmail.com')
                ->to($this->getUser()->getUsername())
                ->subject('Cambia tu contrasena')
                ->html(
                    $this->renderView('deleteAccount/deleteAccount.html.twig', [
                        'url' => $url
                    ])
                );
            $mailer->send($email);

            return $this->json(['success' => true]);
        }
    }
    #[Route('/forgot_password_email/{user}', name: 'forgot_password_email')]
    public function forgot_password_email(ManagerRegistry $doctrine, $user)
    {
        $entityManager = $doctrine->getManager();
        $user = $entityManager->getRepository(User::class)->findOneBy(array('uniqueAttribute' => $user));
        $html = '<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Cambia tu constrasena</title>
   <style>
    body {
      background-color: #2c3e50;
      color: #bdc3c7;
      font-family: Arial, sans-serif;
      text-align: center;
      padding-top: 100px;
    }

    h1 {
      font-size: 2.5em;
    }

    p {
      font-size: 1.5em;
    }
  </style>
</head>
<body>
  <h1>Cambia tu constrasena</h1>
  
</body>
</html>';

        return new Response($html);
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


    #[Route('/sendDeleteEmail', name: 'sendDeleteEmail')]
    public function sendDeleteEmail(Request $request, ManagerRegistry $doctrine, MailerInterface $mailer)
    {

        $url = 'http:/' . $_SERVER['HTTP_HOST'];
        $url = $url . $this->generateUrl('delete_account', ['user' => $this->getUser()->getUniqueAttribute()]);
        $email = (new Email())
            ->from('elrastro@gmail.com')
            ->to($this->getUser()->getUsername())
            ->subject('Borra tu cuenta')
            ->html(
                $this->renderView('deleteAccount/deleteAccount.html.twig', [
                    'url' => $url
                ])
            );
        $mailer->send($email);
        return $this->json(['success' => true]);
    }


    #[Route('/deleteAccount/{user}', name: 'delete_account')]
    public function deleteAccount(ManagerRegistry $doctrine, $user)
    {
        $entityManager = $doctrine->getManager();
        $user = $entityManager->getRepository(User::class)->findOneBy(array('uniqueAttribute' => $user));
        $entityManager->remove($user);
        $entityManager->flush();
        $html = '<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Adiós</title>
   <style>
    body {
      background-color: #2c3e50;
      color: #bdc3c7;
      font-family: Arial, sans-serif;
      text-align: center;
      padding-top: 100px;
    }

    h1 {
      font-size: 2.5em;
    }

    p {
      font-size: 1.5em;
    }
  </style>
</head>
<body>
  <h1>¡Adiós!</h1>
  <p>Nos entristece verte ir. ¡Gracias por utilizar nuestro servicio!</p>
</body>
</html>';

        return new Response($html);
    }

}


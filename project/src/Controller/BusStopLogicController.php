<?php

namespace App\Controller;

use App\Entity\GlobalStop;
use App\Entity\Stops;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class BusStopLogicController extends AbstractController
{
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
        //I add one to the users personal stop counter
        $stop = $entityManager->getRepository(Stops::class)->findOneBy(array('stopId' => $busCode, 'username' => $this->getUser()));
        $stop->setTimesVisited($stop->getTimesVisited() + 1);
        $entityManager->persist($stop);
        $entityManager->flush();
        return $this->json(['isFavourite' => false]);
    }

    #[Route('/addOneGlobalVisit', name: 'addOneGlobalVisit')]
    public function addOneGlobalVisit(Request $request, ManagerRegistry $doctrine): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $busCode = $data['busCode'];
        $entityManager = $doctrine->getManager();

        //I add one to the global stop counter
        $globalStop = $entityManager->getRepository(GlobalStop::class)->findOneBy(array('id' => $busCode));
        $globalStop->setTimesVisited($globalStop->getTimesVisited() + 1);
        $entityManager->persist($globalStop);
        $entityManager->flush();

        return $this->json(['isFavourite' => false]);
    }


    #[Route('/getMostVisited', name: 'getMostVisited')]
    public function getMostVisited(ManagerRegistry $doctrine): JsonResponse
    {
        $entityManager = $doctrine->getManager();
        $query = $entityManager->createQuery('SELECT s FROM App\Entity\GlobalStop s ORDER BY s.timesVisited DESC')
            ->setMaxResults(10);
        $stopsFetched = $query->getResult();

        $mostVisitedStops = [];
        foreach ($stopsFetched as $stop) {
            $mostVisitedStops[] = [
                'stopId' => $stop->getId(),
                'timesVisited' => $stop->getTimesVisited()
            ];
        }

        usort($mostVisitedStops, function ($a, $b) {
            return $b['timesVisited'] - $a['timesVisited'];
        });

        return $this->json(['stopsArray' => $mostVisitedStops]);
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
        } else {
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

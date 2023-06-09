<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity()
 * @ORM\Table(name="stops")
 */
class Stops
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer", name="id")
     */
    private $id;

    /**
     * @ORM\Column(type="integer" , name="stopId")
     */
    private $stopId;

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param mixed $id
     */
    public function setId($id): void
    {
        $this->id = $id;
    }

    /**
     * @return mixed
     */
    public function getStopId()
    {
        return $this->stopId;
    }

    /**
     * @param mixed $stopId
     */
    public function setStopId($stopId): void
    {
        $this->stopId = $stopId;
    }

    /**
     * @return mixed
     */
    public function getUsername()
    {
        return $this->username;
    }

    /**
     * @param mixed $username
     */
    public function setUsername($username): void
    {
        $this->username = $username;
    }

    /**
     * @return mixed
     */
    public function getTimesVisited()
    {
        return $this->timesVisited;
    }

    /**
     * @param mixed $timesVisited
     */
    public function setTimesVisited($timesVisited): void
    {
        $this->timesVisited = $timesVisited;
    }

    /**
     * @ORM\ManyToOne(targetEntity="User")
     * @ORM\JoinColumn(name="username", referencedColumnName="username")
     */
    private $username;

    /**
     * @ORM\Column(type="integer", name="timesVisited")
     */
    private $timesVisited;
    /**
     * @ORM\Column(type="string", name="stopName")
     */
    private $stopName;

    /**
     * @ORM\Column(type="string", name="buses")
     */
    private $buses;

    /**
     * @return mixed
     */
    public function getStopName()
    {
        return $this->stopName;
    }

    /**
     * @param mixed $stopName
     */
    public function setStopName($stopName): void
    {
        $this->stopName = $stopName;
    }

    /**
     * @return mixed
     */
    public function getBuses()
    {
        return $this->buses;
    }

    /**
     * @param mixed $buses
     */
    public function setBuses($buses): void
    {
        $this->buses = $buses;
    }



    /**
     * @return mixed
     */
    public function getCustomName()
    {
        return $this->customName;
    }

    /**
     * @param mixed $customName
     */
    public function setCustomName($customName): void
    {
        $this->customName = $customName;
    }
    /**
     * @ORM\Column(type="string", name="customName")
     */
    private $customName;

}

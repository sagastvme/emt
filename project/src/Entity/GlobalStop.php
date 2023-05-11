<?php
// src/Entity/GlobalStop.php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="globalstops")
 */
class GlobalStop
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer", name="id")
     */
    private $id;

    /**
     * @ORM\Column(type="integer", name="timesVisited")
     */
    private $timesVisited;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTimesVisited(): ?int
    {
        return $this->timesVisited;
    }

    public function setTimesVisited(int $timesVisited): self
    {
        $this->timesVisited = $timesVisited;

        return $this;
    }
}

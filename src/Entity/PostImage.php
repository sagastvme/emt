<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="postimage")
 */
class PostImage
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer", name="id")
     */
    private $id;

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
    public function getPostId()
    {
        return $this->postId;
    }

    /**
     * @param mixed $postId
     */
    public function setPostId($postId): void
    {
        $this->postId = $postId;
    }

    /**
     * @return mixed
     */
    public function getSource()
    {
        return 'http:/' . $this->source;
    }

    /**
     * @param mixed $source
     */
    public function setSource($source): void
    {
        $this->source = $source;
    }

    /**
     * @return mixed
     */
    public function getPostanswerid()
    {
        return $this->postanswerid;
    }

    /**
     * @param mixed $postanswerid
     */
    public function setPostanswerid($postanswerid): void
    {
        $this->postanswerid = $postanswerid;
    }

    /**
     * @ORM\ManyToOne(targetEntity="Post")
     * @ORM\JoinColumn(name="postId", referencedColumnName="id")
     */
    private $postId;

    /**
     * @ORM\Column(type="string", length=255, name="source")
     */
    private $source;

    /**
     * @ORM\ManyToOne(targetEntity="PostAnswer")
     * @ORM\JoinColumn(name="postanswerid", referencedColumnName="id")
     */
    private $postanswerid;

    // add getters and setters here
}

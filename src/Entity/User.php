<?php
// src/Entity/Restaurante.php
namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Ramsey\Uuid\Uuid;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;


/**
 * @ORM\Entity @ORM\Table(name="user")
 */
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    /**
     * @ORM\Id
     * @ORM\Column(type="string",name="username")
     */
    private $username;

    public function getUsername()
    {
        return $this->username;
    }

    public function setUsername($username): void
    {
        $this->username = $username;
    }

    /**
     * @ORM\Column(type="string", name = "password")
     */
    private $password;
    /**
     * @ORM\Column(type="string", name = "profilePic")
     */
    private $profilePic;

    /**
     * @ORM\Column(type="string", name = "unique_attribute")
     */
    private $uniqueAttribute;
    /**
     * @ORM\Column(type="string", name = "verified")
     */
    private $verified;
    /**
     * @ORM\Column(type="integer", name = "postsPublished")
     */
    private $postsPublished;

    /**
     * @return mixed
     */
    public function getPostsPublished()
    {
        return $this->postsPublished;
    }

    /**
     * @param mixed $postsPublished
     */
    public function setPostsPublished($postsPublished): void
    {
        $this->postsPublished = $postsPublished;
    }

    /**
     * @return mixed
     */
    public function getVerified()
    {
        return $this->verified;
    }

    /**
     * @param mixed $verified
     */
    public function setVerified($verified): void
    {
        $this->verified = $verified;
    }

    /**
     * @return mixed
     */
    public function getUniqueAttribute()
    {
        return $this->uniqueAttribute;
    }

    /**
     * @param mixed $uniqueAttribute
     */
    public function setUniqueAttribute(): void
    {
        $uuid = Uuid::uuid4();

        $this->uniqueAttribute = $uuid;
    }


    public function getProfilePic()
    {

        return 'http:/'.$this->profilePic;

    }

    public function setProfilePic($profilePic): void
    {
        $this->profilePic = $profilePic;
    }

    public function getRoles(): array
    {
        //check if the email is from an admin
        $email = $this->getUsername();
        $adminRegex = '/^admin[A-Za-z]+@elrastro\.madrid\.spain\.es$/';
        if (preg_match($adminRegex, $email)) {
            return ['ROLE_ADMIN','ROLE_USER'];
        }






        //check if account is verified
        if ($this->getVerified() == 'Y') {
        return array('ROLE_USER', 'ROLE_USER_VERIFIED');
        }
        return array('ROLE_USER');
    }

    public function eraseCredentials()
    {
        // TODO: Implement eraseCredentials() method.
    }

    public function getUserIdentifier(): string
    {
        return $this->username;
        // TODO: Implement getUserIdentifier() method.
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password)
    {
        $this->password = password_hash($password, PASSWORD_ARGON2I);
    }
}
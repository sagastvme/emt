<?php
// src/Entity/Restaurante.php
namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
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

    public function getProfilePic()
    {
        return $this->profilePic;
    }
    public function setProfilePic($profilePic): void
    {
        $this->profilePic = $profilePic;
    }

    public function getRoles(): array
    {

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
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
    public function getConfirmedStatus()
    {
        return $this->confirmedStatus;
    }

    /**
     * @param mixed $confirmedStatus
     */
    public function setConfirmedStatus($confirmedStatus): void
    {
        $this->confirmedStatus = $confirmedStatus;
    }
    /**
     * @ORM\Column(type="string", name = "password")
     */
    private $password;
    /**
     * @ORM\Column(type="integer", name = "confirmedStatus")
     */
    private $confirmedStatus;

    public function getRoles(): array
    {

        return array('ROLE_USER_VERIFICADO');
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
        // TODO: Implement getPassword() method.
    }
    public function setPassword(string $password)
    {
        $this->password = password_hash($password, PASSWORD_ARGON2I);
    }
}
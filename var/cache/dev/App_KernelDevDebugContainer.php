<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerX7rQdUI\App_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerX7rQdUI/App_KernelDevDebugContainer.php') {
    touch(__DIR__.'/ContainerX7rQdUI.legacy');

    return;
}

if (!\class_exists(App_KernelDevDebugContainer::class, false)) {
    \class_alias(\ContainerX7rQdUI\App_KernelDevDebugContainer::class, App_KernelDevDebugContainer::class, false);
}

return new \ContainerX7rQdUI\App_KernelDevDebugContainer([
    'container.build_hash' => 'X7rQdUI',
    'container.build_id' => '3d1b253c',
    'container.build_time' => 1680624778,
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerX7rQdUI');

<?php

/**
 * This file has been auto-generated
 * by the Symfony Routing Component.
 */

return [
    false, // $matchHost
    [ // $staticRoutes
        '/home' => [[['_route' => 'ctrl_login', '_controller' => 'App\\Controller\\HomeController::index'], null, null, null, false, false, null]],
        '/logout' => [[['_route' => 'ctrl_logout', '_controller' => 'App\\Controller\\HomeController::logout'], null, null, null, false, false, null]],
        '/app' => [[['_route' => 'app_after_login', '_controller' => 'App\\Controller\\HomeController::completeApp'], null, null, null, false, false, null]],
        '/userData' => [[['_route' => 'userData', '_controller' => 'App\\Controller\\HomeController::test'], null, null, null, false, false, null]],
        '/plans' => [[['_route' => 'metroplans', '_controller' => 'App\\Controller\\HomeController::sendPlans'], null, null, null, false, false, null]],
        '/register' => [[['_route' => 'register', '_controller' => 'App\\Controller\\HomeController::crearConsulta'], null, null, null, false, false, null]],
        '/' => [[['_route' => 'home', '_controller' => 'App\\Controller\\HomeController::index'], null, null, null, false, false, null]],
    ],
    [ // $regexpList
        0 => '{^(?'
                .'|/_error/(\\d+)(?:\\.([^/]++))?(*:35)'
            .')/?$}sDu',
    ],
    [ // $dynamicRoutes
        35 => [
            [['_route' => '_preview_error', '_controller' => 'error_controller::preview', '_format' => 'html'], ['code', '_format'], null, null, false, true, null],
            [null, null, null, null, false, false, 0],
        ],
    ],
    null, // $checkCondition
];

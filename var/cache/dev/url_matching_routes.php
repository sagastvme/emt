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
        '/checkPassword' => [[['_route' => 'checkPassword', '_controller' => 'App\\Controller\\HomeController::check'], null, null, null, false, false, null]],
        '/changeP' => [[['_route' => 'change', '_controller' => 'App\\Controller\\HomeController::change'], null, null, null, false, false, null]],
        '/plans' => [[['_route' => 'metroplans', '_controller' => 'App\\Controller\\HomeController::sendPlans'], null, null, null, false, false, null]],
        '/register' => [[['_route' => 'register', '_controller' => 'App\\Controller\\HomeController::crearConsulta'], null, null, null, false, false, null]],
        '/profile' => [[['_route' => 'change_picture', '_controller' => 'App\\Controller\\HomeController::uploadAction'], null, null, null, false, false, null]],
        '/saveFavourite' => [[['_route' => 'saveFavourite', '_controller' => 'App\\Controller\\HomeController::saveFavourite'], null, null, null, false, false, null]],
        '/removeFavourite' => [[['_route' => 'removeFavourite', '_controller' => 'App\\Controller\\HomeController::removeFavourite'], null, null, null, false, false, null]],
        '/addOneVisit' => [[['_route' => 'addOneVisit', '_controller' => 'App\\Controller\\HomeController::addOneVisit'], null, null, null, false, false, null]],
        '/askForUserFavourites' => [[['_route' => 'askForUserFavourites', '_controller' => 'App\\Controller\\HomeController::askForUserFavourites'], null, null, null, false, false, null]],
        '/checkFavourite' => [[['_route' => 'checkFavourite', '_controller' => 'App\\Controller\\HomeController::checkFavourite'], null, null, null, false, false, null]],
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

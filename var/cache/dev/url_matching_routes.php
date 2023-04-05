<?php

/**
 * This file has been auto-generated
 * by the Symfony Routing Component.
 */

return [
    false, // $matchHost
    [ // $staticRoutes
        '/adminDeletesUserAccount' => [[['_route' => 'adminDeletesUserAccount', '_controller' => 'App\\Controller\\AdminLogicController::adminDeletesUserAccount'], null, null, null, false, false, null]],
        '/adminDeletesTransportPlan' => [[['_route' => 'adminDeletesTransportPlan', '_controller' => 'App\\Controller\\AdminLogicController::adminDeletesTransportPlan'], null, null, null, false, false, null]],
        '/allUsers' => [[['_route' => 'allUsers', '_controller' => 'App\\Controller\\AdminLogicController::allUsers'], null, null, null, false, false, null]],
        '/allMetroPlans' => [[['_route' => 'allMetroPlans', '_controller' => 'App\\Controller\\AdminLogicController::allMetroPlans'], null, null, null, false, false, null]],
        '/addMetroPlan' => [[['_route' => 'addMetroPlan', '_controller' => 'App\\Controller\\AdminLogicController::addMetroPlan'], null, null, null, false, false, null]],
        '/allPrices' => [[['_route' => 'allPrices', '_controller' => 'App\\Controller\\AdminLogicController::allPrices'], null, null, null, false, false, null]],
        '/adminDeletesPlan' => [[['_route' => 'adminDeletesPlan', '_controller' => 'App\\Controller\\AdminLogicController::adminDeletesPlan'], null, null, null, false, false, null]],
        '/addNewPlan' => [[['_route' => 'addNewPlan', '_controller' => 'App\\Controller\\AdminLogicController::addNewPlan'], null, null, null, false, false, null]],
        '/loadAllPlans' => [[['_route' => 'loadAllPlans', '_controller' => 'App\\Controller\\AdminLogicController::loadAllPlans'], null, null, null, false, false, null]],
        '/saveFavourite' => [[['_route' => 'saveFavourite', '_controller' => 'App\\Controller\\BusStopLogicController::saveFavourite'], null, null, null, false, false, null]],
        '/removeFavourite' => [[['_route' => 'removeFavourite', '_controller' => 'App\\Controller\\BusStopLogicController::removeFavourite'], null, null, null, false, false, null]],
        '/addOneVisit' => [[['_route' => 'addOneVisit', '_controller' => 'App\\Controller\\BusStopLogicController::addOneVisit'], null, null, null, false, false, null]],
        '/addOneGlobalVisit' => [[['_route' => 'addOneGlobalVisit', '_controller' => 'App\\Controller\\BusStopLogicController::addOneGlobalVisit'], null, null, null, false, false, null]],
        '/getMostVisited' => [[['_route' => 'getMostVisited', '_controller' => 'App\\Controller\\BusStopLogicController::getMostVisited'], null, null, null, false, false, null]],
        '/askForUserFavourites' => [[['_route' => 'askForUserFavourites', '_controller' => 'App\\Controller\\BusStopLogicController::askForUserFavourites'], null, null, null, false, false, null]],
        '/checkFavourite' => [[['_route' => 'checkFavourite', '_controller' => 'App\\Controller\\BusStopLogicController::checkFavourite'], null, null, null, false, false, null]],
        '/allCategories' => [[['_route' => 'allCategories', '_controller' => 'App\\Controller\\ForumControllerLogic::allCategories'], null, null, null, false, false, null]],
        '/newPost' => [[['_route' => 'newPost', '_controller' => 'App\\Controller\\ForumControllerLogic::newPost'], null, null, null, false, false, null]],
        '/searchPosts' => [[['_route' => 'searchPosts', '_controller' => 'App\\Controller\\ForumControllerLogic::searchPosts'], null, null, null, false, false, null]],
        '/showPosts' => [[['_route' => 'showPosts', '_controller' => 'App\\Controller\\ForumControllerLogic::showPosts'], null, null, null, false, false, null]],
        '/replyToPost' => [[['_route' => 'replyToPost', '_controller' => 'App\\Controller\\ForumControllerLogic::replyToPost'], null, null, null, false, false, null]],
        '/home' => [[['_route' => 'ctrl_login', '_controller' => 'App\\Controller\\HomeController::index'], null, null, null, false, false, null]],
        '/logout' => [[['_route' => 'ctrl_logout', '_controller' => 'App\\Controller\\HomeController::logout'], null, null, null, false, false, null]],
        '/app' => [[['_route' => 'app_after_login', '_controller' => 'App\\Controller\\HomeController::completeApp'], null, null, null, false, false, null]],
        '/userData' => [[['_route' => 'userData', '_controller' => 'App\\Controller\\HomeController::test'], null, null, null, false, false, null]],
        '/checkPassword' => [[['_route' => 'checkPassword', '_controller' => 'App\\Controller\\HomeController::check'], null, null, null, false, false, null]],
        '/changeP' => [[['_route' => 'change', '_controller' => 'App\\Controller\\HomeController::change'], null, null, null, false, false, null]],
        '/plans' => [[['_route' => 'metroplans', '_controller' => 'App\\Controller\\HomeController::sendPlans'], null, null, null, false, false, null]],
        '/register' => [[['_route' => 'register', '_controller' => 'App\\Controller\\HomeController::crearConsulta'], null, null, null, false, false, null]],
        '/forgotPassword' => [[['_route' => 'forgotPassword', '_controller' => 'App\\Controller\\HomeController::sendForgotPasswordEmail'], null, null, null, false, false, null]],
        '/forgot_password_email' => [[['_route' => 'forgot_password_email', '_controller' => 'App\\Controller\\HomeController::forgot_password_email'], null, null, null, false, false, null]],
        '/profile' => [[['_route' => 'change_picture', '_controller' => 'App\\Controller\\HomeController::uploadAction'], null, null, null, false, false, null]],
        '/sendDeleteEmail' => [[['_route' => 'sendDeleteEmail', '_controller' => 'App\\Controller\\HomeController::sendDeleteEmail'], null, null, null, false, false, null]],
        '/' => [[['_route' => 'home', '_controller' => 'App\\Controller\\HomeController::index'], null, null, null, false, false, null]],
    ],
    [ // $regexpList
        0 => '{^(?'
                .'|/_error/(\\d+)(?:\\.([^/]++))?(*:35)'
                .'|/read/([^/]++)(*:56)'
                .'|/confirmAccount/([^/]++)(*:87)'
                .'|/deleteAccount/([^/]++)(*:117)'
            .')/?$}sDu',
    ],
    [ // $dynamicRoutes
        35 => [[['_route' => '_preview_error', '_controller' => 'error_controller::preview', '_format' => 'html'], ['code', '_format'], null, null, false, true, null]],
        56 => [[['_route' => 'read_post', '_controller' => 'App\\Controller\\ForumControllerLogic::readPost'], ['id'], null, null, false, true, null]],
        87 => [[['_route' => 'confirm_account', '_controller' => 'App\\Controller\\HomeController::confirmAccount'], ['user'], null, null, false, true, null]],
        117 => [
            [['_route' => 'delete_account', '_controller' => 'App\\Controller\\HomeController::deleteAccount'], ['user'], null, null, false, true, null],
            [null, null, null, null, false, false, 0],
        ],
    ],
    null, // $checkCondition
];

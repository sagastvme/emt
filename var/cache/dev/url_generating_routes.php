<?php

// This file has been auto-generated by the Symfony Routing Component.

return [
    '_preview_error' => [['code', '_format'], ['_controller' => 'error_controller::preview', '_format' => 'html'], ['code' => '\\d+'], [['variable', '.', '[^/]++', '_format', true], ['variable', '/', '\\d+', 'code', true], ['text', '/_error']], [], [], []],
    'adminDeletesUserAccount' => [[], ['_controller' => 'App\\Controller\\AdminLogicController::adminDeletesUserAccount'], [], [['text', '/adminDeletesUserAccount']], [], [], []],
    'adminDeletesTransportPlan' => [[], ['_controller' => 'App\\Controller\\AdminLogicController::adminDeletesTransportPlan'], [], [['text', '/adminDeletesTransportPlan']], [], [], []],
    'allUsers' => [[], ['_controller' => 'App\\Controller\\AdminLogicController::allUsers'], [], [['text', '/allUsers']], [], [], []],
    'allMetroPlans' => [[], ['_controller' => 'App\\Controller\\AdminLogicController::allMetroPlans'], [], [['text', '/allMetroPlans']], [], [], []],
    'addMetroPlan' => [[], ['_controller' => 'App\\Controller\\AdminLogicController::addMetroPlan'], [], [['text', '/addMetroPlan']], [], [], []],
    'allPrices' => [[], ['_controller' => 'App\\Controller\\AdminLogicController::allPrices'], [], [['text', '/allPrices']], [], [], []],
    'adminDeletesPlan' => [[], ['_controller' => 'App\\Controller\\AdminLogicController::adminDeletesPlan'], [], [['text', '/adminDeletesPlan']], [], [], []],
    'addNewPlan' => [[], ['_controller' => 'App\\Controller\\AdminLogicController::addNewPlan'], [], [['text', '/addNewPlan']], [], [], []],
    'loadAllPlans' => [[], ['_controller' => 'App\\Controller\\AdminLogicController::loadAllPlans'], [], [['text', '/loadAllPlans']], [], [], []],
    'saveFavourite' => [[], ['_controller' => 'App\\Controller\\BusStopLogicController::saveFavourite'], [], [['text', '/saveFavourite']], [], [], []],
    'removeFavourite' => [[], ['_controller' => 'App\\Controller\\BusStopLogicController::removeFavourite'], [], [['text', '/removeFavourite']], [], [], []],
    'addOneVisit' => [[], ['_controller' => 'App\\Controller\\BusStopLogicController::addOneVisit'], [], [['text', '/addOneVisit']], [], [], []],
    'addOneGlobalVisit' => [[], ['_controller' => 'App\\Controller\\BusStopLogicController::addOneGlobalVisit'], [], [['text', '/addOneGlobalVisit']], [], [], []],
    'getMostVisited' => [[], ['_controller' => 'App\\Controller\\BusStopLogicController::getMostVisited'], [], [['text', '/getMostVisited']], [], [], []],
    'askForUserFavourites' => [[], ['_controller' => 'App\\Controller\\BusStopLogicController::askForUserFavourites'], [], [['text', '/askForUserFavourites']], [], [], []],
    'checkFavourite' => [[], ['_controller' => 'App\\Controller\\BusStopLogicController::checkFavourite'], [], [['text', '/checkFavourite']], [], [], []],
    'allCategories' => [[], ['_controller' => 'App\\Controller\\ForumControllerLogic::allCategories'], [], [['text', '/allCategories']], [], [], []],
    'newPost' => [[], ['_controller' => 'App\\Controller\\ForumControllerLogic::newPost'], [], [['text', '/newPost']], [], [], []],
    'searchPosts' => [[], ['_controller' => 'App\\Controller\\ForumControllerLogic::searchPosts'], [], [['text', '/searchPosts']], [], [], []],
    'showPosts' => [[], ['_controller' => 'App\\Controller\\ForumControllerLogic::showPosts'], [], [['text', '/showPosts']], [], [], []],
    'watch_post' => [['id'], ['_controller' => 'App\\Controller\\ForumControllerLogic::readPost'], [], [['variable', '/', '[^/]++', 'id', true], ['text', '/watch']], [], [], []],
    'ctrl_login' => [[], ['_controller' => 'App\\Controller\\HomeController::index'], [], [['text', '/home']], [], [], []],
    'ctrl_logout' => [[], ['_controller' => 'App\\Controller\\HomeController::logout'], [], [['text', '/logout']], [], [], []],
    'app_after_login' => [[], ['_controller' => 'App\\Controller\\HomeController::completeApp'], [], [['text', '/app']], [], [], []],
    'userData' => [[], ['_controller' => 'App\\Controller\\HomeController::test'], [], [['text', '/userData']], [], [], []],
    'checkPassword' => [[], ['_controller' => 'App\\Controller\\HomeController::check'], [], [['text', '/checkPassword']], [], [], []],
    'change' => [[], ['_controller' => 'App\\Controller\\HomeController::change'], [], [['text', '/changeP']], [], [], []],
    'metroplans' => [[], ['_controller' => 'App\\Controller\\HomeController::sendPlans'], [], [['text', '/plans']], [], [], []],
    'register' => [[], ['_controller' => 'App\\Controller\\HomeController::crearConsulta'], [], [['text', '/register']], [], [], []],
    'confirm_account' => [['user'], ['_controller' => 'App\\Controller\\HomeController::confirmAccount'], [], [['variable', '/', '[^/]++', 'user', true], ['text', '/confirmAccount']], [], [], []],
    'forgotPassword' => [[], ['_controller' => 'App\\Controller\\HomeController::sendForgotPasswordEmail'], [], [['text', '/forgotPassword']], [], [], []],
    'forgot_password_email' => [[], ['_controller' => 'App\\Controller\\HomeController::forgot_password_email'], [], [['text', '/forgot_password_email']], [], [], []],
    'change_picture' => [[], ['_controller' => 'App\\Controller\\HomeController::uploadAction'], [], [['text', '/profile']], [], [], []],
    'sendDeleteEmail' => [[], ['_controller' => 'App\\Controller\\HomeController::sendDeleteEmail'], [], [['text', '/sendDeleteEmail']], [], [], []],
    'delete_account' => [['user'], ['_controller' => 'App\\Controller\\HomeController::deleteAccount'], [], [['variable', '/', '[^/]++', 'user', true], ['text', '/deleteAccount']], [], [], []],
    'home' => [[], ['_controller' => 'App\\Controller\\HomeController::index'], [], [['text', '/']], [], [], []],
];

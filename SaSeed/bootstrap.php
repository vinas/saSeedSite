<?php
/**
* Bootstrap
*
* This file loads basic Settings and starts up the right
* Controller for and Action Function.	
*
* @author Vinas de Andrade <vinas.andrade@gmail.com>
* @since 2012/11/15
* @version 1.16.1103
* @license SaSeed\license.txt
*/

namespace SaSeed;

header('Content-type: text/html; charset=UTF-8');
header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
header('Access-Control-Allow-Credentials: true');

require_once('Settings'.DIRECTORY_SEPARATOR.'GeneralSettings.php'); // (Must be the first include)
require_once("autoload.php");

use SaSeed\Handlers\Requests;

$controller = "\Application\Controller\\".Requests::getController();
$actionMethod =  Requests::getActionFunction();
$obj = new $controller;
$obj->$actionMethod();

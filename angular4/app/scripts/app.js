'use strict';

angular
  .module('projectManagementApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/projectList.html',
        controller: 'taskController'
      })
        .when('/projects',{
            templateUrl: 'views/projectList.html',
            controller: 'projectController'
        })
        .when('/tasks',{
            templateUrl: 'views/taskList.html',
            controller: 'taskController'
        })
        .when('/comments',{
            templateUrl: 'views/commentList.html',
            controller: 'commentController'
        })
      .otherwise({
        redirectTo: '/'
      });
  });

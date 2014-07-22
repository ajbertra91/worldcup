'use strict';

var app = angular.module('worldCup', ['ngRoute','gameServices'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../../partials/_landing.html',
        controller: 'MainCtrl'
      })
      .when('/teams', {
        templateUrl: '../../partials/_teams.html',
        controller: 'TeamsCtrl'
      })
      .when('/matchups', {
        templateUrl: '../../partials/_matchups.html',
        controller: 'MatchupsCtrl'
      });
  }]); 
    
var appServices = angular.module('gameServices', ['ngResource']);
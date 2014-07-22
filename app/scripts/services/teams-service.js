'use strict';

appServices
  .factory('Teams', function ($resource) {
    return $resource('http://worldcup.sfg.io/teams/');
  })
  .factory('TeamResults', function ($resource) {
    return $resource('http://worldcup.sfg.io/teams/results')
  });

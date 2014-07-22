'use strict';

appServices
  .factory('Matchups', function ($resource) {
    return $resource('http://worldcup.sfg.io/matches');
  });

'use strict';

app
  .controller('TeamsCtrl', function ($scope, Teams, TeamResults) {
    $scope.wcTeams = Teams.query();
    $scope.teamResults = TeamResults.query();
    
    $scope.currentTeam = null;

    $scope.setTeam = function (team) {
      $scope.currentTeam = team;
    };
  });

'use strict';

app
  .controller('MatchupsCtrl', function ($scope, Matchups) {
    $scope.matchups = Matchups.query();

    $scope.calcWinner = function (matchup, team) {
      var winner = matchup.winner;
      var team = team === 'ht' ? matchup.home_team.country : matchup.away_team.country;

      if (winner === team) {
        return true;
      } else {
        return false;
      }
    };

    $scope.currentMatchup = null;

    $scope.setMatchup = function (matchup) {
      $scope.currentMatchup = matchup;
    };
  });

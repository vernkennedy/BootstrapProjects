var app = angular.module('myPortifolio', []);
app.controller('projectsCtrl', function($scope, $http) {
  $http.get("https://raw.githubusercontent.com/vernkennedy/BootstrapProjects/gh-pages/javascripts/Bootstrap.json")
  .success(function (response) {$scope.names = response.projects;});
});
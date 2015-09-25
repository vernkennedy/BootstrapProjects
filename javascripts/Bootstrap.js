var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
  $http.get("https://raw.githubusercontent.com/vernkennedy/BootstrapProjects/gh-pages/javascripts/Bootstrap.json")
  .success(function (response) {$scope.names = response.records;});
});
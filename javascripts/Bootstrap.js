var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
  $http.get("https://raw.githubusercontent.com/vernkennedy/CMSWebsitesAndThemes/gh-pages/javascripts/CMSStuff.json")
  .success(function (response) {$scope.names = response.records;});
});
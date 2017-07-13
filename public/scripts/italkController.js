var myApp = angular.module('myApp', ['ngRoute']);
console.log('it works');

myApp.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/index.html'
  }).when('/login', {
    templateUrl: 'views/partials/login.html'
  }).when('/home', {
    templateUrl: 'views/partials/home.html'
  });
});

myApp.controller('italkController', italkController)

function italkController(italkService, $location) {
var vm = this;




}

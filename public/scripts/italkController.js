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
vm.phrases = [];

vm.getPhrases = function() {
		console.log('in controller, getPhrases');
		italkService.getPhrases().then(function(res) {
			console.log('in ctrl:', res);
			vm.phrases = res.data;
		});
	}

  vm.showPhrases = function(){
    console.log('Phrases back from the server');
    italkService.showPhrases().then(function(res){
      console.log('in control:', res);
      vm.phrases = res.data;
      vm.getPhrases();
    });
  };





}

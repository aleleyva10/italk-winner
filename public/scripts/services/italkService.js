myApp.service('italkService', function($http, $location){
var sv = this;

sv.getPhrases = function() {
		return $http.get('/list').then(function(response) {
			console.log('get response:', response);
			return response;
		});
	};

  sv.showPhrases = function(){
    return $http.get('/list').then(function(response){
      console.log('get response:', response);
      return response;
    });
  };







});

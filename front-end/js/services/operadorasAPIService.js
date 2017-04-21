angular.module('listaTelefonica').service('operadorasAPI', function($http, configValues){
	this.getOperadoras = function() {
		return $http.get(configValues.apiBaseUrl + '/operadoras');
	};
});
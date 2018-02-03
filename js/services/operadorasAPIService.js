angular.module('listaTelefonica').service('operadorasAPI', function($http, configValues, $q){
	this.getOperadoras = function() {
		return $q(function(resolve, reject) {
			$http.get(configValues.apiBaseUrl + '/operadoras').then(function(retorno) {
				resolve(retorno.data);
			},function(erro) {
				reject(erro);
			});
		});		
	};
});
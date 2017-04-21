angular.module('listaTelefonica').factory('contatosAPI', function($http, configValues) {

	var _getContatos = function() {
		return $http.get(configValues.apiBaseUrl +'/contatos?antiCache='+(new Date()).toString());
	};
	
	var _saveContato = function(contato) {
		return $http.post(configValues.apiBaseUrl + '/contatos', contato);
	};

	return {
		getContatos: _getContatos,
		saveContato: _saveContato
	};
});
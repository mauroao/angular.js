angular.module('listaTelefonica').factory('contatosAPI', function($http, configValues) {

	var _getContatos = function() {
		return $http.get(configValues.apiBaseUrl +'/contatos/');
	};

	var _getContato = function(serial) {
		return $http.get(configValues.apiBaseUrl +'/contatos/' + serial);
	};

	var _saveContato = function(contato) {
		return $http.post(configValues.apiBaseUrl + '/contatos', contato);
	};

	var _deleteContato = function(serial) {
		return $http.delete(configValues.apiBaseUrl + '/contatos/' + serial);
	};	

	return {
		getContatos: _getContatos,
		saveContato: _saveContato,
		deleteContato: _deleteContato,
		getContato: _getContato
	};
});
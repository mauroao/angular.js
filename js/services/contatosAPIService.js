angular.module('listaTelefonica').factory('contatosAPI', function($rootScope, $http, $q, configValues) {

	$rootScope.api_version = configValues.apiBaseUrl.replace('/api','');

	var _getContatos = function(currentPage, findName) {
		var _url = configValues.apiBaseUrl+'/contatos?pagenumber='+currentPage+'&limit='+configValues.PageSize+'&findname='+findName;		
		
		return $q(function(resolve, reject) {
			$http.get(_url).then(function(retorno) {
				resolve(retorno.data);
			},function(erro) {
				reject(erro);
			});
		});
	};

	var _getContato = function(serial) {
		return $q(function(resolve, reject) {
			$http.get(configValues.apiBaseUrl +'/contatos/' + serial).then(function(retorno) {
				resolve(retorno.data);
			},function(erro) {
				reject(erro);
			});
		});	
	};

	var _saveContato = function(contato) {
		return $http.post(configValues.apiBaseUrl + '/contatos', contato);
	};

	var _deleteContato = function(serial) {
		return $q(function(resolve, reject) {
			$http.delete(configValues.apiBaseUrl + '/contatos/' + serial).then(function(retorno) {
				if (retorno.data && retorno.data.deleted) {
					resolve();
				} else {
					reject('Erro ao excluir registro ' + serial);
				}
			},function(erro) {
				reject('Erro ao excluir registro ' + serial);
			});
		});		
	};	

	return {
		getContatos: _getContatos,
		saveContato: _saveContato,
		deleteContato: _deleteContato,
		getContato: _getContato
	};
});
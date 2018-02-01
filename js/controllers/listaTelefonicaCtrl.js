angular.module('listaTelefonica').controller('listaTelefonicaCtrl', function($scope, $filter, contatosAPI, contatos){
	$scope.app='Lista Telefônica';
	
	$scope.contatos = contatos;

	$scope.apagarContato = function(contato) {
		contatosAPI.deleteContato(contato.serial)
			.then(function() {
				return contatosAPI.getContatos();
			})
			.then(function(data) {
				$scope.contatos = data;
			})
			.catch(function(errorMessage){
				$scope.error = errorMessage;
			});
	};

	$scope.ordernarPor = function(campo) {
		$scope.criterioDeOrdenacao = campo;
	}; 

});


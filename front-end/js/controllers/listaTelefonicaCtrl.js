angular.module('listaTelefonica').controller('listaTelefonicaCtrl', function($scope, $filter, contatosAPI, contatos){
	$scope.app='Lista Telefônica';
	
	$scope.contatos = contatos;

	var apagarUmContato = function(serial) {
		contatosAPI.deleteContato(serial).then(function() {
			$scope.contatos = $scope.contatos.filter(function(contato) {
				return contato.serial != serial;
			});
		}, function(errorMessage) {
			$scope.error = errorMessage;
		});
	};

	$scope.apagarContatos = function(contatos) {
		var contatosExcluir = $scope.contatos.filter(function(contato) {
			return contato.selecionado;
		});

		contatosExcluir.forEach(function(item, index) {
			apagarUmContato(item.serial);
		});
	};

	$scope.isContatoSelecionado = function(contatos) {
		return contatos.some(function(contato) {
			return contato.selecionado;
		});
	};

	$scope.ordernarPor = function(campo) {
		$scope.criterioDeOrdenacao = campo;
	}; 

});


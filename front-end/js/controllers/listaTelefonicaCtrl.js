angular.module('listaTelefonica').controller('listaTelefonicaCtrl', function($scope, $filter, contatosAPI, contatos){
	$scope.app='Lista Telefônica';
	
	$scope.contatos = contatos.data;

	var apagarUmContato = function(serial) {
		contatosAPI.deleteContato(serial).then(function(response) {

			if (response.data.deleted) {
				$scope.contatos = $scope.contatos.filter(function(contato) {
					return contato.serial != serial;
				});
			};

		}, function(responseError) {

			var errorMessage = 'Não foi possível excluir o contato. Status: "' + responseError.status + '", mensagem: "' + (responseError.statusText || 'indefinido') + '"' ;
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


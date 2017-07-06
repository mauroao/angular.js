angular.module('listaTelefonica').controller('listaTelefonicaCtrl', function($scope, $filter, contatosAPI, contatos){
	$scope.app='Lista Telefônica';
	
	$scope.contatos = contatos.data;

	var carregarContatos = function() {
		contatosAPI.getContatos().then(function(response) {

			$scope.contatos = response.data;

		}, function(responseError) {

			var errorMessage = 'Não foi possível carregar os dados. Status: "' + responseError.status + '", mensagem: "' + (responseError.statusText || 'indefinido') + '"' ;
			$scope.error = errorMessage;

		});
	};

	$scope.apagarContatos = function(contatos) {
		$scope.contatos = contatos.filter(function(contato) {
			if (!contato.selecionado) {
				return contato;
			}
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

}) ;


angular.module('listaTelefonica').controller('listaTelefonicaCtrl', function($scope, $filter, contatosAPI, operadorasAPI, serialGenerator){
	$scope.app='Lista Telefônica';
	
	$scope.contatos = [];
	$scope.operadoras = [];

	var carregarContatos = function() {
		contatosAPI.getContatos().then(function(response) {

			$scope.contatos = response.data;

		}, function(responseError) {

			var errorMessage = 'Não foi possível carregar os dados. Status: "' + responseError.status + '", mensagem: "' + (responseError.statusText || 'indefinido') + '"' ;
			$scope.error = errorMessage;

		});
	};
	
	var carregarOperadoras = function() {
		operadorasAPI.getOperadoras().then(function(response) {

			$scope.operadoras = response.data;

		}, function(responseError) {

			var errorMessage = 'Não foi possível carregar os dados. Status: "' + responseError.status + '", mensagem: "' + (responseError.statusText || 'indefinido') + '"' ;
			$scope.error = errorMessage;

		});
	};
	
	$scope.adicionarContato = function(contato) {
		contato.data = new Date();
		contato.serial = serialGenerator.generate();

		contatosAPI.saveContato(contato).then(function(response) { 

			// $scope.contatos.push(angular.copy(contato)); // carregar lista
			delete($scope.contato);
			$scope.contatoForm.$setPristine();
			carregarContatos();
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

	carregarContatos();
	carregarOperadoras();
}) ;


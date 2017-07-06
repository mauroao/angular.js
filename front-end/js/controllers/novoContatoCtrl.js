angular.module('listaTelefonica').controller('novoContatoCtrl', function($scope, contatosAPI, operadorasAPI, serialGenerator, $location){
	
	$scope.operadoras = [];

	$scope.contato  = {
		data: 1034218800000
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
		
		contato.serial = serialGenerator.generate();

		contatosAPI.saveContato(contato).then(function(response) { 

			// $scope.contatos.push(angular.copy(contato)); // carregar lista
			delete($scope.contato);
			$scope.contatoForm.$setPristine();
			
			$location.path('/contatos');
		});
	};

	carregarOperadoras();
});


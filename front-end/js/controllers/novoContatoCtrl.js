angular.module('listaTelefonica').controller('novoContatoCtrl', function($scope, contatosAPI, serialGenerator, $location, operadoras){
	
	$scope.operadoras = operadoras.data || [];

	$scope.contato  = {
		//data: 1034218800000
		data: new Date()
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

});


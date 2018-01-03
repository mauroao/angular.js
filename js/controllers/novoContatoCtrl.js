angular.module('listaTelefonica').controller('novoContatoCtrl', function($scope, contatosAPI, serialGenerator, $location, operadoras){
	
	$scope.operadoras = operadoras || [];

	$scope.contato  = {
		data: new Date()
	};
	
	$scope.adicionarContato = function(contato) {
		
		contato.serial = serialGenerator.generate();

		contatosAPI.saveContato(contato).then(function() { 
			delete($scope.contato);
			$scope.contatoForm.$setPristine();
			$location.path('/contatos');
		});
	};

});


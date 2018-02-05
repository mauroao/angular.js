angular.module('listaTelefonica').controller('listaTelefonicaCtrl', function($scope, $filter, contatosAPI, data){

	$scope.app = 'Lista Telefônica';
	$scope.currentPage = 1;
	$scope.data = data;
	$scope.searchParam = '';

	$scope.apagarContato = function(contato) {
		contatosAPI.deleteContato(contato.serial)
			.then(function() {
				return contatosAPI.getContatos($scope.currentPage, $scope.searchParam);
			})
			.then(function(_data) {
				$scope.data = _data;
			})
			.catch(function(errorMessage){
				$scope.error = errorMessage;
			});
	}; 

	$scope.getContatos = function(currentPage) {
		$scope.currentPage = currentPage;
		contatosAPI.getContatos($scope.currentPage, $scope.searchParam)
			.then(function(_data) {
				$scope.data = _data;
			})
			.catch(function(errorMessage){
				$scope.error = errorMessage;
			});
	};
});


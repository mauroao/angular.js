angular.module('listaTelefonica').controller('listaTelefonicaCtrl', function($scope, $filter, contatosAPI, data){

	$scope.data = {
		paginatedData: []
	};
	$scope.links = [];
	$scope.app = 'Lista Telefônica';
	$scope.searchParam = '';
	$scope.currentPage = 1;

	var setData = function(_data) {
		$scope.data = _data;	

        var firstPage = 1;
        var lastPage = $scope.data.totalPages;
        var linkCount = 7; // << 1 2 3 4 5 >>
		
		$scope.links = [];
		$scope.links.push($scope.currentPage);

		var left = $scope.currentPage;
		var right = $scope.currentPage;

		while($scope.links.length < linkCount) {
			if (right < lastPage) {
				right++;
				$scope.links.push(right);
			}

			if (left > firstPage) {
				left--;
				$scope.links.unshift(left);
			}

			if (right >= lastPage && left <= firstPage) {
				break;
			}
		}		
	};

	setData(data);

	$scope.apagarContato = function(contato) {
		contatosAPI.deleteContato(contato.serial)
			.then(function() {
				return contatosAPI.getContatos($scope.currentPage, $scope.searchParam);
			})
			.then(function(_data) {
				setData(_data);
			})
			.catch(function(errorMessage){
				$scope.error = errorMessage;
			});
	}; 

	$scope.getContatos = function(currentPage) {
		$scope.currentPage = currentPage;
		contatosAPI.getContatos($scope.currentPage, $scope.searchParam)
			.then(function(_data) {
				setData(_data);
			})
			.catch(function(errorMessage){
				$scope.error = errorMessage;
			});
	};
});


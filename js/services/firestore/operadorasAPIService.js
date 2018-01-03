angular.module('listaTelefonica').service('operadorasAPI', function($q, configValues, fireStoreService){
	this.getOperadoras = function() {
		return $q(function(resolve, reject) {
			fireStoreService.db.collection('operadoras').get()
			.then(function(data) {
				var _operadoras = data.docs.map(function(item) {
					return item.data();
				});
				resolve(_operadoras);
			})
			.catch(function(err) {
				$rootScope.loading = false;
				$location.path('/error');				
				reject(err);
			});
		});
	};
});




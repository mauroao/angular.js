angular.module('listaTelefonica').factory('contatosAPI', function($rootScope, $location, $q, configValues, fireStoreService) {

	var _getContatos = function() {	
		$rootScope.loading = true;	
		return $q(function(resolve, reject) {
			fireStoreService.db.collection('contatos').get()
			.then(function(data) {
				var _contatos = data.docs.map(function(item) {
					return item.data();
				});
				$rootScope.loading = false;
				resolve(_contatos);
			})
			.catch(function(err) {
				$rootScope.loading = false;
				reject(err);
			});
		});
	};

	var _getContato = function(serial) {
		$rootScope.loading = true;
		return $q(function(resolve, reject) {
			var docRef = fireStoreService.db.collection('contatos').doc(serial);

			docRef.get().then(function(doc) {
				if (doc.exists) {
					$rootScope.loading = false;
					resolve(doc.data());
				} else {
					console.log('contato não encontrado');
					$location.path('/error');
					reject();
				}
			})
			.catch(function(err) {
				$rootScope.loading = false;
				reject(err);
			});
		});
	};

	var _saveContato = function(contato) {
		$rootScope.loading = true;
		return $q(function(resolve, reject) {
			// fireStoreService.db.collection('contatos').add(contato).then(function() {
			fireStoreService.db.collection('contatos')
			.doc(contato.serial)
			.set(contato)
			.then(function() {
				$rootScope.loading = false;
				resolve();
			})
			.catch(function() {
				$rootScope.loading = false;
				reject();
			});
		});
	};

	var _deleteContato = function(serial) {
		$rootScope.loading = true;
		return $q(function(resolve, reject) {
			var docRef = fireStoreService.db.collection('contatos').doc(serial);
			
			docRef.delete().then(function() {
				$rootScope.loading = false;
				resolve();
			})
			.catch(function(err) {
				$rootScope.loading = false;
				console.log('contato '+serial+' nao pode ser excluido.');
				console.log(err);
				reject(err);
			});

		});
	};	

	return {
		getContatos: _getContatos,
		saveContato: _saveContato,
		deleteContato: _deleteContato,
		getContato: _getContato
	};
});
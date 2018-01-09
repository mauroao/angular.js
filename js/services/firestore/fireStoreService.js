angular.module('listaTelefonica').service('fireStoreService', function($location, $rootScope, configValues){

	$rootScope.api_version = configValues.firestoreConfig.databaseURL;

	var _db;

	try {
		$rootScope.loading = true;
		firebase.initializeApp(configValues.firestoreConfig);
		_db = firebase.firestore();
	}
	catch (e) {
		var msg = (e && e.message) ? e.message : '';
		$rootScope.loading = false;
		console.log('Erro ao conectar com firebase - ' + msg);	
		$location.path('/error');
	}

	$rootScope.loading = false;
	this.db = _db;
});
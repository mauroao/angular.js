angular.module('listaTelefonica').service('fireStoreService', function(configValues){
	var _db;

	try {
		firebase.initializeApp(configValues.firestoreConfig);
		_db = firebase.firestore();
	}
	catch (e) {
		console.log(e);
		alert('Erro ao conectar com firebase');
	}

	this.db = _db;
});
angular.module('listaTelefonica').value('configValues', {	
	PageSize: 100,
	apiBaseUrl: 'https://mauroao-lista-telefonica-api.herokuapp.com/api',
	firestoreConfig: { 
		apiKey: 'AIzaSyDOvpRFiUUnTNlJr2Nh9L1K0eWWiBP8lTc',
		authDomain: 'projetofirestore.firebaseapp.com',
		databaseURL: 'https://projetofirestore.firebaseio.com',
		projectId: 'projetofirestore',
		storageBucket: 'projetofirestore.appspot.com',
		messagingSenderId: '322473565928'
	}
});

/* 
	url do servico interno do node js
	apiBaseUrl: 'http://localhost:3000/api' 
*/


/* 
	url do servico do node js na nuvem
	apiBaseUrl: 'https://mauroao-lista-telefonica-api.herokuapp.com/api' 
*/

angular.module('listaTelefonica').value('configValues', {	
	apiBaseUrl: 'http://mauroao.openode.io/api',
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
	apiBaseUrl: 'http://mauroao.openode.io/api' 
*/
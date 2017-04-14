angular.module('listaTelefonica').controller('listaTelefonicaCtrl', function($scope, $filter, $http){
	$scope.app='Lista Telefônica';
	
	/*
	$scope.contatos = [
		{nome: 'Pedro', telefone: '99998888', data: new Date(), operadora: {nome: 'Tim'}},
		{nome: 'Ana', telefone: '99998877', data: new Date(), operadora: {nome: 'Tim'}},
		{nome: 'Maria', telefone: '99998866', data: new Date(), operadora: {nome: 'Tim'}}
	];


	$scope.operadoras = $filter('orderBy') ([
		{nome: 'Oi', codigo: 14, categoria: 'Celular', preco: 2.0},
		{nome: 'Tim', codigo: 15, categoria: 'Celular', preco: 2.1},
		{nome: 'Vivo', codigo: 41, categoria: 'Celular', preco: 2.2},
		{nome: 'GVT', codigo: 25, categoria: 'Fixo', preco: 2.3},
		{nome: 'Embratel', codigo: 21, categoria: 'Fixo', preco: 2.4}
	], 'nome');


	*/

	$scope.contatos = [];
	$scope.operadoras = [];

	var carregarContatos = function() {
		$http.get('http://jsonplaceholder.typicode.com/users' + '?foo=bar' + (new Date()).toString()).then(function(response) {

			var contatosFromAPI = response.data.map(function(contatoFromAPI){
				return {
					nome: contatoFromAPI.name,
					telefone: contatoFromAPI.phone.match(/\d/g).join('').substring(1,9),
					data: new Date(),
					operadora: {nome: contatoFromAPI.username.substring(0,3).toUpperCase()}
				};
			});

			contatosFromAPI.length = 4;
			$scope.contatos = contatosFromAPI;

		}, function(responseError) {

			var errorMessage = 'Aconteceu um erro. Status: "' + responseError.status + '", mensagem: "' + (responseError.statusText || 'indefinido') + '"' ;
			$scope.message = errorMessage;

		});
	};

	var carregarOperadoras = function() {


		$http.get('http://jsonplaceholder.typicode.com/users').then(function(response) {
			var operadorasFromAPI = response.data.map(function(operadoraFromAPI){
				return {
					nome: operadoraFromAPI.username.substring(0,3).toUpperCase(),
					codigo: operadoraFromAPI.id,
					categoria: 'Fixo',
					preco: operadoraFromAPI.id+1
				};
			});

			operadorasFromAPI.length = 4;
			$scope.operadoras = operadorasFromAPI;

		});


	};

	$scope.adicionarContato = function(contato) {
		contato.data = new Date();

		$http.post('http://jsonplaceholder.typicode.com/users').then(function(response) {

			$scope.contatos.push(angular.copy(contato)); // carregar lista
			delete($scope.contato);
			$scope.contatoForm.$setPristine();
		});
	};


	$scope.apagarContatos = function(contatos) {
		$scope.contatos = contatos.filter(function(contato) {
			if (!contato.selecionado) {
				return contato;
			}
		});
	};


	$scope.isContatoSelecionado = function(contatos) {
		return contatos.some(function(contato) {
			return contato.selecionado;
		});
	};
	$scope.ordernarPor = function(campo) {
		$scope.criterioDeOrdenacao = campo;
	}; 

	carregarContatos();
	carregarOperadoras();
}) ;


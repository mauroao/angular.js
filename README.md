# AngularJS SPA [![Build Status](https://travis-ci.org/mauroao/angular.js.svg?branch=master)](https://travis-ci.org/mauroao/angular.js)

![angular logo](https://mauroao.github.io/angular.js/angular.png)

## Introdução

Este repositório contém uma SPA (Single Page Application) escrita com o framework AngularJS.
A aplicação contém um cadastro de contatos, onde é possível incluir e excluir contatos com nome, telefone, data de inclusão e operadora.
O projeto foi baseado no curso de Angular JS do [Rodrigo Branas](https://www.youtube.com/user/rodrigobranas).

O objetivo é o de manter um histórico do aprendizado que tive com esse curso, bem como o exercício no uso de diversas ferramentas de desenvolvimento open source, que adicionei ao projeto, como NodeJS, Npm, Grunt, live-server, angularjs, firebase, etc...

## Pré requisitos

É necessário ter as ferramentas abaixo:

* [Node.js](https://nodejs.org/en/);
* [Grunt](https://gruntjs.com/)
* Um Webserver para rodar a página principal, como o [http-server](https://www.npmjs.com/package/http-server) ou [live-server](https://www.npmjs.com/package/live-server);

## Como instalar

1. `git clone git@github.com:mauroao/angular.js.git` - clonar do github;
2. `cd angular.js` - entrar no diretório da aplicacão;
3. `npm install` - instalar os pacotes npm;

## Como executar

Executar um webserver como o [http-server](https://www.npmjs.com/package/http-server) ou [live-server](https://www.npmjs.com/package/live-server);

Logo em seguida, abrir a página no navegador. Exemplo:

`http://localhost:8080/front-end`

## Deploy

* `grunt firestore-version` - para gerar a distribuicão na versão firestore;
* `grunt http-version` - para gerar a distribuicão na versão http;

 Os arquivos do deploy serão compilados para a pasta `docs/` (diretório padrão para publicacão no [github.io](https://github.io)).

## Back-end

Este projeto consome uma API REST para ler e gravar os contatos. Todos os projetos abaixo fornecem uma API compatível e podem ser utilizados como origem dos dados:

* ExpressJS - [github.com/mauroao/expressjs](https://github.com/mauroao/expressjs)
* ASP.NET MVC Web API - [github.com/mauroao/asp-net-web-api](https://github.com/mauroao/asp-net-web-api)
* Java Jersey RESTful API - [github.com/mauroao/java-jersey-rest-api](https://github.com/mauroao/java-jersey-rest-api)

## Back-end na nuvem - Firebase/Firestore

Foi incluída a opcão de persistência de dados no novo servico de banco de dados NoSQL do google: [Firebase](https://firebase.google.com).

Para selecionar qual será a origem dos dados que o front-end irá utilizar, seguir o procedimento abaixo:

1. Editar o arquivo index.html;
2. Localizar as linhas onde os arquivos de serviço são referenciados;
3. Para Firebase, alterar o caminho para `services/firestore/`;
4. Para serviço REST, alterar o caminho para `services/http/`;

Abaixo um exemplo do código a ser comentado/descomentado (versão http):

```html
	<!--
	<script src="js/services/firestore/fireStoreService.js"></script>
	<script src="js/services/firestore/contatosAPIService.js"></script>
	<script src="js/services/firestore/operadorasAPIService.js"></script>
	-->

	<script src="js/services/http/contatosAPIService.js"></script>
	<script src="js/services/http/operadorasAPIService.js"></script>	
```

Abaixo um exemplo do código a ser comentado/descomentado (versão firestore):

```html
	<script src="js/services/firestore/fireStoreService.js"></script>
	<script src="js/services/firestore/contatosAPIService.js"></script>
	<script src="js/services/firestore/operadorasAPIService.js"></script>

    <!--
	<script src="js/services/http/contatosAPIService.js"></script>
    <script src="js/services/http/operadorasAPIService.js"></script>	
    -->
```

## On-Line DEMO

* [Lista Telefônica - versão firestore](https://mauroao.github.io/angular.js/firestore);
* [Lista Telefônica - versão http rest](https://mauroao.github.io/angular.js/rest);

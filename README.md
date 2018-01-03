# SPA com Angular JS

![angular logo](https://mauroao.github.io/angular.js/angular.png)

## Introdução

Este projeto contém o código fonte e instruções para rodar o aplicativo **Lista Telefônica**, que faz parte do curso de Angular JS do [Rodrigo Branas](https://www.youtube.com/user/rodrigobranas).

O objetivo deste projeto é manter um histórico do aprendizado que tive com esse curso, bem como o exercício de implementação de diversas ferramentas de desenvolvimento open source, como Bower, Grunt, Node, Npm, live-server, angularjs, firebase, etc...

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

Executar o comando `grunt prod` para gerar a distribuicão na pasta `docs/` (diretório padrão para publicacão no [github.io](https://github.io)).


## Back-end em Express 

* [Express](https://github.com/mauroao/expressjs)

## Back-end em ASP.NET MVC Web API

* [ASP.NET Web API](https://github.com/mauroao/asp-net-web-api)

## Back-end em Java

* [Java Jersey RESTful API](https://github.com/mauroao/java-jersey-rest-api)

## Back-end na nuvem - Firebase/Firestore

Foi incluída a opcão de persistência de dados no novo servico de banco de dados NoSQL do google: [Firebase](https://firebase.google.com).

Para selecionar qual será a origem dos dados que o front-end irá utilizar, seguir o procedimento abaixo:

1. Editar o arquivo index.html;
2. Localizar as linhas onde os arquivos de serviço são referenciados;
3. Para Firebase, alterar o caminho para `services/firestore/`;
4. Para serviço REST, alterar o caminho para `services/http/`;

Uma versão publicada do aplicativo funcionando com base de dados Firebase está disponível [aqui](https://mauroao.github.io/angular.js)

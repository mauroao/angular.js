# Angular JS

![angular logo](https://mauroao.github.io/angular.js/angular.png)

## Introdução

Este projeto contém o código fonte e instruções para rodar o aplicativo **Lista Telefônica**, que faz parte do curso de Angular JS do [Rodrigo Branas](https://www.youtube.com/user/rodrigobranas).

O objetivo deste projeto é manter um histórico do aprendizado que tive com esse curso, bem como o exercício de implementação de diversas ferramentas de desenvolvimento open source, como Bower, Grunt, Node, Npm, live-server, angularjs, firebase, etc...

## Pré requisitos

É necessário ter as ferramentas abaixo:

* [Node.js](https://nodejs.org/en/);
* [Bower](https://bower.io);
* Um Webserver para rodar a página principal, como o [http-server](https://www.npmjs.com/package/http-server) ou [live-server](https://www.npmjs.com/package/live-server);

## Como instalar

1. clonar do github;
2. `cd back-end/NodeExpressServer/` - entrar no diretório;
3. `npm install` - executar o comando para instalar os pacotes npm;
4. `cd ../..`- retornar ao diretório principal;
4. `cd front-end` - entrar no diretório;
5. `bower install` - executar o comando para instalar os pacotes do bower;
6. `npm install` - executar o comando para instalar os pacotes;

## Como executar

### Back-End

Executar a aplicação back-end que fornece a API REST com os dados da lista telefônica:

* `cd back-end/NodeExpressServer/` - entrar no diretório;
* `node app.js` - subir o servidor;

### Front-End

Dentro do diretório `front-end`, executar um webserver como o [http-server](https://www.npmjs.com/package/http-server) ou [live-server](https://www.npmjs.com/package/live-server);

Logo em seguida, abrir a página no navegador. Exemplo:

`http://localhost:8080/front-end`

## Deploy

É necessário ter instalado o [Grunt](https://gruntjs.com/) para gerar o deploy da aplicacão front-end.

1. `cd front-end` - entrar no diretório;
2. `grunt prod` - executar o comando para gerar a distribuicão;

O conteúdo da distribuicão será gerado na pasta `front-end/dist`.

## Back-end alternativo em ASP.NET MVC Web API

* [ASP.NET Web API](https://github.com/mauroao/asp-net-web-api)

## Back-end alternativo em Java

* [Java Jersey RESTful API](https://github.com/mauroao/java-jersey-rest-api)

## Back-end alternativo na nuvem - Firebase/Firestore

Foi incluída a opcão de persistência de dados no novo servico de banco de dados NoSQL do google: [Firebase](https://firebase.google.com).
Para alternar a origem dos dados que o front-end irá utilizar, será necessário renomear no arquivo index.html, a origem dos servicos (diretório services/http/ ou services/firestore).

Uma versão publicada do aplicativo funcionando com base de dados Firebase está disponível [aqui](https://mauroao.github.io/angular.js)

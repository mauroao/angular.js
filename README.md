# Curso de Angular JS do Rodrigo Branas

## Introdução

Este projeto contém o código fonte e instruções para rodar o aplicativo **Lista Telefônica**, que faz parte do curso de Angular JS do [Rodrigo Branas](https://www.youtube.com/user/rodrigobranas).

## Pré requisitos

É necessário ter as ferramentas abaixo:

* [Node.js](https://nodejs.org/en/);
* [Bower](https://bower.io);
* Um Webserver qualquer, para rodar a página principal, como o [Apache Tomcat®](https://tomcat.apache.org/) ou [nginx](https://nginx.org/en/);

## Como instalar

1. clonar do github;
2. `cd back-end/NodeExpressServer/` - entrar no diretório;
3. `npm install` - executar o comando para instalar os pacotes npm;
4. `cd ../..`- retornar ao diretório principal;
4. `cd front-end` - entrar no diretório;
5. `bower install` - executar o comando para instalar os pacotes do bower;

## Como executar

Executar a aplicação back-end que fornece a API REST com os dados da lista telefônica:

* `cd back-end/NodeExpressServer/` - entrar no diretório;
* `node app.js` - subir o servidor;

Copiar o diretório `front-end` para dentro de um diretório do webserver. Logo em seguida, abrir a página no navegador. Exemplo:

`http://localhost:8080/front-end`

## Back-end alternativo em Java

* [Java Jersey RESTful API](https://github.com/mauroao/java-jersey-rest-api)

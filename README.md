# Curso de Angular JS do Rodrigo Branas

## Introdução

Este projeto contém o código fonte e instruções para rodar o aplicativo **Lista Telefônica**, que faz parte do curso de Angular JS do [Rodrigo Branas](https://www.youtube.com/user/rodrigobranas).

## Pré requisitos

É necessário ter as ferramentas abaixo:

* [Node.js](https://nodejs.org/en/);
* [Bower](https://bower.io);
* Um Webserver qualquer, para rodar a página principal, como o [Apache HTTP Server ](https://httpd.apache.org/),  [nginx](https://nginx.org/en/) ou [http-server](https://www.npmjs.com/package/http-server);

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

**Opcão 1**: Publicar o diretório `front-end` para dentro do diretório de um webserver, como o [Apache HTTP Server ](https://httpd.apache.org/) ou [nginx](https://nginx.org/en/). 

**Opcão 2**: Dentro do diretório `front-end`, executar um webserver como o [http-server](https://www.npmjs.com/package/http-server);

Logo em seguida, abrir a página no navegador. Exemplo:

`http://localhost:8080/front-end`

## Deploy

É necessário ter instalado o [Grunt](https://gruntjs.com/) para gerar o deploy da aplicacão front-end.

1. `cd front-end` - entrar no diretório;
2. `grunt prod` - executar o comando para gerar a distribuicão;

O conteúdo da distribuicão será gerado na pasta `front-end/dist`.


## Back-end alternativo em Java

* [Java Jersey RESTful API](https://github.com/mauroao/java-jersey-rest-api)

## Back-end alternativo na nuvem (verificar se está no ar)

* [mauroao.openode.io/](http://mauroao.openode.io/)


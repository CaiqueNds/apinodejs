# README #

This README would normally document whatever steps are necessary to get your application up and running.

### What is this repository for? ###

Teste para Developer FCamera

Essa api possui 3 rotas

- login:
method: post
Rota disponível para validação do login. 
Se os parâmetros de username e password estiverem corretos retorna o token para o usuário

- usuarios:
method: post
Cadastro de usuarios passando como parâmetros username e password

method: get
Deve passar no headers o token jwt e então retorna se o token armazenado pelo client ainda está disponível

- produtos:
mehotd: get
Retorna os produtos cadastrados na base de dados do mongodb


### How do I get set up? ###

* Summary of set up
* Configuration
* Dependencies
* Database configuration
* How to run tests
* Deployment instructions

### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact
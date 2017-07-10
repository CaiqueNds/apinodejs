# README #

### What is this repository for? ###

Teste para Developer FCamera

A base de dados estyá hospedada no mlab.com
Sting de conexão: var db = 'mongodb://caiquenascs:Rano2559@ds151232.mlab.com:51232/fcameracaique';//coloque a url do db aqui
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
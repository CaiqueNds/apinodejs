# README #

### What is this repository for? ###

Teste para Developer FCamera

- Procedimento para instalar a api:

Ao baixar os fontes deve executar o node js 

Executar npm install na pasta que os fontes foram baixados para incluir as dependências

Após instalar as dependências deve executar node server

e o serviço da api estará ativado na porta 8080

- Essa api possui 3 rotas

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

method: get

Retorna os produtos cadastrados na base de dados do mongodb
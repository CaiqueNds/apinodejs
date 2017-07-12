  var express = require('express')
  , app = express()
  , bodyParser = require('body-parser')
  , mongoose = require('mongoose')
  , cors = require('cors')
  , jwt = require('jwt-simple');
  var db = 'mongodb://caiquenascs:Rano2559@ds151232.mlab.com:51232/fcameracaique';//coloque a url do db aqui
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cors());
  var port = process.env.PORT || 8080;
  var router = express.Router();
  app.use('/api', router);
  /*Aqui criaremos as rotas*/
  var rotas = require('./rotas');
  router.route('/produtos')
    .get(require('./validarJWT'), rotas.getProdutos)  //alteramos esta
  router.route('/usuarios')
    .get(require('./validarJWT'), rotas.getUsuarios)  //alteramos esta
    .post(rotas.postUsuarios);
  router.route('/login')
    .post(rotas.login);
  mongoose.connect(db);
  app.listen(port);
  console.log('conectado a porta ' + port);
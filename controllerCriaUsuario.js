var Model = require('./ModelUsuario');

module.exports = function(req, res){

      console.log("chegouuuuuuuuuuu");
      console.log(req.body.username);
      console.log(req.body.password);
      var data = new Model({
        
        username: req.body.username,
        password: req.body.password
        });
      
        data.save(function(err) {
          if (err)
            res.send(err);
          res.json({ message: 'Novo Usuário', data: data });
        });
    };
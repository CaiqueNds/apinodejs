var Produto = require('./ModelProduto');
module.exports = function(req, res) {
 

 
  //1
  Produto.find(function (err, prod) {
  	if (err) {
      return res.json(401, err)
    }
     return res.json(prod);
    });
};
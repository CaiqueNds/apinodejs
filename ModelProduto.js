var mongoose = require('mongoose');

//1
var ProdutoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  quantidade: {
    type: String,
    required: true
  }
});

//3

module.exports = mongoose.model('Produto', ProdutoSchema);
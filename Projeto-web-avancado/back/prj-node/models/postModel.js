const mongoose = require('mongoose');

// Como se fosse a tabela no banco
const postSchema = mongoose.Schema 
(
    {
        titulo: String,
        conteudo: String,
        data: String
    }
);

// Falando como vai se chamar esse model lá dentro do banco
module.exports = mongoose.model('Post', postSchema);
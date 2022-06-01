// Chamando o mongoose
const mongoose = require('mongoose');

// Criando a parte de tabela
const membroSchema = mongoose.Schema
(
    {
        codigo: Number,
        nome: String,
        instagram: String,
        curso: String,
    }
);
// Falando como vai se chamar esse model lá dentro do banco
module.exports = mongoose.model('Membro', membroSchema);
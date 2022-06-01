// Chamando a model de membro
const membroModel = require('../models/membroModel');

// Criando a classe para controlar
class membroController 
{
    // req = requerimento;
    // resp = resposta da função;

    async listar (req, res)
    {
        var dadosDePosts = await membroModel.find({});
        res.json(dadosDePosts);
    }   // Fim listar

    // Função de salvar
    async salvar (req, res)
    {
        // pega o req do body
        const membro = req.body;

        // pega o maior código no mongo e pega um novo
        const max = await membroModel.findOne({}).sort({'código': -1});
        
        // ele verefica se o código é nulo ou já tem para adicionar mais 1 (usando if ternário)
        membro.codigo = max == null ? 1 : max.codigo + 1;

        // Gravando no branco de dados
        const resultado = await membroModel.create(membro)
        res.status(201).json(resultado);
    }   // Fim salvar

}   // fim membroController

// Criando o export para usar o postController
module.exports = new membroController();
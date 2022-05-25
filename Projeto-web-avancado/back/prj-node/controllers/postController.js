const postModel = require('../models/postModel');

class postController 
{
    // req = requerimento;
    // resp = resposta da função;

    async buscarPorCodigo (req, res)
    {
        const codigo = req.params.codigo;
        const post = await postModel.findOne({'codigo': codigo});
        res.json(post);
    }   // Fim buscarPorCodigo

    // Função de salvar
    async salvar (req, res)
    {
        // pega o req do body
        const post = req.body;

        // pega o maior código no mongo e pega um novo
        const max = await postModel.findOne({}).sort({'código': -1});
        
        // ele verefica se o código é nulo ou já tem para adicionar mais 1 (usando if ternário)
        post.codigo = max == null ? 1 : max.codigo + 1;

        // Gravando no branco de dados
        const resultado = await postModel.create(post)
        res.status(201).json(resultado);
    }   // Fim salvar

    //  Função que lista
    async listar (req, res)
    {
        var dadosDePosts = await postModel.find({});
        res.json(dadosDePosts);
    }   // Fim listar

    // 
    async atualizar (req, res)
    {
        // pego o código do post
        const codigo = req.params.codigo;

        // Falo o que ele vai fazer
        await postModel.findOneAndUpdate({'codigo': codigo}, req.body);
        res.status(200).send();
    }   // Fim atualizar


    async apagar (req, res)
    {
        // pego o código do post
        const codigo = req.params.codigo;

        // Falo o que ele vai fazer
        await postModel.findOneAndRemove({'codigo': codigo}, req.body);
        res.status(200).send();
    }   // Fim apagar
}   // Fim postController

// Criando o export para usar o postController
module.exports = new postController();
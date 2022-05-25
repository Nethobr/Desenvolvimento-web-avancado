// Busco a conexão do mongo
require("./db/mongodb");

const postModel = require("./models/postModel");

// Um exemplo Json que registra no mongodb
var post =
{
    "titulo": "Teste3",
    "conteudo": "Xxxxxxx xxx.",
    "data": "20-10-2674"
};

// Aqui registra no mongoDb
async function gravarDados ()
{
    // Basta essa variável para criar um post
    var resultado = await postModel.create(post);
    console.log(resultado);
}
gravarDados();

// Uando os mongan e o express
const express = require("express");

const srv = express();
const morgan = require("morgan");

srv.use(morgan('dev'));
srv.use(express.urlencoded({'extended': true}));
srv.use(express.json());

const get = (req, res) => res.send("Servidor express (GET)");
const log = () => console.log ("Servidor express rodando!");

// Onde tá a url que ele tá chengando
srv.get('/', get);
srv.get('/posts', async (req, res) => 
        { 
            var dadosDePosts = await postModel.find({});
            res.json(dadosDePosts);
        }
    );

// Local onde vai aparecer o servudor
srv.listen(3000, log);
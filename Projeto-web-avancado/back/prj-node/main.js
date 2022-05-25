// Busco a conexão do mongo
require("./db/mongodb");

// Uando os mongan e o express
const express = require("express");

// Pegando o morgan
const morgan = require("morgan");

//importando a rotas
const postRouter = require('./routes/postRoutes');

// passando o expresse para o srv
const srv = express();

const cors = require("cors");

// Usando o morgan
srv.use(morgan('dev'));
srv.use(express.urlencoded({'extended': true}));
srv.use(express.json());
srv.use(cors());

// Onde tá a url que ele tá chengando
srv.get('/', (req, res) => {res.send("Servidor express (GET)")});
srv.use('/posts', postRouter);

// Local onde vai aparecer o servudor
srv.listen(3000, () => {console.log ("Servidor express rodando!")});
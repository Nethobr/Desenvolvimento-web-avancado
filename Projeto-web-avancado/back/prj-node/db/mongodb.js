const { default: mongoose } = require("mongoose");

//  Conectando no banco de dados mongo
// String de conexão
var str_connection = "mongodb://localhost:27017/regional_bv";
mongoose.connect(str_connection);
const con = mongoose.connection;

//  Opções de monitoramento do banco mongo
        // Tá conectando
con.on('open', () => { console.log('Conectado ao MongoDB!'); });
        // Deu algum erro
con.on('error', () => { console.log('Erro na conexão com o MongoDB!'); });
        // Fechou o banco
con.on('close', () => { console.log('Desconetado do MongoDB!'); });
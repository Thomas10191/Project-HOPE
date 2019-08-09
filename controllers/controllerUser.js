
/*
const mysql = ('mysql');
var connection = mysql.createConnection(){
    host = 'localhost',
    passowrd = '',
    
    database = 
}

*/


exports.getUsuarios = function(req, res, next) {
    res.send("Hello world 2");
};

























/*
const mysql = require('mysql');
const server = express();
//server.use(routes);

//CONEXAO COM O BANCO DE DADOS
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database:'minhabased',
});
//VERIFICACAO DE ERRO AO CONECTAR AO BD
connection.connect((error)=>{
    if (!!error){
        console.log("ERRO");
    }
    else{
        console.log("Connected");
    }
});
 
///CONEXAO NO LOCALHOST PORTA : 332
server.get('/', (req,res)=>{
    connection.query("SELECT * FROM mybd",(error, rows, fields)=>{
        if (!!error){
            console.log("Erro\n");
        }
        else{
            console.log("Sucesso\n");
            //MOSTRAR TABELA BD
            console.log(rows);
            res.send("Welcome  "+ rows[0].nome);
        
        }
    })
})
 

server.listen(332);*/

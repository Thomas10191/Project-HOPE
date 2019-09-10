//const routes = require ('./routes');
const express = require('express');
const sql = require('mysql');
const server = express();
const bodyParser = require('body-parser');
//server.use(routes);

//CONEXAO COM O BANCO DE DADOS
var connection = sql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database:'hope',
    multipleStatements: true
});

//VERIFICACAO DE ERRO AO CONECTAR AO BD
connection.connect((error)=>{
    if (!error){
        console.log("Connected BD");
    }
    else{
        console.log("ERRO");
    
    }
});
 
//CONFIGURANDO BODY PARSER PARA RECEBER PACOTES URLENCODED E JSON
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
//CRIANDO A QUERY
function execSQLQuery(sqlQry, res){
    connection.query(sqlQry, function(error, results, fields){
        if(error) 
          res.json(error);
        else
          res.json(results);
    });
}

//rota para listar todos os usuarios cadastrados
server.get('/users', (req,res,rows)=>{    
    execSQLQuery("SELECT * FROM contact",res);
})


//rota para listar usuario especifico - tem como parametro id
server.get('/users/:id?', (req,res)=>{ 
    let filter = '';
    /* const id = parseInt(req.params.id);
    const consulta = "SELECT * FROM tabela WHERE id = ?";
    connection.query(consulta, [id], callback);
    conn.query(consulta, [id], callback);
    PERIGO DE SQL INJECTION
    */if(req.params.id) filter = ' WHERE id=' +parseInt(req.params.id);
    execSQLQuery('SELECT * FROM contact' + filter,res)

})

//rota para deletar usuario especifico - tem como parametro id
server.delete('/users/:id', (req,res)=>{ 
    execSQLQuery('DELETE FROM contact WHERE id ='+ parseInt(req.params.id),res);
    console.log('Usuario deletado.')
})

//https://sequelize.org/master/
//criar query de insert
//FAZER ROTA PARA DELETAR TODOS OS USUARIOS, FALTA 


server.post('/users', (req, res) =>{
    const first_name = req.body.first_name.substring(0,50);
    const last_name = req.body.last_name.substring(0,50);
    const phone = req.body.phone.substring(0,50);
    const email = req.body.email.substring(0,50);
    const password = req.body.password.substring(0,50);
    execSQLQuery(`INSERT INTO contact (first_name,last_name,phone,email,password) VALUES('${first_name}','${last_name}','${phone}','${email}','${password}')`, res);
    console.log("User Cadastrado\n");
});

/*
server.patch('/users/:id?', (req, res) =>{
    const id = parseInt(req.params.id);
    const first_name = req.body.first_name.substring(0,50);
    const last_name = req.body.last_name.substring(0,50);
    const phone = req.body.phone.substring(0,50);
    const email = req.body.email.substring(0,50);
    const password = req.body.password.substring(0,50);
    execSQLQuery(`UPDATE contact SET first_name='${first_name}',last_name='${last_name}',phone='${phone}',email='${email}',password='${password}' WHERE id=${id}`, res);

})
*/

server.put('/users/:id?', (req, res) =>{
    console.log("update user");
    console.log(req.body);
    const id = parseInt(req.params.id);
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const phone = req.body.phone;
    const email = req.body.email;
    const password = req.body.password;
    execSQLQuery(`UPDATE contact SET first_name='${first_name}',last_name='${last_name}',phone='${phone}',email='${email}',password='${password}' WHERE id=${id}`, res);
});
server.listen(332);

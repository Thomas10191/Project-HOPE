module.exports = {
    DB: {
    	host: "postgres-compose", //address of database
        port: 3306,
    	database: "hope", //data base of institute
    	username: "postgres", //User rap
    	password: "Postgres2019!", //Password user rap
    	database_type: "postgres"  //database types avaliables:'mysql'|'sqlite'|'postgres'|'mssql'
    	//schema  : "schema_rap"
    }, 
    API_PORT : 8040
};
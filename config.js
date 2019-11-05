module.exports = {
    DB: {
    	host: "postgres-compose", //address of database
        port: 3306,
    	database: "hope", //data base of institute
    	username: "postgres", //User rap
    	password: "passhope", //Password user rap
    	database_type: "postgres"  //database types avaliables:'mysql'|'sqlite'|'postgres'|'mssql'
    },
    API_PORT : 8040
};

const Sequelize = require('sequelize');
const sequelizePaginate = require('sequelize-paginate');

const conection = require(__dirname+'/../connection.js');

var Auth = conection.sequelize.define('tb_auth', {
	id: {
		type: Sequelize.INTEGER, 
		autoIncrement: true, 
		primaryKey: true
	}, 
	token: { 
		type: Sequelize.TEXT
	}
},{
    schema: conection.schema,
    freezeTableName: true,
    timestamp: false
	}
);

sequelizePaginate.paginate(Auth);
module.exports = Auth;
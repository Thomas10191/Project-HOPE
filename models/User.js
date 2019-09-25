
const Sequelize = require('sequelize');
const sequelizePaginate = require('sequelize-paginate');

const conection = require(__dirname+'/../connection.js');

var User = conection.sequelize.define('tb_user', {
	id: {
		type: Sequelize.INTEGER, 
		autoIncrement: true, 
		primaryKey: true
	}, 
	first_name: { 
		type: Sequelize.STRING(30)
	}, 
	last_name: {
		type: Sequelize.STRING(30)
	},
	phone: {
		type: Sequelize.STRING(20)
	},
	email: {
		type: Sequelize.TEXT
	},
	password: {
		type: Sequelize.TEXT
	}
},{
    schema: conection.schema,
    freezeTableName: true,
    timestamp: false
	}
);

sequelizePaginate.paginate(User);
module.exports = User;
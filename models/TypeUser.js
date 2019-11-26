
const Sequelize = require('sequelize');
const sequelizePaginate = require('sequelize-paginate');

const conection = require(__dirname+'/../connection.js');

var TypeUser = conection.sequelize.define('tb_type_user', {
	id: {
		type: Sequelize.INTEGER, 
		autoIncrement: true, 
		primaryKey: true
	}, 
	type: { 
		type: Sequelize.TEXT
	},
	data: {
		type: Sequelize.JSON
	}
},{
    schema: conection.schema,
    freezeTableName: true,
    timestamp: false
	}
);

sequelizePaginate.paginate(TypeUser);
module.exports = TypeUser;
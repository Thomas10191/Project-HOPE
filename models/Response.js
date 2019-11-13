
const Sequelize = require('sequelize');
const sequelizePaginate = require('sequelize-paginate');

const conection = require(__dirname+'/../connection.js');

var Response = conection.sequelize.define('tb_response', {
	id: {
		type: Sequelize.INTEGER, 
		autoIncrement: true, 
		primaryKey: true
	}, 
	description: { 
		type: Sequelize.TEXT
	}, 
	card_id: {
		type: Sequelize.INTEGER
	},
	order: {
		type: Sequelize.INTEGER
	}
},{
    schema: conection.schema,
    freezeTableName: true,
    timestamp: false
	}
);

sequelizePaginate.paginate(Response);
module.exports = Response;
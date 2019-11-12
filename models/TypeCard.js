
const Sequelize = require('sequelize');
const sequelizePaginate = require('sequelize-paginate');

const conection = require(__dirname+'/../connection.js');

var TypeCard = conection.sequelize.define('tb_type_card', {
	id: {
		type: Sequelize.INTEGER, 
		autoIncrement: true, 
		primaryKey: true
	}, 
	name: { 
		type: Sequelize.TEXT
	}
},{
    schema: conection.schema,
    freezeTableName: true,
    timestamp: false
	}
);

sequelizePaginate.paginate(TypeCard);
module.exports = TypeCard;
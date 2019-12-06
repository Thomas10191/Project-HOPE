
const Sequelize = require('sequelize');
const sequelizePaginate = require('sequelize-paginate');

const conection = require(__dirname+'/../connection.js');

const Card      = require(__dirname+'/Card.js');
const TypeCard 	= require(__dirname+'/TypeCard.js');

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
		type: Sequelize.INTEGER, 
		references: { 
			model: TypeCard, 
			key: 'id', 
			deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
	   	}
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

Response.belongsTo(Card, {foreignKey: 'card_id'});

sequelizePaginate.paginate(Response);
module.exports = Response;
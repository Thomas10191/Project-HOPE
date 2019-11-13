
const Sequelize = require('sequelize');
const sequelizePaginate = require('sequelize-paginate');

const conection = require(__dirname+'/../connection.js');

const TypeUser 	= require(__dirname+'/TypeUser.js');
const TypeCard 	= require(__dirname+'/TypeCard.js');

var Card = conection.sequelize.define('tb_card', {
	id: {
		type: Sequelize.INTEGER, 
		autoIncrement: true, 
		primaryKey: true
	}, 
	title: { 
		type: Sequelize.TEXT
	}, 
	type_user_id: {
		type: Sequelize.INTEGER, 
		references: { 
			model: TypeUser, 
			key: 'id', 
			deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
	   }
	},
	type_card_id: {
		type: Sequelize.INTEGER, 
		references: { 
			model: TypeCard, 
			key: 'id', 
			deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
	   }
	},
	description: {
		type: Sequelize.TEXT
	},
	image_url: {
		type: Sequelize.TEXT
	},
	video_url: {
		type: Sequelize.TEXT
	},
	link_url: {
		type: Sequelize.TEXT
	},
	headline: {
		type: Sequelize.TEXT
	},
	context: {
		type: Sequelize.JSON
	}
},{
    schema: conection.schema,
    freezeTableName: true,
    timestamp: false
});

Card.belongsTo(TypeUser, {foreignKey: 'type_user_id'});
Card.belongsTo(TypeCard, {foreignKey: 'type_card_id'});

sequelizePaginate.paginate(Card);
module.exports = Card;
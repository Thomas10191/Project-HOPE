
const Sequelize = require('sequelize');
const sequelizePaginate = require('sequelize-paginate');

const conection = require(__dirname+'/../connection.js');

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
		type: Sequelize.INTEGER
	},
	type_card_id: {
		type: Sequelize.INTEGER
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
	}
);

sequelizePaginate.paginate(Card);
module.exports = Card;
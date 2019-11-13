
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
		type: Sequelize.STRING(20)
	}, 
	last_name: {
		type: Sequelize.STRING(20)
	},
	cpf: {
		type: Sequelize.STRING(11)
	},
	age: {
		type: Sequelize.INTEGER
	},
	phone: {
		type: Sequelize.TEXT
	},
	email: {
		type: Sequelize.TEXT
	},
	password: {
		type: Sequelize.TEXT
	},
	image_url: {
		type: Sequelize.TEXT
	},
	adress_street: {
		type: Sequelize.TEXT
	},
	adress_city: {
		type: Sequelize.TEXT
	},
	adress_state: {
		type: Sequelize.TEXT
	},
	adress_country: {
		type: Sequelize.TEXT
	},
	adress_zipcode: {
		type: Sequelize.TEXT
	},
	data: {
		type: Sequelize.JSON
	},
	type_user_id: {
		type: Sequelize.INTEGER
	}
},{
    schema: conection.schema,
    freezeTableName: true,
    timestamp: false
	}
);

sequelizePaginate.paginate(User);
module.exports = User;
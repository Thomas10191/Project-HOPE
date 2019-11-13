
const Sequelize = require('sequelize');
const sequelizePaginate = require('sequelize-paginate');

const conection = require(__dirname+'/../connection.js');

var Sober = conection.sequelize.define('tb_sober', {
    	id: {
    		type: Sequelize.INTEGER, 
    		autoIncrement: true, 
    		primaryKey: true
    	},
        user_id: {
            type: Sequelize.INTEGER
        },
        createAt: Sequelize.DATE
	},{
        schema: conection.schema,
        freezeTableName: true,
        timestamp: true
	}
);

sequelizePaginate.paginate(Sober);
module.exports = Sober;
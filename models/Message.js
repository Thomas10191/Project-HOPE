const Sequelize = require('sequelize');
const sequelizePaginate = require('sequelize-paginate');

const conection = require(__dirname+'/../connection.js');

var Message = conection.sequelize.define('tb_message', {
    	id: {
    		type: Sequelize.INTEGER, 
    		autoIncrement: true, 
    		primaryKey: true
    	}, 
    	text: {
            type: Sequelize.TEXT,
            allowNull: false,
            validate:{
                notEmpty: { msg:"Campo Vazio!" }
            } 
        },
        visualized: {
            type: Sequelize.INTEGER,
            defaultValue: 0

        },
        send_user_id:{
            type: Sequelize.INTEGER
        },
        recive_user_id:{
            type: Sequelize.INTEGER
        },
        
       createdAt : Sequelize.DATE
        
	},{
        schema: conection.schema,
        freezeTableName: true,
        timestamp: true
	}
);

sequelizePaginate.paginate(Message);
module.exports = Message;
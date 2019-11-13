const Sequelize = require('sequelize');
const sequelizePaginate = require('sequelize-paginate');

const conection = require(__dirname+'/../connection.js');

const User      = require(__dirname+'/User.js');

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
            type: Sequelize.INTEGER, 
            references: { 
                model: User, 
                key: 'id', 
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
           }
        },
        recive_user_id:{
            type: Sequelize.INTEGER, 
            references: { 
                model: User, 
                key: 'id', 
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
           }
        }, 
        createdAt : Sequelize.DATE
        
	},{
        schema: conection.schema,
        freezeTableName: true,
        timestamp: true
	}
);

Message.belongsTo(User, {foreignKey: 'send_user_id'});
Message.belongsTo(User, {foreignKey: 'recive_user_id'});

sequelizePaginate.paginate(Message);
module.exports = Message;
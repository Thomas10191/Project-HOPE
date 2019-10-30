
const Sequelize = require('sequelize');
const sequelizePaginate = require('sequelize-paginate');

const conection = require(__dirname+'/../connection.js');

var Post = conection.sequelize.define('tb_post', {
    	id: {
    		type: Sequelize.INTEGER, 
    		autoIncrement: true, 
    		primaryKey: true
    	}, 
    	title: { 
            type: Sequelize.STRING,
            allowNull: false,
            validate:{
                notEmpty: { msg:"Campo Vazio!" }
            }        
    	}, 
    	message: {
            type: Sequelize.TEXT,
            allowNull: false,
            validate:{
                notEmpty: { msg:"Campo Vazio!" }
            } 
        },
        datePublication: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('NOW()'),
            allowNull: false
        },
        updatePublication: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('NOW()'),
            allowNull: false
        }
	},{
        schema: conection.schema,
        freezeTableName: true,
        timestamp: true
	}
);

sequelizePaginate.paginate(Post);
module.exports = Post;
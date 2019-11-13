
const Sequelize = require('sequelize');
const sequelizePaginate = require('sequelize-paginate');

const conection = require(__dirname+'/../connection.js');
const User      = require(__dirname+'/User.js');

var Sober = conection.sequelize.define('tb_sober', {
    	id: {
    		type: Sequelize.INTEGER, 
    		autoIncrement: true, 
    		primaryKey: true
    	},
        user_id: {
            type: Sequelize.INTEGER, 
            references: { 
                model: User, 
                key: 'id', 
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        },
        createAt: Sequelize.DATE
	},{
        schema: conection.schema,
        freezeTableName: true,
        timestamp: true
	}
);

Sober.belongsTo(User, {foreignKey: 'user_id'});

sequelizePaginate.paginate(Sober);
module.exports = Sober;
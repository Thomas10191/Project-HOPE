const User = require('../models/User');
const { check, validationResult } = require('express-validator');

module.exports = {

    get : async function(req, res, next) {
        // Or with extra options
        const options = {
            attributes: ['id', 'first_name', 'last_name', 'phone', 'email'],
            page: req.query.page ? req.query.page : 1
        };

        const { docs, pages, total } = await User.paginate(options)
        res.json({data: docs, pages: pages, total: total});
    },

    getById : async function(req, res, next){
        var user = await User.findOne({where: {id : req.params.id}});
        if (user != undefined) {
            res.json(user.dataValues);
        } else {
            res.status(404).send('Not found');
        }
        
    },

    put : async function(req, res, next){
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() })
        }

        if (req.body.id) {
             User.findOne({where : {id: req.body.id}}).then(function(value){
                if (value) {
                    User.update(
                        {
                            first_name  : req.body.first_name,
                            last_name   : req.body.last_name,
                            email       : req.body.email,
                            phone       : req.body.phone,
                            password    : req.body.password
                        }
                    , {where: {id: req.body.id}}).then(function(value){
                        res.json(value);
                    });
                } else {
                    User.create(
                        {
                            first_name  : req.body.first_name,
                            last_name   : req.body.last_name,
                            email       : req.body.email,
                            phone       : req.body.phone,
                            password    : req.body.password
                        }
                    ).then(function(value){
                        res.json(value);
                    });
                }
             })
        } else {
            User.create(
                {
                    first_name  : req.body.first_name,
                    last_name   : req.body.last_name,
                    email       : req.body.email,
                    phone       : req.body.phone,
                    password    : req.body.password
                }
            ).then(function(value){
                res.json(value);
            });
        }
    }
};
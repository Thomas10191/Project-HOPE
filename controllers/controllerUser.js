const User = require('../models/User');
const { check, validationResult } = require('express-validator');

module.exports = {

    get : async function(req, res, next) {
       
        // Or with extra options
        const options = {
            attributes: [   'id', 
                            'first_name', 
                            'last_name', 
                            'cpf', 'age', 
                            'phone', 
                            'email', 
                            'password', 
                            'image_url', 
                            'adress_street', 
                            'adress_city', 
                            'adress_state', 
                            'adress_country', 
                            'adress_zipcode', 
                            'data', 
                            'type_user_id'
                        ],
            page: req.query.page ? req.query.page : 1
        };
        
        const { docs, pages, total } = await User.paginate(options)
        
        return res.json({data: docs, pages: pages, total: total});
    },
  
    getById : async function(req, res, next){
        var user = await User.findOne({where: {id : req.params.id}});
        if (user != undefined) {
            return res.json(user.dataValues);
        } else {
            return res.status(404).send('Not found');
        }
        
    },

    delete : async function(req,res, next){
        console.log(req.params.id)
        var user = await User.findOne({where: {id : req.params.id}});

        if (user != undefined) {
            user.destroy({'id': user.dataValues.id}).then(function(result){
                return res.json(result);
            }, function(err){
                return res.status(500).json({ errors:  JSON.stringify(err) });
            })
        } else {
            return res.status(404).send('Not found');
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
                            first_name      : req.body.first_name,
                            last_name       : req.body.last_name,
                            cpf             : req.body.cpf,
                            age             : req.body.age,
                            phone           : req.body.phone,
                            email           : req.body.email,
                            password        : req.body.password,
                            image_url       : req.body.image_url,
                            adress_street   : req.body.adress_street,
                            adress_city     : req.body.adress_city,
                            adress_state    : req.body.adress_state,
                            adress_country  : req.body.country,
                            adress_zipcode  : req.body.zipcode,
                            data            : req.body.data,
                            type_user_id    : req.body.type_user_id
                        }
                    , {where: {id: req.body.id}}).then(function(value){
                        return res.json(value);
                    });
                } else {
                    User.create(
                        {
                            first_name      : req.body.first_name,
                            last_name       : req.body.last_name,
                            cpf             : req.body.cpf,
                            age             : req.body.age,
                            phone           : req.body.phone,
                            email           : req.body.email,
                            password        : req.body.password,
                            image_url       : req.body.image_url,
                            adress_street   : req.body.adress_street,
                            adress_city     : req.body.adress_city,
                            adress_state    : req.body.adress_state,
                            adress_country  : req.body.country,
                            adress_zipcode  : req.body.zipcode,
                            data            : req.body.data,
                            type_user_id    : req.body.type_user_id
                        }
                    ).then(function(value){
                        return res.json(value);
                    });
                }
             })
        } else {
            User.create(
                {
                    first_name      : req.body.first_name,
                    last_name       : req.body.last_name,
                    cpf             : req.body.cpf,
                    age             : req.body.age,
                    phone           : req.body.phone,
                    email           : req.body.email,
                    password        : req.body.password,
                    image_url       : req.body.image_url,
                    adress_street   : req.body.adress_street,
                    adress_city     : req.body.adress_city,
                    adress_state    : req.body.adress_state,
                    adress_country  : req.body.country,
                    adress_zipcode  : req.body.zipcode,
                    data            : req.body.data,
                    type_user_id    : req.body.type_user_id
                }
            ).then(function(value){
                return res.json(value);
            });
        }
    }
};
const Response = require('../models/Response');
const { check, validationResult } = require('express-validator');

module.exports = {
    get : async function(req, res, next) {
        // Or with extra options   
        const options = {
            page : req.query.page ? req.query.page : 1,
        };

        Response.findAll().then(function(res){
            console.log(res)
        })

        const {docs, pages, total} = await Response.paginate(options);

        return res.json({data: docs, pages: pages, total:total});
    },

    getById : async function(req, res, next){
        var response = await Response.findOne({where: {id : req.params.id}});
        if (response != undefined) {
            return res.json(response.dataValues);
        } else {
            return res.status(404).send('Not found');
        } 
    },

    delete : async function(req,res, next){
        var response = await Response.findOne({where: {id : req.params.id}});

        if (response != undefined) {
            response.destroy({'id': response.dataValues.id}).then(function(result){
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
             Response.findOne({where : {id: req.body.id}}).then(function(value){
                if (value) {
                    Response.update(
                        {
                            description : req.body.description,
                            card_id   : req.body.card_id,
                            order   : req.body.order
                        }
                    , {where: {id: req.body.id}}).then(function(value){
                        return res.json(value);
                    });
                } else {

                    Response.create(
                        {
                            description : req.body.description,
                            card_id   : req.body.card_id,
                            order   : req.body.order
                        }
                    ).then(function(value){
                        return res.json(value);
                    });
                }
             })
        } else {
            Response.create(
                {
                    description : req.body.description,
                    card_id   : req.body.card_id,
                    order   : req.body.order
                }
            ).then(function(value){
                return res.json(value);
            });
        }
    }
};
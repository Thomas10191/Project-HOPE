const TypeCard = require('../models/TypeCard');
const { check, validationResult } = require('express-validator');

module.exports = {
    get : async function(req, res, next) {
        // Or with extra options   
        const options = {
            page : req.query.page ? req.query.page : 1,
        };

        TypeCard.findAll().then(function(res){
            console.log(res)
        })

        const {docs, pages, total} = await TypeCard.paginate(options);

        return res.json({data: docs, pages: pages, total:total});
    },

    getById : async function(req, res, next){
        var typeCard = await TypeCard.findOne({where: {id : req.params.id}});
        if (typeCard != undefined) {
            return res.json(TypeCard.dataValues);
        } else {
            return res.status(404).send('Not found');
        } 
    },

    delete : async function(req,res, next){
        var typeCard = await TypeCard.findOne({where: {id : req.params.id}});

        if (typeCard != undefined) {
            TypeCard.destroy({'id': TypeCard.dataValues.id}).then(function(result){
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
             TypeCard.findOne({where : {id: req.body.id}}).then(function(value){
                if (value) {
                    TypeCard.update(
                        {
                            id: req.body.id,
                            name: req.body.name
                        }
                    , {where: {id: req.body.id}}).then(function(value){
                        return res.json(value);
                    });
                } else {

                    TypeCard.create(
                        {
                            id: req.body.id,
                            name: req.body.name
                        }
                    ).then(function(value){
                        return res.json(value);
                    });
                }
             })
        } else {
            TypeCard.create(
                {
                    id: req.body.id,
                    name: req.body.name
                }
            ).then(function(value){
                return res.json(value);
            });
        }
    }
};
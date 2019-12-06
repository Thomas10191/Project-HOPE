const TypeUser = require('../models/TypeUser');
const { check, validationResult } = require('express-validator');

module.exports = {
    get : async function(req, res, next) {
        // Or with extra options   
        const options = {
            page : req.query.page ? req.query.page : 1,
        };

        TypeUser.findAll().then(function(res){
            console.log(res)
        })

        const {docs, pages, total} = await TypeUser.paginate(options);

        return res.json({data: docs, pages: pages, total:total});
    },

    getById : async function(req, res, next){
        var TypeUser = await TypeUser.findOne({where: {id : req.params.id}});
        if (TypeUser != undefined) {
            return res.json(TypeUser.dataValues);
        } else {
            return res.status(404).send('Not found');
        } 
    },

    delete : async function(req,res, next){
        var TypeUser = await TypeUser.findOne({where: {id : req.params.id}});

        if (TypeUser != undefined) {
            TypeUser.destroy({'id': TypeUser.dataValues.id}).then(function(result){
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
             TypeUser.findOne({where : {id: req.body.id}}).then(function(value){
                if (value) {
                    TypeUser.update(
                        {
                            id: req.body.id,
                            type: req.body.type,
                            data: req.body.data
                        }
                    , {where: {id: req.body.id}}).then(function(value){
                        return res.json(value);
                    });
                } else {

                    TypeUser.create(
                        {
                            id: req.body.id,
                            type: req.body.type,
                            data: req.body.data
                        }
                    ).then(function(value){
                        return res.json(value);
                    });
                }
             })
        } else {
            TypeUser.create(
                {
                    id: req.body.id,
                    type: req.body.type,
                    data: req.body.data
                }
            ).then(function(value){
                return res.json(value);
            });
        }
    }
};
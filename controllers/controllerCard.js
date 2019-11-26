const Card = require('../models/Card');
const { check, validationResult } = require('express-validator');

module.exports = {
    get : async function(req, res, next) {
        // Or with extra options   
        const options = {
            page : req.query.page ? req.query.page : 1,
        };

        Card.findAll().then(function(res){
            console.log(res)
        })

        const {docs, pages, total} = await Card.paginate(options);

        return res.json({data: docs, pages: pages, total:total});
    },

    getById : async function(req, res, next){
        var card = await Card.findOne({where: {id : req.params.id}});
        if (card != undefined) {
            return res.json(card.dataValues);
        } else {
            return res.status(404).send('Not found');
        } 
    },

    delete : async function(req,res, next){
        var card = await Card.findOne({where: {id : req.params.id}});

        if (card != undefined) {
            card.destroy({'id': card.dataValues.id}).then(function(result){
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
             Card.findOne({where : {id: req.body.id}}).then(function(value){
                if (value) {
                    Card.update(
                        {
                            title       : req.body.title,
                            type_user_id: req.body.type_user_id,
                            type_card_id: req.body.type_card_id,
                            description : req.body.description,
                            image_url   : req.body.image_url,
                            video_url   : req.body.video_url,
                            link_url    : req.body.link_url,
                            headline    : req.body.headline,
                            context     : req.body.context
                        }
                    , {where: {id: req.body.id}}).then(function(value){
                        return res.json(value);
                    });
                } else {

                    Card.create(
                        {
                            title       : req.body.title,
                            type_user_id: req.body.type_user_id,
                            type_card_id: req.body.type_card_id,
                            description : req.body.description,
                            image_url   : req.body.image_url,
                            video_url   : req.body.video_url,
                            link_url    : req.body.link_url,
                            headline    : req.body.headline,
                            context     : req.body.context
                        }
                    ).then(function(value){
                        return res.json(value);
                    });
                }
             })
        } else {
            Card.create(
                {
                    title       : req.body.title,
                    type_user_id: req.body.type_user_id,
                    type_card_id: req.body.type_card_id,
                    description : req.body.description,
                    image_url   : req.body.image_url,
                    video_url   : req.body.video_url,
                    link_url    : req.body.link_url,
                    headline    : req.body.headline,
                    context     : req.body.context
                }
            ).then(function(value){
                return res.json(value);
            });
        }
    }
};
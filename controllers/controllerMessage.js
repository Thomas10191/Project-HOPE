const Message = require('../models/Message');
const { check, validationResult } = require('express-validator');

module.exports = {
    get : async function(req, res, next) {
        // Or with extra options   
        const options = {
            page : req.query.page ? req.query.page : 1,
        };

        Message.findAll().then(function(res){
            console.log(res)
        })

        const {docs, pages, total} = await Message.paginate(options);

        return res.json({data: docs, pages: pages, total:total});
    },

    getById : async function(req, res, next){
        var message = await Message.findOne({where: {id : req.params.id}});
        if (message != undefined) {
            return res.json(Message.dataValues);
        } else {
            return res.status(404).send('Not found');
        } 
    },

    delete : async function(req,res, next){
        var message = await Message.findOne({where: {id : req.params.id}});

        if (message != undefined) {
            message.destroy({'id': Message.dataValues.id}).then(function(result){
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
            Message.findOne({where : {id: req.body.id}}).then(function(value){
                if (value) {
                    Message.update(
                        {
                            text          : req.body.text,
                            visualized    : req.body.visualized,
                            send_user_id  : req.body.send_user_id,
                            recive_user_id: req.body.recive_user_id                        
                        }
                    , {where: {id: req.body.id}}).then(function(value){
                        return res.json(value);
                    });
                } else {

                    Message.create(
                        {
                            text          : req.body.text,
                            visualized    : req.body.visualized,
                            send_user_id  : req.body.send_user_id,
                            recive_user_id: req.body.recive_user_id                        
                        }
                    ).then(function(value){
                        return res.json(value);
                    });
                }
             })
        } else {
            Message.create(
                {
                    text          : req.body.text,
                    visualized    : req.body.visualized,
                    send_user_id  : req.body.send_user_id,
                    recive_user_id: req.body.recive_user_id                        
                }
            ).then(function(value){
                return res.json(value);
            });
        }
    }
};
const Post = require('../models/Card');
const { check, validationResult } = require('express-validator');

module.exports = {
    get : async function(req, res, next) {
        // Or with extra options   
        const options = {
            page : req.query.page ? req.query.page : 1,
        };

        const {docs, pages, total} = await Post.paginate(options);

        return res.json({data: docs, pages: pages, total:total});
    },

    getById : async function(req, res, next){
        var post = await Post.findOne({where: {id : req.params.id}});
        if (post != undefined) {
            return res.json(post.dataValues);
        } else {
            return res.status(404).send('Not found');
        } 
    },

    delete : async function(req,res, next){
        var post = await Post.findOne({where: {id : req.params.id}});

        if (post != undefined) {
            post.destroy({'id': post.dataValues.id}).then(function(result){
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
             Post.findOne({where : {id: req.body.id}}).then(function(value){
                if (value) {
                    Post.update(
                        {
                            title       : req.body.title,
                            message     : req.body.message
                        }
                    , {where: {id: req.body.id}}).then(function(value){
                        return res.json(value);
                    });
                } else {

                    Post.create(
                        {
                            title       : req.body.title,
                            message     : req.body.message
                        }
                    ).then(function(value){
                        return res.json(value);
                    });
                }
             })
        } else {
            Post.create(
                {
                    title       : req.body.title,
                    message     : req.body.message
                }
            ).then(function(value){
                return res.json(value);
            });
        }
    }
};
const Post = require('../models/Post');
const { check, validationResult } = require('express-validator');

module.exports = {
    get : async function(req, res, next) {
        // Or with extra options   
        const options = {
            attributes: ['idPost', 'title', 'message','datePublication','updatePublication'],
            page : req.query.page ? req.query.page : 1,
        
        };
        const { docs, pages ,total} = await Post.paginate(options)
        console.log(docs);
        return res.json({data: docs, pages: pages,total:total });
    }
};
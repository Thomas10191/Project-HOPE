const User = require('../models/User');

const { check, validationResult } = require('express-validator');

module.exports = {
    token : async function(req, res, next){
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() })
        }

        if (req.body.email) {
             User.findOne({where : {email: req.body.email, password: req.body.password}}).then(function(value){
                if (value) {
                    return res.json({id: value.dataValues.id});
                } else {
                    return res.status(401).json({error: true});
                }
             })
        } else {
            return res.status(401).json({error: true});
        }
    }
};
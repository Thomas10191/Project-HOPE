const express 			= require('express');
const router 			= express.Router();
const controllerAuth	= require('../controllers/controllerAuth');

const { check , validationResult } = require('express-validator');

router.post('', [
    check('email')		.isEmail(),
    check('password')	.isLength({ min: 3 })
], controllerAuth.token);

module.exports = router;
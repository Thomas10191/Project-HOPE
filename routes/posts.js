const express 			= require('express');
const router 			= express.Router();
const controllerPost	= require('../controllers/controllerPost');

const { check , validationResult } = require('express-validator');
/* GET post listing. */
router.get('/posts', controllerPost.get);
module.exports = router;

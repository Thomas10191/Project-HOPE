const express 			= require('express');
const router 			= express.Router();
const controllerPost	= require('../controllers/controllerPost');

const { check , validationResult } = require('express-validator');

/* GET post listing. */
router.get('', controllerPost.get);
router.get('/:id', controllerPost.getById);
router.post('', [
  	check('title')		.isLength({ min: 3 }),
  	check('message')	.isLength({ min: 3 })
], controllerPost.put);
router.delete('/:id', controllerPost.delete);

module.exports = router;

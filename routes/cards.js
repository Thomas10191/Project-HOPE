const express 			= require('express');
const router 			= express.Router();
const controllerCard	= require('../controllers/controllerCard');

const { check , validationResult } = require('express-validator');

/* GET post listing. */
router.get('', controllerCard.get);
router.get('/:id', controllerCard.getById);
router.post('', [
  	check('title')		.isLength({ min: 3 }),
  	check('type_user_id')	.isNumeric(),
  	check('type_card_id')	.isNumeric(),
  	check('description')	.isLength({ min: 3 }),
  	//check('image_url')	.isLength({ min: 3 }),
  	//check('video_url')	.isLength({ min: 3 }),
  	//check('link_url')	.isLength({ min: 3 }),
  	//check('headline')	.isLength({ min: 3 }),
  	//check('context')	.isLength({ min: 3 })
], controllerCard.put);
router.delete('/:id', controllerCard.delete);

module.exports = router;
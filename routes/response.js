const express 			= require('express');
const router 			= express.Router();
const controllerResponse= require('../controllers/controllerResponse');

const { check , validationResult } = require('express-validator');

/* GET post listing. */
router.get('', controllerResponse.get);
router.get('/:id', controllerResponse.getById);
router.post('', [
  	check('description')	.isLength({ min: 3 }),
  	check('card_id')		.isNumeric(),
  	check('order')			.isNumeric()
], controllerResponse.put);
router.delete('/:id', controllerResponse.delete);

module.exports = router;
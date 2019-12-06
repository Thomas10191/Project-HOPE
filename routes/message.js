const express 			= require('express');
const router 			= express.Router();
const controllerMessage = require('../controllers/controllerMessage');

const { check , validationResult } = require('express-validator');

/* GET post listing. */
router.get('', controllerMessage.get);
router.get('/:id', controllerMessage.getById);
router.post('', [
  	check('text')	.isLength({ min: 1 }),
  	
], controllerMessage.put);
router.delete('/:id', controllerMessage.delete);

module.exports = router;
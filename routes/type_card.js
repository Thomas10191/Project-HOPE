const express 			= require('express');
const router 			= express.Router();
const controllerTypeCard= require('../controllers/controllerTypeCard');

const { check, validationResult } = require('express-validator');

/* GET users listing. */
router.get('', controllerTypeCard.get);
router.get('/:id', controllerTypeCard.getById);
router.post('', [
  	check('name')	.isLength({ min: 3 }),
], controllerTypeCard.put);

router.delete('/:id', controllerTypeCard.delete);

module.exports = router;

const express 			= require('express');
const router 			= express.Router();
const controllerTypeUser= require('../controllers/controllerTypeUser');

const { check, validationResult } = require('express-validator');

/* GET users listing. */
router.get('', controllerTypeUser.get);
router.get('/:id', controllerTypeUser.getById);
router.post('', [
  	check('type')	.isLength({ min: 3 }),
], controllerTypeUser.put);

router.delete('/:id', controllerTypeUser.delete);

module.exports = router;

var express = require('express');
var router = express.Router();
var controllerUser = require('../controllers/controllerUser');

/* GET users listing. */
router.get('/', controllerUser);

module.exports = router;

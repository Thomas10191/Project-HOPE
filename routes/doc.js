var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.redirect('https://documenter.getpostman.com/view/9327967/SW14Tbnw?version=latest');
});

module.exports = router;

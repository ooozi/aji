var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res, next) {
	//res.sendFile(path.join(__dirname, '../views', 'requirejs.html'));
	res.sendFile('requirejs.html', {root: path.join(__dirname, '../views')})
});

module.exports = router;
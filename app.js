var createError = require('http-errors');
var express 	= require('express');

var routePosts 		= require(__dirname+'/routes/cards');
var routeUser 		= require(__dirname+'/routes/users');
var routeAuth 		= require(__dirname+'/routes/auth');
var routeIndex 		= require(__dirname+'/routes/index');
var routeDoc		= require(__dirname+'/routes/doc');
var routeTypeUser 	= require(__dirname+'/routes/type_user');
var routeTypeCard 	= require(__dirname+'/routes/type_card');
var routeResponse 	= require(__dirname+'/routes/response');
var routeMessage    = require(__dirname+'/routes/message')
var config 			= require(__dirname+'/config.js');
var conection 		= require(__dirname+'/connection.js');

var app 		= express();
var logger 		= require("morgan");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/cards', routePosts);
app.use('/users', routeUser);
app.use('/auth', routeAuth);
app.use('/doc',routeDoc);
app.use('/',routeIndex);
app.use('/typeuser',routeTypeUser)
app.use('/typecard',routeTypeCard)
app.use('/response',routeResponse)
app.use('/message',routeMessage)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.send('error');
});

conection.sequelize.sync().then(function() {
	app.listen(config.API_PORT, function() {
    	console.log('Express server listening on port ' + config.API_PORT);
  	});
});

module.exports = app;

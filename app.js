var createError = require('http-errors');
var express 	= require('express');
var routePosts 	= require(__dirname+'/routes/posts');
var routeUser 	= require(__dirname+'/routes/users');
var routeAuth 	= require(__dirname+'/routes/auth');
var app 		= express();
var logger 		= require("morgan");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/posts', routePosts);
app.use('/users', routeUser);
app.use('/auth', routeAuth);

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

var api_port = process.env.PORT || 8000;

app.listen(api_port);
module.exports = app;

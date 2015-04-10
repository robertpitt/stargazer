/**
 * Dependancies
 */
var express 	= require("express");
	webserver 	= express(),
	port 		= process.env.PORT || 8080;

/**
 * Mount the websites
 */
webserver
	.use(require("./apps/frontend/app.js"))
	.use("/api", require("./apps/api/app.js"));

/**
 * catch 404 and forward to error handler
 */
webserver.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (webserver.get('env') === 'development') {
  webserver.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
webserver.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

webserver.listen(port, function(){
	console.log('Running on port: ' + port);
});
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

/* --- use dotenv to load database --- */
require("dotenv").config({ path: __dirname + "/.env" });

//create router
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var investorsRouter = require('./routes/investors');
var requestRouter = require('./routes/request');
var entertainentRouter = require('./routes/sportsandentertainment');
var ygRouter = require('./routes/ygentertainment')
var hetongRouter = require('./routes/hetong'); 
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// use router
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/hetong', hetongRouter)
app.use('/investors', investorsRouter);
app.use('/request', requestRouter);
app.use('/sportsandentertainment',entertainentRouter);
app.use('/ygentertainment',ygRouter)

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
  res.render('error');
});

module.exports = app;

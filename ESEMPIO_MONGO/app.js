var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require ('cors');
var indexRouter = require('./routes/index');
var advancedRouter= require('./routes/advanced-search')
var moviesRouter= require('./routes/movies');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use('/', indexRouter);
app.use('/movies', moviesRouter);
app.use('/advanced-search', advancedRouter);
module.exports = app;

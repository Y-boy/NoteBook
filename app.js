var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var noteRouter = require('./routes/note');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const expressSwagger = require('express-swagger-generator')(app);
expressSwagger({
  swaggerDefinition: {
    info: {
      description: 'Express with Swagger',
      title: 'Swagger',
      version: '1.0.0'
    },
    host: 'localhost:3000',
    basePath: '/',
    produces: ['application/json', 'application/xml'],
    schemes: ['http', 'https'],
    securityDefinitions: {
      JWT: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
        description: '' 
      }
    }
  },
  route: {
    url: '/swagger',
    docs: '/swagger.json' //swagger文件 api
  },
  basedir: __dirname, //app absolute path
  files: ['./routes/*.js'] //Path to the API handle folder
});
app.use('/', indexRouter);
app.use('/note', noteRouter);

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

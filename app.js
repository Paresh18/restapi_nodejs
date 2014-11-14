var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var users = require('./routes/users');
var pdata =require('./routes/index1');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/workout_tracker');
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

app.get('/index1');
app.get('/index1/:id');
/*

app.post('/index/create',function(req,res)
{
 var workout_name = req.body.workout_name;
 var description = req.body.workout_description;
 
  Workout.findOne({ name: { $regex: new RegExp(workout_name, "i") } }, function(err, doc) {  // Using RegEx - search is case insensitive
    if(!err && !doc) {
      
      var newWorkout = new Workout(); 

      newWorkout.name = workout_name; 
      newWorkout.description = description; 
      
      newWorkout.save(function(err) {

        if(!err) {
          res.json(201, {message: "Workout created with name: " + newWorkout.name });    
        } else {
          res.json(500, {message: "Could not create workout. Error: " + err});
        }

      });

    } else if(!err) {
      
      // User is trying to create a workout with a name that already exists. 
      res.json(403, {message: "Workout with that name already exists, please update instead of create or create a new workout with a different name."}); 

    } else {
      res.json(500, { message: err});
    } 
  });
});


*/


//app.get('/workout',workout.index)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;

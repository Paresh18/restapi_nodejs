var express = require('express');
var Workout = require('../models/workout').Workout; 

var router = express.Router();

/* GET home page. */
router.get('/workout', function(req, res) {
Workout.find({}, function(err, docs) {
    if(!err) {
      res.json(200, { 
	  workout: docs }
	  );  
    } else {
      res.json(500, { message: err });
    }
  });
  });
  
router.get('/workout/:id', function(req, res) {  
  var id = req.params.id; // The id of the workout the user wants to look up. 
  Workout.findById(id, function(err, doc) {
    if(!err && doc) {
      res.json(200, doc);
    } else if(err) {
      res.json(500, { message: "Error loading workout." + err});
    } else {
      res.json(404, { message: "Workout not found."});
    }
  });
});
 

module.exports = router;



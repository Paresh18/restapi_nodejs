var express = require('express');
var data = require('../models/database').data; 
//Workout = data
var router = express.Router();

/* GET home page. */
router.get('/index1', function(req, res) {
data.find({}, function(err, docs) {
    if(!err) {
      res.json(200, { 
	  workout: docs }
	  );  
    } else {
      res.json(500, { message: err });
    }
  });
  });
  
router.get('/index1/:id', function(req, res) {  
  var id = req.params.id; 
  data.findById(id, function(err, doc) {
    if(!err && doc) {
      res.json(200, doc);
    } else if(err) {
      res.json(500, { message: "Error loading " + err});
    } else {
      res.json(404, { message: " not found."});
    }
  });
});
 

module.exports = router;



var express = require('express');
var router = express.Router();
var Todo = require('../models/todo');
var db   = require('../db');


router.route('/')
.get(function(req, res){
	Todo.find({})
	.then(function(todos){
		res.json(todos);
	});
})

.post(function(req, res){
  var todo = new Todo();
  todo.title = req.body.title;
  todo.priority = req.body.priority;
  todo.difficulty = req.body.difficulty;
  todo.createdAt = new Date();
  todo.updatedAt = new Date();
  todo.save(function(err){
  	if(err) return err;
	else res.send(todo);  	
  });
});

router.route('/:id')
.patch(function(req, res){
	Todo.findById(req.params.id)
	.then(function(todo){
	  todo.updatedAt = new Date();
	  todo.isCompleted = true;
	  todo.completedOn = new Date();
	  return todo.save();
	})
	.then(function(todo){})

})

.delete(function(req, res){

});


module.exports = router;

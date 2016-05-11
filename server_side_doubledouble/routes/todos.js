var express = require('express');
var router = express.Router();
var Todo = require('./models/todo');

router.route('/')
.get(function(req, res){
	Todo.find({})
	.then(function(todos){
		res.json(todos);
	});
})

.post(function(req, res){
	res.send('updated!');
});

router.route('/:id')
.patch(function(req, res){

})

.delete(function(req, res){

});


module.exports = router;

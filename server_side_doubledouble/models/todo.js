
var mongoose = require('mongoose');

var TodoSchema = mongoose.Schema({
  title: String,
  priority: { type: Number, enum: [1, 2, 3]  },
  difficulty: { type: Number, enum: [1, 2, 3]  },
  isComplete:
  completedOn:

})

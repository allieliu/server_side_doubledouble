var mongoose = require('mongoose');
var mongooseURL = process.env.MONGO_URL || 'mongodb://localhost/server_side_doubledouble';
mongoose.connect(mongooseURL);

module.exports = mongoose;


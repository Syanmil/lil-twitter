var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var twitSchema = new Schema({

module.exports = mongoose.model('twits', twitSchema);
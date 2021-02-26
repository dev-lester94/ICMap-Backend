var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var polygonSchema = new Schema({
  object:{
    desc: String,
    outer:{
      0:{
        lat: Number,
        lng: Number
      }
    },
    inner:{
      0:{
        lat: Number,
        lng: Number,
      }
    }
  }
});

module.exports = mongoose.model('services', polygonSchema, 'services');
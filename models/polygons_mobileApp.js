var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var polygonMobileSchema = new Schema({
  object:{
    arco: String,
    name: String,
    'building desc': String,
    'service desc': String,
    img: String,
    center:{
      lat: Number,
      lgn: Number,
    },
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

module.exports = mongoose.model('buildings_mobileApp', polygonMobileSchema, 'buildings_mobileApp');
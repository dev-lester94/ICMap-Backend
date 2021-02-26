var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var servicesMobileSchema = new Schema({
  object:{
    icon: String,
    buildings:{
      0: String
    }
  }
});

module.exports = mongoose.model('services_mobileApp', servicesMobileSchema, 'services_mobileApp');
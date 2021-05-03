var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var serviceMenuItemSchema = new Schema({
  object:{
    subMenu: {
        key: String,
        icon: String,
        name: String
    },
    menuItems:{
        0:{
            key:String,
            buildingName:String
        }
    }
    
  }
});

module.exports = mongoose.model('serviceMenuItem', serviceMenuItemSchema, 'serviceMenuItem');
var polygonModel = require('../models/polygons');
var polygonMobileAppModel = require('../models/polygons_mobileApp')
var serviceMobileAppModel = require('../models/services_mobileApp')
var serviceMenuModel = require('../models/serviceMenu')

module.exports.get_polygonData=function(req, res){
  polygonModel.find({}, function(err, docs){
    res.send(docs);
  })
};

module.exports.get_polygonDataForMobile=function(req, res){
  polygonMobileAppModel.find({}, function(err, docs){
    res.send(docs);
  })
};

module.exports.get_serviceDataForMobile=function(req, res){
  serviceMobileAppModel.find({}, function(err, docs){
    res.send(docs);
  })
};

module.exports.get_serviceMenuItem=function(req, res){
  serviceMenuModel.find({}, function(err, docs){
    res.send(docs);
  })
};
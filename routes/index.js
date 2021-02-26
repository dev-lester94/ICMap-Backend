var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ICMap' });
});

router.get('/polygons', ctrlMain.get_polygonData);
router.get('/polygons_mobile', ctrlMain.get_polygonDataForMobile);
router.get('/services_mobile', ctrlMain.get_serviceDataForMobile);

module.exports = router;

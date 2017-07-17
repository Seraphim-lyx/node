var express = require('express');
var router = express.Router();
var multiparty = require('multiparty');
var util = require('util');
var fs = require('fs');
var sqldb = require('../sqldb');
var Sequelize = require('sequelize');
var transaction = require('sequelize').Transaction;
var sequelize = sqldb.sequelize;
var tool = require('../tool/tool.js');
var mydate = require('date-utils');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', { title: 'Express12' });
});



router.get('/uploadpage',function(req,res,next){
	res.render('upload.html');
});



router.post('/upload', function(req,res,next){

      tool.fileUpload(req,res);
      res.send("a");
});

router.get('/form',function(req,res,next){
	res.render('form1.html');
});
router.post('/try',function(req, res, next){
  
  res.send(req.body.title);
});

router.get('/test',function(req,res,next){
    res.send(Date.today());
})

module.exports = router;

var express = require('express');
var router = express.Router();
var encoding = require('encoding');
var sqldb = require('../sqldb');
var Sequelize = require('sequelize');
var transaction = require('sequelize').Transaction;
var sequelize = sqldb.sequelize;
var userDao = require('../dao/userDao.js');
var cryptoBase = require('../tool/cryptoBase.js');
var fs = require('fs');
var ursa = require('ursa');
var RSACrypto = require('../tool/RSACrypto.js');
// var test=require('../model/test.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/add',function(req,res,next){
   
    userDao.createUser(req,res);
    res.send('s');
});

router.get('/find',function(req,res,next){
	console.log(req.body.test1);
	userDao.findAllUser()
		.then(function(result){
			// res.json(result);
			var json={
			title:'title',
			result:result,
			}
			res.render('index.html',{json:json})
		});
		
	
})
router.post('/find2',function(req,res,next){
	console.log(req.body.test1);
	userDao.findAllUser()
		.then(function(result){
			// res.json(result);
			var json={
			title:'title',
			result:result,
			}
			res.send(json)
		});
		
	
})
router.get('/test',function(req,res,next){
	console.log('t1');
	next();
})

router.use('/test',function(req,res,next){
	// var pass=cryptoBase.md5encrypt('pass');
	var modulusBit=1024;
	var key  = ursa.generatePrivateKey(modulusBit, 65537);
	var publicPem = ursa.createPublicKey(key.toPublicPem());   //生成公钥
	var publicKey = publicPem.toPublicPem('utf8');
	var modulus = publicPem.getModulus('hex');
	var exponent = publicPem.getExponent('hex');
	res.send({modulus:modulus,exponent:exponent});
})
router.get('/update',function(req,res,next){
	userDao.updateUser(req,res)
		.then(function(results){
			res.send(results);
		})
})
router.get('/delete',function(req,res,next){
	userDao.deleteUser()
		.then(function(results){
			res.send('success');
		})
})
router.get('/encrypt',function(req,res,next){
	var modulusBit = 1024;
	var rsacrypto = new RSACrypto().getInstance();
	rsacrypto.generateKey();
	var modulus = rsacrypto.getPublicModulus();
	var exponent = rsacrypto.getPublicExponent();
	req.session.privateKey = rsacrypto.getPrivateKey();
	var json = {modulus:modulus,exponent:exponent};
	res.render('encrypt.html',{json:json});
})

router.post('/decrypt',function(req,res,next){
	// var padding = ursa.RSA_PKCS1_PADDING;

	var privateKey = req.session.privateKey;
	var rsa = new RSACrypto().getInstance();
	var r = rsa.decrypt(req.body.password,privateKey);
	console.log(r.toString());
	res.send(r);
})
module.exports = router;

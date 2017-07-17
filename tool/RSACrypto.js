var fs = require('fs');
var ursa = require('ursa');
var encoding = require('encoding');
var _instance = null;
function RSACrypto(){
	var self;
	
	var modulusBit = 1024;
	var key  = null;
	var publicPem = null;
	var publicKey = null;
	var privatePem = null;
	var privateKey = null;
	var padding = ursa.RSA_PKCS1_PADDING;

	/**
	 * [getInstance singleton RSACrypto]
	 * @return {[type]} [RSACrypto instance]
	 */
	this.getInstance = function(){
		if(_instance === null){
			_instance = new RSACrypto();
			console.log('set new instance');
		}
		return _instance;
	};

	/**
		generate keypair,publicKey and privateKey object
	*/
	this.generateKey = function(){
		//generateKeyPair
		this.key = ursa.generatePrivateKey(modulusBit, 65537);	
		//generatePublicKeyObject
		this.publicPem = ursa.createPublicKey(this.key.toPublicPem());   
		//genereatePrivateKeyObject
		this.privatePem = ursa.createPrivateKey(this.key.toPrivatePem());	
	

	}

	/**
		create publickey object by publickey
	*/
	this.generatePublicKey = function(pk){
		return ursa.createPublicKey(pk);
	}

	/**
		create privatekey object by privatekey
	*/
	this.generatePrivateKey = function(pk){
		return ursa.createPrivateKey(pk);
	}
	
	/**
		get modulus of publickey
		default encoding is hex
	*/
	this.getPublicModulus = function(encoding){
		if(encoding == null || encoding == ''){
			encoding = 'hex';
		}
		return this.publicPem.getModulus('hex');
	}

	/**
		get exponent of publickey
		default encoding is hex
	*/
	this.getPublicExponent = function(encoding){
		if(encoding == null || encoding == ''){
			encoding = 'hex';
		}
		return this.publicPem.getExponent('hex');
	}

	/**
		get Printed publicKey string
	*/
	this.getPublickKey = function(){
		return this.publicPem.toPublicPem('utf8');
	}
	/**
		get Printed privateKey string
	*/
	this.getPrivateKey = function(){
		return this.privatePem.toPrivatePem('utf8');
	}

	/**
	 * [decrypt:decryption by given privatekey string]
	 * @param  {[type]}
	 * @param  {[type]}
	 * @return {[type]}
	 */	
	this.decrypt = function(cipher,privateKey){
		privatePem = this.generatePrivateKey(privateKey);
		var cipherBuff = encoding.convert(cipher,'hex','binary');
		var result = privatePem.decrypt(cipherBuff, 'binary', 'binary',padding);
		var r = encoding.convert(result,'binary','utf8');
		return r;
	}



	
}

module.exports = RSACrypto;
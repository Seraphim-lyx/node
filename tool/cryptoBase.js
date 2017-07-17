var crypto=require('crypto');

//md5 encryption
exports.md5encrypt=function(content){
	if(content!=null&&content!=""){
		var md5=crypto.createHash('MD5');
		md5.update(content);
		var sign=md5.digest('hex');
	}
	
	return sign;
}
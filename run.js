var test = function(callback){
	callback(1);
}

var p = function(err){
	console.log(err);
}

test(function(data){
	console.log(data);
});
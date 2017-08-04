// var ref = function(value){
// 	return{
// 		then : function(callback){
// 			return ref(callback(value));
// 		}
// 	}
// }

// function f1(v){
// 	console.log(v);
// 	return 'f1';
// }
// function f2(v){
// 	console.log(v);
// 	return 'f2';
// }

// var a=f1();
// 
var tt=function(data){
console.log(data);
	return '111'
} 	
var promise=require('bluebird')
var test2 = promise.promisify(require('./test2.js').test2);
	// promise.resolve()
	// .then(test2)
	// .then(function(data){
	// 	console.log(data);
	// })

test2(null).then(tt);
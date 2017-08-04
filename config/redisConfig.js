var redis = require('redis');
var redisConfig = {
	port: 6379, 
	host: '127.0.0.1',
	opts:{}

}

var client = redis.createClient(redisConfig.port, redisConfig.host, redisConfig.opts);
// client.on('connect',function(){
// 	client.hmset('map',{'test1':'1','test2':'2'},redis.print);
// 	client.hgetall('map',function(err,res){
// 		console.log(res);
// 	})
// })

/**
 * redis transaction
 */
client.on('connect',function(){
    var key = 'skills';
    	//disorder set
      client.sadd(key, 'C#','java',redis.print);
      client.sadd(key, 'nodejs');
      client.sadd(key, "MySQL");
      
      client.multi() //start transaction     
      .sismember(key,'C#')
      .smembers(key)
      .exec(function (err, replies) {      //exection
            console.log("MULTI got " + replies.length + " replies");
            replies.forEach(function (reply, index) {
                console.log("Reply " + index + ": " + reply.toString());
            });
            client.quit();
    });
});


// client.bgsave(); //persistence

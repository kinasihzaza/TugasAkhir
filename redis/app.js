var redis = require('redis');
var redisClient = redis.createClient({host : 'localhost', port : 6379});

redisClient.on('ready',function() {
 console.log("Redis is ready");
});

redisClient.on('error',function() {
 console.log("Error in Redis");
});

redisClient.auth('password',function(err,reply) {
 console.log(reply);
});

redisClient.set("language","nodejs",function(err,reply) {
 console.log(err);
 console.log(reply);
});

redisClient.get("language",function(err,reply) {
 console.log(err);
 console.log(reply);
});

redisClient.hmset("tools","webserver","expressjs","database","mongoDB","devops","jenkins",function(err,reply){
 console.log(err);
 console.log(reply);
});

redisClient.hgetall("tools",function(err,reply) {
 console.log(err);
 console.log(reply);
});

redisClient.rpush(["languages","angularjs","nodejs","go"],function(err,reply) {
 console.log(err);
 console.log(reply);
});

redisClient.sadd(["devopstools","jenkins","codeship","jenkins"],function(err,reply) {
 console.log(err);
 console.log(reply);
});

redisClient.exists('language',function(err,reply) {
 if(!err) {
  if(reply === 1) {
   console.log("Key exists");
  } else {
   console.log("Does't exists");
  }
 }
});

redisClient.del('redisClient',function(err,reply) {
 if(!err) {
  if(reply === 1) {
   console.log("Key is deleted");
  } else {
   console.log("Does't exists");
  }
 }
});

redisClient.expire('redisClient', 30); // Expirty time for 30 seconds.
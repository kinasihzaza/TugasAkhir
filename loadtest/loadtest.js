var loadtest = require('loadtest');
var perfy = require('perfy');

var options = {
    url: 'http://10.151.36.30:8888/api/email',
    requestsPerSecond:611,
    concurent:100000,
    maxRequests: 100000,
    //maxSeconds:600,
    method: 'GET',
    statusCallback: statusCallback
};

function statusCallback(error, result, latency) {
    console.log('Current latency %j, error %j', latency, error);
    //console.log('Current latency %j, result %j, error %j', latency, result, error);
    //console.log('----');
    //console.log('Request elapsed milliseconds: ', result.requestElapsed);
    //console.log('Request index: ', result.requestIndex);
    //console.log('Request loadtest() instance index: ', result.instanceIndex);
}

loadtest.loadTest(options, function(error,result) {
    perfy.start('waktu');
    if (error) {
        return console.error('Got an error: %s', error);
    }
    else {

        console.log('Tests run successfully');

    }
    var result1 = perfy.end('waktu');
    console.log(result1.seconds + ' sec, ' + result1.milliseconds.toFixed(3) + ' ms.');
});


// perfy.start('metric-1');
// var result1 = perfy.end('metric-1');
// console.log(result1.seconds + ' sec, ' + result1.milliseconds.toFixed(3) + ' ms.');

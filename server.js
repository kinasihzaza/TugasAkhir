'use strict';

const Hapi = require('hapi');
const modulPostXXTEA = require('./xxtea/post/index');
const modulPostRC4 = require('./rc4/post/index');
// Create a server with a host and port
const server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 9000
});

// Add the route
server.route([
    {
        method: 'GET',
        path:'/hello', 
        handler: function(request, reply){
            return reply('hello');
        },
    },
    {
        method: 'POST',
        path:'/encrypt/xxtea', 
        handler: modulPostXXTEA.encrypt,
    },
    {
        method: 'POST',
        path:'/decrypt/xxtea', 
        handler: modulPostXXTEA.decrypt,
    },
    {
        method: 'POST',
        path:'/encrypt/rc4', 
        handler: modulPostRC4.encrypt,
    },
    {
        method: 'POST',
        path:'/decrypt/rc4', 
        handler: modulPostRC4.decrypt,
    },
    ]);

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
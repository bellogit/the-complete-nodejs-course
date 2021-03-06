// http module to create network app
const http = require('http');

/*
server object as a varible
The server is an event emitter - that is it has all 
the capability of event emitter -
    on method / addListener method / emit method, etc
Before listening we need to register a listener/handler
*/
// server.on('connection', (socket) => {
//     console.log('New connection')
// });
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Home Page');
        res.end();
    }

    if (req.url === '/books') {
        res.write('Order Book page');
        res.end();
    }
})

// when there's a new connection/ request, the server raises an event
server.listen(8080)
console.log('Listening on port 8080');
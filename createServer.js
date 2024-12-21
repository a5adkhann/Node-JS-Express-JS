const http = require("http");

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write("<h2>Hello From Node JS</h2>");
    response.end();
}).listen(1000)


const sayHello = (request, response) => {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write("<h2>Hello From Node JS</h2>");
        response.end();
}

// function as a parameter
http.createServer(sayHello).listen(1000)


const http = require('http');

http.createServer((request, response) => {
    // response.writeHead(200, { 'Content-Type': 'text/plain' });
    // response.end("Hello, word");
    // response.writeHead(200, { 'Content-Type': 'text/html' });
    // response.end("<h1>Hello, word</h1>");
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({ "valor": "Hello, word" }));
}).listen(3000, (error) => {

    if (error) {
        console.log(error)
    } else {
        console.log('Rodando na porta 3000')
    }
})
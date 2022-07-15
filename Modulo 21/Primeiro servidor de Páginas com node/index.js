const http = require('http');
const url = require('url');
const fs = require('fs');


http.createServer((request, response) => {

    let path = url.parse(request.url).pathname;

    if (path == "" || path == "/") {
        path = "/index.html";
    }

    let filename = "." + path;

    fs.readFile(filename, (error, data) => {

        console.log(error)
        if (error) {
            response.writeHead(404, {
                'Content-Type': 'text/html;charset=utf-8'
            });
            response.end('<h1>Página não encontrada</h1>');
        } else {
            console.log(data)
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(data);
            response.end();
        }
    });
}).listen(3000, (error) => {

    if (error) {
        console.log(error)
    } else {
        console.log('Rodando na porta 3000')
    }
})
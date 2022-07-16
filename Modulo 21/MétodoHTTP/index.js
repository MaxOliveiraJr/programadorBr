const http = require('http');
const url = require('url');
const fs = require('fs');

function handleFile(req, res, callback) {
    let path = url.parse(req.url).pathname;
    let filename = "." + path;
    fs.readFile(filename, (error, data) => {

        console.log(error)
        if (error) {

            if (!callback(req, res)) {
                res.writeHead(404, {
                    'Content-Type': 'text/html;charset=utf-8'
                });
                res.end('<h1>Página não encontrada</h1>');
            }

        } else {
            console.log(data)
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        }
    });
}

function handleRequest(req, res) {
    let path = url.parse(req.url).pathname;

    let method = req.method;

    if (method == 'PUT') {
        res.writeHead(404, { 'Content-Type': 'text/html' });
    }

    console.log(method);

    if (path == "/teste") {
        res.end("Teste")
        return true;
    }
    return false;
}

http.createServer((request, response) => {

    handleFile(request, response, handleRequest)

}).listen(3000, (error) => {

    if (error) {
        console.log(error)
    } else {
        console.log('Rodando na porta 3000')
    }
})
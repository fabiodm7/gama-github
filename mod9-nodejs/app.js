// incluindo uma biblioteca
const http = require('http');
const url = require('url');

// definindo o endereço / url
const hostname = '127.0.0.1';
const port = 3000;

// implementação da regra de negócio
const server = http.createServer((req,res) => {

    // pegar a pergunta na url
    console.log(req.url);
    // verificar a pergunta e escolher uma resposta
    // retornar a resposta escolhida

    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hello World Fabio');
});

// execução
server.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
// incluindo uma biblioteca
const http = require('http');
const url = require('url');
const queryString = require('query-string');

// definindo o endereço/url
const hostname = '127.0.0.1'; // localhost
const port = 3000;

// implementação da regra de negócio
const server = http.createServer((req,res) => {

    // pegar a pergunta na url
    const params = queryString.parse(url.parse(req.url).search);
    
    // verificar a pergunta e escolher uma resposta
    let resposta;
    if (params.pergunta == 'autor'){
        resposta = 'Fabio Duarte Medina';
    } else if (params.pergunta == 'cidade'){
        resposta = 'Sao Paulo';
    } else{
        resposta = 'Sei la meu';
    }

    // retornar a resposta escolhida
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end(resposta);
});

// execução
server.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
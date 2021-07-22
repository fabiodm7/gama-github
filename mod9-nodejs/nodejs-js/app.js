// incluindo uma biblioteca
const http = require('http');
const url = require('url');
const queryString = require('query-string');
const fs = require('fs'); 

// definindo o endereço/url
const hostname = '127.0.0.1'; // localhost
const port = 3000;

// implementação da regra de negócio
const server = http.createServer((req,res) => {

    let resposta;
    const urlparse = url.parse(req.url,true);
    // receber informacoes do usuario
    const params = queryString.parse(urlparse.search);

    function criaUsuario(params){

        // criar usuario
        // salvar informacoes
        fs.writeFile('users/' + params.id + '.json', JSON.stringify(params), function (err) {
            if (err) throw err;
            console.log('Salvo!');
            resposta = 'Usuario criado com sucesso'
            
            // retornar a resposta escolhida
            res.statusCode = 200;
            res.setHeader('Content-Type','text/plain');
            res.end(resposta);
        }); 
    };
    function buscaUsuario(params){
        fs.readFile('users/' + params.id + '.json', function(err){
            resposta = err ? true : false;
            return resposta;
        });
    };
    function imprimeUsuario(params){
        
        let busca = buscaUsuario(params);
        // selecionar usuario
        if (busca == false) {
            resposta = 'Usuario nao existe';
            
            // retornar a resposta escolhida
            res.statusCode = 200;
            res.setHeader('Content-Type','text/plain');
            res.end(resposta);
        } else {
            
            fs.readFile('users/' + params.id + '.json', function(err, data) {
                resposta = data;
                console.log('Founded! ' + data)
        
                // retornar a resposta escolhida
                res.statusCode = 200;
                res.setHeader('Content-Type','application/json');
                res.end(resposta);
            });
        };
    };
    function apagaUsuario(params){

        // apaga usuario
        fs.unlink('users/' + params.id + '.json', function (err) {
            // if (err) throw err;
            // console.log('File deleted!');
            resposta = err ? 'Usuario nao existe' : 'Usuario apagado';
    
            // retornar a resposta escolhida
            res.statusCode = 200;
            res.setHeader('Content-Type','text/plain');
            res.end(resposta);
        });
    };

    if (urlparse.pathname == '/criausuario') {
        criaUsuario(params);
    } else if (urlparse.pathname == '/atualizausuario') {
        criaUsuario(params);
    } else if (urlparse.pathname == '/buscausuario') {
        imprimeUsuario(params);     
    } else if (urlparse.pathname == '/apagausuario') {
        apagaUsuario(params);
    }

});

// execução
server.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
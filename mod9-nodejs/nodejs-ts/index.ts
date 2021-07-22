import { createServer,IncomingMessage,ServerResponse } from 'http';
import { parse } from 'query-string';
import { parse as urlParse } from 'url';
import { writeFile,readFile,unlink } from 'fs';

const port = 5000;
const server = createServer((request: IncomingMessage, response: ServerResponse) => {
   
    var resposta;

    const urlparse = urlParse(request.url ? request.url : '', true);
    const params = parse(urlparse.search ? urlparse.search : '');
    
    function criaUsuario(params: any){

        // criar usuario
        // salvar informacoes
        writeFile('users/' + params.id + '.json', JSON.stringify(params), function (err: any) {
            if (err) throw err;
            console.log('Salvo!');
            resposta = 'Usuario criado com sucesso'
            
            // retornar a resposta escolhida
            response.statusCode = 200;
            response.setHeader('Content-Type','text/plain');
            response.end(resposta);
        }); 
    };
    function buscaUsuario(params: any){
        readFile('users/' + params.id + '.json', function(err: any){
            let res = err ? true : false;
            return res ? res : false;
        });
    };
    function imprimeUsuario(params: any){
        
        let busca = buscaUsuario(params);
        // selecionar usuario
        if (busca == false) {
            resposta = 'Usuario nao existe';
            
            // retornar a resposta escolhida
            response.statusCode = 200;
            response.setHeader('Content-Type','text/plain');
            response.end(resposta);
        } else {
            
            readFile('users/' + params.id + '.json', function(err, data) {
                resposta = data;
                console.log('Founded! ' + data)
        
                // retornar a resposta escolhida
                response.statusCode = 200;
                response.setHeader('Content-Type','application/json');
                response.end(resposta);
            });
        };
    };
    function apagaUsuario(params: any){

        // apaga usuario
        unlink('users/' + params.id + '.json', function (err: any) {
            // if (err) throw err;
            // console.log('File deleted!');
            resposta = err ? 'Usuario nao existe' : 'Usuario apagado';
    
            // retornar a resposta escolhida
            response.statusCode = 200;
            response.setHeader('Content-Type','text/plain');
            response.end(resposta);
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

server.listen(port,() =>{
    console.log(`Server running on port ${port}`);
});
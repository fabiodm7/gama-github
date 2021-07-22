"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var query_string_1 = require("query-string");
var url_1 = require("url");
var fs_1 = require("fs");
var port = 5000;
var server = http_1.createServer(function (request, response) {
    var resposta;
    var urlparse = url_1.parse(request.url ? request.url : '', true);
    var params = query_string_1.parse(urlparse.search ? urlparse.search : '');
    function criaUsuario(params) {
        // criar usuario
        // salvar informacoes
        fs_1.writeFile('users/' + params.id + '.json', JSON.stringify(params), function (err) {
            if (err)
                throw err;
            console.log('Salvo!');
            resposta = 'Usuario criado com sucesso';
            // retornar a resposta escolhida
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/plain');
            response.end(resposta);
        });
    }
    ;
    function buscaUsuario(params) {
        fs_1.readFile('users/' + params.id + '.json', function (err) {
            var res = err ? true : false;
            return res ? res : false;
        });
    }
    ;
    function imprimeUsuario(params) {
        var busca = buscaUsuario(params);
        // selecionar usuario
        if (busca == false) {
            resposta = 'Usuario nao existe';
            // retornar a resposta escolhida
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/plain');
            response.end(resposta);
        }
        else {
            fs_1.readFile('users/' + params.id + '.json', function (err, data) {
                resposta = data;
                console.log('Founded! ' + data);
                // retornar a resposta escolhida
                response.statusCode = 200;
                response.setHeader('Content-Type', 'application/json');
                response.end(resposta);
            });
        }
        ;
    }
    ;
    function apagaUsuario(params) {
        // apaga usuario
        fs_1.unlink('users/' + params.id + '.json', function (err) {
            // if (err) throw err;
            // console.log('File deleted!');
            resposta = err ? 'Usuario nao existe' : 'Usuario apagado';
            // retornar a resposta escolhida
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/plain');
            response.end(resposta);
        });
    }
    ;
    if (urlparse.pathname == '/criausuario') {
        criaUsuario(params);
    }
    else if (urlparse.pathname == '/atualizausuario') {
        criaUsuario(params);
    }
    else if (urlparse.pathname == '/buscausuario') {
        imprimeUsuario(params);
    }
    else if (urlparse.pathname == '/apagausuario') {
        apagaUsuario(params);
    }
});
server.listen(port, function () {
    console.log("Server running on port " + port);
});

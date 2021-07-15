import { createServer } from 'http';

// criar o servidor http
const server = createServer((request,response) => {
    switch (request.url) {
        // configura um rota no endereço status
        case '/status': {
            response.writeHead(200, {
                'Content-Type': 'application/json',
            });
            response.write(
                JSON.stringify({
                    status: "OK",
                })
            );
            response.end();
            break;
        }
        // configura mensagem de erro 404
        default: {
            response.writeHead(404, 'Service not found');
            response.end();
            
        }
    }
});

// define uma variável para a porta do servidor, deve ser preenchida no start do servidor 
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
// define uma variável para o endeço do servidor, deve ser preenchida no start do servidor 
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1'

// inicia o servidor
server.listen(PORT,HOSTNAME, () => {
    console.log(`listening on http://${HOSTNAME}:${PORT}`);
});
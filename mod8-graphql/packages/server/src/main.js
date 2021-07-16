// import { createServer } from 'http';
// import { readFile } from 'fs';
// import { resolve } from 'path';
// import { parse } from 'querystring';

import express from 'express';
// import cors from 'cors';
import { ApolloServer, gql } from 'apollo-server-express';
import typeDefs from './graphql/typeDefs'
import resolvers from './graphql/resolvers'

const app = express();

const server = new ApolloServer({
    typeDefs: typeDefs,
    // typeDefs: gql`
    //     type Client {
    //         id: ID!
    //         name: String!    
    //     }

    //     type Demand {
    //         id: ID!
    //         name: String!
    //         client: Client!
    //         deadline: String
    //     }

    //     type Query {
    //         demands: [Demand]!
    //     }
    // `,
    resolvers: resolvers,
    // resolvers: {
    //     Query: {
    //         demands: () => [],
    //     },    
    // },
});

server.applyMiddleware({
    app,
    cors: {
        origin:'http://localhost:3000',
    },
    bodyParserConfig: true,
});

// server.get('/status', (_,response) =>{
//     response.send({
//         status: "OK",
//     });
// });

// const enableCors = cors({ origin:'http://localhost:3000'});

// server
// .options('/authenticate', enableCors)
// .post('/authenticate', enableCors, express.json(), (request,response) =>{
//     console.log(
//         'Email', request.body.email,
//         'Senha', request.body.password,
//     );
//     response.send({
//         ok: true,
//     });
// });

// // criar o servidor http
// const server = createServer((request,response) => {
//     switch (request.url) {
//         // // configura um rota no endereço status
//         // case '/status': {
//         //     response.writeHead(200, {
//         //         'Content-Type': 'application/json',
//         //     });
//         //     response.write(
//         //         JSON.stringify({
//         //             status: "OK",
//         //         })
//         //     );
//         //     response.end();
//         //     break;
//         // }
//         // // rota para home page
//         // case '/home': {
//         //     const path = resolve(__dirname,'./pages/home.html');
//         //     readFile(path, (error,file) => {
//         //         if (error) {
//         //             response.writeHead(500, 'Não foi possível processar o arquivo html');
//         //             response.end();
//         //             return;
//         //         }
//         //         else {
//         //             response.writeHead(200);
//         //             response.write(file);
//         //             response.end();
//         //             return;
//         //         }
//         //     }); 
//         //     break;
//         // }
//         // // rota para pagina de login
//         // case '/signin':{
//         //     const path = resolve(__dirname,'./pages/signin.html');
//         //     readFile(path, (error,file) => {
//         //         if (error) {
//         //             response.writeHead(500, 'Não foi possível processar o arquivo html');
//         //             response.end();
//         //             return;
//         //         }
//         //         else {
//         //             response.writeHead(200);
//         //             response.write(file);
//         //             response.end();
//         //             return;
//         //         }
//         //     }); 
//         //     break;
//         // }
//         case '/authenticate': {
//             let data = '';
//             request.on('data', (chunck) => {
//                 data += chunck;
//             });
//             request.on('end', () => {
//                 const params = parse(data);
//                 // response.writeHead(301,{
//                 //     location: '/home',
//                 // });
//                 response.end();
//             });
//             break;
//         }
//         // configura mensagem de erro 404
//         default: {
//             response.writeHead(404, 'Service not found');
//             response.end();
            
//         }
//     }
// });

// define uma variável para a porta do servidor, deve ser preenchida no start do servidor 
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
// define uma variável para o endeço do servidor, deve ser preenchida no start do servidor 
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1'

// inicia o servidor
app.listen(PORT,HOSTNAME, () => {
    console.log(`listening on http://${HOSTNAME}:${PORT}`);
});
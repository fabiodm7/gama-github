import React from 'react';

import Routes from './routes';

// não pode usar class por ser uma palavra reservada do JS
// quando não queremos retornar tags dentro de uma tag específica utilizamos <></>
// para importar um arquivo no diretório a sintaxe correta é ./nomeArquivo.extensao

function App(props) {
    return (  
        <Routes />
    );
}

export default App;
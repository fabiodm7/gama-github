import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import axios from 'axios;'

// não pode usar class por ser uma palavra reservada do JS
// quando não queremos retornar tags dentro de uma tag específica utilizamos <></>
// para importar um arquivo no diretório a sintaxe correta é ./nomeArquivo.extensao

function App(props) {
    const [ usuario, setUsuario ] = useState('');
    function handlePesquisa(){
        //console.log(usuario);
        axios.get('https://api.github.com/users/fabiodm7/repos').then(response => console.log(response));
    }
    return (
        <>
            <h1>{props.title} {props.user}</h1>
            <p>{ usuario }</p>
            <input className="usuarioInput" placeholder="Usuario" value={usuario} onChange={e => setUsuario(e.target.value)}/>
            <button type="button" onClick={handlePesquisa}>Pesquisar</button>
        </>
    );
}

export default App;

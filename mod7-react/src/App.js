import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

// não pode usar class por ser uma palavra reservada do JS
// quando não queremos retornar tags dentro de uma tag específica utilizamos <></>
// 

function App(props) {
    const [ usuario, setUsuario ] = useState('fabiodm7')
    return (
        <>
            <h1>{props.title} {props.user}</h1>
            <p>{ usuario }</p>
            <input name="usuario" id="usuario" className="usuarioInput" placeholder="Usuario"/>
            <button type="button">Pesquisar</button>
        </>
    );
}

export default App;

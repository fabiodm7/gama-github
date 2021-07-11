import logo from '../../logo.svg';
import '../../App.css';
import React, { useState } from 'react';
import axios from 'axios';
import * as s from './styled';

// não pode usar class por ser uma palavra reservada do JS
// quando não queremos retornar tags dentro de uma tag específica utilizamos <></>
// para importar um arquivo no diretório a sintaxe correta é ./nomeArquivo.extensao

function App(props) {
    const [ usuario, setUsuario ] = useState('');
    function handlePesquisa(){
        //console.log(usuario);
        axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
            const repositories = response.data;
            const repositoriesName = [];
            repositories.map((repository) => {
                repositoriesName.push(repository.name);
            });
            localStorage.setItem('repositoriesName',JSON.stringify(repositoriesName));
        });
    }
    return (
        <s.Container>
            <s.Input className="usuarioInput" placeholder="Usuario" value={usuario} onChange={e => setUsuario(e.target.value)}/>
            <s.Button type="button" onClick={handlePesquisa}>Pesquisar</s.Button>
        </s.Container>
    );
}

export default App;

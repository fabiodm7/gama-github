import logo from '../../logo.svg';
import '../../App.css';
import React, { useState } from 'react';
import axios from 'axios';
import * as s from './styled';
import { useHistory } from 'react-router-dom'

// não pode usar class por ser uma palavra reservada do JS
// quando não queremos retornar tags dentro de uma tag específica utilizamos <></>
// para importar um arquivo no diretório a sintaxe correta é ./nomeArquivo.extensao

function App(props) {
    const history = useHistory();
    const [ usuario, setUsuario ] = useState('');
    const [ erro, setErro ] = useState(false);

    function handlePesquisa(){
        //console.log(usuario);
        axios.get(`https://api.github.com/users/${usuario}/repos`)
            .then(response => {
                const repositories = response.data;
                const repositoriesName = [];
                repositories.map((repository) => {
                    repositoriesName.push(repository.name);
                });
                localStorage.setItem('repositoriesName',JSON.stringify(repositoriesName));
                setErro(false);
                history.push('/repositories');
            })
            .catch(err => {
                setErro(true);
            });
    }
    return (
        <s.HomeContainer>
            <s.Content>
                <s.Input className="usuarioInput" placeholder="Usuario" value={usuario} onChange={e => setUsuario(e.target.value)}/>
                <s.Button type="button" onClick={handlePesquisa}>Pesquisar</s.Button>
            </s.Content>
            { erro ? <s.ErrorMsg>Que pena, aconteceu alguma coisa. Tente novamente.</s.ErrorMsg> : ''}
        </s.HomeContainer>
    );
}

export default App;

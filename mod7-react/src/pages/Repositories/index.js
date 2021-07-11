import React, { useEffect, useState } from 'react';
import * as s from './styled';
// import { Link } from 'react-router-dom';

export default function Repositories(){
    const [ repositories, setRepositories ] = useState([]);
    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');
        repositoriesName = JSON.parse(repositoriesName);
        setRepositories(repositoriesName);
        // localStorage.clear();
    },[]);
    return(
        <s.Container>
            <s.Title>Repositories</s.Title>
            <s.List>
                { repositories.map(repository => {
                    return (
                        <s.ListItem>Repositório: { repository }</s.ListItem>
                    )
                }) }
            </s.List>
            <s.linkHome to="/">Voltar</s.linkHome>
        </s.Container>
    )
}
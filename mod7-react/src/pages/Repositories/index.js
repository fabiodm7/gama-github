import React, { useEffect, useState } from 'react';
import * as s from './styled';
// import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

export default function Repositories(){
    const history = useHistory();
    const [ repositories, setRepositories ] = useState([]);
    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');
        if (repositoriesName != null) {
            repositoriesName = JSON.parse(repositoriesName);
            setRepositories(repositoriesName);
            localStorage.clear();
        } else {
            history.push('/');
        }
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
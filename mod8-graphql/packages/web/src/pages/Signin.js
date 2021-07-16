// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Efetue login</title>
// </head>
// <body>
    // <form action="/authenticate" method="POST">
    //     <fieldset>
    //         <label for="email">E-mail:</label>
    //         <input id="email" type="email" inputmode="email" name="email" autocomplete="username" />
    //     </fieldset>
    //     <fieldset>
    //         <label for="password">Senha:</label>
    //         <input id="password" type="password" name="password" autocomplete="current-password" /> 
    //     </fieldset>
    //     <button type="submit">Entrar</button>
    // </form>
// </body>
// </html>

import React, { useState } from 'react';

export default function Signin(){
    const [ email, setEmail] = useState('');
    
    const [ password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:8000/authenticate', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
            })
        })
            .then((response) => response.json())
            .then(()=>{
                console.log('Sucesso')
            });
    };

    const handleEmailChage = (event) => setEmail(event.target.value);

    const handlePasswordChage = (event) => setPassword(event.target.value);

    return (
        // <form action="/authenticate" method="POST">
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label htmlFor="email">E-mail:</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={handleEmailChage}
                    inputMode="email"
                    // name="email"
                    autoComplete="username"
                />
            </fieldset>
            <fieldset>
                <label htmlFor="password">Senha:</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChage}
                    // name="password"
                    autoComplete="current-password"
                /> 
            </fieldset>
            <button type="submit">Entrar</button>
        </form>
    );
}
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

import React from 'react';

export default function Signin(){
    return (
        <form action="/authenticate" method="POST">
            <fieldset>
                <label for="email">E-mail:</label>
                <input id="email" type="email" inputmode="email" name="email" autocomplete="username" />
            </fieldset>
            <fieldset>
                <label for="password">Senha:</label>
                <input id="password" type="password" name="password" autocomplete="current-password" /> 
            </fieldset>
            <button type="submit">Entrar</button>
        </form>
    );
}
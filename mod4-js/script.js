console.log("Hello world!")

var myName = 'Fabio Medina';

console.log(myName);

let language = 'Javascript';

const pattern = 'ECMAScript';

// Atributo                | var | let | const |
// ---------------------------------------------
// Escopo Global           |  x  |     |       |
// Escopo Função           |  x  |  x  |   x   |
// Escopo Bloqueado        |     |  x  |   x   |
// Pode ser ressignificado |  x  |  x  |       |
// Pode ser redeclarado    |  x  |     |       |
// Pode ser hospedado      |  x  |     |       |

//hoisting
{
    var age = 32
}
console.log(age)

const myLastName = 'Medina'

console.log(myLastName)
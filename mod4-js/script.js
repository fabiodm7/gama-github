// console.log("Hello world!")

// var myName = 'Fabio Medina';

// console.log(myName);

// let language = 'Javascript';

// const pattern = 'ECMAScript';

// // Atributo                | var | let | const |
// // ---------------------------------------------
// // Escopo Global           |  x  |     |       |
// // Escopo Função           |  x  |  x  |   x   |
// // Escopo Bloqueado        |     |  x  |   x   |
// // Pode ser ressignificado |  x  |  x  |       |
// // Pode ser redeclarado    |  x  |     |       |
// // Pode ser hospedado      |  x  |     |       |

// //hoisting
// {
//     var age = 32
// }
// console.log(age)

// const myLastName = 'Medina'

// console.log(myLastName)

// Javascript é dinamicamente tipado
var myName = 'Fabio' //string
var age = 32 //number
var height = 1.58 //number

null //objeto vazio
undefined //objetvo não definido

var isStudent = false //boolean

// objeto, array e function
var person = {
    "name": "Fabio",
    "age": 32
}

var students = ["Fabio", "Maria", "Joao"]

function soma(a,b){
    return a+b
}

// operador typeof

console.log(typeof 32); //number
console.log(typeof age); //number
console.log(typeof isStudent);//boolean
console.log(typeof null);//object
console.log(typeof soma);//function
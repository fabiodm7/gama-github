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

// // Javascript é dinamicamente tipado
// var myName = 'Fabio' //string
// var age = 32 //number
// var height = 1.58 //number

// null //objeto vazio
// undefined //objetvo não definido

// var isStudent = false //boolean

// // objeto, array e function
// var person = {
//     "name": "Fabio",
//     "age": 32
// }

// var students = ["Fabio", "Maria", "Joao"]

// function soma(a,b){
//     return a+b
// }

// // operador typeof

// console.log(typeof 32); //number
// console.log(typeof age); //number
// console.log(typeof isStudent);//boolean
// console.log(typeof null);//object
// console.log(typeof soma);//function

// // operadores atirméticos
// // adição +
// var sumTwoNumber = 1 + 3
// console.log(sumTwoNumber)
// // subtração -
// var subTwoNumber = 1 - 3
// console.log(subTwoNumber)
// // multiplicação *
// var multTwoNumber = 1 * 3
// console.log(multTwoNumber)
// // divisão /
// var divTwoNumber = 1 / 3
// console.log(divTwoNumber)
// // módulo, resto da divisão %
// var modTwoNumber = 1 % 3
// console.log(modTwoNumber)
// // incremento ++
// var incremento = 1
// console.log(++incremento)
// // decremento --
// var decremento = 2
// console.log(--decremento)

// // operadores de atribuição
// // = atribuição
// // += atribuição de soma
// var x = 1, y = 3
// console.log(x += y)
// // -= atribuição de subtração
// console.log(x -= y)
// // *= atribuição de multiplicação
// console.log(x *= y)
// // /= atribuição de divisão
// console.log(x /= y)
// // %= atribuição de módulo
// console.log(x %= y)

// // operadores de comparação
// // == comparação de valores
// // === coparação de valores e tipos
// // != diferença entre valores
// // < ou <= menor ou menorIgual
// // > ou >= maior ou maiorIgual

// // operadores lógicos
// // e &&
// // ou ||
// // negação !

// // condicionais if, else if, switch

// var num = 5

// if (num === 1){
//     console.log("num é igual a 1")
// } else if(num === 2){
//     console.log("num é igual 2")
// } else {
//     console.log("não é 1 nem 2")
// }

// var mes = "janeiro"

// switch (mes) {
//     case "fevereiro":
//         console.log("mes 2")
//         break
//     case "março":
//         console.log("mes 1")
//         break
//     case "janeiro":
//         console.log("mes 1")
//         break
//     default:
//         console.log("nenhum atendido")
// }

// // repetição for, while, do while
// var colors = ["black","white","yellow","green","blue"];

// for (var i = 0; i < colors.length; i++){
//     console.log(colors[i])
// }

// for (var i = 0; i < 10; i++){
//     console.log(i);
// }

// for (var i = 1; i <= 10; i++){
//     console.log(i);
// }

// var i = 0;
// while (1 < 10) {
//     console.log(i);
//     i++;
// }

// var i = 1;
// while (1 <= 10) {
//     console.log(i);
//     i++;
// }

// var i = 1;
// do {
//     console.log(i);
//     i++;
// } while ( i < 10 );

// // funções
// function sayHello(){
//     console.log("Hello");
// }

// sayHello();

// function sayHello2(name, lastName){
//     console.log("Hello " + name + " " + lastName);
// }

// sayHello2();
// sayHello2("Fabio", "Medina");

// function sum(a,b){
//     return a + b;
// }

// console.log(sum(40,60));

// classes
class Book {
    constructor(title, author,pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    read(){
        return `Estou lendo ${this.title} de ${this.author}`
    }
}

let book = new Book('Algoritmos para viver', 'Brian', 500);
console.log(book);
console.log(book.read());

let otherBook = new Book('Um fulano','beltrano',100);
console.log(book,otherBook);

class ITBook extends Book{
    constructor(title, author, pages,technology){
        super(title, author, pages);
        this.technology = technology;
    }
}

let itBook = new ITBook('Algoritmos para viver', 'Brian', 500,'Algoritmos')
console.log(itBook.read());

class Person {
    constructor(name){
        this._name = name;
    }

    get name(){
        return this._name;
    }

    set name(value){
        this._name = value;
    }
}

let person = new Person('Fabio');
person.name = 'Medina';
console.log(person.name);
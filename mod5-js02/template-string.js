// // Interpolação
// "Fabio é"
// let role = "bom demais" 

// console.log(`Fabio é ${role}`)

// Operador ternário da

// // if...else...
// let id = 17
// function calculaIdade(idade){
//     if (idade >= 18){
//         return 'pode beber'
//     } else {
//         return 'não pode beber'
//     }
// }
// // ===
// function calculaIdade2(idade){
//     return idade >= 18 ? 'pode beber' : 'não pode beber'
// }

// console.log(calculaIdade(id))
// console.log(calculaIdade2(id))

// Arrow functions
// para funções anonimas ou funções de callback, funções utilizadas como parâmetros

function soma(a,b){
    return a + b
}

console.log(soma(3,5)) //8

// ===

const soma2 = (num1,num2) => num1 + num2

const sayHello = name => `Hello ${name}`

console.log(sayHello('Fabio'))
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

// // Arrow functions
// // para funções anonimas ou funções de callback, funções utilizadas como parâmetros

// function soma(a,b){
//     return a + b
// }

// console.log(soma(3,5)) //8

// // ===

// const soma2 = (num1,num2) => num1 + num2

// const sayHello = name => `Hello ${name}`

// console.log(sayHello('Fabio'))

// // Arrays, Spread & métodos
// const alunasGama = ["Paula","Maria","Estela","Clara"]

// // acessar informações num array
// console.log(alunasGama[2]) //Estela

// // operador spread (...)
// const alunasXp = [...alunasGama,"Simara"]

// console.log(alunasXp)

// // Métodos de iteração
// for (let i = 0; i < alunasXp.length; i++) {
//     console.log(alunasXp[i])
// }

// // Map
// alunasXp.map(aluna => console.log(aluna))

// // Filter
// const numeros = [34,45,67,90,55,76]

// const numerosImpares = numeros.filter(numero => numero % 2 != 0)
// console.log(numerosImpares)

// const numerosPares = numeros.filter(numero => numero % 2 == 0)
// console.log(numerosPares)

// // Sort
// const numerosOrdenadosCrescente = numeros.sort()
// console.log(numerosOrdenadosCrescente)

// const numerosOrdenadosDecrescente = numeros.sort((a,b) => b-a)
// console.log(numerosOrdenadosDecrescente)

// // Reduce
// // Reduz a array a um resultado de uma operação matemática
// const numbers = [1,34,35]

// const soma = numbers.reduce((valorAnterior,valorAtual) => {
//     return valorAnterior + valorAtual
// },0) //75

// console.log(soma)

// // Objetos Destructuring
// const pessoa = {
//     nome: "Fabio",
//     idade: 31,
//     cidade: "Sao Paulo"
// }

// // notação de ponto
// console.log(pessoa.nome) //Fabio

// // notação de colchetes
// console.log(pessoa["idade"]) //31

// // Desestruturar objetos
// const {nome,idade,cidade} = pessoa
// console.log(nome)
// console.log(idade)
// console.log(cidade)

// const filmes = [
//     {
//         id:'1',
//         titulo: 'teste 1',
//         descricao: 'bla bla bla bla bla',
//         duracao: 120
//     },
//     {
//         id:'2',
//         titulo: 'teste 2',
//         descricao: 'ble ble ble ble ble',
//         duracao: 120
//     },
//     {
//         id:'3',
//         titulo: 'teste 3',
//         descricao: 'bli bli bli bli bli',
//         duracao: 120
//     }
// ]

// const [{id,titulo,descricao,duracao}] = filmes

// filmes.map(filme => console.log(filme.descricao))

// SPA, PWA e Webcomponents
// SPA - Single pages applications
// não renderiza a página inteira, apenas partes Dilema
// angular, react são js based

// PWA - Programming web apps
// experiência de navegador como aplicativo
// aproveita grande parte do código em JS

// Webcomponents
// códigos menores, modulares e reutilizáveis
// custom elements
// shadow down
// html templates
// html imports


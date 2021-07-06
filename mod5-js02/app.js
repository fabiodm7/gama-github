const livros = require('./database')
//console.log(livros)

// input
const readline = require('readline-sync')
const entradaInicial = readline.question('Deseja buscar um livro? (s/N)')

// se for sim, mostra as categorias e qual ela escolhe
function categorias(livros){
    let categ = []
    for (let i = 0; i < livros.length; i++){
        categ.push(livros[i].categoria)
    }
    
    categ = categ.sort()
    for (let i = 1; i <categ.length; i++){
        if (categ[i] == categ[i - 1]){
            categ.pop(i)
        }
    }

    return categ
}

if (entradaInicial.toLocaleUpperCase() === 'S'){
    console.log('Essas são as categorias disponíveis: ')
    const categ = categorias(livros)
    for (let i = 0; i < categ.length; i++){
        console.log(`+ ${categ[i]}`)
    }

    const entradaCategoria = readline.question('Qual categoria voce escolhe: ')
    const retorno = livros.filter(livro => livro.categoria.toUpperCase() === entradaCategoria.toLocaleUpperCase())

    console.table(retorno)
} else {
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
    console.log('Esses são todos os livros disponíveis: ')
    console.table(livrosOrdenados)
}

// se for não, mostra todos os livros em ordem de qtd. de páginas 
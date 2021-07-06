// // Interpolação
// "Fabio é"
// let role = "bom demais" 

// console.log(`Fabio é ${role}`)

// Operador ternário da

// if...else...
let id = 17
function calculaIdade(idade){
    if (idade >= 18){
        return 'pode beber'
    } else {
        return 'não pode beber'
    }
}
// ===
function calculaIdade2(idade){
    return idade >= 18 ? 'pode beber' : 'não pode beber'
}

console.log(calculaIdade(id))
console.log(calculaIdade2(id))
var elementos = [];
var topo = -1;
const max = 10;

function push(num){
    if (topo < max){
        topo += 1
        elementos[topo] = num;
    }
    else {
        console.log("pilha cheia")
    }
}

function pop(){
    if (topo != -1){
        let num = elementos[topo];
        topo -= 1
        return num
    }
    else{
        console.log("pilha vazia")
    }
}

function estaVazia(){
    return topo === -1;
}

//-------- código que usa a pilha

push(10);
push(20);
push(30);
console.log(elementos);
console.log(pop());
console.log(pop());
console.log(pop());

var numDecimal = 10;
var resto;

while (numDecimal != 0){
    resto = parseInt(numDecimal % 2);
    push(resto);
    numDecimal = parseInt(numDecimal / 2);
}

while (!estaVazia){
    console.log(pop());
}
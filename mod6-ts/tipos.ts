// booleab
const contaPaga: boolean = false;


// number
const idade: number = 23;
const avalicao: number = 4.5;

// string
const nome: string = 'Fabio Medina';

// array
const idades: number[] = [23,28,45,32,45];
const idades2: Array<number> = [23,28,45,32,45];

// tuple
let jogadores: [string,string,string];
jogadores = ['fabio','duarte','medina'];

// enum
enum StatusAprovacao {
    Aprovado = '001',
    Pendente = '002',
    Rejeitado = '003',
}
const statusAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

// any
const retornoApi: any = [123,'Fabio',false];
const retornoApi2: any = {
    //.......
};

// void
function printarNaTela(msg: string): void{
    console.log(msg);
    // não tem retorno
}

// null e undefined
const u: undefined = undefined;
const n: null = null;

// object
function criar (objeto:object){
    //...
}
//criar('fabio')// erro pois não rece string
criar({
    nome: 'fabio',
})

// never
function loopInfinito(): never{
    while(true){}
}

function erro(mensagem:string):never{
    throw new Error(mensagem);
}

function falha(){
    return erro('Algo falhou');
}

// union types
const notas: number | string = 5;
function exibibeNota(nota: number | string | boolean){
    console.log(`A nota é ${nota}`)
}

// alias
type Funcionario = {
    nome: string,
    sobrenome:string,
    dataNascimento: Date,
}
//type Funcionarios = Array<string>;
const funcionarios: Funcionario[] = [
    {
        nome:'fabio',
        sobrenome:'medina',
        dataNascimento: new Date()
    },
    {
        nome:'stephanie',
        sobrenome:'medina',
        dataNascimento: new Date()
    }
]
function tratarFuncionarios(funcionarios: Funcionario[]){
    for(let funcionario of funcionarios){
        console.log('Nome do funcionário: ',funcionario.nome)
    }
}

// valores nulos ou opcionais
let altura: number | null = 1.6;
altura = null;

type Contato = {
    nome: string,
    telefone1: string,
    telefone2?: string, // ? define o campo opcional
}

const contato: Contato = {
    nome: 'fabio',
    telefone1: '12345768',
    //telefone2: '2313241',
}

// Assertion
const minhaIdade: any = 23;
//(minhaIdade as number).toString();
<number>minhaIdade.toString();

const input = document.getElementById("numero1") as HTMLInputElement;
console.log(input.value);

const input2 = <HTMLInputElement>document.getElementById("numero1");
console.log(input.value);
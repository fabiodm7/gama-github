// booleab
var contaPaga = false;
// number
var idade = 23;
var avalicao = 4.5;
// string
var nome = 'Fabio Medina';
// array
var idades = [23, 28, 45, 32, 45];
var idades2 = [23, 28, 45, 32, 45];
// tuple
var jogadores;
jogadores = ['fabio', 'duarte', 'medina'];
// enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
var statusAprovacao = StatusAprovacao.Aprovado;
// any
var retornoApi = [123, 'Fabio', false];
var retornoApi2 = {
//.......
};
// void
function printarNaTela(msg) {
    console.log(msg);
    // não tem retorno
}
// null e undefined
var u = undefined;
var n = null;
// object
function criar(objeto) {
    //...
}
//criar('fabio')// erro pois não rece string
criar({
    nome: 'fabio'
});
// never
function loopInfinito() {
    while (true) { }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro('Algo falhou');
}
// union types
var notas = 5;
function exibibeNota(nota) {
    console.log("A nota \u00E9 " + nota);
}
//type Funcionarios = Array<string>;
var funcionarios = [
    {
        nome: 'fabio',
        sobrenome: 'medina',
        dataNascimento: new Date()
    },
    {
        nome: 'stephanie',
        sobrenome: 'medina',
        dataNascimento: new Date()
    }
];
function tratarFuncionarios(funcionarios) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario = funcionarios_1[_i];
        console.log('Nome do funcionário: ', funcionario.nome);
    }
}
// valores nulos ou opcionais
var altura = 1.6;
altura = null;
var contato = {
    nome: 'fabio',
    telefone1: '12345768'
};
// Assertion
var minhaIdade = 23;
//(minhaIdade as number).toString();
minhaIdade.toString();
var input = document.getElementById("numero1");
console.log(input.value);
var input2 = document.getElementById("numero1");
console.log(input.value);

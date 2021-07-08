var Data = /** @class */ (function () {
    // public dia: number;
    // //private mes: number;
    // mes: number;
    // ano: number;
    function Data(dia, mes, ano) {
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
        // this.dia = dia;
        // this.mes = mes;
        // this.ano = ano;
    }
    return Data;
}());
var data = new Data(1, 1, 2020);
console.log(data.dia);
console.log(data.mes);
var data2 = new Data(1, 1);
//typescript playground

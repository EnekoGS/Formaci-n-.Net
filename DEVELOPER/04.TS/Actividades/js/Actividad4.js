"use strict";
class cuentaCorriente {
    constructor(titular, saldo, interes) {
        this.titular = titular;
        this.saldo = saldo;
        this.interes = interes;
    }
    setTitular(titular) {
        this.titular = titular;
    }
    setSaldo(saldo) {
        this.saldo = saldo;
    }
    setInteres(interes) {
        this.interes = interes;
    }
    getTitular() {
        return this.titular;
    }
    getSaldo() {
        return this.saldo;
    }
    getInteres() {
        return this.saldo;
    }
    getInteresMensual() {
        return this.saldo * (this.interes / 100) / 12;
    }
    getInteresAnual() {
        return this.saldo * this.interes / 100;
    }
}
let intereses = new cuentaCorriente('cuenta corriente de Andrés', 600, 25);
intereses.setSaldo(700);
console.log('Interés mensual:', intereses.getInteresMensual());
console.log('Interés anual:', intereses.getInteresAnual());
//# sourceMappingURL=Actividad4.js.map
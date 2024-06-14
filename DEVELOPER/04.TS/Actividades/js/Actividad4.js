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
class cuentaNomina extends cuentaCorriente {
    constructor(titular, saldo, interes, interesAdicional) {
        super(titular, saldo, interes);
        this.interesAdicional = 0;
        this.interesAdicional = interesAdicional;
    }
    setInteresAdicional(interesAdicional) {
        this.interesAdicional = interesAdicional;
    }
    getInteresAdicional() {
        return this.interesAdicional;
    }
    getInteresMensualNomina() {
        return this.saldo * (this.interesAdicional + this.interes) / 100 / 12;
    }
    getInteresAnualNomina() {
        return this.saldo * (this.interesAdicional + this.interes) / 10;
    }
}
let intereses = new cuentaCorriente('cuenta corriente de Andrés', 600, 25);
intereses.setSaldo(700);
console.log('Interés mensual:', intereses.getInteresMensual());
console.log('Interés anual:', intereses.getInteresAnual());
let nominas = new cuentaNomina('cuenta nómina de Juanito', 500, 20, 5);
console.log('Nómina mensual: ', nominas.getInteresMensualNomina());
console.log('Nómina anual: ', nominas.getInteresAnualNomina());
//# sourceMappingURL=Actividad4.js.map
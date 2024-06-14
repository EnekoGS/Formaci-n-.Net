class cuentaCorriente {
    // Propiedades:
    protected titular: string;
    protected saldo: number;
    protected interes: number; // Este es un porcentaje

    // Constructor:
    constructor(titular: string, saldo: number, interes: number){
        this.titular = titular;
        this.saldo = saldo;
        this. interes = interes;
    }

    // Métodos:

    // SET
    public setTitular(titular: string): void{
        this.titular = titular;
    }
    public setSaldo(saldo: number): void{
        this.saldo = saldo;
    }
    public setInteres(interes: number): void{
        this.interes = interes;
    }
    // GET
    public getTitular(): string {
        return this.titular;
    }
    public getSaldo(): number {
        return this.saldo;
    }
    public getInteres(): number {
        return this.saldo;
    }
    // Métodos "Especiales":

    // getInteresMensual => saldo*(interes/100)/12
    public getInteresMensual(): number {
        return this.saldo * (this.interes / 100) / 12;
    }
    // getInteresAnual => saldo*(interes/100)
    public getInteresAnual(): number {
        return this.saldo * this.interes / 100;
    }
}

// "cuentaNomina" que extiende de "cuentaCorriente"
class cuentaNomina extends cuentaCorriente {
    private interesAdicional: number = 0;

    // Constructor
    constructor(titular: string, saldo: number, interes: number, interesAdicional: number) {
        super(titular, saldo, interes); // super llama al constructor de la clase superior
        this.interesAdicional = interesAdicional;
    }

    // SET
    public setInteresAdicional(interesAdicional: number): void {
        this.interesAdicional = interesAdicional;
    }
    // GET
    public getInteresAdicional(): number {
        return this.interesAdicional;
    }

    // getInteresMensualNomina: saldo *(interesAdicional+interes) /100 /12
    public getInteresMensualNomina(): number {
        return this.saldo * (this.interesAdicional + this.interes) / 100 / 12;
    }
    // getInteresAnualNomina: saldo *(interesAdicional+ interés) / 10
    public getInteresAnualNomina(): number {
        return this.saldo * (this.interesAdicional + this.interes) / 10;
    }
}
//-------------------------------------------------------------
let intereses = new cuentaCorriente('cuenta corriente de Andrés', 600, 25);
intereses.setSaldo(700);
console.log('Interés mensual:', intereses.getInteresMensual());
console.log('Interés anual:', intereses.getInteresAnual());
//-------------------------------------------------------------
let nominas = new cuentaNomina('cuenta nómina de Juanito', 500, 20, 5);
console.log('Nómina mensual: ', nominas.getInteresMensualNomina());
console.log('Nómina anual: ', nominas.getInteresAnualNomina());


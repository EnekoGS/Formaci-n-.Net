class cuentaCorriente {
    // Propiedades:
    private titular: string;
    private saldo: number;
    private interes: number; // Este es un porcentaje

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
let intereses = new cuentaCorriente('cuenta corriente de Andrés', 600, 25);
intereses.setSaldo(700);
console.log('Interés mensual:', intereses.getInteresMensual());
console.log('Interés anual:', intereses.getInteresAnual());
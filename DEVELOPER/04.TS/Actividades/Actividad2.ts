// Creamos dos tuplas:
// Creamos la constante "tuplaProducto1" y "tuplaProducto2":
const tuplaProducto1: [string, number, boolean] = ['Portatil MSI', 650, false];
const tuplaProducto2: [string, number, boolean] = ['Portatil DELL', 250, true];
// Creamos un Array para introducir las dos tuplas:
const ArrayTuplas: [string, number, boolean][] = [];
ArrayTuplas.push(tuplaProducto1);
ArrayTuplas.push(tuplaProducto2);
// Y llamamos el Array por consola
console.log(ArrayTuplas);

// ENUMERACIONES:

// Creamos una enumeración con diferentes tipos de IVA:
enum IVA {
    superreducido = 0.04,
    reducido = 0.10,
    general = 0.21
}

// Aplicamos una constante al IVA general sobre un importe de 1000:

let Importe = 1000 * IVA.general

console.log(`El importe del producto de 1000 euros es de ${Importe}`);

// Función con RETURN:
function calcularIvaGeneral(ImporteIVA: number): number {
    return IVA.general * ImporteIVA;
}
const resultadoIVA = calcularIvaGeneral(2000);
console.log(`El IVA general es de ${resultadoIVA}`);

// Función con VOID:
function calcularIvaGeneralVoid(ImporteIVAVoid: number): void {
    console.log('El IVA general es de ' + IVA.general * ImporteIVAVoid);
}
calcularIvaGeneralVoid(3000);
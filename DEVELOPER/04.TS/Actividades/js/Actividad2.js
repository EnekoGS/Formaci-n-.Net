"use strict";
const tuplaProducto1 = ['Portatil MSI', 650, false];
const tuplaProducto2 = ['Portatil DELL', 250, true];
const ArrayTuplas = [];
ArrayTuplas.push(tuplaProducto1);
ArrayTuplas.push(tuplaProducto2);
console.log(ArrayTuplas);
var IVA;
(function (IVA) {
    IVA[IVA["superreducido"] = 0.04] = "superreducido";
    IVA[IVA["reducido"] = 0.1] = "reducido";
    IVA[IVA["general"] = 0.21] = "general";
})(IVA || (IVA = {}));
let Importe = 1000 * IVA.general;
console.log(`El importe del producto de 1000 euros es de ${Importe}`);
function calcularIvaGeneral(ImporteIVA) {
    return IVA.general * ImporteIVA;
}
const resultadoIVA = calcularIvaGeneral(2000);
console.log(`El IVA general es de ${resultadoIVA}`);
function calcularIvaGeneralVoid(ImporteIVAVoid) {
    console.log('El IVA general es de ' + IVA.general * ImporteIVAVoid);
}
calcularIvaGeneralVoid(3000);
//# sourceMappingURL=Actividad2.js.map
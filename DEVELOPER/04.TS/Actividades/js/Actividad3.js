"use strict";
function calcularNumeroPotencia(numero, exponente) {
    return Math.pow(numero, exponente);
}
;
const resultadoPotencia = calcularNumeroPotencia(8, 3);
console.log(`El resultado es ${resultadoPotencia}`);
function calcularNumeroPotenciaOpcional(numero, exponente) {
    if (exponente === undefined) {
        return numero;
    }
    else {
        return Math.pow(numero, exponente);
    }
}
;
const resultadoOpcional1 = calcularNumeroPotenciaOpcional(32, 2);
const resultadoOpcional2 = calcularNumeroPotenciaOpcional(21);
console.log('El resultado es ' + resultadoOpcional1);
console.log('El resultado es ' + resultadoOpcional2);
function calcularNumeroPotenciaPorDefecto(numero, exponente = 3) {
    return (`${numero} elevado a ${exponente} es ` + Math.pow(numero, exponente));
}
console.log(calcularNumeroPotenciaPorDefecto(2));
//# sourceMappingURL=Actividad3.js.map
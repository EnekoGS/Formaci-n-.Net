

// PARTE 1:

// Agregamos los parámetros numero y exponente con valor numérico:
function calcularNumeroPotencia(numero: number, exponente: number): number {
    return Math.pow(numero, exponente); // Mat.pow() => permite hacer operaciones de números elevados a un exponente.
};
// Introducimos los valores de ambos parámetros
const resultadoPotencia = calcularNumeroPotencia(8, 3);
// Llamamos la respuesta por consola
console.log(`El resultado es ${resultadoPotencia}`);

// PARTE 2:

function calcularNumeroPotenciaOpcional(numero: number, exponente?: number): number {
    if (exponente===undefined){
        return numero
    }
    else{
        return Math.pow(numero, exponente);
    }
};

const resultadoOpcional1 = calcularNumeroPotenciaOpcional(32, 2);
const resultadoOpcional2 = calcularNumeroPotenciaOpcional(21);

console.log('El resultado es '+ resultadoOpcional1);
console.log('El resultado es '+ resultadoOpcional2);

// PARTE 3:

function calcularNumeroPotenciaPorDefecto (numero: number, exponente: number = 3): string {
    return (`${numero} elevado a ${exponente} es ` + Math.pow(numero, exponente))
}

console.log(calcularNumeroPotenciaPorDefecto(2))
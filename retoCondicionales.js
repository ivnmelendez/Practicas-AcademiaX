// 1. Imprime si un usuario es mayor o menor de edad.
let edad = 18;
if (edad < 18) {
    console.log('Eres menor de edad.');
} else {
    console.log('Eres mayor de edad.');    
};
console.log("------------------");

// 2. De acuerdo a la acción ingresada "crear, colocar, actualizar y borrar" se imprima que acción se realizará.
let accion = 'crear';
switch (accion) {
    case 'crear':
        console.log('La accion es crear.');
        break;
    case 'colocar':
        console.log('La accion es colocar.');
        break;
    case 'colocar':
        console.log('La accion es actualizar.');
        break;
    case 'colocar':
        console.log('La accion es borrar.');
        break;
    default:
        console.log('Opcion invalida');
        break;
};
console.log("------------------");

// 3. Si un número es par o impar.
let numero = 17;
if (numero % 2 === 0) {
    console.log('El numero ingresado es par.');
} else {
    console.log('El numero ingresado es impar.');
};

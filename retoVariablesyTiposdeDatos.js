const nombre = 'Ivan';
const saludo = '¡Hola Mundo!';
console.log(`${saludo} soy ${nombre}`);
console.log('Mi nombre en mayusculas es: ' + nombre.toUpperCase());
console.log('Mi nombre en minusculas es: ' + nombre.toLowerCase());

const caracteres = saludo.length;
console.log(`El mensaje de ${saludo} tiene ${caracteres} caracteres.`);

let array = [1,2,3,4,5];
console.log(`El tercer numero del array con los valores '${array}' es: ` + array[2]);

array.push(6);
console.log(`Se añade el numero que sigue en orden al final del arreglo y es: ` + array[array.length - 1]);

let texto = 'La lluvia en Sevilla es una maravilla';
let regex = /Lluvia/i;
let resultado = texto.match(regex);
console.log(`Se encontro el patron 'lluvia'en el texto '${texto}', por lo que el resultado es: ${resultado}`);
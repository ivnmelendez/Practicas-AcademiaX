let uno = 1;
let dos = 2;
let texto1 = 'texto 1';
let texto2 = 'texto 2';
let objeto1 = {nombre: 'Ivan'};
let objeto2 = {apellidos: 'Melendez Mendez'};

console.log(`¿El numero ${uno} es mayor que el numero ${dos}? ` + !(uno > dos));
console.log(`¿El numero ${uno} es menor que el numero ${dos}? ` + !(uno < dos));
console.log(`¿El numero ${uno} es igual al numero ${dos}? ` + (uno === dos));
console.log(`¿El texto ${texto1} es igual al ${texto2}? ` + (texto1 === texto2));
console.log(`¿Los objetos son iguales? ` + (objeto1 === objeto2));
console.log('AND logico: ' + (uno === dos && uno === 1));
console.log('OR logico: ' + (uno === uno || uno === 2));
console.log('La suma de 10 + 3: ' + (10 + 3));
console.log('La multiplicacion de 10 * 3: ' + (10 * 3));
console.log('La division de 10 / 3: ' + (10/3));
console.log('10 modulo de 3: ' + (10%3));
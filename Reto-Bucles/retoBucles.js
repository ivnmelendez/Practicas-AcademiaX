// 1. Imprime los números del 1 al 5.
for(i = 1; i <= 5; i++){
    console.log(i);
};
console.log("------------------");

// 2. Recorre una lista de colores.
const lista = ['rojo', 'verde', 'azul', 'amarillo'];
for (const colores of lista) {
    console.log(colores);
};
console.log("------------------");

//  3. Recorre las propiedades de un objeto persona.
const usuario = {
    nombre: 'Maria',
    edad: 27,
    profesion: 'diseñadora'
};
for (const key in usuario) {
    console.log(`${key}:`,usuario[key]);
}
console.log("------------------");

// 4. Encuentra el número más cercano al cuadrado de 100.
let num = 1;
while (num * num < 100) {
    num++;
}
console.log(`El numero mas cercano a 100 cuyo cudrado es menor a 100 es: ${num}`);

console.log("------------------");

// 5. Imprime los números pares hasta el 10, imprimiendo al menos uno.
let pares = 0;
do {
    pares += 2;
    console.log(pares);
} while (pares < 10);
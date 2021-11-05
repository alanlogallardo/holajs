'use strict' // modo estricto para programar con buenas practicas

// imprime en pantalla
console.log('Hola mundo desde Node.js, esto se vera en la terminal de comandos');

// hacemos una operacion basica
console.log(2 * 5);

// alutulizar una instruccion de js frontend manda error en node js
//console.log(window);

// imprime en consola todo lo relacionado con el modulo GLOBAL
console.log(global);

// realizamos una funcion para imprimir cada segundo 'hola nodejs'
setInterval(() => {
  console.log('hola nodejs');
}, 1000);
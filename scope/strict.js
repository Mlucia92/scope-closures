// Usamos el modo estricto para ver que nuestro código cumpla con el mayor de los estándares. 
// No funcionará la variable porque no se declara automáticamente. 

'use strict';
pi = 3.1416;
console.log(pi);

function myFunction () {
    'use strict';
    return pi = 3.1416;
}

console.log(myFunction());


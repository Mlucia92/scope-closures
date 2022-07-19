// variables

var a; //declarando
var b = 'b'; // designando y declarando
b = 'bb'; // reasignar el valor que tiene
var a = 'aa'; //redeclaración 

// Global scope: cualquier variable en nuestro documento serán variables globales. Se asignan al iniciar el documento o en cualquier sector fuera de las funciones. 
// En JS los objetos y las funciones también son variables. 

var fruit = 'apple';
function bestFruit () {
    console.log(fruit);
}

bestFruit();

// La siguiente función que se está asignando es una variable global también por lo tanto se puede acceder de forma global. 

function countries() {
    country = 'Colombia'; // asignación 
    console.log(country);
}

countries();


// En la nueva actualización se crearon las variables 'let' y 'const' y así nace el concepto de block scope. 
// No podrán ser usadas fuera del bloque en donde fueron declaradas. Se recomienda el uso de estas porque tienen más control sobre las variables. 

function fruits() {
    if (true) {
        var fruit1 = 'apple'; //function scope
        let fruit2 = 'kiwi'; //block scope
        const fruit3 ='banana'; //block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();
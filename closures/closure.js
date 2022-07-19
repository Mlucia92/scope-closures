// Tienes un closure cuando una variable es accedida por una función fuera de su contexto. 
// Ámbito léxico: cada una de las funciones anidadas tienen acceso a la información de las funciones padre. 

const myGlobal = 0;

function myFunction(){
    const myNumber = 1;
    console.log(myGlobal);

    function parent(){
        const inner = 2;
        console.log(myNumber, myGlobal);

    
        function child(){
            console.log(inner, myNumber, myGlobal); // función interna
        }

        return child()
    }

    return parent();
}

myFunction();

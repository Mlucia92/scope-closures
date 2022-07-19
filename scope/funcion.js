// Las variables de esta función será posible acceder dentro de esa función y de las funciones anidadas dentro de esta función. 
// No es una variable global

function greeting() {
    let userName = 'Ana'; 
    console.log(userName);
  
    if (userName === 'Ana') {
      console.log(`Hello ${userName}!`)
    }
  
  }
  
  greeting();
  console.log(userName);
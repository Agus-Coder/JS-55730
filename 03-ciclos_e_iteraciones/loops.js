// ------ Ciclos, bucles ------ //

// ------ Ciclo FOR ------ //

// Estructura, "Anatomia", del ciclo FOR:
/* 

for(desde; hasta; actualizar){
    // el ciclo sirve para hacer algo N veces
    //codigo a ejecutar en cada iteracion del ciclo

}

*/

// primer ejemplo:
// let i=10

// for (i; i>=5; i-=2) {
//   alert("Esta es la alerta Numero: " + i);
// }

// // Vamos a analizar un ejemplo un poco mas completo:

// for (let i = 3; i <= 6; i++) {

// //   if (i == 4) break;

// //   if (i == 4) continue;

//   console.log("Estamos en la repeticion Numero" + " " + i);
//   console.log("Hagamos un poco de matematica!");

//   let ejemplo = parseInt(prompt("Dame un numero por favor"));

//   // una cuenta que cambia en cada vuelta
//   let resultado1 = ejemplo + i;

//   console.log(ejemplo + "+ repeticion numero " + i + ":" + resultado1);

//   let cuadrado = i * i;

//   console.log(
//     "El numero de repeticion, multiplicado por si mismo es: " + cuadrado
//   );
// }



// ------ Ciclo WHILE ------ //
// Estructura, "Anatomia", del ciclo WHILE:



//Estructura incorrecta y mal educada
// ------ ERROR GRAVE!!! ------ //

/*

let condicion = true

while (condicion){
    // Codigo a ejecutar MIENTRAS la condicion sea verdadera
}

*/


// Estructura correcta, bien caballera y de fina presentacion

/*

let ingreso = prompt("Desea ingresar? (si/no) (1/0) (Afirmativo, negativo)")

while (igreso === "afirmativo"){

    // codigo a ejecutar mientras la condicion sea verdadera

    ingreso = prompt("Desea repetir el proceso")   ----> Tenemos que volver a solicitar la variable de ingreso al final del ciclo
}

*/

// let entramos = parseInt(prompt("Ingrese 1 para entrar, 0 para no entrar"))

// while (entramos == 1){
//     alert("estamos adentro de un while!")
//     alert("un universo de aventuras infinitas nos aguarda...")
//     alert("porque no nos aseguramos de volver a preguntar")
//     entramos = parseInt(prompt("Quieres volver a entrar? 1 para si, 0 para no"))

//     if (entramos == 0){
//     alert("Hemos escapado del gran vacio, un while incorrecto nos hubiera consumido en el infinito. Hasta luego joven astronauta")
//     }
// }




// ------ Ciclo DO...WHILE ------ //

// Estructura, "Anatomia", del ciclo DO...WHILE:
/*

do{
    // codigo a ejecutar
}while( condicion )

*/

// La diferencia importante con el codigo anterior es que este ciclo se ejecutara AL MENOS una vez!

// let entramos = 0

// do {
//     alert("estamos adentro de un do while!")
//     alert("Podemos tener una pequenia muestra de lo que sucederia")
//     alert("Si no configuramos correctamente la salida")
//     entramos = parseInt(prompt("Ya tuviste una visita gratis! Queres volver a entrar? 1 para si, 0 para no"))

//     if (entramos == 0){
//     alert("Hemos escapado del gran vacio, un while incorrecto nos hubiera consumido en el infinito. Hasta luego joven astronauta")
//     }
// } while (entramos === 1);

// // Otro ejemplo, un pequenio ejercicio para revisar entre todos

// // Hay una pequenia trampa!

// let final = '';
// let i = 0;

// do {
//   i = i + 1;
//   final = final + i;
//   console.log(final);
// } while (i < 5);

// console.log(final); // que se va a imprimir en consola?



// ------ SWITCH ------ //

let eleccion = prompt(`ingrese una de las siguientes opciones: \n 1-mostrar una alert\n2-mostrar un prompt\n3-mostrar algo en la consola`)

switch (eleccion) {
    case "1":
        alert("Ha ingresado la primer opcion! Soy una alerta. ALERTA! No hay mas chocolates")        
        break;
    case "2":
        prompt("Ha ingresado la segunda opcion! Soy una Prompt. Pero todavia no hay chocolates")
        break;
    case "3":
        console.log("Ha ingresado la tercer opcion! Ud. esta viendo esto en consola mientras se lamenta por no comprar chocolates")
        break;
    default:
        alert("No ha elegido opciones correctas. Le recuerdo que el chocolate blanco no es chocolate. Hasta luego")
        break;
}
// Hablar algun ejemplo real sobre condiciones



// ------ Valores Booleanos ------ //

// Representan un tipo de dato utilizado en TODOS los lenguajes de programacion
// La computadora los usa, justamente, para saber que hacer, o bien, como suceden las cosas

let verdadero = true;
let falso = false;


  

// ------ Estructura IF ------ //

if (condicion){
    // Codigo a ejecutar si "condicion" es verdadera
    // Si "condicion" es falsa, entonces no se ejecuta
}



// Ejemplo



// Si es un dia de calor
if (calor) {
  console.log("Este codigo se ejecuta! Y decimos: ");
  console.log("Apaguen la calefacción! Me estoy asando!");
}

// Si es un dia frio
if (frio) {
  console.log("Este codigo se ejecuta! Y decimos: ");
  console.log("Enciendan la calefacción! ");
}




// ------ Operadores de comparacion ------ //

let botonLuz = "Encendido";

console.log(botonLuz === "Apagado");
console.log(botonLuz == "Encendido");

/* Escribir codigo junto a los alumnos */




// ------ Multiples If else ------ //


if (frio) {
  console.log("Este codigo se ejecuta! Y decimos: ");
  console.log("Enciendan la calefacción! ");
} else {
  console.log("Nop, no hace frio");
}




// ------  if else if ------ //



if (frio) {

  console.log("Este codigo se ejecuta! Y decimos: ");
  console.log("Enciendan la calefacción! ");

  if (calor){
    console.log("Tengo fiebre ");
  }

}



// ------ Valores Booleanos ------ //

// OJO! No confundir valores declarados como booleanos en si mismos, con resultados de comparaciones
// ejemplo, la variablea continuacion "universo" es verdadera porque es declarada verdadera

let universo = true;

// el siguiente caso, la variable "galaxia" es falsa porque LA COMPARACION es falsa

let galaxia = 33 < 7;

// pues 33 no es menor que 3

if (galaxia) {
  console.log("LA TIERRA ES PLANA!");
} else if (universo) {
  console.log("Nop, la tierra es casi esférica");
}



// ------ Operadores && y || ------ //

// tengo vacaciones y tengo ahorros?
// Entonces: Me voy de viaje: Si? No?

let voyAViajar

let tengoVacaciones = true
let notengoVacaciones = false

let tengoAhorros = true
let notengoAhorros = false

voyAViajar = tengoVacaciones && tengoAhorros;
console.log(voyAViajar);

voyAViajar = notengoVacaciones && tengoAhorros;
console.log(voyAViajar);

voyAViajar = notengoVacaciones && notengoAhorros;
console.log(voyAViajar);




// Tengo chocolate o helado?
// Tengo entonces postre?

let comemosPostre

let tengoChocolate = true
let notengoChocolate = false

let tengoHelado = true
let notengoHelado = false

comemosPostre = tengoChocolate || notengoHelado;
console.log(comemosPostre);

comemosPostre = notengoChocolate || tengoHelado;
console.log(comemosPostre);

comemosPostre = notengoChocolate || notengoHelado;
console.log(comemosPostre);






// ------ Operador != (distinto) ------ //

// Es un operador que evalua si algo es distinto a otro algo
// por ejemplo, las manzanas, sin distintas a las zanahorias?

let manzana = "manzana"
let zanahoria = "zanahoria"

console.log(manzana != zanahoria); // Verdadero

// Ejemplo con frio y calor

let frio = false;
let calor = false;

if (frio != true && calor == true) {
  console.log("Encendamos el ventilador!");
} else if (frio != true && calor != true) {
  console.log("Estamos bien");
} else if (frio == true && calor != true) {
  console.log("Pasame la bufanda!");
} else {
  console.log("Tengo una fiebre que me vuela");
}

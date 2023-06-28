// Hablar algun ejemplo real sobre condiciones



// ------ Valores Booleanos ------ //

// Representan un tipo de dato utilizado en TODOS los lenguajes de programacion
// La computadora los usa, justamente, para saber que hacer, o bien, como suceden las cosas

let verdadero = true;
let falso = false;



// ------ Estructura IF ------ //

/*

if (condicion){
    // Codigo a ejecutar si "condicion" es verdadera
    // Si "condicion" es falsa, entonces no se ejecuta
}

*/

// Ejemplo

let frio = false;

if (frio) {
  console.log("Este codigo se ejecuta! Y decimos: ");
  console.log("Enciendan la calefacción! ");
}



// ------ Operadores de comparacion ------ //

let botonLuz = "Encendido";

//console.log(botonLuz == "Apagado");
//console.log(botonLuz == "Encendido");



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
} else if (calor) {
  console.log("Nop, no hace frio, y ademas, hace calor");
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
  console.log("Nop, la tierra es esférica");
}



// ------ Operadores && y || ------ //

// tengo vacaciones y tengo ahorros?
// Entonces: Me voy de viaje: Si? No?

let pruebaDeVerdad_1 = verdadero && falso;
console.log(pruebaDeVerdad_1);

let pruebaDeVerdad_2 = verdadero && verdadero;
console.log(pruebaDeVerdad_2);

let pruebaDeVerdad_3 = falso && verdadero;
console.log(pruebaDeVerdad_3);

// Tengo chocolate o helado?
// Tengo entonces postre?

let pruebaDeVerdad_4 = verdadero || verdadero;
console.log(pruebaDeVerdad_4);

let pruebaDeVerdad_5 = verdadero || falso;
console.log(pruebaDeVerdad_5);

let pruebaDeVerdad_6 = falso || falso;
console.log(pruebaDeVerdad_6);



// ------ Operador != (distinto) ------ //

// Es un operador que evalua si algo es distinto a otro algo
// por ejemplo, las manzanas, sin distintas a las zanahorias?

let manzana = "manzana"
let zanahoria = "zanahoria"

console.log(manzana =! zanahoria); // Verdadero

// Ejemplo con frio y calor

if (frio != true && calor == true) {
  console.log("Encendamos el ventilador!");
} else if (frio != true && calor != true) {
  console.log("Estamos bien");
} else if (frio == true && calor != true) {
  console.log("Pasame la bufanda!");
} else {
  console.log("Tengo una fiebre que me vuela");
}

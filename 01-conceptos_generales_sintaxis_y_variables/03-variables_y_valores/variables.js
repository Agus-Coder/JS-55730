// ------ Declaracion ------ //

let alto
let ancho
let profundidad

// ------ Asignacion ------ //

alto = 12.6
ancho = 22.3
profundidad = 43.8

// Las constantes se deben asignar cuando se declaran
// No se pueden modificar
const precioPintura = 10


// ------ Operaciones Basicas ------ //

let areaPared = alto*ancho
let todasLasAreas = areaPared*4
let total = todasLasAreas*precioPintura

console.log("Esto que estoy escribiendo lo vamos a ver en la consola")
console.log(total)

// ------ Otros Ejemplos ------ //
let name = "Pintadores"
let adj = "Espaciales"
const espacio = " "

let oracion = name + espacio + adj

console.log(oracion)
let answer = prompt("Desea iniciar la aventura? (si/no)").toLowerCase();

while (answer === "si") {
  // Introduccion
  alert("Bienvenido a la mini aventura!");

  // Preguntamos el nombre y saludamos
  let nombreJugador = prompt("Como te llamas?");

  alert(
    `Hola!, ${nombreJugador}! Te encuentras en los caminos. Tu aventura esta por empezar.`
  );

  // Primera Eleccion
  let eleccion1 = prompt(
    "Queres ir a la izquierda o a la derecha?"
  ).toLowerCase();

  if (eleccion1 === "izquierda") {
    // Segunda eleccion
    let eleccion11 = prompt(
      "Caminas por la izquierda y encuentras una cueva. Quieres entrar? (si/no)"
    ).toLowerCase();

    if (eleccion11 === "si") {
      // Entrando en la cueva
      alert("Entras en la cueva, un lugar misterioso y de mucha oscuridad");

      // Loop para desafios en la caverna
      for (let desafio = 1; desafio <= 3; desafio++) {
        let rta = prompt(
          `Desafio ${desafio}: Queres avanzar o volver? (avanzar/volver)`
        ).toLowerCase();

        if (rta === "avanzar") {
          // Elegimos avanzar
          alert(
            `Superaste el desafio ${desafio} y continuas aventurandote en las profundidades de la caverna...`
          );
          if (desafio == 3) {
            alert(
              "Felicidades! Superaste todos los desafios y encontraste un tesoro al final de la cueva. Ganaste!"
            );
          }
        } else if (rta === "volver") {
          // Volvemos!
          alert(
            "Decides volver y abandonar la caverna para seguir explorando!"
          );
          break; // para salir del loop
        } else {
          // Respuesta no valida
          alert(
            "Respuesta no valida, por favor, ingresar 'avanzar' o 'volver'"
          );
          desafio--; // Para re iniciar las aventuras
        }
      }
    } else if (eleccion11 === "no") {
      // Por no entrar en la cueva...
      alert(
        "Decides no entrar a la cueva y continuar tu camino. Sigue explorando!"
      );
    } else {
      // Eleccion no valida!
      alert("por favor, ingresa 'si' o 'no'");
    }
  } else if (eleccion1 === "derecha") {
    // segunda eleccion
    let eleccion21 = prompt(
      "Encuentras un temible Dragon! Quieres luchar contra el o huir? (luchar/huir)"
    ).toLowerCase();

    if (eleccion21 === "luchar") {
      // Vamos a luchar

      let meComio = false;

      while (!meComio) {
        let combate = prompt(
          "Reunes todo tu corage y te enfrentas al dragon. Primero atacas o te defendes? (atacar/defender)"
        ).toLowerCase();

        if (combate === "atacar") {
          alert("Has atacado al dragon, pero aun sigue vivo! Vuelve a elegir!");
          console.log("atacando");
        }

        if (combate === "defender") {
          alert("El dragon te ha comido! Este es el fin de la aventura");
          console.log("defendiendo");
          meComio = true;
        }
      }
    } else if (eleccion21 === "huir") {
      // Corre Forest!
      alert(
        "Te das la vuelta y corres TAN RAPIDO COMO PUEDES!!! Tienes suerte, el dragon te ha ignorado."
      );
    } else {
      // Nop, no valido
      alert("No valido, por favor, ingresar 'luchar' o 'huir'.");
    }
  } else {
    // Noooop, error!
    alert("Seleccion no valida. Por favor, ingresa 'izquierda' o 'derecha'.");
  }

  // Adios!
  alert("Gracias por jugar Javascripters!");

  answer = prompt(
    "Desea iniciar la aventura nuevamente? (si/no)"
  ).toLowerCase();
}

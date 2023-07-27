
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
      "Caminas por la izqquierda y encuentras una cueva. Quieres entrar? (si/no)"
    ).toLowerCase();

    if (eleccion11 === "si") {
      // Entrando en la cueva
      alert(
        "Entras en la cueva y encontras un cofre lleno de oro! Felicidaes, has ganado!"
      );
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
      alert(
        "Reunes todo tu corage, te enfrentas y logras vencer al dragon! La gente de los alrededores te aplaude y agradece."
      );
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
// run `node index.js` in the terminal

let miModuloRevelador = (function () {
  let nombre = "Juan Ramos",
      saludo = "Hola !";

  // Función privada
  function imprimirNombre() {
      console.log("Nombre:" + nombre);
  }

  // Función pública
  function asignarNombre(nuevoNombre) {
      nombre = nuevoNombre;
  }

  // Revelar accesos públicos (opcionalmente con otros nombres)
  return {
      setName: asignarNombre,
      imprime: imprimirNombre,
      greeting: saludo
  };
})();
console.log(miModuloRevelador.greeting);
console.log(miModuloRevelador.imprime());
miModuloRevelador.setName('Mario');
console.log(miModuloRevelador.imprime());
miModuloRevelador.greeting = 'Otro hola';
console.log(miModuloRevelador.greeting);



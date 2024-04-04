const { leer, registrar } = require("./operaciones.js");

const [operaciones, nombre, edad, tipo, color, enfermedad] =
  process.argv.slice(2);

if (operaciones === "registrar") {
  if (!nombre || !edad || !tipo || !color || !enfermedad) {
    console.log("rellena todos los datos");
  } else {
    registrar(nombre, edad, tipo, color, enfermedad);
  }
} else if (operaciones === "leer") {
  leer();
} else {
  console.log("escribe una operacion válida");
}

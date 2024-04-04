const { leer, registrar } = require("./operaciones.js");

const [nombre, edad, tipo, color, enfermedad] = process.argv.slice(2);

registrar(nombre, edad, tipo, color, enfermedad);

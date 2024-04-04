const fs = require("node:fs");

const registrar = (nombre, edad, tipo, color, enfermedad) => {
  const animales = JSON.parse(fs.readFileSync("./citas.json", "utf-8"));
  animales.push({ nombre, edad, tipo, color, enfermedad });
  fs.writeFileSync("./citas.json", JSON.stringify(animales));
};

const leer = () => {
  const leyendo = JSON.parse(fs.readFileSync("./citas.json", "utf-8"));
  console.log(leyendo);
};

module.exports = { leer, registrar };

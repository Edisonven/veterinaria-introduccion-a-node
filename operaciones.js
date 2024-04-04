const fs = require("fs");

const registrar = (nombre, edad, tipo, color, enfermedad) => {
  try {
    const animales = JSON.parse(fs.readFileSync("./citas.json", "utf-8"));
    animales.push({ nombre, edad, tipo, color, enfermedad });
    fs.writeFileSync("./citas.json", JSON.stringify(animales));
  } catch (error) {
    console.error("Error al escribir en el archivo:", error);
  }
};

const leer = () => {
  try {
    const leyendo = JSON.parse(fs.readFileSync("./citas.json", "utf-8"));
    console.log(leyendo);
  } catch (error) {
    console.error("Error al leer el archivo:", error);
  }
};

module.exports = { leer, registrar };

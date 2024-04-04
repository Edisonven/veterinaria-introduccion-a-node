const fs = require("fs");

const registrar = (nombre, edad, tipo, color, enfermedad) => {
  try {
    const animales = JSON.parse(fs.readFileSync("./citas.json", "utf-8"));
    animales.push({ nombre, edad, tipo, color, enfermedad });
    fs.writeFileSync("./citas.json", JSON.stringify(animales));
  } catch (error) {
    console.log(error);
  }
};

/* registrar(nombre, edad, tipo, color, enfermedad); */

const leer = () => {
  try {
    const leyendo = JSON.parse(fs.readFileSync("./citas.json", "utf-8"));
    console.log(leyendo);
  } catch (error) {
    console.log(error);
  }
};

leer();

const data = process.argv.slice(2);
console.log(data);

module.exports = { leer, registrar };

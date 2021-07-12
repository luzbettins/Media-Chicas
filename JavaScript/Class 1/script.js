//  Clase 1 JS: Variables

//Este es un comentario de una sola línea

// Variables

let nombre = "Luz";
let apellido = "Bettin";
let edad = 23;
let tienesMascotas = true;

console.log(nombre, apellido, edad, tienesMascotas);

//Objetos literales

let persona = {
  nombre: "Liz",
  edad: 20,
  familiares: [],
};

console.log(persona);

persona.apellido = "Organa";
console.log(persona);

persona.edad = persona.edad + 1;
persona.familiares.push("Han");
console.log(persona);

persona.familiares.push("Luke", "Kylo");
persona.comidasFavoritas = ["tarta", "pizza"];
console.log(persona);

//Array de objetos
let personas = [
  {
    nombre: "Leia",
    edad: 20,
  },
  {
    nombre: "Luke",
    edad: 20,
  },
];

console.log(personas);

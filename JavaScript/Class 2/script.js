// Clase 2 JS: Funciones

//Definir funciones
function saludar(nombre, apellido, pais) {
  console.log(
    "Hola " + "mi nombre es " + nombre + " " + apellido + " " + "soy de " + pais
  );
}

//Invocar funciones
saludar("luz", "bettin", "colombia");

//Valores de retorno
function multiplicar(num1, num2) {
  let num3 = 10;
  return (num1 + num2) * num3;
}

let resultado = multiplicar(2, 5);
console.log("El resultado es: " + resultado);

function getLargoNombre(nombre) {
  let largoNombre = nombre.length;
  return largoNombre;
}

let tamaño = getLargoNombre("luz");
console.log(tamaño);

//Scope
{
  //Entre llaves indicamos que es un bloque de código

  //var - mala práctica
  var a = "Soy una variable VAR dentro de un bloque de código";
  var a = 5; //Se puede re declarar una variable
  a = 5;

  //let - buena práctica
  let b = "Soy una variable LET dentro de un bloque de código";
  //let b = 6; //No se puede redeclarar, JS nos va a avisar que hay un error.
  b = 4; //Se puede reasignar un valor
  console.log(b); //Sólo se pueden usar en el ámbito local, a menos que estén declaradas globalmente.

  //const - sólo cuando sea un valor que no tiene que cambiar
  const c = 12;
  // c = 13; Una constante no se puede ni redeclarar ni reasignar
}

console.log(a); //Funciona. Las variables declaradas con var funcionan fuera del bloque.

//console.log(b); //No fuciona. Las variables declaradas con let son locales.

//DOM
let encabezado = document.querySelector("h1"); //Del objeto document usamos el método querySelector para buscar un elemento en el DOM
console.log(encabezado.innerText); //Del objeto HTMLElement vemos el valor de la propiedad innerText

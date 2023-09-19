// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";
  // Más info de forEach => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  array.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", (e) => {
  // Escribe tu solución aquí
  
 // Se crea una constante la cual toma el array, lo filtra con una función, retornando solo strings.
 const result = strangeArray.filter(function (el) {
  return typeof el === 'string';
});
 
// Se ordena de forma alfabética, utilizando toLowerCase para convertir las mayúsculas en minúsculas.
result.sort(function (a,b) {
  a = a.toLowerCase();
  b = b.toLowerCase();
  if (a == b) {
    return 0;
  }
  if (a < b) {
    return -1;
  }
  return 1;
});

// Sugerencia de cómo mostrar el array => showList(strangeArray);
  showList(result);
});

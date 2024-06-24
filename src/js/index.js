// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

/*
         DOM EVENTOS


const buttonElement = document.getElementById('button');
const printClick = event => {
  console.log(event);
};
buttonElement.addEventListener('click', printClick);

const viewScroll = event => {
  console.log(event);
};

window.addEventListener('scroll', viewScroll);



*/

// # Ejercicios

// ## EVENTOS

// - Crea un botón en tu página HTML y añade un evento de click que muestre en la consola el texto del botón al hacer click.
const buttonElement = document.getElementById('button');
const printClick = () => console.log(buttonElement.textContent);
buttonElement.addEventListener('click', printClick);

// - Crea un h1 con el texto "Soy un título ", al ponerte con el ratón encima del h1, deberá cambiar al texto a "Quita de encima!!!" y al quitarte, deberá volver a poner "Soy un título"
const h1Element = document.getElementById('title');

const originalTitleString = h1Element.textContent;

const changeTitleHover = () => (h1Element.textContent = 'Quita de encima');

const originalTitle = () => (h1Element.textContent = originalTitleString);

h1Element.addEventListener('mouseover', changeTitleHover);
h1Element.addEventListener('mouseout', originalTitle);
// - Agrega un evento de cambio de tamaño de ventana y te muestre por consola el tamaño de la ventana.

const resizeWindow = () => console.log(`Tamaño pantalla: ${window.innerWidth} x ${window.innerHeight}`);

window.addEventListener('resize', resizeWindow);

// - Crea un p con el texto "esperando entrada de teclado" al pulsar cualquier tecla deberá poner qué tecla has pulsado.
const pElement = document.getElementById('text');
const oririnalPString = pElement.textContent;

const keyDownButton = ev => (pElement.textContent = `Has pulsado ${ev.key}`);
const keyUpButton = () => (pElement.textContent = oririnalPString);

window.addEventListener('keydown', keyDownButton);
window.addEventListener('keyup', keyUpButton);

// - Crea un array con 5 palabras. Añade un h2 a tu HTML y ponle un id. Añade dos botones con el texto previus y next respectívamente. Haz que los botones cambien el texto del h2 con las palabras del array, cuando llegues a la última volverás a la primera si pulsas next y cuando estés en la primera podrás volver a la última dandole a previous.

// const h2Element = document.getElementById('titleH2');
// const previusElement = document.getElementById('previous');
// const nextElement = document.getElementById('next');

// const setWords = ['hola', 'perro', 'gato', 'laura', 'carlos'];
// let i = 0;
// h2Element.textContent = setWords[i];

// const changeText = () => (h2Element.textContent = setWords[i]);

// const nextWord = () => {
//   i >= setWords.length - 1 ? (i = 0) : i++;
//   changeText();
// };

// const previuosWord = () => {
//   i <= 0 ? setWords.length - 1 : i--;
//   changeText();
// };

// previusElement.addEventListener('click', previuosWord);
// nextElement.addEventListener('click', nextWord);

// - Repite el mismo ejercicio pero esta vez desactiva el botón previous si estás en el primer elemento y el botón next si estás en el último

const h2Element = document.getElementById('titleH2');
const previusElement = document.getElementById('previous');
const nextElement = document.getElementById('next');

const setWords = ['hola', 'perro', 'gato', 'laura', 'carlos'];
let i = 0;
previusElement.disabled = true;
h2Element.textContent = setWords[i];

const changeText = () => (h2Element.textContent = setWords[i]);

const nextWord = () => {
  i++;

  if (i === setWords.length - 1) nextElement.disabled = true;
  else previusElement.disabled = false;
  changeText();
};

const previuosWord = () => {
  i--;

  if (i === 0) previusElement.disabled = true;
  else nextElement.disabled = false;
  changeText();
};

previusElement.addEventListener('click', previuosWord);
nextElement.addEventListener('click', nextWord);

// - Crea un input range con un label, al mover el input range deberá escribir en el label el valor del input range.

const rangeInputElement = document.getElementById('rangeInput');
const rangeValueElement = document.getElementById('rangeValue');

const RangeInput = () => {
  rangeValueElement.textContent = rangeInputElement.value;
};

rangeInputElement.addEventListener('input', RangeInput);
// - Crea una lista de 4 checkbox con el texto que quieras y un botón, al pulsar el botón deberá decirte cuantos checkbox están marcados y cual es su texto.

const checkbuttonElement = document.getElementById('check-button');
const resultElement = document.getElementById('checkbox-info');

const getCheckboxInfo = () => {
  const inputsElements = document.querySelectorAll('input:checked');
  let resultText = `Están marcados ${inputsElements.length} inputs: `;
  inputsElements.forEach(input => (resultText += input.value + ', '));

  resultElement.textContent = resultText;
};

checkbuttonElement.addEventListener('click', getCheckboxInfo);

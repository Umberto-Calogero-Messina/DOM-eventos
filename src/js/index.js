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
const printClick = () => {
  console.log('Click');
};
buttonElement.addEventListener('click', printClick);

// - Crea un h1 con el texto "Soy un título ", al ponerte con el ratón encima del h1, deberá cambiar al texto a "Quita de encima!!!" y al quitarte, deberá volver a poner "Soy un título"
const h1Element = document.getElementById('titulo');

const originalTitleString = h1Element.textContent;

const changeTitle = () => {
  h1Element.textContent = 'Quita de encima';
};

const originalTitle = () => {
  h1Element.textContent = originalTitleString;
};

h1Element.addEventListener('mouseover', changeTitle);
h1Element.addEventListener('mouseout', originalTitle);
// - Agrega un evento de cambio de tamaño de ventana y te muestre por consola el tamaño de la ventana.

const resizeWindow = () => {
  console.log(`Tamaño pantalla: ${window.innerWidth} x ${window.innerHeight}`);
};

window.addEventListener('resize', resizeWindow);

// - Crea un p con el texto "esperando entrada de teclado" al pulsar cualquier tecla deberá poner qué tecla has pulsado.
const pElement = document.getElementById('text');

const keyPressButton = ev => {
  pElement.textContent = `Ha pulsado ${ev.key}`;
};

window.addEventListener('keydown', keyPressButton);

// - Crea un array con 5 palabras. Añade un h2 a tu HTML y ponle un id. Añade dos botones con el texto previus y next respectívamente. Haz que los botones cambien el texto del h2 con las palabras del array, cuando llegues a la última volverás a la primera si pulsas next y cuando estés en la primera podrás volver a la última dandole a previous.

// const h2Element = document.getElementById('tituloH2');
// const previusElement = document.getElementById('previous');
// const nextElement = document.getElementById('next');

// const setWords = ['hola', 'perro', 'gato', 'laura', 'carlos'];
// let i = 0;
// h2Element.textContent = setWords[i];

// const nextWord = () => {
//   if (i >= setWords.length - 1) i = 0;
//   else i++;
//   h2Element.textContent = setWords[i];
// };

// const previuosWord = () => {
//   if (i <= 0) i = setWords.length - 1;
//   else i--;
//   h2Element.textContent = setWords[i];
// };

// previusElement.addEventListener('click', previuosWord);
// nextElement.addEventListener('click', nextWord);

// - Repite el mismo ejercicio pero esta vez desactiva el botón previous si estás en el primer elemento y el botón next si estás en el último
const h2Element = document.getElementById('tituloH2');
const previusElement = document.getElementById('previous');
const nextElement = document.getElementById('next');

const setWords = ['hola', 'perro', 'gato', 'laura', 'carlos'];
let i = 0;
previusElement.disabled = true;
h2Element.textContent = setWords[i];

const nextWord = () => {
  if (i < setWords.length - 1) {
    i++;
    previusElement.disabled = false;
  }
  if (i >= setWords.length - 1) {
    nextElement.disabled = true;
  }
  h2Element.textContent = setWords[i];
};

const previuosWord = () => {
  if (i > 0) {
    i--;
    nextElement.disabled = false;
  }
  if (i <= 0) {
    previusElement.disabled = true;
  }
  h2Element.textContent = setWords[i];
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

const checkElement = document.getElementById('checkButton');
const checkInput = () => {
  const checkboxesElement = document.querySelectorAll('.checkbox-item');
  let checkedCount = 0;
  let checkedTexts = [];

  checkboxesElement.forEach(checkbox => {
    if (checkbox.checked) {
      checkedCount++;
      checkedTexts.push(checkbox.value);
    }
  });

  const resultDivElement = document.getElementById('result');
  if (checkedCount > 0) {
    resultDivElement.textContent = `Has marcado ${checkedCount} checkbox: ${checkedTexts.join(', ')}`;
  } else {
    resultDivElement.textContent = 'No has marcado ningún checkbox.';
  }
};

checkElement.addEventListener('click', checkInput);

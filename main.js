'use strict'

let oneHorse = '';
let idHorse = '';
let startTime = 0;

for (let i = 2; i <= 5; i++) {
  idHorse = 'horse1_' + (i - 1);
  oneHorse = document.getElementById(idHorse);
  oneHorse.classList.remove('track-divs');
  oneHorse.classList.add('blank');

  idHorse = 'horse1_' + i;
  oneHorse = document.getElementById(idHorse);
  oneHorse.classList.add('track-divs');

  setTimeout(()=> {console.log('Pausa'+ i); }, 1000);
  }
  



//   setTimeout(function () {

// }, 3000);

  




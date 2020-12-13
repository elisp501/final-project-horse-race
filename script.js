'use strict'
// --------------------------------------- Pagina 1 ---------------------------------------
let horseAmount = 4;

function addNumber() {
    //horseAmount = Number(document.getElementById("how-many-horses").value);
    console.log(horseAmount);
    document.getElementById("page1").classList.remove('display-block');
    document.getElementById("page1").classList.add('display-none');
    document.getElementById("page2").classList.remove('display-none');
    document.getElementById("page2").classList.add('display-block');
}

// --------------------------------------- Pagina 2 ---------------------------------------
// Definición de variables

let oHorse1 = '';
let oHorse2 = '';
let oHorse3 = '';
let oHorse4 = '';
let chosenHorses = [];

// Clase de cada uno de los caballos.
class Horse {
    constructor(name, weight, breed, speed, gambles, image, gif) {
        this.pName = name;
        this.pWeight = weight;
        this.pBreed = breed;
        this.pSpeed = speed;
        this.pGambles = gambles;
        this.pArrivalTime = 0;
        this.pImage = image;
        this.pGif = gif;
    }
    // Método (Función) para determinar la velocidad de cada caballo.
    timeRace(timeIni, timefin) {
        return (Math.random() * timefin) + timeIni + 's';
    }
}

// Instanciar el objeto para cada uno de los caballos
oHorse1 = new Horse('Cinamon', '824 kg', 'Caballo Árabe', '92 km/h', ['j', 'h', 'j'], "", "./styles/images/horse1.gif");
oHorse2 = new Horse('Champ', '930 kg', 'Purasangre', '88 km/h', ['b', 'l', 'd'], "", "./styles/images/horse2.gif");
oHorse3 = new Horse('Autum', '727 kg', 'Shire', '100 km/h', ['j', 'h', 'j'], "", "./styles/images/horse3.gif");
oHorse4 = new Horse('Rapunzel', '922 kg', 'Caballo Andaluz', '89 km/h', ['b', 'l', 'd'], "", "./styles/images/horse4.gif");


// Insertar información de los objetos
// Caballo 1
document.getElementById("idName1").innerHTML = oHorse1.pName;
document.getElementById("idWeightH1").innerHTML = oHorse1.pWeight;
document.getElementById("idBreedH1").innerHTML = oHorse1.pBreed;
document.getElementById("idSpeedH1").innerHTML = oHorse1.pSpeed;

// Caballo 2
document.getElementById("idName2").innerHTML = oHorse2.pName;
document.getElementById("idWeightH2").innerHTML = oHorse2.pWeight;
document.getElementById("idBreedH2").innerHTML = oHorse2.pBreed;
document.getElementById("idSpeedH2").innerHTML = oHorse2.pSpeed;

// Caballo 3
document.getElementById("idName3").innerHTML = oHorse3.pName;
document.getElementById("idWeightH3").innerHTML = oHorse3.pWeight;
document.getElementById("idBreedH3").innerHTML = oHorse3.pBreed;
document.getElementById("idSpeedH3").innerHTML = oHorse3.pSpeed;

// Caballo 4
document.getElementById("idName4").innerHTML = oHorse4.pName;
document.getElementById("idWeightH4").innerHTML = oHorse4.pWeight;
document.getElementById("idBreedH4").innerHTML = oHorse4.pBreed;
document.getElementById("idSpeedH4").innerHTML = oHorse4.pSpeed;

// Elegir un caballo
function chooseHorse1() {
    document.getElementById("betOnHorse1").classList.remove('btn-disabled');
    chosenHorses.push(oHorse1);
    console.log(chosenHorses)
}
function chooseHorse2() {
    document.getElementById("betOnHorse2").classList.remove('btn-disabled');
    chosenHorses.push(oHorse2);
    console.log(chosenHorses)
}
function chooseHorse3() {
    document.getElementById("betOnHorse3").classList.remove('btn-disabled');
    chosenHorses.push(oHorse3);
    console.log(chosenHorses)
}
function chooseHorse4() {
    document.getElementById("betOnHorse4").classList.remove('btn-disabled');
    chosenHorses.push(oHorse4);
    console.log(chosenHorses)
}

// Botón para siguiente página
function goToTracks() {
    document.getElementById("page2").classList.remove('display-block');
    document.getElementById("page2").classList.add('display-none');
    document.getElementById("page3").classList.remove('display-none');
    document.getElementById("page3").classList.add('display-block');
}

// --------------------------------------- Pagina 3 ---------------------------------------

// Definición de variables
let arrival = [];

function fstartButton() {
    fhowManyHorses(horseAmount);
    document.getElementById("startButton").classList.add('display-none');
}

// Agregar los gifs a los objetos
document.getElementById("horse1").src = oHorse1.pGif;
document.getElementById("horse2").src = oHorse2.pGif;
document.getElementById("horse3").src = oHorse3.pGif;
document.getElementById("horse4").src = oHorse4.pGif;

// Aplicar velocidades

document.getElementById("horse1").style.animationDuration = oHorse1.timeRace(4, 7);
document.getElementById("horse2").style.animationDuration = oHorse2.timeRace(4, 7);
document.getElementById("horse3").style.animationDuration = oHorse3.timeRace(4, 7);
document.getElementById("horse4").style.animationDuration = oHorse4.timeRace(4, 7);

// Inicio del programa

function fhowManyHorses(num) {
    // Hacer visible cada uno de los caballos.
    document.querySelector(".all-tracks-hidden").style.display = 'block';
    if (num >= 1) {
        document.getElementById("track1").classList.remove('track-hidden');
        document.getElementById("track1").classList.add('track-active');
    }
    if (num >= 2) {
        document.getElementById("track2").classList.remove('track-hidden');
        document.getElementById("track2").classList.add('track-active');
    }
    if (num >= 3) {
        document.getElementById("track3").classList.remove('track-hidden');
        document.getElementById("track3").classList.add('track-active');
    }
    if (num >= 4) {
        document.getElementById("track4").classList.remove('track-hidden');
        document.getElementById("track4").classList.add('track-active');
    }
}

document.addEventListener('animationend', (infoEnd) => {
    let arrivalId = infoEnd.srcElement.id
    //arrival.push({'idHorse': arrivalId, 'time': infoEnd.elapsedTime});
    switch (arrivalId) {
        case 'horse1':
            document.getElementById("horse1").classList.add('horse-hidden');
            oHorse1.pArrivalTime = infoEnd.elapsedTime.toFixed(2);
            arrival.push(oHorse1);
            break;
        case 'horse2':
            document.getElementById("horse2").classList.add('horse-hidden');
            oHorse2.pArrivalTime = infoEnd.elapsedTime.toFixed(2);
            arrival.push(oHorse2);
            break;
        case 'horse3':
            document.getElementById("horse3").classList.add('horse-hidden');
            oHorse3.pArrivalTime = infoEnd.elapsedTime.toFixed(2);
            arrival.push(oHorse3);
            break;
        case 'horse4':
            document.getElementById("horse4").classList.add('horse-hidden');
            oHorse4.pArrivalTime = infoEnd.elapsedTime.toFixed(2);
            arrival.push(oHorse4);
            break;

    }
    if (arrival.length === horseAmount) {
        document.getElementById("page3").classList.remove('display-block');
        document.getElementById("page3").classList.add('display-none');
        document.getElementById("winners").innerHTML = `<h1>Los ganadores son</h1>`
        arrival.forEach((eachHorse, i) => {
            //document.getElementById("winners").innerHTML += `<h2>Lugar # ${i+1}</h2> ${eachHorse.idHorse} con un tiempo de ${eachHorse.time.toFixed(2)} segundos</br>`
            document.getElementById("winners").innerHTML += `<h2>Lugar # ${i+1}</h2> ${eachHorse.pName} con un tiempo de ${eachHorse.pArrivalTime} segundos</br>`
        })
    }   
});

document.addEventListener('animationiteration', (infoEnd) => {
    console.log(infoEnd)
    console.log('=>' + document.getElementById("horse1").offsetLeft);
})




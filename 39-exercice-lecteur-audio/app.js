// SELECTIONNE LES ELEMENTS DU DOM
let titre = document.querySelector("h2");
let audio = document.querySelector("audio");
let precedent = document.querySelector(".precedent");
let play = document.querySelector(".play");
let suivant = document.querySelector(".suivant");

const listeAudio = [
    {
        nom :'Instrumentale 1',
        src : 'src/audio-1.mp3'
    },
    {
        nom :'Instrumentale 2',
        src : 'src/audio-2.mp3'
    },
    {
        nom :'Instrumentale 3',
        src : 'src/audio-3.mp3'
    },
    {
        nom :'Instrumentale 4',
        src : 'src/audio-4.mp3'
    }
]

// POUR LE BOUTON PRECEDENT 
precedent.addEventListener("click",() =>{
    
    console.log(audio);
   
})


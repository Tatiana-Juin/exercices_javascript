// SELECTIONNE LES ELEMENTS DU DOM
let titre = document.querySelector("h2");
let audio = document.querySelector("audio");
let precedent = document.querySelector(".precedent");
let play = document.querySelector(".play");
let suivant = document.querySelector(".suivant");

// const listeAudio = [
//     {
//         nom :'Instrumentale 1',
//         src : 'src/audio-1.mp3'
//     },
//     {
//         nom :'Instrumentale 2',
//         src : 'src/audio-2.mp3'
//     },
//     {
//         nom :'Instrumentale 3',
//         src : 'src/audio-3.mp3'
//     },
//     {
//         nom :'Instrumentale 4',
//         src : 'src/audio-4.mp3'
//     }
// ]

// POUR LE BOUTON PRECEDENT 
// precedent.addEventListener("click",() =>{
    
    // console.log(audio.src);
    // let audioSrc = audio.src;
    // if(audioSrc==="http://127.0.0.1:5500/39-exercice-lecteur-audio/src/audio-2.mp3") {

    //     audioSrc="";
    //     audioSrc = "http://127.0.0.1:5500/39-exercice-lecteur-audio/src/audio-1.mp3";
    //     console.log(audioSrc);

    // } else{
    //     if(audioSrc==="http://127.0.0.1:5500/39-exercice-lecteur-audio/src/audio-1.mp3"){
    //         audioSrc="";
    //         audioSrc = "http://127.0.0.1:5500/39-exercice-lecteur-audio/src/audio-3.mp3";
    //         console.log(audioSrc);
    //     }
    //     else{
    //         console.log(audioSrc); 
    //     }
    // }
    

  
// })

// initialisation de comptPred pour afficher les audio de manière décroissant
let comptePred = 5;

// fonction pour mettre la chanson précédente
function funcPrecedent(){
    // console.log("précédent"); 
    comptePred --;
    audio.setAttribute("src","src/audio-"+comptePred+".mp3");
    titre.innerText="";
    titre.innerText=`Instrumental ${comptePred}`;
    if(comptePred === 1){
        comptePred = 5;
    }
    console.log(audio);
    // console.log(titre);
}
// evenement au click sur le bouton précédent 
precedent.addEventListener("click",funcPrecedent);



// initialisation de compteSuivant pour afficher les audio de manière incrementer
let compteSuivant = 1;
// fonction pour mettre la chanson suivante
function funcSuivant(){
    // console.log("suivant");
    compteSuivant ++;
    audio.setAttribute("src","src/audio-"+compteSuivant+".mp3");
    titre.innerText="";
    titre.innerText=`Instrumental ${compteSuivant}`;

    if(compteSuivant===4){
        compteSuivant=0;
    }
    console.log(audio);
    // console.log(titre);
    
}
// evenement au click sur le bouton suivant 
suivant.addEventListener("click",funcSuivant);

// fonction permettant de lancer la chanson et de la mettre en pause
function funcPlay(){

    console.log("en marche ");

}
// evenement au click qui appelle la fonction funcPlay
play.addEventListener("click",funcPlay);
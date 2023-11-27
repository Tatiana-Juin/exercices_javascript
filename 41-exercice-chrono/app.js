// RECUPERER LES ELEMENT DU DOM
let temps = document.querySelector(".temps");
let play = document.querySelector(".play");
let pause = document.querySelector(".pause");
let reset = document.querySelector(".reset");

// FONCTION POUR LANCER LE CHRONO
function funcPlay(){

    console.log("play");
}

play.addEventListener("click",funcPlay);

// FONCTION POUR METTRE EN PAUSE LE CHRONO
function funcPause(){
    console.log("pause");
}
pause.addEventListener("click",funcPause);

// FONCTION POUR RESET LE CHRONO 
function funcReset(){
    console.log("reset");
}
reset.addEventListener("click",funcReset);
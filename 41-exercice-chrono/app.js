
// RECUPERER LES ELEMENT DU DOM

let lesMiliSeconde = document.querySelector(".miliSecondes");
let lesSeconde = document.querySelector(".secondes");
let play = document.querySelector(".play");
let pause = document.querySelector(".pause");
let reset = document.querySelector(".reset");
// on déclare la variable car on on va clear interval dans chaque fonction
let interval;
// VARIABLE INITIALISER
let miliSeconde = 00;
let seconde = 00; 

// FONCTION POUR LANCER LE CHRONO
function funcPlay() {
  clearInterval(interval);
  interval = setInterval(funcInterval, 10);
};
// EVENEMENT QUAND ON APPUYE SUR LE BOUTON  play
play.addEventListener("click",funcPlay);

// FONCTION POUR METTRE EN PAUSE LE CHRONO
function funcPause() {
  clearInterval(interval);
};
// APPELLE LA FONCTION funcPause() QUAND ON CLIQUE SUR LE BOUTON pause
pause.addEventListener("click",funcPause);

// FONCTION POUR RESET LE CHRONO 
function funcReset() {
  clearInterval(interval);
  // réinitialise la valeur des variable miliSeconde et seconde
  miliSeconde = "00";
  seconde = "00";
  // On affiche le résultat
  lesMiliSeconde.innerHTML = miliSeconde;
  lesSeconde.innerHTML = seconde; 
};
// APPELLE DE LA FONCTION funcReset QUAND ON CLIQUE SUR LE BOUTON RESET 
reset.addEventListener("click",funcReset);

// FONCTION POUR LES INTERVAL 
function funcInterval(){
  // incremente les miliseconde
  miliSeconde++;

  //si les miliSeconde sont inferieur a 10
  if (miliSeconde <= 9) {
      lesMiliSeconde.innerHTML = "0" + miliSeconde;
  }
  // si les miliSeconde sont supérieur a 9 alors pas de 0 devant 
  if(miliSeconde > 9 ){
      lesMiliSeconde.innerHTML = miliSeconde;
  }
  // Si les miliSeconde sont supérieur a 99 alors 
  if (miliSeconde > 99) {
      // incremente seconde
      seconde++;
      // on affiche seconde 
      lesSeconde.innerHTML = "0" + seconde;
      // on redefini la valeur de miliSeconde a 0
      miliSeconde = 0;
      //affiche seconde 
      lesMiliSeconde.innerHTML = "0" + 0;
    }
  // si seconde est supérieur a 9 on affiche seconde sans le 0
  if(seconde > 9){
      lesSeconde.innerHTML = seconde;
  }

}

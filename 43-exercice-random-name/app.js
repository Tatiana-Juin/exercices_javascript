// SELECTIONNER LES ELEMENT DU DOM 
let btn = document.querySelector(".btn");
let tirage = document.querySelector(".tirage");
let h2 = document.querySelector("h2");
let gagnant = document.querySelector(".gagnant");

// CREATION DU TABLEAU AVEC LES NOM ALEATOIRE 
let noms = [
    'Christopher',
    'Linda',
    'Maryame',
    'Josué',
    'Luna',
    'Clemence', 
    'Lucie',
    'Lucas',
    'Androo',
    'Mana',
    'Lorie',
    'Anne',
    'Valentina'
]

// FONCTION POUR LE TIRAGE AU SORT 
function tirageSort(){
    let rand = Math.floor(Math.random() * noms.length);
    let nomGagant = noms[rand];

    // POUR RENDRE VISIBLE LE H2 OU IL A ECRIS FELICITAION EN CHANGEANT LA VALEUR DE DISPLAY
    h2.style.display="block";

    // AFFICHE LE NOM DANS LE P
    gagnant.innerText="";
    gagnant.innerText=nomGagant;
    
}

// APPELLE DE L'EVENEMENT AU CLIC 
btn.addEventListener("click",tirageSort);

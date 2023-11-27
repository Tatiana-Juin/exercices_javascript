// SELECTIONNER LES ELEMENTS DU DOM
let horloge = document.querySelector(".horloge");
let p = document.querySelector(".heure");

// FONCTION POUR A
function funcHorloge(){
    // Déclaration d'un nouvelle objet date 
    let  date = new Date();

    // Pour récupérer l'heure
    let heure = date.getHours();

    // Pour récupérer les minutes
    let minute = date.getMinutes();

    // Pour récupérer les secondes
    let seconde = date.getSeconds();
    
    // Pour afficher un 0 devant le resultat quand les heures, les minutes, les seecondes sont inférieur a 10
     heure = (heure < 10) ? "0"+ heure : heure;
     minute = (minute < 10) ? "0"+minute : minute;
     seconde = (seconde < 10) ? "0"+seconde : seconde;

    // Pour récupéré l'heure actuelle avec les secondes
    let heureActuelle = `${heure} : ${minute} : ${seconde}`;
    // affiche a l'ecrans l'ehure actuelle
    p.innerText = heureActuelle;
   
}
// Pour afficher toute les seconde l'ehure actuelle
setInterval(funcHorloge,1000);
// Evenement quand l'élement a étais charger 
horloge.addEventListener("onload", funcHorloge)

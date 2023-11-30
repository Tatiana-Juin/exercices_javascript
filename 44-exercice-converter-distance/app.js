// RECUPERE LES ELEMENTS DU DOM 
let inpConvertir = document.querySelector("#convertir");
let resultat = document.querySelector("#resultat");

let uniteConvertir = document.querySelector("#unite");
let uniteResultat = document.querySelector("#resultatUnite");

/* 
    1 metre = 0,001 kilometre 
    1000 metre = 1 kilometre

    1metre = 100 centimetre
    0.01 metre = 1 centimetre 

    100 centimetre = 1kilometre 

    LA CONVERSION
    0,001 kilometre = 1 m 
    100 centimetre = 1metre 
    
    

*/


let valeurUniteConv = uniteConvertir.value;
let valeurUniteResult = uniteResultat.value;

function resultat(){
    
    // RECUPERE LES UNITES SELECTIONNERS
    let valeurUniteConv = uniteConvertir.value;
    let valeurUniteResult = uniteResultat.value;
    // console.log(`unite de depart ${valeurUniteConv} et unite de resultat ${valeurUniteResult}`);


}
// APPELLE DE LA FONCTION QUAND ON SAISI UN NB ET QU'ON APPUYE SUR ENTRE
inpConvertir.addEventListener("keyup", resultat);
// APPELLE DE LA FONCTION QUAND ON CHANGE D'UNITE POUR LA CONVERSION
uniteConvertir.addEventListener("change",resultat);
// APPELLE DE LA FONCTION QUAND ON CHANGE L'UNITE DU RESULTAT
uniteResultat.addEventListener("change",resultat);

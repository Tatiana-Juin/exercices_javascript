//`https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=20&srsearch=

let erreur = document.querySelector(".erreur");
let champRecherche = document.querySelector(".champ-recherche");
let resultat = document.querySelector(".resultat");
let form = document.querySelector(".recherche");

//appelle de API 
const API = "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=20&srsearch=";

//fonction asynchrone pour récuperer plusieurs donnée 
async function dataWikipedia(recherche){
    const reponse = await fetch(`${API}${recherche}`);
    const data = await reponse.json();
    // console.log(data["query"]['search']);
    affichage(data);
}
//appelle de la fonction asynchrone fonctionne
dataWikipedia("github");
function affichage(recherche){
    // console.log(recherche["query"]['search']);
    rechercheResult = recherche["query"]['search']
    // console.log(rechercheResult);
     for(i = 0; i< rechercheResult.length; i++){
        console.log(rechercheResult[i]);
     }
}
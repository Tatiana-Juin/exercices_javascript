

let erreur = document.querySelector(".erreur");
let inp = document.querySelector(".champ-recherche");
let resultat = document.querySelector(".resultat");
let form = document.querySelector(".recherche");

//appelle de API 
const API = "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=20&srsearch=";

//fonction asynchrone pour appeller API et récuperer des données
async function dataWikipedia(recherche){
    const reponse = await fetch(`${API}${recherche}`);
    const data = await reponse.json();
    // console.log(data["query"]['search']);
    // APPELLE DE LA FONCTION POUR AFFICHAGE 
    affichage(data);
}
//appelle de la fonction asynchrone fonctionne
// dataWikipedia("github");
function affichage(recherche){
    // POUR RECUPERER TOUTES LES REPONSES
    rechercheResult = recherche["query"]['search']
    // BOUCLE POUR AFFICHER LES REPONSES
     for(i = 0; i< rechercheResult.length; i++){
         
        // URL POUR AFFICHER L'ARTICLE    
        const url =  `https://en.wikipedia.org/?curid=${rechercheResult[i].pageid}`;

        // CREATION D'UNE NOUVELLE DIV 
        let nvCard = document.createElement("div");
        // NOUVELLE CLASS
         nvCard.className="affichageResult";
         nvCard.innerHTML=`
            <h2 class="resultat-titre"> 
                <a href=${url} target="_blank">${rechercheResult[i].title} </a>
            </h2>
            <p> ${rechercheResult[i].snippet} </p>
        `
        resultat.appendChild(nvCard);
        
     }
}

// FONCTION POUR RECUPERER CE QUI A ETAIT SAISIE 
form.addEventListener("click",(e) =>{
    e.preventDefault()
    
        if(inp.value.length > 0){
            
            // inp.value = "";
            erreur.textContent="";
            resultat.textContent="";
            dataWikipedia(inp.value);
        }
       
    
})
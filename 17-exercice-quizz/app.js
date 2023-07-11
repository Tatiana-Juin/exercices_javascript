//Recuperer les élements
let quizzForm = document.querySelector(".quizz-form");
let btnValider = document.querySelector("#btnValider");
let inputRep = document.querySelectorAll("input");
let resultat = document.querySelector(".resultat");
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let score = document.querySelector(".score");
let info = document.querySelector(".info");


//tableau avec les réponse
const res = ["b", "d", "c", "a", "c", "b"];

//evenement sur le bouton valider
btnValider.addEventListener("click",(e) =>{
    e.preventDefault();

    //on fait disparaitre le message valider pour voir le resultat
    h2.style.display = "none";

   //récupére tous les élements sélectionner par l'utilisateur 
   const toutLesBoutonsRadios = document.querySelectorAll("input[type='radio']:checked");
   //initialisation d'un tableau pour ajouter les réponses
   let rep = [];
   
   //recuperer les valeur choisie par l'utilisateur 
   for(let i = 0; i<toutLesBoutonsRadios.length;i++){ 
        //ajout des éléments dans le tableau
        rep.push(toutLesBoutonsRadios[i].value);
       
   }
   
   //declaration et initialisation des variables pour compter le nb de bonne et mauvaise réponse 
   let compFaux = 0;
   let compVrai = 0;

   //boucle permettant de selectionner un élément par un élément dans le tableau 
   for(let i = 0; i < rep.length; i++){
     //Si la reponse correspond au resultat alors comptVrai + 1 
     if(rep[i] == res[i]){
          compVrai += 1;
          
     } else{ //sinon 
          compFaux += 1;
          
     }
   }

  //POUR VOIR AFFICHER LES RESULTATS
  //si il n'y a aucune mauvaise réponse - affiche félicitation et le fond de la div est en vert
   if(compFaux == 0){
     resultat.style.backgroundColor = "rgb(125, 241, 129)";
     h3.innerText="Félicitation, c'est un sans fautes";
     score.innerText = "score "+ compVrai + "/6";
     info.innerText="Félicitation ";
   }
   //sinon s''il y a qu'une mauvaise réponse on affiche 1 erreur presque et le fond est rouge 
   else if(compFaux == 1){
     resultat.style.backgroundColor = "rgb(241, 125, 125)";
     h3.innerText="Il y a " + compFaux + " erreur";
     score.innerText = "score "+ compVrai + "/6";
     info.innerText = "Presque";
   }
   //sinon si il a plus de 1 mauvaise réponse fond rouge et message oups 
   else{
     resultat.style.backgroundColor = "rgb(241, 125, 125)";
     h3.innerText="Il y a " + compFaux + " erreurs";
     score.innerText = "score "+ compVrai + "/6";
     info.innerText = "oups";
   }
  
})
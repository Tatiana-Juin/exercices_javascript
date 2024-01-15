// Récuperer les éléments du DOM
let plus = document.querySelector("#plus");
let moins = document.querySelector("#moins");
let taille = document.querySelector(".taille");
let texteChanger = document.querySelector(".texteChanger");


// fonction pour le bouton plus
plus.addEventListener("click", () =>{
    //recupere la taille du texte saisie 
    let tailleActuelle = window.getComputedStyle(texteChanger,null).getPropertyValue("font-size");
    
   //convertir en nb 
   let tailleNb = parseInt(tailleActuelle);
  
   //addition - calcule pour changer la taille de +1
   let tailleCalcule = tailleNb +1;
   
   //conversion en string du resultat du calcule 
   let tailleFinale = tailleCalcule.toString();
   
   //affichage du texte par rapport 
   taille.innerText = "Taille actuelle : "+ tailleFinale+"px";
   
   //pour changer le style du texte du lorem
   texteChanger.style.fontSize = tailleFinale+"px";
   
})

// Pour le bouton moins 
moins.addEventListener("click", () =>{
    //recupere la taille du texte saisie 
    let tailleActuelle = window.getComputedStyle(texteChanger,null).getPropertyValue("font-size");
    
   //convertir en nb 
   let tailleNb = parseInt(tailleActuelle);
  
   //addition - calcule pour changer la taille de +1
   let tailleCalcule = tailleNb -1;
   
   //conversion en string du resultat du calcule 
   let tailleFinale = tailleCalcule.toString();
   
   //affichage du texte par rapport 
   taille.innerText = "Taille actuelle : "+ tailleFinale+"px";
   //pour changer le style du texte du lorem
   texteChanger.style.fontSize = tailleFinale+"px";
   
})
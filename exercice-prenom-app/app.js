//recuperer les élements du DOM
let h1 =  document.querySelector('h1');
let nom = document.querySelector("#nom");
let btn = document.querySelector("#btn");

// EVENEMENT AU CLICK
btn.addEventListener("click",() =>{
  //  recupére la valeur du nom
    valeur = nom.value;
    // Pour l'affichage
   if(valeur.trim() ==""){
     h1.innerText="Bienvenue !";
   }
   else{
    h1.innerText="Bienvenue " +valeur+ " !";
   }
})
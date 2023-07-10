//recuperer les élements du DOM
let h1 =  document.querySelector('h1');
let nom = document.querySelector("#nom");
let btn = document.querySelector("#btn");

btn.addEventListener("click",() =>{
   
    valeur = nom.value;
    
   
   if(valeur.trim() ==""){
     h1.innerText="Bienvenue !";
   }
   else{
    h1.innerText="Bienvenue " +valeur+ " !";
   }
})
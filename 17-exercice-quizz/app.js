//Recuperer les élements
let quizzForm = document.querySelector(".quizz-form");
let btnValider = document.querySelector("#btnValider");
let inputRep = document.querySelectorAll("input");

//tableau avec les réponse
const rep = ["b", "d", "c", "a", "c", "b"];

btnValider.addEventListener("click",(e) =>{
    e.preventDefault();
   //console.log("fonction");
   //tous les element checked
   const toutLesBoutonsRadios = document.querySelectorAll("input[type='radio']:checked");
   //initialisation d'un tableau de réponse
  let rep = [];
   
   //recuperer les valeur checked - bou
   for(let i = 0; i<toutLesBoutonsRadios.length;i++){
        console.log(toutLesBoutonsRadios[i]);
      
   }
})
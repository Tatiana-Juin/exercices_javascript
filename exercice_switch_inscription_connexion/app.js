// Recuperer les elements 
let titre =  document.querySelector("h1");
let connexion = document.querySelector("#connexion");
let inscription = document.querySelector("#inscription");
let nonMembre = document.querySelector("#nonMembre");
let creerCompte = document.querySelector("#nonMembre a");
let formConnexion = document.querySelector("#formConnexion");
let formInscription = document.querySelector("#formInscription");


//function pour afficher le formulaire d'inscription ainsi que le bon titre
function funcInscription(){
     //changement du titre
   // titre.innerText="";
   titre.innerText="Inscription";
   //supprimer un attribut de connexion
   connexion.removeAttribute("class");
   //ajouter une class a inscription
   inscription.classList.add("active");

   //changer la valeur d'un attribut
   formConnexion.style.display = "none";
   nonMembre.style.display = "none";
   formInscription.style.display = "flex";
}

//function pour afficher le formulaire de connexion ainsi que le bon titre
function funcConnexion(){
    //on change le titre 
    titre.innerText="Connexion";
    //on supprime la class de inscription afin d'enlever le background-color sur le bouton inscription
    inscription.removeAttribute("class");
    //on ajoute la class active
    connexion.classList.add("active");

    //on cache le formulaire inscription
    formInscription.style.display = "none";
    //on rend visible le formulaire et le p de inscription
    formConnexion.style.display = "flex";
    nonMembre.style.display = "block";

}

//evenement sur inscription - appelle et execution de la fonction funcInscription()
inscription.addEventListener("click",funcInscription);

//evenement sur connexion - appelle et execution de la fonction funcConnexion()
connexion.addEventListener("click", funcConnexion);
//evenment sur creerCompte - quand une personne va cliquer sur le lien creer un compte déclenche la function funcInscription 
creerCompte.addEventListener("click", funcInscription);


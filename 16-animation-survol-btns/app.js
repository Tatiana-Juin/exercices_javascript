//RECUPERE LES ELEMENTS 
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");

//EVENEMENT LORS DU SURVOLE 1ER BOUTON - BOUTON 2 ET 3 FLOU 
btn1.addEventListener("mouseover",() => {
    //ajout de la class flou
    btn2.classList.add("flou")
    btn3.classList.add("flou");
})
//EVENEMENT QUAND LA SOURIS NE SURVOLE PLSU LE BOUTON 1
btn1.addEventListener("mouseleave",() =>{
    //supprime la class flou
    btn2.classList.remove("flou")
    btn3.classList.remove("flou");
})

//EVENEMENT LORS DU SURVOLE 2ER BOUTON - BOUTON 1 ET 3 FLOU 
btn2.addEventListener("mouseover",() => {
    //ajout de la class flou
    btn1.classList.add("flou")
    btn3.classList.add("flou");
})
//EVENEMENT QUAND LA SOURIS NE SURVOLE PLUS LE BOUTON 2
btn2.addEventListener("mouseleave",() =>{
    //supprime la class flou
    btn1.classList.remove("flou")
    btn3.classList.remove("flou");
})

//EVENEMENT LORS DU SURVOLE 3EME BOUTON - BOUTON 1 ET 2 FLOU 
btn3.addEventListener("mouseover",() => {
    //ajout de la class flou
    btn1.classList.add("flou")
    btn2.classList.add("flou");
})

//EVENEMENT QUAND LA SOURIS NE SURVOLE PLUS LE BOUTON 3
btn3.addEventListener("mouseleave",() =>{
    //supprime la class flou
    btn1.classList.remove("flou")
    btn2.classList.remove("flou");
})
// SELECTION DES ELEMENTS DU DOM 
let carte = document.querySelectorAll(".carte");
let face = document.querySelectorAll(".face");
let arriere = document.querySelectorAll(".arriere");
let doubleFace = document.querySelectorAll(".double-face");


// BOUCLE POUR DECLENCHER UN EVENEMENT QUAND TU CLICK SUR UNE CARTE 
for(let i = 0; i< carte.length;i++){
    carte[i].addEventListener("click", () =>{
        // POUR RECUPERER LA VALEUR DE DISPLAY
        let styleArriere = window.getComputedStyle(arriere[i]).display
        // let styleFace = window.getComputedStyle(face[i]).display

        // SI arriere A POUR display === flex ALORS 
        if(styleArriere=="flex"){
            // change la valeur de display en none pour le faire disparaitre
            arriere[i].style.display = "none";
            // on change la valeur de face pour faire apparaitre les images 
            face[i].style.display="block";
        }
        else{
            // on fait apparaitre le point d'interrogation 
            arriere[i].style.display = "flex";
            // on fait disparaitre l'image 
            face[i].style.display="none";
        }

       
    });
}


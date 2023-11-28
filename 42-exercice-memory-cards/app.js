// SELECTION DES ELEMENTS DU DOM 
let carte = document.querySelectorAll(".carte");
let face = document.querySelectorAll(".face");
let arriere = document.querySelectorAll(".arriere");
let doubleFace = document.querySelectorAll(".double-face");
let img = document.querySelectorAll("img");

let premiereCarte; 
let secondeCarte;
let compteur = 0;


// BOUCLE POUR DECLENCHER UN EVENEMENT QUAND TU CLICK SUR UNE CARTE 
for(let i = 0; i< carte.length;i++){
    carte[i].addEventListener("click", () =>{

        // premiereCarte = carte[i];
        if(compteur === 0){
            premiereCarte = carte[i];
            compteur++; 
            // console.log(premiereCarte);
        }
        else{
            secondeCarte = carte[i]; 
            compteur++;
            // console.log(secondeCarte);
        }

        // POUR RECUPERER LA VALEUR DE DISPLAY
        let styleArriere = window.getComputedStyle(arriere[i]).display
        // let styleFace = window.getComputedStyle(face[i]).display

        // POUR TOURNER LA CARTE 
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

        // console.log(img[i].getAttribute("src"));
        // let imgSrc = img[i].getAttribute("src");
        
        // console.log(premiereCarte);
        // console.log(secondeCarte);
        
        /* 
            IL FAUT CREER UE VARIABLE BOOLEAN DES QUE TU INITIALISE A TRUE
            MODIFIER LA CONDITION 
            let boolMaxDeuxCarte = true;
             if(compteur === 0){
            premiereCarte = carte[i];
            compteur++; 
            // console.log(premiereCarte);
        }
        else{
            if(compteur ===1){
            secondeCarte = carte[i]; 
            compteur++;
            // console.log(secondeCarte);
            }
            else{
                boolMaxDeuxCarte = false;
            }
        }

         if(compteur == 1){
            if(premiereCarte.getAttribute("src") == secondeCarte.getAttribute("src")){
                console.log("identique");
            }
            else{
                console.log("non identiquen");
            }
           
        }
        */
        if(compteur == 2){
            if(premiereCarte.getAttribute("src") === secondeCarte.getAttribute("src")){
                console.log("identique");
                // compteur =0;
            }
            else{
                console.log("non identiquen");
            }
           
        }
        
        
    });
}


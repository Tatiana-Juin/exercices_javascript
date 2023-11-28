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


       /* ********  PARTIE POUR FAIRE LA COMPARAISON DE DEUX CARTE ************** */
        // Si le compteur  est égale a 0
        if(compteur === 0){
            // dans permiereCarte on récupére la valeur du src
            premiereCarte = img[i].getAttribute("src");
            // incremente le compteur 
            compteur++;
            // console.log(compteur);

            // console.log(premiereCarte);
           
            // return;

        }else{
            // si le compteur est egale a 1
            if(compteur ===1){

                // dans secondeCarte on récupére la valeur du src de l'image 
                secondeCarte = img[i].getAttribute("src"); 
                // incremente le compteur
                compteur++;

                // COMPARAISON DES DEUX CARTES 
                if(premiereCarte === secondeCarte){
                    console.log("identique");
                    // premiereCarte.removeEventListener('click')
                    // secondeCarte.removeEventListener('click', () =>{})
                    // console.log(carte[i]);
                    // console.log(compteur);
                    // console.log(premiereCarte);
                    // console.log(secondeCarte);
                    
                }
                // on initalise compteur a 0
                compteur = 0;
                // console.log(compteur);
            }
        }
        // console.log(`dehors de la fonction ${compteur}`);
        
        
       
    });
}


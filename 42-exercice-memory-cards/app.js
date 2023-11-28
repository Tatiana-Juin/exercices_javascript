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


        //  POUR QUEE DEUX IMAGE SOIT IDENTIQUE ET QUELLE SE BLOQUE 
         if(compteur === 0){
            premiereCarte = img[i].getAttribute("src");
            
            compteur++; 
            console.log(`1er carte ${premiereCarte}`);
        }
        else{
            if(compteur ===1){
                secondeCarte = img[i].getAttribute("src"); 
                compteur++;
                console.log(`seconde carte ${secondeCarte}`);
            }
            else{ //différent de 1
            //    SI arriere est différent de flex  
                if(arriere[i].getAttribute("display") != "flex"){
                    compteur =0;
                    console.log(`arriere ${compteur}`);
                }
            }
           
        }

        
    });
}


// SELECTION DES ELEMENTS DU DOM 
let carte = document.querySelectorAll(".carte");
let face = document.querySelectorAll(".face");
let arriere = document.querySelectorAll(".arriere");
let doubleFace = document.querySelectorAll(".double-face");
let img = document.querySelectorAll("img");

let premiereCarte; 
let secondeCarte;
let compteur = 0;

// let nbFace = 0;

let couleurCarte1, couleurCarte2;


// BOUCLE POUR DECLENCHER UN EVENEMENT QUAND TU CLICK SUR UNE CARTE 
for(let i = 0; i< carte.length;i++){
    carte[i].addEventListener("click", () => {

        // POUR RECUPERER LA VALEUR DE DISPLAY
        let styleArriere = window.getComputedStyle(arriere[i]).display
        // let styleFace = window.getComputedStyle(face[i]).display

        // POUR TOURNER LA CARTE 
        if(styleArriere=="flex"){
            // change la valeur de display en none pour le faire disparaitre
            arriere[i].style.display = "none";
            // on change la valeur de face pour faire apparaitre les images 
            face[i].style.display="block";
            // ajouter 1 au nb de face
            // nbFace++;
            // console.log(`nb face ${nbFace}`);
        }
        else{
            // on fait apparaitre le point d'interrogation 
            arriere[i].style.display = "flex";
            // on fait disparaitre l'image 
            face[i].style.display="none";
            // enleve un au nbFace
            // nbFace = nbFace -1;
            // console.log(`moinsFace ${nbFace}`);
        }


       /* ********  PARTIE POUR FAIRE LA COMPARAISON DE DEUX CARTE ************** */
        // Si le compteur  est égale a 0
        // if(nbFace > 0 && nbFace <3){

       
        if(compteur === 0  ){
            // dans permiereCarte on récupére la valeur du src
            premiereCarte = img[i].getAttribute("src");
            couleurCarte1 = carte[i]
            // incremente le compteur 
            compteur++;
            // console.log(compteur);

            // console.log(premiereCarte);
           
            // return;
            // console.log(`premiere carte ${compteur}`);

        }else{
            // si le compteur est egale a 1
            if(compteur ===1 ){

                // dans secondeCarte on récupére la valeur du src de l'image 
                secondeCarte = img[i].getAttribute("src"); 
                // incremente le compteur
                compteur++;
                couleurCarte2 = carte[i];
                // console.log(`seconde carte ${compteur} `);

                // Pour eviter que quand on clique sur la même carte elle ne se compte 
                if(couleurCarte1.getAttribute("id") === couleurCarte2.getAttribute("id")){
                    compteur = 0;
                    // nbFace=0;
                    console.log(`id ${compteur} `);
                    
                }else{
                    // QUAND LES DEUX SONT IDENTIQUE 
                    if(premiereCarte === secondeCarte){
                        console.log("paire");
                        // J'ai ajouter la couleur quand c'est bon
                        couleurCarte1.style.backgroundColor="green";
                        couleurCarte2.style.backgroundColor="green";
                        // console.log(`couleur ${compteur}`);
                        // nbFace =0;
                    }
                }

                
                compteur = 0;
                couleurCarte1 = "";
                couleurCarte2="";
                // console.log(compteur);
                // console.log(`fin ${compteur}`);
            }
        }
        // console.log(`dehors de la fonction ${compteur}`);
        
        
       
    //  }
    //  else{
    //     nbFace = 0;
    //     console.log(`initialiser ${nbFace}`);
    //  }
    });

    
}


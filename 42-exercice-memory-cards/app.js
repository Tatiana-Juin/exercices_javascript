// SELECTION DES ELEMENTS DU DOM 
let carte = document.querySelectorAll(".carte");
let face = document.querySelectorAll(".face");
let arriere = document.querySelectorAll(".arriere");
let img = document.querySelectorAll("img");

// DECLARE DEUX VARIABLE QUI REPRESENTE LES DEUX CARTES 
let premiereCarte, secondeCarte; 
// compteur REPRESENTE LE NB DE CLIQUE IL NE DOIT PAS EN AVOIR PLUS DE 2
let compteur = 0;

// let nbFace = 0;
// DECLARATION DE DEUX VARIABLE PERMETTANT DE RECUPERER TOUTES LES INFO PAR RAPPORT A UNE CARTE 
let couleurCarte1, couleurCarte2;


// BOUCLE POUR DECLENCHER UN EVENEMENT QUAND TU CLICK SUR UNE CARTE 
for(let i = 0; i< carte.length;i++){
    carte[i].addEventListener("click", () => {

        // POUR RECUPERER LA VALEUR DE DISPLAY
        let styleArriere = window.getComputedStyle(arriere[i]).display
     
        // POUR TOURNER LA CARTE 
        if(styleArriere=="flex"){
            // change la valeur de display en none pour le faire disparaitre
            arriere[i].style.display = "none";
            // on change la valeur de face pour faire apparaitre les images 
            face[i].style.display="block";
            // ajouter 1 au nb de face
            // nbFace++;
            
        }
        else{
            // on fait apparaitre le point d'interrogation 
            arriere[i].style.display = "flex";
            // on fait disparaitre l'image 
            face[i].style.display="none";
            // enleve un au nbFace
            // nbFace = nbFace -1;
         
        }


       /* ********  PARTIE POUR FAIRE LA COMPARAISON DE DEUX CARTE ************** */
        
        // if(nbFace > 0 && nbFace <3){

       // Si le compteur  est égale a 0
        if(compteur === 0  ){
            // dans permiereCarte on récupére la valeur du src
            premiereCarte = img[i].getAttribute("src");
            // dans couleurCarte1 on récupére toutes les information concernant la carte cliquer
            couleurCarte1 = carte[i]
            // incremente le compteur 
            compteur++;
          

        }else{
            // si le compteur est egale a 1 - une carte touner
            if(compteur ===1 ){
                // on récupére la valeur du src de l'image dans secondeCarte
                secondeCarte = img[i].getAttribute("src"); 
                // recupere toute la carte dans couleurCarte2
                couleurCarte2 = carte[i];
                // incremente le compteur
                compteur++;
              
            
                // BOUCLE POUR EVITER QUE QUAND ON CLIQUE SUR LA MEME CARTE CELA SE COMPTABILISE DANS LE compteur
                if(couleurCarte1.getAttribute("id") === couleurCarte2.getAttribute("id")){
                    compteur = 0;
                    // nbFace=0;
                   
                    
                }else{
                    // QUAND  DEUX CARTES  SONT IDENTIQUE 
                    if(premiereCarte === secondeCarte){
                        console.log("paire");
                        // J'ai ajouter la couleur quand c'est bon
                        couleurCarte1.style.backgroundColor="green";
                        couleurCarte2.style.backgroundColor="green";

                    }
                }

                // APRES ON INITIALISE LES VARIABLE 
                compteur = 0;
                couleurCarte1 = "";
                couleurCarte2="";
                
            }
        }
       
    });

    
}


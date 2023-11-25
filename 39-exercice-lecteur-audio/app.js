// SELECTIONNE LES ELEMENTS DU DOM
let titre = document.querySelector("h2");
let audio = document.querySelector("audio");
let precedent = document.querySelector(".precedent");
let play = document.querySelector(".play");
let suivant = document.querySelector(".suivant");
let icon = document.querySelector(".play ion-icon")

// BOOLEEN AFIN DE SAVOIR SI LA MUSIC FONCTIONNE OU ET EN PAUSE false => pause
let musicPlay = false;

//FONCTION funcPause QUI PERMET DE METTRE EN PAUSE LA MUSIC 
function funcPause(){
    // assigne la valeur false à la variable musicPlay car il n'y a pas de music 
    musicPlay=false;
    // mettre en pause la music 
    audio.pause();
    // changer d'icon
    icon.setAttribute("name","play-circle-outline");
}


// FONCTION POUR LANCER LA CHANSON
function funcPlay(){
    // assigne true car il y à de la music 
    musicPlay=true;
    // lancer la chanson
    audio.play();
    // changer d'icon
    icon.setAttribute("name","pause-outline");
}

// QUAND ON CLIC SUR LE BOUTON PLAY
play.addEventListener("click",()=>{
    // si la music est en cours alors 
    if(musicPlay === true){
        // appelle la fonctionpause
        funcPause()
    }
    else{ 
        // appelle la fonction play
        funcPlay();
    }
});

// LA VARIABLE comptePred EST INITAILISER
let comptePred = 5;

// FONCTION POUR METTRE LA CHANSON PRECEDENTE
function funcPrecedent(){
    // quand on clique on enleve un qui est le numero de la chanson
    comptePred --;
    // pour faire defiler les chanson
    audio.setAttribute("src","src/audio-"+comptePred+".mp3");
    // pour changer le titre
    titre.innerText="";
    titre.innerText=`Instrumental ${comptePred}`;
    // quand on arrive à la premère chanson on initialise  à 5
    if(comptePred === 1){
        comptePred = 5;
    }
    // appelle de la fonction funcPlay
    funcPlay()
    // console.log(titre);
}
// QUAND ON CLIQUE SUR LE BTN PRECEDENT 
precedent.addEventListener("click",funcPrecedent);



// LA VARIABLE comptePred EST INITAILISER
let compteSuivant = 1;

// FONCTION POUR METTRE LA CHANSON SUIVANTE 
function funcSuivant(){
    // numéro de la chanson
    compteSuivant ++;
    // changer de chanson 
    audio.setAttribute("src","src/audio-"+compteSuivant+".mp3");
    // changer le titre 
    titre.innerText="";
    titre.innerText=`Instrumental ${compteSuivant}`;
    // si on arrive a la quatrieme chanson on passe redefinie une valeur a compteSuivant qui est de 0
    if(compteSuivant===4){
        compteSuivant=0;
    }
   
    // APPELLE DE LA FONCTION funcPlay
    funcPlay()
    
}
// evenement au click sur le bouton suivant 
suivant.addEventListener("click",funcSuivant);


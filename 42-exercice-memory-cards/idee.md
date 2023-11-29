# Idée pour résoudre le PB 

## Pour retourner une carte REUSSI
Quand on click sur une carte l'arrière disparait 
On ajouter display : none; a .arriere
et la face avant apparait et change la valeur de display en block 
face.style.display = "block";

## 2 image identique 
si 2 image sont identique alors on supprimer le addEventListener dessus 
résultat la face avant reste visible 

nbFace represente un compteur du nb de carte retourner 
le but est qu'il en ai pas plus de deux qui est comptabiliser afin d'éviter les ereur 

DANS compteur===1;


nbFace = 0; 

Si (compteur ===0) ALORS 
    premiereCarte = recupere src 
    couleur = recupérer carte 
     compteur = compteur +1;
SINON
    IF (compteur ===1) ALORS 
        secondeCarte = recupere url de l'image 
        couleurCarte2 = recupere carte 
        compteur = compteur +1

        IF(idCouleurCarte1 === id de couleurCarte2) ALORS 
            compteur = 0;
        SINON
            IF(premiereCarte === secondeCarte) ALORS 
                couleurCarte1 est vert
                couleurCarte2 est vert 
            FSI
        FSI
    FSI
FSI
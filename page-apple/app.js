function slider(anything){
    //recupere l'image comme on a placer la source dans onclick
    document.querySelector(".phone").src = anything;
}

//Pour changer la couleur
function couleur(color){
    const sec = document.querySelector('.global');
    sec.style.background = color;
}
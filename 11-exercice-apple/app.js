function slider(anything){
    //recupere l'image comme on a placer la source dans onclick
    document.querySelector(".phone").src = anything;
}

//blockscope porté
function couleur(color){
    const sec = document.querySelector('.global');
    sec.style.background = color;
}
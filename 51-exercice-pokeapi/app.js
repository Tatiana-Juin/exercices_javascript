// RECUPERATION THE DOM ELEMENTS
const search = document.querySelector("#search");
const form = document.querySelector("form");

//appelle de l'API
let API = "https://pokeapi.co/api/v2/pokemon/";

// function asynchrone pour appeller API et récupérer des donnée
async function dataPokemon(name) {
    const reponse = await fetch(`${API}${name}`);
    const data = await reponse.json()
    console.log(data);
    affichage(data);
}



function affichage(name) {
    // console.log(name);
    let nameSearch = name["name"];
    let id = name["id"];
    let picture = name['sprites']['back_default']
    
    // boucle pour récupérer le type 
    for (let i = 0; i< name["types"].length;i++){
        let type = name["types"][i].type.name;
        // console.log(type);
    }

    //   console.log(type);

    //pour pour récupérer toutes les statistique
    for (let j = 0; j<name["stats"].length;j++){
        let nameStat = name["stats"][j]["stat"].name
        // console.log(nameStat);
        let statistic = name["stats"][j].base_stat;
        // console.log(statistic);
    }
 }

// fonction de recherche 
form.addEventListener("submit",(e) =>{
    e.preventDefault();

    if(search.value.length > 0){
        dataPokemon(search.value);
        // console.log(dataPokemon);
      
    }

})

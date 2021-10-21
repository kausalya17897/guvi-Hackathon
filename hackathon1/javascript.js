document.body.innerHTML=`<section class="info-list"></section>`
async function getpokeinfo(){
    const data=await fetch("https://pokeapi.co/api/v2/ability/");
    const users=await data.json();
    const pokecontainer=document.querySelector(".info-list");
    const dis=users.results
    console.log(dis);
    for(var val of dis){
    pokecontainer.innerHTML+=`
    <div class="info-container">
    <p class="user-name">Ability : ${val.name}</p>
    <p class="user-url">Url : ${val.url}</p>
    </div>`
    }
};
getpokeinfo()

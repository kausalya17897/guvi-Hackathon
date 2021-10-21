document.body.innerHTML=`<section class="user-list">
</section>`//section is created using DOM
let limit=50;
async function getAllUsers(){
  try{
  const data=await fetch("https://pokeapi.co/api/v2/pokemon?limit=50",{method:"GET"});//read
  const users=await data.json();
  const userContainer=document.querySelector(".user-list");//class is selected using querySelector
  const dis=users.results
  console.log(users)
  let i=1;
 for(var val of dis){
  userContainer.innerHTML+=`
  <div class="user-container">
 <p class="user-id">id:${i} </p>
 <p class="user-name">Name : ${val.name}</p>
 <p class="user-url">Url : ${val.url}</p>
 <button class="button"><h1><a href="info.html" class="link">info</a></h1></button>
 
 </div> `;i++;
}
}catch{
  console.error(err)
  }
};
getAllUsers();

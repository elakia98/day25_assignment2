async function loadUsers(url){
    const response = await fetch(url); //github api
    const users = await response.json(); //change it to json
    return users; //return the whole users
}

async function getData(users){
  //console.log(users);
  var div = document.getElementById("cardDiv");
    for(i=0;i<=11;i++){
        div.innerHTML += `
        <div class="card col-3 m-1 mx-auto" style="background-color:azure;margin-right:5px">
            <img class="card-img-top" src="${users[i]["image"]}">
            <div class="card-body>
                <h5 class="card-title">${users[i]["name"]}</h5>
                <h5 class="card-title">${users[i]["house"]}</h5>
            </div>
        <div>
        `
    }

}

//to get the users data
document.addEventListener("DOMContentLoaded",async() => {
    try{
        users = await loadUsers("http://hp-api.herokuapp.com/api/characters");
        getData(users);
        
    }catch(e){
        console.log(e);
    }

});
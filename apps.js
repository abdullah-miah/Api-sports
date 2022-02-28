const allPlayers = () =>{
    document.getElementById('player-container').innerHTML ="";
   const searchValue = document.getElementById("search-box").value;
   const url =`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`;
   fetch(url)
   .then((res) => res.json())
   .then((data) => showPlayersDetails(data.player));

   
};
const showPlayersDetails =(players) =>{
    for(const player of players){
        const parent = document.getElementById('player-container');
    const div = document.createElement('div');
    div.innerHTML = `<div class="card border w-100 m-auto mt-3">
    <div class="pro-pci">
        <img class='img-fluid w-50'  src="${player.strThumb}" alt="">
    </div>
    <h2>Name: ${player.strPlayer} </h2>
    <h5>Country:${player.strNationality} </h5>
    <p></p>
    <div class="allbutton">
        <button class="btn btn-warning">Delete</button>
        <button onclick="details('${player.idPlayer}')" class="btn btn-success">Details</button>
    </div>
</div>`;
parent.append(div);
console.log(player);
    };
   
};
const details = (id)=>{
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}`;
    fetch(url)
    .then((res) => res.json())
    .then((data) =>setDetails(data.players[0]));
};
const setDetails =(info)=>{
    if(info.strGender =='Male'){
        document.getElementById('male').style.display='block';
        // document.getElementById('female').style.display='none';
    }else{
        document.getElementById('female').style.display='block';
    };
    document.getElementById('show-details').innerHTML=`
    <div class='w-50 m-auto mt-3'>
    <img class='img-fluid' src="${info.strThumb}" alt="">
    <h1> Name: ${info.strPlayer}</h1>
    </div>
    `
}
//31-2 Recap of DOM Manipulation and event handler


document.getElementById("add-border").addEventListener("click", function(){
    document.getElementById("friend-container").style.border = "3px solid black"
})


function changeBackground(){
const friends = document.getElementsByClassName("friend");
for(const friend of friends){
    friend.style.backgroundColor = "lightBlue";
}
}

document.getElementById("add-friend").addEventListener("click", function(){
    const container = document.getElementById("friend-container");
    const friendDiv = document.createElement("div");
    friendDiv.classList.add("friend");
    friendDiv.innerHTML = `
    <h3 class = "friend-name">New Friend</h3>
    <p>Quam, spaiente. </p>
    `
    container.appendChild(friendDiv);
})
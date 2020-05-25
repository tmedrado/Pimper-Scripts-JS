var footerClique = document.getElementById("footer")
var countClick = 1
function sayHi(){
    console.log("clique numéro", countClick);
    countClick += 1
}
footerClique.addEventListener("click", sayHi);


var hambBtn  = document.getElementById("navbarHeader")
function uncollapse(){
    className = "bg-dark";
    console.log("Working!");
}
hambBtn.addEventListener("click", uncollapse)

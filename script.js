//Code pour la premiere fonctionalité
var footerClique = document.getElementById("footer")
var countClick = 1
function sayHi(){
    console.log("clique numéro", countClick);
    countClick += 1
}
footerClique.addEventListener("click", sayHi);

//Code pour la deuxieme fonctionalite
var hambBtn = document.getElementById("navbar-toggler")
var navbarHeader = document.getElementById("navbarHeader")
function changeClass(){
    if (navbarHeader.className === "collapse bg-dark"){
    navbarHeader.className = "bg-dark"
    }
    else {
        navbarHeader.className = "collapse bg-dark"
        }
}

hambBtn.addEventListener("click", changeClass);

//Code pour la troisieme fonctionalite
var firstCardEditButton = document.getElementById("firstEditButton")
var firstCardText = document.getElementById("firstCardText")
function changeColor(){
    firstCardText.style = "color: red";
}

firstCardEditButton.addEventListener("click",  changeColor)

//Code pour la quatrième fonctionalite
var secondCardButton = document.getElementById("secondEditButton")
var secondCardText = document.getElementById("secondCardText")

function changeColor2(){
    if (secondCardText.style.color ==='green'){
    secondCardText.style.color =''
    }
    else {
        secondCardText.style.color ='green'
        }
}

secondCardButton.addEventListener("click",  changeColor2)

//Code pour la cinquième fonctionalite
var bootstrapLink = document.getElementById("bootstrapLink")

function unableBS(){
    bootstrapLink.setAttribute('href', '');
}

navbarHeader.addEventListener("dblclick", unableBS)

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


//Code pour la sexième fonctionalite
//testEditButton.addEventListener('mouseover', changeCards)

var CardEditButtom = document.getElementsByClassName('btn-group')
var CardText = document.getElementsByClassName('card-text')
var CardImage = document.getElementsByClassName('card-img-top')

for (let counter = 0; counter < 6; counter++){
    CardEditButtom[counter].addEventListener('mouseover', function(){
        CardText[counter].innerText = ""
        CardImage[counter].style = "width:20%"
})}


//Code pour la septieme fonctionalite
var arrowButton = document.getElementsByClassName('btn btn-secondary my-2')[0]
var auxVar1 = CardImage[5]
var auxVar2 = CardText[5].innerText


//arrowButton.addEventListener('click', function(){
//    CardText[5].innerText = CardText[0].innerText;
//    CardImage[5].src = CardImage[0].src;
//})


//for (let counter = 0; counter < 6; counter++){
  //CardText[counter].innerText = CardText[counter+1].innerText;
 // CardImage[counter] = CardImage[counter+1]
  
//}
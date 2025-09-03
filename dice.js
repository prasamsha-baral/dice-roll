
function rollDice(){

let randomNumber1= randomNumGen();

let randomNumber2= randomNumGen();


let randomDiceImage = "./images/dice" +randomNumber1 +".png";
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage);


let randomDiceImage1 = "./images/dice" +randomNumber2 +".png";
let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage1);

if (randomNumber1>randomNumber2){
    document.querySelector("h1").textContent = "🚩 Player 1 wins" ;
}
else if(randomNumber1<randomNumber2){
     document.querySelector("h1").textContent = "🚩 Player 2 wins" ;
}
else{
    document.querySelector("h1").textContent = " Draw ! "
}
}


function randomNumGen(){
    let randomNumber = Math.floor(Math.random()*6 +1 );
    return randomNumber;
}


var randomNumber1 = Math.floor(Math.random()*6)+1;
var diceString1 = "hw-images/dice"+randomNumber1+".png";
var randomNumber2 = Math.floor(Math.random()*6)+1;
var diceString2 = "hw-images/dice"+randomNumber2+".png";


document.querySelectorAll("img")[0].setAttribute("src", diceString1);
document.querySelectorAll("img")[1].setAttribute("src", diceString2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").textContent="🎈Player 1 Wins";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").textContent="Player 2 Wins🎈";
}

else if(randomNumber1=randomNumber2){
  document.querySelector("h1").textContent="⚠️WAR⚠️";
}

var randomnumber1=Math.ceil(Math.random()*6);

var dicename="images/dice"+randomnumber1+".png";

document.querySelector(".img1").setAttribute("src",dicename);

var number2=Math.ceil(Math.random()*6);
var name="images/dice"+number2+".png";
document.querySelector(".img2").setAttribute("src",name);

if (randomnumber1===number2)
{
  document.querySelector("h1").textContent="Draw!";

}
else if (randomnumber1>number2) {
  document.querySelector("h1").textContent="🏁Player1 wins";

}
else  {
  document.querySelector("h1").textContent="Player2 wins🏁";

}

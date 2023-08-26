function generateRandomNumber()
{
    let randomNum = (parseInt(Math.random()*6)+1);
    return randomNum;
}

let imageOne = document.querySelector(".img1");
let imageTwo = document.querySelector(".img2");
let winner = document.querySelector("h1");

let randPlayerOne=generateRandomNumber();
var imageOneSource = "dice"+randPlayerOne+".png";

imageOne.setAttribute("src",imageOneSource);


let randPlayerTwo=generateRandomNumber();
var imageTwoSource = "dice"+randPlayerTwo+".png";
imageTwo.setAttribute("src",imageTwoSource);

if(randPlayerOne>randPlayerTwo)
{
    winner.textContent="Player One Wins 🚩";
}
else if(randPlayerTwo>randPlayerOne)
{
    winner.textContent="Player Two Wins 🚩";

}
else 
{
    winner.textContent="Draw...";

}











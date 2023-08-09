
var players = document.querySelectorAll("img");
var randomList = [];
var winnerText = document.getElementById("winner");
for(i=0;i<players.length;i++){
    var randomNum = GetRandomDice()
    randomList.push(randomNum);
    players[i].setAttribute("src", "./dice"+randomNum+".png");
}

if(randomList[0] === randomList[1]){
    winnerText.textContent = "Draw";
}
else if(randomList[0] > randomList[1]){
    winnerText.textContent = "Player1 is the winner!!.";
}
else{
    winnerText.textContent = "Player2 is the winner!!.";
}

function GetRandomDice(){
    var randomNumber = Math.random();
    var randomNumber = randomNumber * 6;
    randomNumber = Math.floor(randomNumber)
    if(randomNumber === 0){
        randomNumber = 1;
    }
    return randomNumber;
}


const dicePic = document.querySelectorAll("img")[0];
const button = document.getElementById("button");
const scoreElement = document.getElementById("score");
const player1Element = document.getElementById("player1");
const yourScoreText = document.getElementById("yourscoreText");
const descriptionText = document.getElementById("description");
// console.log(ImageWin);
// const ImageWin = document.querySelector("#winText");
// if ()


// const toggleWinImage 


// button.addEventListener("click", () => {
//     if(dicePic.style.display == "none"){
//         dicePic.style.diplay = "block";
//     } else{
//         dicePic.style.display = "none";
        
//     }
// }


const playAgainButton = () => {
    button.textContent = ("Play Again");
    button.style.width = "50px";
    button.style.borderRadius = "10px";

}

let totalScore = 0;
const changeDiceImage = (num) => { 
       dicePic.setAttribute("src", `images/dice-six-faces-${num}.png`);

}

const setScore = (totalScore) => {
    scoreElement.innerHTML = totalScore;
}

const resetScore = (totalScore) => {
    totalScore = 0;
}


let IfWinGame = () => {
    if (totalScore == 20 || totalScore > 20) {
    player1Element.textContent = "YOU WON";
    player1Element.style.color = "gold";
  
    player1Element.style.fontSize = "6rem";
    yourScoreText.textContent = ("FINAL SCORE:");
    playAgainButton()
  


    } else {
        button.addEventListener("click", rollDice);
    
    }
}
    

const gameOver = () => {
    player1Element.textContent = "GAME OVER";
    player1Element.style.fontSize = "6rem";
    yourScoreText.textContent = ("FINAL SCORE:");
    player1Element.style.color = ("red");

    playAgainButton();
    // resetScore(totalScore = 0);

    } 

// const gameWin = () => {
//     player1Element.textContent = "";
//     player1Element.style.fontSize = "7rem";
//     yourScoreText.textContent = ("FINAL SCORE:");
//     playAgainOption();
//     } 







const rollDice = () => { 
    const diceResult = Math.floor((Math.random() * 6) +1); // generates random number between 1-6let
    button.innerHTML ="roll"
    player1Element.style.fontSize = "0.6rem";
    player1Element.style.color = "white";
    player1Element.textContent = "Player 1";
    yourScoreText.textContent = ("SCORE:");
    console.log("you've clicked roll button");
    changeDiceImage(diceResult)
    console.log(diceResult) 
    totalScore = totalScore + diceResult;
    if (diceResult == 1) {
        gameOver();
    } 
    else if (diceResult == 2)  {
        IfWinGame();
    }
    else if (diceResult == 3) {
        IfWinGame();;
    }
    else if (diceResult == 4) {
        IfWinGame();
    }
    else if (diceResult == 5) {
        IfWinGame();
    }
    else {
        IfWinGame();
    }

    setScore(totalScore);
    
    if (totalScore >= 20){
        resetScore(totalScore = 0);
    } else if (diceResult == 1) {
        resetScore(totalScore = 0);
    }
    
};

button.addEventListener("click", rollDice);







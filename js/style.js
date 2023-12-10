window.addEventListener("DOMContentLoaded", (event) => {
  const body = document.querySelector("body");
  body.style.opacity = "1";
});

// main code
let player = 1; //used to change the player
let player1Won = 0;
let player2Won = 0;
const inputs = document.querySelectorAll(".input-field");
const xValue = document.getElementById("x-value");
const oValue = document.getElementById("o-value");
oValue.textContent = player2Won;

inputs.forEach((input) => {
  input.addEventListener("click", () => {
    let id = input.id;
    if (player == 1) {
      document.getElementById(id).value = "X";
      document.getElementById(id).disabled = true;
      document.getElementById(id).style.color = "#ffffff";
      player = 0;
    } else {
      document.getElementById(id).value = "O";
      document.getElementById(id).disabled = true;
      document.getElementById(id).style.color = "#black";
      player = 1;
    }

    // CHECKING FOR ANYONE HAS WON!--------------------------------------------
    let f1, f2, f3, f4, f5, f6, f7, f8, f9;
    f1 = document.getElementById("f1").value;
    f2 = document.getElementById("f2").value;
    f3 = document.getElementById("f3").value;
    f4 = document.getElementById("f4").value;
    f5 = document.getElementById("f5").value;
    f6 = document.getElementById("f6").value;
    f7 = document.getElementById("f7").value;
    f8 = document.getElementById("f8").value;
    f9 = document.getElementById("f9").value;
    let result = document.getElementById("result");

    function playerXWon() {
      result.value = "Player X has won";
      player1Won++;
      xValue.textContent = player1Won;
      disableAll();
      setTimeout(function () {
        alert("Player X has won!");
      }, 100);
    }
    function playerOWon() {
      result.value = "Player O has won";
      player2Won++;
      oValue.textContent = player2Won;
      disableAll();
      setTimeout(function () {
        alert("Player O has won!");
      }, 100);
    }
    //checking for X player--------------------------------------------------------------------------------------------------
    if (f1 == "X" && f2 == "X" && f3 == "X") {
      playerXWon();
    } else if (f1 == "X" && f4 == "X" && f7 == "X") {
      playerXWon();
    } else if (f7 == "X" && f8 == "X" && f9 == "X") {
      playerXWon();
    } else if (f3 == "X" && f6 == "X" && f9 == "X") {
      playerXWon();
    } else if (f1 == "X" && f5 == "X" && f9 == "X") {
      playerXWon();
    } else if (f3 == "X" && f5 == "X" && f7 == "X") {
      playerXWon();
    } else if (f2 == "X" && f5 == "X" && f8 == "X") {
      playerXWon();
    } else if (f4 == "X" && f5 == "X" && f6 == "X") {
      playerXWon();
    }

    //checking for O player--------------------------------------------------------------------------------------------------
    else if (f1 == "O" && f2 == "O" && f3 == "O") {
      playerOWon();
    } else if (f1 == "O" && f4 == "O" && f7 == "O") {
      playerOWon();
    } else if (f7 == "O" && f8 == "O" && f9 == "O") {
      playerOWon();
    } else if (f3 == "O" && f6 == "O" && f9 == "O") {
      playerOWon();
    } else if (f1 == "O" && f5 == "O" && f9 == "O") {
      playerOWon();
    } else if (f3 == "O" && f5 == "O" && f7 == "O") {
      playerOWon();
    } else if (f2 == "O" && f5 == "O" && f8 == "O") {
      playerOWon();
    } else if (f4 == "O" && f5 == "O" && f6 == "O") {
      playerOWon();
    }

    // match is tie
    else if (
      (f1 == "X" || f1 == "O") &&
      (f2 == "X" || f2 == "O") &&
      (f3 == "X" || f3 == "O") &&
      (f4 == "X" || f4 == "O") &&
      (f5 == "X" || f5 == "O") &&
      (f6 == "X" || f6 == "O") &&
      (f7 == "X" || f7 == "O") &&
      (f8 == "X" || f8 == "O") &&
      (f9 == "X" || f9 == "O")
    ) {
      result.value = "Match Tie!!!";
    }
  });
});

//code to check which player has won or the match has been tie ------------------------------------------------------------------------

// disable / enable all inputs - after match is won by either
function disableAll() {
  inputs.forEach((input) => {
    input.disabled = true;
  });
}
function enableAll() {
  inputs.forEach((input) => {
    input.disabled = false;
  });
}

let result = document.getElementById("result");
// newGame-button
function newGame() {
  result.value = "RESULT";
  inputs.forEach((input) => {
    input.value = "";
  });
  enableAll();
  player = 1;
}
// reset-button
function reset() {
  newGame();
  player1Won = 0;
  player2Won = 0;
  xValue.textContent = player1Won;
  oValue.textContent = player2Won;
}

function playGameExampleOne() {
  console.log('testing our game');
}

function playGameExampleTwo() {
  let player1 = document.getElementById('player1Example2').value;
  let player2 = document.getElementById('player2Example2').value;
  let result;

    if (player1 == player2){
      result = 'Tie!';
    }

    console.log(result);

}

function playGameExampleThree() {
  let player1 = document.getElementById('player1Example3').value;
  let player2 = document.getElementById('player2Example3').value;
  let result = '';

  if (player1 == player2) {
    result = 'Tie!';
  } else if (player1 == 'Rock' && player2 == 'Scissors') {
    result = 'Player 1 Wins!';
  } else if (player1 == 'Paper' && player2 == 'Rock') {
    result = 'Player 1 Wins!';
  } else if (player1 == 'Scissors' && player2 == 'Paper') {
    result = 'Player 1 Wins!';
  } else {
    result = 'Player 2 Wins!';
  }

  console.log(result);
}

function playGameExampleFour() {
  let player1 = document.getElementById('player1Example4').value;
  let player2 = document.getElementById('player2Example4').value;
  let result = '';
  let resultEl = document.getElementById('resultElExample4');
  let resultTextNode;

  if (player1 == player2) {
    result = 'Tie!';
  } else if (player1 == 'Rock' && player2 == 'Scissors') {
    result = 'Player 1 Wins!';
  } else if (player1 == 'Paper' && player2 == 'Rock') {
    result = 'Player 1 Wins!';
  } else if (player1 == 'Scissors' && player2 == 'Paper') {
    result = 'Player 1 Wins!';
  } else {
    result = 'Player 2 Wins!';
  }

  if (resultEl.childNodes.length < 15){
    resultTextNode = document.createTextNode(result);

    resultEl.appendChild(resultTextNode);
  }
}

function playGameComplete(){
  let player1 = document.getElementById('player1Complete').value;
  let player2 = document.getElementById('player2Complete').value;
  let resultEl = document.getElementById('resultElComplete');
  let resultTextNode;
  let result = '';

  if (player1 == player2) {
    result = 'Tie!';
  } else if (player1 == 'Rock' && player2 == 'Scissors') {
    result = 'Player 1 Wins!';
  } else if (player1 == 'Paper' && player2 == 'Rock') {
    result = 'Player 1 Wins!';
  } else if (player1 == 'Scissors' && player2 == 'Paper') {
    result = 'Player 1 Wins!';
  } else {
    result = 'Player 2 Wins!';
  }

  resultTextNode = document.createTextNode(result);

  if (resultEl.firstChild) {
    resultEl.removeChild(resultEl.firstChild);
  }

  resultEl.appendChild(resultTextNode);
}

function playSound() {
  let sound = document.getElementById("audio");
  sound.play();
}

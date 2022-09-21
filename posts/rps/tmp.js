function playGame(){
  let player1 = document.getElementById('player1').value;
  let player2 = document.getElementById('player2').value;
  let resultEl = document.getElementById('resultEl');
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

function playGame(){
  let rps1 = document.getElementById('rps1').value,
      rps2 = document.getElementById('rps2').value,
      resultEl = document.getElementById('result'),
      result,
      r;

    if (rps1 == rps2){
      result = 'Tie!';
    } else if (rps1 == 'Rock' && rps2 == 'Scissors') {
      result = `${rps1} wins! ${rps2} loses!`;
    } else if (rps1 == 'paper' && rps2 == 'rock') {
      result = `${rps1} wins! ${rps2} loses!`;
    } else if (rps1 == 'scissors' && rps2 == 'paper') {
      result = `${rps1} wins! ${rps2} loses!`;
    } else {
      result = `${rps2} wins! ${rps1} loses!`;
    }

    r = document.createTextNode(result);

    if (resultEl.firstChild) {
      resultEl.removeChild(resultEl.firstChild);
    }

    resultEl.appendChild(r);
}

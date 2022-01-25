docReady(function() {
	//document.getElementById('message').value = "";
	//document.getElementById('key').value = ""

  console.log(peachDecrypt("̸̸ѱѩЍİѻЍĳκġб΁ЎПιѵ΂","pass"))

	/*document.getElementById('convertString').addEventListener("keydown", event => {
	  if (event.isComposing || event.keyCode === 13) {
	    submitFields();
	  }
	});*/
});

function peachDecrypt(message, key){
  let messageString = message.toString();
  let keyString = key.toString();
  let counter = 0;
  let keyLen = keyString.length - 1;
  let finalString = [];

  for (let s in messageString){
    let messageStringDecimal = messageString[s].charCodeAt(0);
    let keyStringDecimal = keyString[counter].charCodeAt(0);
    let firstXORDecimal = messageStringDecimal ^ keyStringDecimal;
		let shifted = firstXORDecimal / 10;
    let convertedCharacter = String.fromCharCode(shifted);

    finalString.push(convertedCharacter);

    counter === keyLen ? counter = 0 : counter++;
  }

  return finalString.join("");
}

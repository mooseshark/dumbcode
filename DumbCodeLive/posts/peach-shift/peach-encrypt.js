/*
 * Encryption for desktop browser
 */
function peachEncrypt(){
  let message = document.getElementById('originalMessage').value;
	let key = document.getElementById('encryptionKey').value;
  let messageString = message.toString();
  let keyString = key.toString();
  let counter = 0;
  let keyLen = keyString.length - 1;
  let finalString = [];

  for (let s in messageString){
    let messageStringDecimal = messageString[s].charCodeAt(0);
    let shifted = messageStringDecimal * 10;
    let keyStringDecimal = keyString[counter].charCodeAt(0);
    let firstXORDecimal = shifted ^ keyStringDecimal;
    let convertedCharacter = String.fromCharCode(firstXORDecimal);

    finalString.push(convertedCharacter);

    counter === keyLen ? counter = 0 : counter++;
  }

  printEncryptedMessage(finalString.join(""));
}

function printEncryptedMessage(message){
  console.log('click');
  let encryptedTextArea = document.getElementById('encryptedMessage');
  let encryptedMessage = document.createTextNode(message);
  console.log(encryptedMessage);

  if(encryptedTextArea.childNodes[0])
    encryptedTextArea.removeChild(encryptedTextArea.childNodes[0]);

  encryptedTextArea.appendChild(encryptedMessage);
  console.log(encryptedTextArea);
}

/*
 * Encryption for mobile browsers
 */
function peachEncryptMobile(){
  let message = document.getElementById('originalMessageMobile').value;
	let key = document.getElementById('encryptionKeyMobile').value;
  let messageString = message.toString();
  let keyString = key.toString();
  let counter = 0;
  let keyLen = keyString.length - 1;
  let finalString = [];

  for (let s in messageString){
    let messageStringDecimal = messageString[s].charCodeAt(0);
    let shifted = messageStringDecimal * 10;
    let keyStringDecimal = keyString[counter].charCodeAt(0);
    let firstXORDecimal = shifted ^ keyStringDecimal;
    let convertedCharacter = String.fromCharCode(firstXORDecimal);

    finalString.push(convertedCharacter);

    counter === keyLen ? counter = 0 : counter++;
  }

  printEncryptedMessageMobile(finalString.join(""));
}

function printEncryptedMessageMobile(message){
  let encryptedTextArea = document.getElementById('encryptedMessageMobile');
  let encryptedMessage = document.createTextNode(message);

  if(encryptedTextArea.childNodes[0])
    encryptedTextArea.removeChild(encryptedTextArea.childNodes[0]);

  encryptedTextArea.appendChild(encryptedMessage);
}

/*
 * Decryption for desktop browsers
 */
function peachDecrypt(){
  let message = document.getElementById('messageToDecrypt').value;
	let key = document.getElementById('decryptionKey').value;
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

  printDecryptedMessage(finalString.join(""));
}

function printDecryptedMessage(message){
  let decryptedTextArea = document.getElementById('decryptedMessage');
  let decryptedMessage = document.createTextNode(message);

  if(decryptedTextArea.childNodes[0])
    decryptedTextArea.removeChild(decryptedTextArea.childNodes[0]);

  decryptedTextArea.appendChild(decryptedMessage);
}

/*
 * Decryption for mobile browsers
 */
function peachDecryptMobile(){
  let message = document.getElementById('messageToDecryptMobile').value;
	let key = document.getElementById('decryptionKeyMobile').value;
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

  printDecryptedMessageMobile(finalString.join(""));
}

function printDecryptedMessageMobile(message){
  let decryptedTextArea = document.getElementById('decryptedMessageMobile');
  let decryptedMessage = document.createTextNode(message);

  if(decryptedTextArea.childNodes[0])
    decryptedTextArea.removeChild(decryptedTextArea.childNodes[0]);

  decryptedTextArea.appendChild(decryptedMessage);
}

function copyTextArea(id){
  let copyText = document.getElementById(id);
  copyText.select();
  copyText.setSelectionRange(0, 99999); 
  document.execCommand("copy");
}

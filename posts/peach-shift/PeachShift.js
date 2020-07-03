docReady(function() {
	document.getElementById('ogString').value = "";
	document.getElementById('convertString').value = ""

	//console.log(String.fromCharCode(3));
	//console.log((dec >>> 0).toString(2)); //decimal to binary

	document.getElementById('convertString').addEventListener("keydown", event => {
	  if (event.isComposing || event.keyCode === 13) {
	    submitFields()
	  }
	});
});

function submitFields(){
	let ogString = document.getElementById('ogString').value;
	let ogStringDisplay = document.getElementById('ogStringDisplay');
	let convertString = document.getElementById('convertString').value;
	let covertedStringDisplay = document.getElementById('covertedStringDisplay');
	let submitButton = document.getElementById('submitId');
	let a = document.getElementById("inputRow"),
	 		b = document.getElementById("submitRow"),
			w = document.getElementById("tableHeaderRow"),
	 		x = document.getElementById("stringHeaderRow"),
	 		y = document.getElementById("stringRow"),
 			z = document.getElementById("resetRow");

	if(ogString.length === 0 || convertString.length === 0) return;
	if(typeof ogString !== 'string') ogString = ogString.toString();
	if(typeof convertString !== 'string') convertString = convertString.toString();

	a.style.display = "none";
  b.style.display = "none";

	if (w.style.display === "none") w.style.display = "table-row";
	if (x.style.display === "none") x.style.display = "table-row";
  if (y.style.display === "none") y.style.display = "table-row";
  if (z.style.display === "none") z.style.display = "table-row";

	ogStringDisplay.innerHTML = ogString;
	covertedStringDisplay.innerHTML = peachShift(ogString, convertString);
	submitButton.disabled = true;
}

function peachShift(ogString, convertedString){

	let i = 0,
			convertedCount = 0,
			convertedLen = convertedString.length - 1,
			finalConvertedString = [],
			cell = {
				"id": 0,
				"ogString": "",
				"ogDecimalChar": "",
				"ogBinary": "",
				"convertedStringChar": "",
				"convertedDecimalChar": "",
				"convertedBinary": "",
				"inverseDecimalChar": ""
			};

	for(c in ogString){
		let ogDecimalChar = ogString[c].charCodeAt(0);
		let convertedDecimalChar = convertedString[convertedCount].charCodeAt(0);
		let inverseDecimalChar = convertedDecimalChar^ogDecimalChar;
		let ogBinary = (ogDecimalChar >>> 0).toString(2);
		let convertedBinary = (convertedDecimalChar >>> 0).toString(2);
		let inverseBinary = (inverseDecimalChar >>> 0).toString(2);

		cell.id = i++;
		cell.ogString = ogString[c];
		cell.ogDecimalChar = ogDecimalChar;
		cell.ogBinary = ogBinary;
		cell.convertedStringChar = convertedString[convertedCount];
		cell.convertedDecimalChar = convertedDecimalChar;
		cell.convertedBinary = convertedBinary;
		cell.inverseDecimalChar = inverseDecimalChar;
		cell.inverseBinary = inverseBinary;


		drawPeachShiftTable(cell);

		finalConvertedString.push(String.fromCharCode(ogDecimalChar^inverseDecimalChar));
		convertedCount === convertedLen ? convertedCount = 0 : convertedCount++;
	}

	return finalConvertedString.join("");
}

function drawPeachShiftTable(cell){
	if (cell === null) return;

	const tabBody=document.getElementById("tabBody");

	let tableRow = tabBody.insertRow();
	tableRow.id = cell.id;

	let cell0 = tableRow.insertCell();
  let text0 = document.createTextNode(cell.id + 1);

  let cell1 = tableRow.insertCell();
  let text1 = document.createTextNode(cell.ogString);

	let cell2 = tableRow.insertCell();
  let text2 = document.createTextNode(cell.ogDecimalChar);

	let cell3 = tableRow.insertCell();
  let text3 = document.createTextNode(cell.convertedDecimalChar + ' ^ ' + cell.ogDecimalChar);

	let cell4 = tableRow.insertCell();
	let text4 = document.createTextNode(cell.convertedDecimalChar);

	let cell5 = tableRow.insertCell();
  let text5 = document.createTextNode(cell.convertedStringChar);

	let cell6 = tableRow.insertCell();
  let text6 = document.createTextNode(cell.ogBinary);

	let cell7 = tableRow.insertCell();
	let text7 = document.createTextNode(cell.convertedBinary);

	let cell8 = tableRow.insertCell();
  let text8 = document.createTextNode(cell.inverseBinary);

	let cell9 = tableRow.insertCell();
  let text9 = document.createTextNode(cell.inverseDecimalChar);

	let cell10 = tableRow.insertCell();
  let text10 = document.createTextNode(cell.ogDecimalChar + ' ^ ' + cell.inverseDecimalChar);

	let cell11 = tableRow.insertCell();
  let text11 = document.createTextNode(cell.convertedStringChar);

	cell0.appendChild(text0);
  cell1.appendChild(text1);
	cell2.appendChild(text2);
	cell3.appendChild(text3);
	cell4.appendChild(text4);
	cell5.appendChild(text5);
	cell6.appendChild(text6);
	cell7.appendChild(text7);
	cell8.appendChild(text8);
	cell9.appendChild(text9);
	cell10.appendChild(text10);
	cell11.appendChild(text11);
}

function resetPage(){
	let ogString = document.getElementById('ogString').value;
	let ogStringDisplay = document.getElementById('ogStringDisplay');
	let convertString = document.getElementById('convertString').value;
	let covertedStringDisplay = document.getElementById('covertedStringDisplay');
	let submitButton = document.getElementById('submitId');
	let a = document.getElementById("inputRow"),
	 		b = document.getElementById("submitRow"),
			w = document.getElementById("tableHeaderRow"),
	 		x = document.getElementById("stringHeaderRow"),
	 		y = document.getElementById("stringRow"),
 			z = document.getElementById("resetRow");
	let ogStringLength = ogString.length;

	if (a.style.display === "none") a.style.display = "table-row";
  if (b.style.display === "none") b.style.display = "table-row";

	if (w.style.display === "table-row") w.style.display = "none";
	if (x.style.display === "table-row") x.style.display = "none";
  if (y.style.display === "table-row") y.style.display = "none";
  if (z.style.display === "table-row") z.style.display = "none";

	ogStringDisplay.innerHTML = "";
	covertedStringDisplay.innerHTML = "";
	submitButton.disabled = false;

	document.getElementById('ogString').value = "";
	document.getElementById('convertString').value = ""

	for(let i = 0; i < ogStringLength; i++){
		let row = document.getElementById(i);
    row.parentNode.removeChild(row);
	}
}

//Replace jQuery $(document).ready()
function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
};

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    generateSheet();
  }
};

function generateSheet() {
	let btn = document.createElement('input');
	btn.setAttribute('type', 'button');
	btn.setAttribute('class', 'round-button');
	wrap = document.getElementById("bubble-wrap")
	wrap.appendChild(btn)

}

function submitFields(){
	resetPage();

	let date = document.getElementById('date').value.split("-"),
	 		time = document.getElementById('time').value.split(":"),
			measure = document.getElementById('measure').value,
			currentDateTime = Date.now();

	if ((date[0] === '' || date === 'undefined') || (time[0] === '' || time == 'undefined')) {
		alert('Invalid date or time.');
		return;
	}

	let selectedDateTime = new Date(date[0],date[1]-1,date[2],time[0],time[1],time[2]);

	if (currentDateTime < selectedDateTime) {
		alert('Date/Time cannot be greater than the current date and time.');
		return;
	}

	let diff = Math.abs(currentDateTime - selectedDateTime) * 0.001; //diff in seconds

	switch (measure) {
	  case 'seconds':
			ageCell({seconds: diff});
	    break;
		default:
			ageCell({seconds: diff});
			break;
		}
}

function ageCell(obj){
	let i = 0,
			cell = {
				"age": "",
			};

	for(o in obj){
		cell.id = i;
		cell.age = `${obj[o]} ${o}`;
		cell.units = o

		drawAgeTable(cell);
		i++;
	}
	$('[data-toggle="tooltip"]').tooltip();
}

function drawAgeTable(cell){
	if (cell === null) return;

	const tabBody=document.getElementById("tabBody");

	let tableRow = tabBody.insertRow();
	tableRow.id = cell.id;

	let cell0 = tableRow.insertCell();

	cell0.setAttribute('data-toggle', 'tooltip');
	cell0.setAttribute('data-placement', 'top');
	cell0.setAttribute('title', `Click the cell to copy the age in ${o}.`);
	cell0.setAttribute('onclick', `copyTextArea('${cell.age}');`);

  let text0 = document.createTextNode(cell.age);

	cell0.appendChild(text0);
}

function resetPage(){
	for(let i = 0; i < 12; i++){
		let row = document.getElementById(i);

		if (row)
    	row.parentNode.removeChild(row);
	}
}

// create a text element, copy text, then remove the element in order to copy from a <td>
function copyTextArea(age){
	let text = document.createElement('input');
	text.setAttribute('type', 'text');
	text.value = age;
	document.body.appendChild(text);
	text.select();
	document.execCommand('copy');
	document.body.removeChild(text);
}

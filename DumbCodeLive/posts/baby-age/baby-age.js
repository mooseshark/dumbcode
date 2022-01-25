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
	  case 'minutes':
			ageCell({minutes: minutes(diff)});
	    break;
		case 'moments':
			ageCell({moments: moments(diff)});
	    break;
		case 'hours':
			ageCell({hours: hours(diff)});
	    break;
		case 'days':
			ageCell({days: days(diff)});
	    break;
		case 'weeks':
			ageCell({weeks: weeks(diff)});
	    break;
		case 'fortnights':
			ageCell({fortnights: fortnights(diff)});
	    break;
		case 'months':
			ageCell({months: months(diff)});
	    break;
		case 'protege':
			ageCell({protege: protege(diff)});
	    break;
		case 'years':
			ageCell({years: years(diff)});
	    break;
		case 'decades':
			ageCell({decades: decades(diff)});
	    break;
		case 'jubilees':
			ageCell({jubilees: jubilees(diff)});
	    break;
		case 'centuries':
			ageCell({centuries: centuries(diff)});
	    break;
		case 'millennia':
			ageCell({millennia: millennia(diff)});
	    break;
		case 'all':
			ageCell(all(diff));
	    break;
		default:
			ageCell(all(diff));
			break;
		}
}

function minutes(diff){
	return diff / 60;
}

function moments(diff){
	return diff / 90;
}

function hours(diff){
	return minutes(diff) / 60;
}

function days(diff){
	return hours(diff) / 24;
}

function weeks(diff){
	return days(diff) / 7;
}

function fortnights(diff){
	return days(diff) / 14;
}

function months(diff){
	return days(diff) / 30.42;
}

function years(diff){
	return days(diff) / 365;
}

function protege(diff){
	return days(diff) / 323;
}

function decades(diff){
	return years(diff) / 10;
}

function jubilees(diff){
	return years(diff) / 25;
}

function centuries(diff){
	return years(diff) / 100;
}

function millennia(diff){
	return years(diff) / 1000;
}

function all(diff){
	return {
		seconds: diff,
		minutes: minutes(diff),
		days: days(diff),
		weeks: weeks(diff),
		fortnights: fortnights(diff),
		months: months(diff),
		years: years(diff),
		decades: decades(diff),
		protege: protege(diff),
		jubilees: jubilees(diff),
		centuries: centuries(diff),
		millennia: millennia(diff)
	};
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

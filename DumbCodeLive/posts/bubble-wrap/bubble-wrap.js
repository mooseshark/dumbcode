document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    generateSheet('traditional','round-button-traditional',100);
  }
};

/*
 * Handle Generating Bubble Wrap
*/
function selectTheme(audioTheme) {
	let styleTheme = document.getElementById(audioTheme).getAttribute('styletheme')
	let selectedTheme = audioTheme || 'traditional';
	let sheetSize = document.getElementById(audioTheme).getAttribute('sheetsize')

	resetPage(selectedTheme,styleTheme,sheetSize);
}

function generateSheet(audioTheme, styleTheme, sheetSize) {
	let count = 0;
	let rainbow = ['#FFADAD', '#FFD6A5', '#FDFFB6', '#CAFFBF', '#9BF6FF', '#A0C4FF', '#BDB2FF', '#FFC6FF', '#FFFFFC'];
	let wrap = document.getElementById('bubble-wrap')

	for (let i = 0;i < sheetSize;i++){
		let btn = document.createElement('button');
		btn.setAttribute('type', 'button');
		btn.setAttribute('id', i);
		btn.setAttribute('audiotheme', assignAudio(audioTheme))
		btn.setAttribute('class', styleTheme);	

		if (i%10 === 0 && parseInt(i.toString().substring(0,1))%2 && audioTheme != 'magnitude') {
			btn.style.marginLeft = '16px'
		}

		if (i%3 === 0 && (i/3)%2 === 0 && audioTheme == 'magnitude') {
			btn.style.marginLeft = '32px'
		} else if(count != 2 && audioTheme == 'magnitude') {
			count++;
		}

		if (audioTheme == 'fun') {
			btn.style.backgroundColor = rainbow[count];

			count++;

			if(count === 7){
				count = 0;
			}			
		}

		btn.addEventListener('click', popBubble);

		if (audioTheme === 'cat'){		
			let cat = document.createElement('i');
			cat.setAttribute('class', 'fa-solid fa-cat');
			btn.appendChild(cat);
		}

		if (audioTheme === 'all'){		
			let all = document.createElement('i');
			all.setAttribute('class', 'fas fa-question');
			btn.appendChild(all);
		}

		wrap.appendChild(btn)
	}
}

function popBubble() {
	let audio = new Audio(`audio/${this.getAttribute('audiotheme')}`);

	audio.play();

	theme = this.getAttribute('class');

	this.setAttribute('class', `${theme}-popped`);
	this.removeEventListener('click', popBubble);
}

function resetPage(selectedTheme,styleTheme,sheetSize) {
	if (!selectedTheme || !styleTheme || !sheetSize){

		let themeButtonToggleGroup = document.getElementById("button-toggle-group").children;

		for (let b = 0;b<themeButtonToggleGroup.length;b++){
			if (themeButtonToggleGroup[b].getAttribute('class').includes('active')){
				el = themeButtonToggleGroup[b];
				break;
			}
		}

		selectedTheme = el.childNodes[1].getAttribute('id');
		styleTheme = el.childNodes[1].getAttribute('styletheme');
		sheetSize = el.childNodes[1].getAttribute('sheetsize');
	}

	
	let childrenLen = document.getElementById("bubble-wrap").children.length

	for(let i = 0; i <= childrenLen; i++){
		let bubble = document.getElementById(i);

		if (bubble)
    		bubble.parentNode.removeChild(bubble);
	}

	if (document.getElementById("bubble-wrap").children.length === 0)
		generateSheet(selectedTheme,styleTheme,sheetSize)
}

/*
 * Handle Audio
*/
function assignAudio(theme) {
	const traditional = ['bubble_crack_pop_2.mp3'];
	const fun = ['bubble_cork_1.mp3','bubble_cork_2.mp3','bubble_crack_pop_1.mp3','bubble_crack_pop_2.mp3','bubble_double_drip_1.mp3','bubble_light_pop_1.mp3','bubble_light_pop_2.mp3','bubble_light_pop_3.mp3','bubble_pop_1.mp3','bubble_pop_2.mp3','bubble_pop_3.mp3','bubble_pop_woosh_1.mp3'];
	const cat = ['kitten_meow_1.mp3','kitten_meow_2.mp3','kitten_meow_3.mp3','long_meow_1.mp3','meow_1.mp3','meow_2.mp3','meow_3.mp3','meow_4.mp3','meow_5.mp3','meow_6.mp3','meow_7.mp3','meow_angry_1.mp3','meow_angry_2.mp3','meow_angry_3.mp3','perfect_meow_1.mp3','purr_meow_1.mp3','purr_meow_2.mp3','purr_meow_3.mp3'];
	const magnitude = ['magnitude_pop_pop.mp3']
	const all = fun.concat(cat).concat(magnitude);
	let audioTheme;

	switch(theme){
		case 'traditional':
			audioTheme = traditional;
			break;
		case 'fun':
			audioTheme = fun;
			break;
		case 'cat':
			audioTheme = cat;
			break;
		case 'magnitude':
			audioTheme = magnitude;
			break;
		case 'all':
			audioTheme = all;
			break;
		default:
			audioTheme = traditional;
			break;
	}

	playAudio = shuffleAudio(audioTheme);

	return playAudio[0];
  }

function shuffleAudio(array) {
	let currentIndex = array.length,  randomIndex;

	// While there remain elements to shuffle.
	while (currentIndex != 0) {

		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [
		array[randomIndex], array[currentIndex]];
	}

	return array;
}
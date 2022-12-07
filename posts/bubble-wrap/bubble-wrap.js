document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    generateSheet('blue','round-button-blue');
  }
};

/*
 * Handle Generating Bubble Wrap
*/
function selectTheme(audioTheme) {
	let styleTheme = document.getElementById(audioTheme).getAttribute('styletheme')
	let selectedTheme = audioTheme || 'blue';

	resetPage(selectedTheme,styleTheme);
}

function generateSheet(audioTheme, styleTheme) {
	for (let i = 0;i < 101;i++){
		let btn = document.createElement('button');
		btn.setAttribute('type', 'button');
		btn.setAttribute('id', i);
		btn.setAttribute('audiotheme', assignAudio(audioTheme))
		btn.setAttribute('class', styleTheme);		
		btn.addEventListener('click', popBubble);

		if (audioTheme === 'cat'){		
			let cat = document.createElement('i');
			cat.setAttribute('class', 'fa-solid fa-cat');
			btn.appendChild(cat);
		}
		
		wrap = document.getElementById("bubble-wrap")
		wrap.appendChild(btn)
	}
}

function popBubble() {
	let audio = new Audio(`audio/${this.getAttribute('audiotheme')}`);

	audio.play();
	this.setAttribute('class', 'round-button-popped');
	this.removeEventListener('click', popBubble);
}

function resetPage(selectedTheme,styleTheme){

	
	console.log(selectedTheme);
	console.log(styleTheme);

	if (!selectedTheme || !styleTheme){
		console.log('in if');

		let themeButtonToggleGroup = document.getElementById("button-toggle-group").children;

		for (let b = 0;b<themeButtonToggleGroup.length;b++){
			if (themeButtonToggleGroup[b].getAttribute('class').includes('active')){
				el = themeButtonToggleGroup[b];
				break;
			}
		}
		selectedTheme = el.getAttribute('id');
		styleTheme = el.getAttribute('audiotheme');

		console.log('el');
		console.log(el);
		console.log(selectedTheme);
		console.log(styleTheme);
	}



	let childrenLen = document.getElementById("bubble-wrap").children.length

	for(let i = 0; i <= childrenLen; i++){
		let bubble = document.getElementById(i);

		if (bubble)
    		bubble.parentNode.removeChild(bubble);
	}
	if (document.getElementById("bubble-wrap").children.length === 0)
		generateSheet(selectedTheme,styleTheme)
}

/*
 * Handle Audio
*/
function assignAudio(theme) {
	const blue = ['bubble_cork_1.mp3','bubble_cork_2.mp3','bubble_crack_pop_1.mp3','bubble_crack_pop_2.mp3','bubble_double_drip_1.mp3','bubble_light_pop_1.mp3','bubble_light_pop_2.mp3','bubble_light_pop_3.mp3','bubble_pop_1.mp3','bubble_pop_2.mp3','bubble_pop_3.mp3','bubble_pop_woosh_1.mp3'];
	const cat = ['kitten_meow_1.mp3','kitten_meow_2.mp3','kitten_meow_3.mp3','long_meow_1.mp3','meow_1.mp3','meow_2.mp3','meow_3.mp3','meow_4.mp3','meow_5.mp3','meow_6.mp3','meow_7.mp3','meow_angry_1.mp3','meow_angry_2.mp3','meow_angry_3.mp3','perfect_meow_1.mp3','purr_meow_1.mp3','purr_meow_2.mp3','purr_meow_3.mp3'];
	const purple = blue.concat(cat);
	let audioTheme;

	switch(theme){
		case 'blue':
			audioTheme = blue;
			break;
		case 'cat':
			audioTheme = cat;
			break;
		case 'purple':
			audioTheme = purple;
			break;
		default:
			audioTheme = blue;
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
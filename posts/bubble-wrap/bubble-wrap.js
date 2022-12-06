document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    generateSheet();
  }
};

function generateSheet() {

	for (let i = 0;i < 101;i++){
		let btn = document.createElement('input');
		btn.setAttribute('type', 'button');
		btn.setAttribute('id', i);
		btn.setAttribute('class', 'round-button');		
		btn.addEventListener('click', popBubble);
		
		wrap = document.getElementById("bubble-wrap")
		wrap.appendChild(btn)
	}
}

function popBubble() {
	console.log('pop pop');

	let audio = new Audio(`audio/${assignAudio()}`);

	audio.play();
	this.setAttribute('class', 'round-button-popped');
}

function resetPage(){
	for(let i = 0; i < 12; i++){
		let row = document.getElementById(i);

		if (row)
    	row.parentNode.removeChild(row);
	}
}

function assignAudio() {
	const bubbles = ['bubble_cork_1.mp3','bubble_cork_2.mp3','bubble_crack_pop_1.mp3','bubble_crack_pop_2.mp3','bubble_double_drip_1.mp3','bubble_light_pop_1.mp3','bubble_light_pop_2.mp3','bubble_light_pop_3.mp3','bubble_pop_1.mp3','bubble_pop_2.mp3','bubble_pop_3.mp3','bubble_pop_woosh_1.mp3'];
	const meows = [];

	playAudio = shuffleAudio(bubbles);

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
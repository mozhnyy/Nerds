"use strict";

// console.log(userNumber);

// СРАБАТЫВАЕТ 3 РАЗА
for (let x = 0; x < 3; x++) {
	let randomNumber = getRandomInt(1, 3);
	let userNumber = prompt("Угадай заданное число");
	// let value = (userNumber = randomNumber);
	// ФУНКЦИЯ
	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}
	if (userNumber != randomNumber) {
		alert("А вот и не правильно!");
	} else {
		alert("Угадал" + userNumber);
	}

	// if (!value) break;
}

"use strict";
// Mobile menu
var menu = (function () {
	var hamburger = document.querySelector(".hamburger"),
		menu = document.querySelector(".header__wrapper");
	hamburger.addEventListener("click", function () {
		this.classList.toggle("is-active");
		menu.classList.toggle("header__wrapper-open");
	});
})();
// call menu
menu;

// Проверка нахождения слайдера на нужной странице
if (document.body.classList.contains("index-body")) {
	// Слайдер
	const headerSlider = (function () {
		const slider = document.querySelector(".slider"),
			sliderDots = document.querySelectorAll(".slider-controls__btn");
		sliderDots.forEach((dot, dotIndex) => {
			dot.addEventListener("click", () => {
				document
					.querySelector(
						".slider-controls .slider-controls__btn-current"
					)
					.classList.remove("slider-controls__btn-current");
				dot.classList.add("slider-controls__btn-current");
				slider.style.transform =
					"translate(" + dotIndex * -33.33 + "%)";
			});
		});
	})();
	// Вызов слайдера
	headerSlider;
}

const uiSlider = document.querySelector("#slider");
if (uiSlider) {
	noUiSlider.create(uiSlider, {
		start: [0, 3000],
		connect: true,
		range: {
			min: 0,
			max: 5000,
		},
	});
	const inputNumberStart = document.querySelector(".range__input--start");
	const inputNumberEnd = document.querySelector(".range__input--end");

	uiSlider.noUiSlider.on("update", function (values, handle) {
		var value = values[handle];

		if (handle) {
			inputNumberEnd.value = Math.round(value);
		} else {
			inputNumberStart.value = Math.round(value);
		}
	});

	inputNumberStart.addEventListener("change", function () {
		uiSlider.noUiSlider.set([null, this.value]);
	});
	inputNumberEnd.addEventListener("change", function () {
		uiSlider.noUiSlider.set([null, this.value]);
	});
}

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
			sliderDots = document.querySelectorAll("slider-controls__btn");
		sliderDots.forEach((dot, dotIndex) => {
			dot.addEventListener("click", () => {
				document
					.querySelector(
						"slider-controls .slider-controls__btn-current"
					)
					.classList.remove("slider-controls__btn-current");
				dot.classList.add("slider-controls__btn-current");
				slider.style.transform = "translate(" + dotIndex * -33.33 + "%";
			});
		});
	})();
	// Call Slider
	headerSlider;
}

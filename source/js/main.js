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
			sliderDots = document.querySelectorAll(".slider-controls__btn"),
			sliderItemImage = document.querySelectorAll(".slider__item");
		sliderDots.forEach((dot, dotIndex) => {
			dot.addEventListener("click", (event) => {
				console.log(event.currentTarget);
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

// Карта на сайте
ymaps.ready(init); // вызов функции
//events
function init() {
	// определение функции
	var map = new ymaps.Map("map", {
		//создаем новый конструктор для карты
		center: [59.9386, 30.3231], //определяем центр карты (http://webmap-blog.ru/tools/getlonglat-ymap2.html)
		zoom: 17, // определяем уровеь масштабирования
		controls: ["zoomControl"], // выбираем какие элементы управления отоброжать
		behaviors: ["drag"], // отключаем масштабирование - включаем перетаскивание
	});
	//Добавляем всплывающую подсказку (hint)
	var placemark = new ymaps.Placemark(
		[59.9386, 30.3231],
		{
			hintContent: "NERDS", //контент хинта
		},
		//изображение хинта
		{
			iconLayout: "default#image", //название
			iconImageHref: "app-images/marker.png", //источник
			iconImageSize: [238, 190], //размер
			iconImageOffset: [-40, -140], //координаты смещения
		}
	);
	//вызываем метку с помощью коллекции geoObjects
	map.geoObjects.add(placemark);
}

// modals;
// Модальные окна
var modals = (function () {
	var modal = document.querySelector(".modal"),
		modalOverlay = document.querySelector(".overlay"),
		modalForm = document.querySelector(".modal-form"),
		modalCall = document.querySelector(".contacts__btn"),
		modalExit = document.querySelector(".modal__exit");

	// Открытие окна
	function openModalFunc() {
		event.preventDefault();
		modal.classList.add("fadeInDown");
		setTimeout(function () {
			return modal.classList.remove("fadeInDown");
		}, 1000);
		modalOverlay.style.display = "flex";
		document.body.style.overflow = "hidden";
	}
	// Закрытие окна
	function closeModalFunc() {
		modal.classList.add("fadeOut");
		setTimeout(function () {
			modalOverlay.style.display = "none";
			modal.classList.remove("fadeOut");
			document.body.style.overflow = "auto";
		}, 1000);
	}
	// Закрытие окна при клике на пустую область
	function outsideClick(event) {
		if (event.target === modalOverlay) {
			modalOverlay.style.display = "none";
			document.body.style.overflow = "auto";
		}
	}
	// Закрытие окна при клике на клавишу Escape
	function outsideKeypress(event) {
		if (event.keyCode == 27) {
			modalOverlay.style.display = "none";
			document.body.style.overflow = "auto";
		}
	}
	// Список событий
	modalCall.addEventListener("click", openModalFunc);
	modalExit.addEventListener("click", closeModalFunc);
	window.addEventListener("click", outsideClick);
	window.addEventListener("keydown", outsideKeypress);
	// Событие отправки данных с формы
	modalForm.addEventListener("submit", function (event) {
		event.preventDefault();
		if (
			modalForm.querySelector('[type="text"]').value === "" ||
			modalForm.querySelector('[type="email"]').value === ""
		) {
			modalForm.querySelector('[type="text"]').classList.add("error");
			modalForm.querySelector('[type="email"]').classList.add("error");
			setTimeout(function () {
				modalForm
					.querySelector('[type="text"]')
					.classList.remove("error");
				modalForm
					.querySelector('[type="email"]')
					.classList.remove("error");
				modalForm.querySelector('[type="text"]').focus();
			}, 2000);
		}
	});
})();
// Вызов модального окна
modals;

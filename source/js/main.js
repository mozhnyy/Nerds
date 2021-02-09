$(function () {
	// HEADER SLIDER
	// 1. Проверяем существует ли элемент на странице?
	if ($(".header-slider").length) {
		//2. Если условие верно, начинаем писать нужный(необходимый)  код

		// 2.1 Создаем/Объявляем переменную и сохраняем в нее наш слайдер(элемент)
		let $headerSlider = $(".header-slider");
		// 2.2 Создаем/Объявляем переменную и сохраняем в нее объект с параметрами для слайдера

		let options = {
			arrows: false,
			dots: true,
			infinite: false,
			appendDots: $headerSlider.next(),
			slidesToShow: 1,
			slidesToScroll: 1,
			variableWidth: true,
		};
		$headerSlider.slick(options);
	}
});

$(document).ready(function(){
    $('.carousel_inner').slick({
        slidesToShow: 1,
        adaptiveHeight: true,
        speed: 800,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover:true,
    });
    $("#change-slider").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор бока с атрибута href
		let id  = $(this).attr('href'),
		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		//анимируем переход на расстояние - top за 400 мс
		$('body,html').animate({scrollTop: top}, 400);
	});
  });
// functions for links
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
    $("#menu_").on("click","a", function (event) {
      event.preventDefault();
      let id  = $(this).attr('href'),
        top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 400);
    });
    $("#change-slider").on("click","a", function (event) {
		event.preventDefault();
    let id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 500);

	});
});
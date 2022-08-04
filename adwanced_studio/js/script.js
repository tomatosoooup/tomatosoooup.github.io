$(document).ready(function () {
  // Переход по якорям сайта
  $("#arrow__container, .links, .nav, .nav-2").on(
    "click",
    "a",
    function (event) {
      event.preventDefault();
      let id = $(this).attr("href");
      let top = $(id).offset().top;
      $("body,html").animate({ scrollTop: top }, 1500);
    }
  );
  // Переключение меню бургера
  $(".menu-burger").click(function (event) {
    $(".menu-burger, .links, .logo-popup").toggleClass("active");
    $("body").toggleClass("lock");
  });
});

// Инициализация слайдера
$(".carousel_inner")
  .not(".slick-initialized")
  .slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    speed: 800,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease",
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

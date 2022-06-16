// Подключение 3-го слайдера с отзывами
$(".reviews_inner").slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  speed: 800,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
// Конец слайдера с отзывами

if ($(window).width() <= 768) {
  //это карусель с лицензиями и сертификатами
  $(".license-container").removeClass("col-lg-5 col-md-5 col-tb-5 col-sm-5");
  $(".licenses-wrapper").addClass("carousel");
  $(".licenses-inner").addClass("carousel_inner");
  $(".license-container").addClass("carousel_item");
  $(".carousel_inner").not(".slick-initialized").slick({
    slidesToShow: 1,
    speed: 800,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    variableWidth: true,
  });
  // это карусель с вопросами и ответами
  $(".questions").addClass("carousel");
  $(".questions_inner").addClass("carousel_inner questions_inner_2");
  $(".question").addClass("question_item_2");
  $(".questions_inner_2").removeClass("questions_inner");
  $(".question_item_2").removeClass("question");
  $(".carousel_inner").not(".slick-initialized").slick({
    slidesToShow: 2,
    speed: 800,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    variableWidth: true,
    adaptiveHeight: true,
    arrows: false,
  });

  // Удаление или добавление пунктов услуг
  if ($(window).width() <= 600) {
    let options_li = document.getElementById("li_container").children;
    let items = [].slice.call(options_li);
    $(items.slice(4)).addClass("disable");
  } else {
    $(".flex_li").removeClass("disable");
  }
  // Конец удаления подключения пунктов
}
$(document).ready(function () {
  // Включение меню бургера при нажатии на кнопку
  $(".menu-burger").click(function (event) {
    $(".menu-burger, .menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
// Здесь я подключаю или отключаю слайдеры, в зависимости от размера экрана
$(window).resize(function (event) {
  let sliderAdd = true;
  let sliderClose = true;
  if ($(window).width() <= 768) {
    sliderClose = false;

    if (sliderClose == false) {
      let sliders = {
        1: { slider: "#slider_1", class: "carousel_inner" },
        2: { slider: "#slider_2", class: "carousel_inner" },
      };
      $.each(sliders, function () {
        $(".licenses-wrapper").addClass("carousel");
        $(".licenses-inner").addClass("carousel_inner");
        $(".license-container").addClass("carousel_item");
        $(".license-container").removeClass(
          "col-lg-5 col-md-5 col-tb-5 col-sm-5"
        );
        // это карусель с лицензиями-сертификатами (ниже)
        $(".questions_inner").addClass("carousel_inner questions_inner_2");
        $(".questions_inner_2").removeClass("questions_inner");
        $(".question").addClass("question_item_2");
        $(".question_item_2").removeClass("question");
        $(this.slider).not(".slick-initialized").slick({
          slidesToShow: 1,
          speed: 800,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 5000,
          pauseOnHover: true,
          variableWidth: true,
        });
        $(".questions_inner_2 button").remove();
        // это карусель с вопросами и ответами (ниже)
        $(".questions").addClass("carousel");
        $(this.slider).not(".slick-initialized").slick({
          slidesToShow: 1,
          speed: 800,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 5000,
          pauseOnHover: true,
          variableWidth: true,
          arrows: false,
        });
      });
    }
  }

  if ($(window).width() > 768) {
    sliderAdd = false;

    if (sliderAdd == false) {
      let sliders = {
        1: { slider: "#slider_1" },
        2: { slider: "#slider_2" },
      };
      $.each(sliders, function () {
        if ($(this.slider).hasClass("carousel_inner")) {
          $(this.slider).slick("unslick");
        }
      });
      // первый слайдер
      $(".licenses-wrapper").removeClass("carousel");
      $(".licenses-inner").removeClass("carousel_inner");
      $(".license-container").removeClass("carousel_item");
      $(".license-container").addClass("col-lg-5 col-md-5 col-tb-5 col-sm-5");
      // второй слайдер
      $(".questions").removeClass("carousel");
      $(".questions_inner_2").addClass("questions_inner");
      $(".questions_inner").removeClass("questions_inner_2 carousel_inner");
      $(".question_item_2").addClass("question");
      $(".question").removeClass("question_item_2");
    }
  }
  // Конец подключения слайдеров
  // Удаление или добавление пунктов услуг
  if ($(window).width() <= 600) {
    let options_li = document.getElementById("li_container").children;
    let items = [].slice.call(options_li);
    $(items.slice(4)).addClass("disable");
  } else {
    $(".flex_li").removeClass("disable");
  }
  // Конец удаления подключения пунктов
});

const widthOnStart = window.innerWidth;
if (widthOnStart < 768) {
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
}
$(document).ready(function () {
  $(".menu-burger").click(function (event) {
    $(".menu-burger, .menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
});

$(window).resize(function (event) {
  // let width = window.innerWidth;
  let sliderAdd = true;
  let sliderClose = true;
  if ($(window).width() < 768) {
    sliderClose = false;
    console.log(sliderClose + " " + "now add");

    if (sliderClose == false) {
      console.log("Now I should add sliders");
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

  if ($(window).width() >= 768) {
    sliderAdd = false;
    console.log(sliderAdd + " " + "now close");

    if (sliderAdd == false) {
      console.log("Now I should close sliders");
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
});

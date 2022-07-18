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
// Подключение слайдера с сертификатами
$(".carousel_inner")
  .not(".slick-initialized")
  .slick({
    slidesToShow: 4,
    centerMode: true,
    speed: 800,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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
// Конец подключения слайдера с сертификатами
if ($(window).width() <= 768) {
  // это карусель с вопросами и ответами
  $(".questions").addClass("carousel");
  $(".questions_inner").addClass("carousel_inner_2 questions_inner_2");
  $(".question").addClass("question_item_2");
  $(".questions_inner_2").removeClass("questions_inner");
  $(".question_item_2").removeClass("question");
  $(".carousel_inner_2").not(".slick-initialized").slick({
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
    $(".menu-burger, .menu, .logo").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
// это плавный переход ко всем слайдам по нажатию пункта меню
$("#menu").on("click", "a", function (event) {
  event.preventDefault();
  let id = $(this).attr("href");
  let top = $(id).offset().top;
  $("body,html").animate({ scrollTop: top }, 1500);
});

// Здесь я подключаю или отключаю слайдеры, в зависимости от размера экрана
$(window).resize(function (event) {
  if ($(window).width() <= 768) {
    // это карусель с вопросами и ответами
    $(".questions").addClass("carousel");
    $(".questions_inner").addClass("carousel_inner_2 questions_inner_2");
    $(".question").addClass("question_item_2");
    $(".questions_inner_2").removeClass("questions_inner");
    $(".question_item_2").removeClass("question");
    $(".carousel_inner_2").not(".slick-initialized").slick({
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
  if ($(window).width() > 768) {
    $(".questions").removeClass("carousel");
    $(".questions_inner_2").addClass("questions_inner");
    $(".questions_inner").removeClass("questions_inner_2 carousel_inner");
    $(".question_item_2").addClass("question");
    $(".question").removeClass("question_item_2");
    $(".carousel_inner_2").slick("unslick");
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

function ShowThanksRewiev() {
  Toastify({
    text: "Дякую за ваш відгук",
    duration: 3000,
    destination: "index.html",
    newWindow: false,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
}

function ShowThanksTelegram() {
  Toastify({
    text: "Ваша заявка прийнята!",
    duration: 3000,
    destination: "index.html",
    newWindow: false,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
}

$(":input").inputmask();

$("#id_phone").inputmask({ mask: "+99 (999) 999 9999" });
$("#id_phone_rewiev").inputmask({ mask: "+99 (999) 999 9999" });
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
    slidesToShow: 3,
    centerMode: true,
    speed: 800,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    variableWidth: true,
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
    $(
      ".menu-burger, .menu, .logo, .logo-2, .leave_application, .leave_rewiev"
    ).toggleClass("active");
    $("body").toggleClass("lock");
  });
});
// это плавный переход ко всем слайдам по нажатию пункта меню
$("#menu, .leave_rewiev, .leave_application").on(
  "click",
  "a",
  function (event) {
    event.preventDefault();
    let id = $(this).attr("href");
    let top = $(id).offset().top - 70;
    $("body,html").animate({ scrollTop: top }, 1500);
    $(
      ".menu-burger, .menu, .logo, .logo-2, .leave_application, .leave_rewiev"
    ).removeClass("active");
    $("body").removeClass("lock");
  }
);

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
  let name = document.querySelector("#id_name_rewiev");
  let comment = document.querySelector("#id_user_text");
  let phone = document.querySelector("#id_phone_rewiev");
  if (name.value && comment.value && phone.value) {
    Toastify({
      text: "Дякую за ваш відгук",
      duration: 3000,
      destination: "{% url 'mainpage' %}",
      newWindow: true,
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
}

function ShowThanksTelegram() {
  let name = document.querySelector("#id_name");
  let phone = document.querySelector("#id_phone");
  let text = document.querySelector("#id_text");
  if (name.value && phone.value && text.value) {
    Toastify({
      text: "Ваша заявка прийнята!",
      duration: 3000,
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
}

$(window).resize(function (event) {
  let photo = document.getElementById("photo");
  let newWidth = window.innerWidth;
  let newHeight = window.innerHeight;
  if (newHeight < 600 && newWidth > 992) {
    photo.style.height = "500px";
  }
  if (newHeight < 500 && newWidth > 992) {
    photo.style.height = "400px";
  }
  if (newHeight > 600) {
    photo.style.height = "600px";
  }
  if (newWidth < 992) {
    photo.style.height = "150px";
  }
});

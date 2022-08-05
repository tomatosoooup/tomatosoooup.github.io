$(document).ready(function () {
  // Переход по якорям сайта
  $(".links").on("click", "a", function (event) {
    event.preventDefault();
    let id = $(this).attr("href");
    let top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
    $(".menu-burger, .links, .logo-popup ").toggleClass("active");
    $("body").toggleClass("lock");
  });

  $("#arrow__container,.nav, .nav-2").on("click", "a", function (event) {
    event.preventDefault();
    let id = $(this).attr("href");
    let top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });

  // Переключение меню бургера
  $(".menu-burger").click(function (event) {
    $(".menu-burger, .links, .logo-popup ").toggleClass("active");
    $("body").toggleClass("lock");
  });

  $(".sub_menu_link").on("click", function () {
    // Смена флагов местами
    let current = $(".menu_link").find("img").attr("src");
    let clicked = $(this).find("img").attr("src");
    $(this).find("img").attr("src", current);
    $(".menu_link").find("img").attr("src", clicked);
  });

  // Получение значений флагов
  $(".sub_menu_list").on("click", "a", function (e) {
    e.preventDefault();
    let language = $(this).attr("href");
    if (language == "#USA") {
      $(".studio__inner p").html(
        "Creation of digital products <br> that transform business"
      );
      let links = $(".links");
      let all_li = links.find("a").find("li");
      $(all_li[0]).html("Main");
      $(all_li[1]).html("Portfolio");
      $(all_li[2]).html("Options");
      $(all_li[3]).html("Contacts");
      $(all_li[4]).html("Connect with us");

      // Значения ссылок для опредиления языка
      let current_href = $(".menu_link").attr("href");
      let clicked_href = $(this).attr("href");
      // Смена ссылок
      $(".menu_link").attr("href", clicked_href);
      $(this).attr("href", current_href);
    }

    if (language == "#UKR") {
      $(".studio__inner p").html(
        "Створення цифрових продуктів, <br> що трансформують бізнес"
      );
      let links = $(".links");
      let all_li = links.find("a").find("li");
      $(all_li[0]).html("Головна");
      $(all_li[1]).html("Портфоліо");
      $(all_li[2]).html("Послуги");
      $(all_li[3]).html("Контакти");
      $(all_li[4]).html("Зв'язатися з нами");

      // Значения ссылок для опредиления языка
      let current_href = $(".menu_link").attr("href");
      let clicked_href = $(this).attr("href");
      // Смена ссылок
      $(".menu_link").attr("href", clicked_href);
      $(this).attr("href", current_href);
    }

    if (language == "#RU") {
      $(".studio__inner p").html(
        "Створення цифрових продуктів, що трансформують бізнес"
      );
      let links = $(".links");
      let all_li = links.find("a").find("li");
      $(all_li[0]).html("Main");
      $(all_li[1]).html("Portfolio");
      $(all_li[2]).html("Options");
      $(all_li[3]).html("Contacts");
      $(all_li[4]).html("Connect with us");

      // Значения ссылок для опредиления языка
      let current_href = $(".menu_link").attr("href");
      let clicked_href = $(this).attr("href");
      // Смена ссылок
      $(".menu_link").attr("href", clicked_href);
      $(this).attr("href", current_href);
    }
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

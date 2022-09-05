$(document).ready(function () {
  $("#id_username").parent().addClass("col-lg-3 col-md-3 col-tb-3 col-sm-3");
  $("#id_user_mail").parent().addClass("col-lg-8 col-md-8 col-tb-8 col-sm-8");
  // Переход по якорям сайта
  $(".links").on("click", "a", function (event) {
    event.preventDefault();
    let id = $(this).attr("href");
    let top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
    if ($(".menu-burger").hasClass("active")) {
      $(".menu-burger, .links, .logo-popup").toggleClass("active");
      $("body").toggleClass("lock");
    }
  });

  if ($(window).width() < 769) {
    // Инициализация слайдера №2
    $(".carousel_inner_2").not(".slick-initialized").slick({
      centerMode: true,
      speed: 800,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
    const button = $(".feedback");
    let place = $(".append-here-2");
    button.appendTo(place);
  } else {
    let place2 = $(".append-here");
    button.appendTo(place2);
  }

  $("#arrow__container,.nav, .nav-2, .feedback").on(
    "click",
    "a",
    function (event) {
      event.preventDefault();
      let id = $(this).attr("href");
      let top = $(id).offset().top;
      $("body,html").animate({ scrollTop: top }, 1500);
    }
  );

  $("#choosen").val("Не вказано");

  $("#choosing").on("change", function (e) {
    let value = $("#choosing option:selected").html();
    $("#choosen").val(value);
  });

  // Переключение меню бургера
  $(".menu-burger").click(function (event) {
    $(".menu-burger, .links, .logo-popup, .pulse, .block").toggleClass(
      "active"
    );
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
    let language = $(this).attr("href");
    if (language == "#USA") {
      $(".studio__inner p").html(
        "Creation of digital products <br> that transform business"
      );
      let links = $(".links");
      let all_li = links.find("a").find("li");
      $(all_li[0]).html("Main");
      $(all_li[1]).html("Portfolio");
      $(all_li[2]).html("Services");
      $(all_li[3]).html("Contacts");
      $(all_li[4]).html("Connect with us");
      $(".portfolio h4").html("Work examples");
      $(".portfolio h2").html("Our portfolio");
      $(".portfolio h3").html(
        "We approach the creation of each site individually"
      );
      $(".options span").html("Development");
      $(".options h2").html("Services");
      $(".options p").html(
        "Choose the required service and we will start working"
      );
      $(".feedback a").html("Connect with us");
      // Услуги
      let services = $(".options-2");
      let services_item = services.find("div.option");
      $(services_item[0]).find("h3").html("Web development");
      $(services_item[0])
        .find("p")
        .html(
          "We make the full functionality of the site convenient for the client to use"
        );

      $(services_item[1])
        .find("p")
        .html(
          "We develop a design, making the site enjoyable for eye and desire to return again"
        );

      $(services_item[2]).find("h3").html("Mobile development");
      $(services_item[2])
        .find("p")
        .html(
          "We do full site functionality, for convenient work and convenience the client"
        );
      // Конец услуг
      // Шаги работы
      $(".steps h4").html("How we work");
      $(".steps h2").html("Work sequence");
      let schedule = $(".schedule-wrapper");
      let schedule_item = schedule.find("div.text");
      $(schedule_item[0]).find("span").html("Connecting with us");
      $(schedule_item[0])
        .find("p")
        .html(
          "You contact us by phone or leave an application, after which we call back"
        );
      $(schedule_item[1])
        .find("span")
        .html("Discussion and compilation of T.S");
      $(schedule_item[1])
        .find("p")
        .html(
          "Listening to your wishes, we ask additional questions, express our vision and we fix the result"
        );
      $(schedule_item[2]).find("span").html("Signing the contract");
      $(schedule_item[2])
        .find("p")
        .html(
          "After drawing up the terms of reference, we conclude an official contract that has legal force"
        );
      $(schedule_item[3])
        .find("span")
        .html("Submission of work and transfer of access");
      $(schedule_item[3])
        .find("p")
        .html(
          "After completion of the work, we transfer all files to you in original formats, access to administrative panel and all materials that have been developed."
        );
      // Конец шагов работы
      // Контактная форма
      $(".application-text h2").html("Contacts");
      $(".application-text h3").html("Offer your ideas");
      $(".application-form h3").html("Write to us");
      $(".form")
        .find("label.col-lg-3")
        .find("input")
        .attr("placeholder", "Your name");
      $(".form")
        .find("label.col-lg-8")
        .find("input")
        .attr("placeholder", "Your email");
      $("textarea").attr(
        "placeholder",
        "How would you like to see your site ?"
      );
      $(".form-button").html("Send order");
      // Конец контактной формы

      // Значения ссылок для опредиления языка
      let current_href = $(".menu_link").attr("href");
      let clicked_href = $(this).attr("href");
      // Смена ссылок
      $(".menu_link").attr("href", clicked_href);
      $(this).attr("href", current_href);
      this.preventDefault();
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

      $(".portfolio h4").html("Приклади готових робіт");
      $(".portfolio h2").html("Наше портфоліо");
      $(".portfolio h3").html(
        "Над створенням кожного сайту ми підходимо індивідуально"
      );
      $(".options span").html("Розробка");
      $(".options h2").html("Послуги");
      $(".options p").html("Вибери потрібну послугу і ми почнемо працювати");
      $(".feedback a").html("Зв'язатися з нами");
      // Услуги
      let services = $(".options-2");
      let services_item = services.find("div.option");
      $(services_item[0]).find("h3").html("Веб розробка");
      $(services_item[0])
        .find("p")
        .html(
          "Ми робимо повний функціонал сайту зручним для користування клієнта"
        );
      $(services_item[1])
        .find("p")
        .html(
          "Розробляємо дизайн, роблячи сайт приємним для очей та бажанням повернутися знову"
        );

      $(services_item[2]).find("h3").html("Моб. програми");
      $(services_item[2])
        .find("p")
        .html(
          "Робимо зручний концепт програми для зручностей користування на смартфоні"
        );
      // Конец услуг
      // Шаги работы
      $(".steps h4").html("Як ми працюємо");
      $(".steps h2").html("Послідовність роботи");
      let schedule = $(".schedule-wrapper");
      let schedule_item = schedule.find("div.text");
      $(schedule_item[0]).find("span").html("Зв'язок з нами");
      $(schedule_item[0])
        .find("p")
        .html(
          "Ви зв'язуєтеся з нами по телефону або залишаєте заявку, після чого ми передзвонюємо"
        );
      $(schedule_item[1]).find("span").html("Обговорення та складання Т.З");
      $(schedule_item[1])
        .find("p")
        .html(
          "Вислуховуючи ваші побажання, ми ставимо додаткові питання, висловлюємо своє бачення та фіксуємо підсумок"
        );
      $(schedule_item[2]).find("span").html("Підписання договору");
      $(schedule_item[2])
        .find("p")
        .html(
          "Після складання технічного завдання ми укладаємо офіційний договір, що має юридичну силу"
        );
      $(schedule_item[3])
        .find("span")
        .html("Здача роботи та передача доступів");
      $(schedule_item[3])
        .find("p")
        .html(
          "Після завершення робіт ми передаємо вам усі файли у вихідних форматах, доступи до адміністративної панелі та всі матеріали, які були розроблені"
        );
      // Конец шагов работы
      // Контактная форма
      $(".application-text h2").html("Контакти");
      $(".application-text h3").html("Запропонуйте свої ідеї");
      $(".application-form h3").html("Напиши нам");
      $(".form")
        .find("label.col-lg-3")
        .find("input")
        .attr("placeholder", "Ім'я");
      $(".form")
        .find("label.col-lg-8")
        .find("input")
        .attr("placeholder", "Електронна пошта");
      $("textarea").attr("placeholder", "Яким би ви хотіли бачити ваш сайт ?");
      $(".form-button").html("Надіслати замовлення");
      // Конец контактной формы

      // Значения ссылок для опредиления языка
      let current_href = $(".menu_link").attr("href");
      let clicked_href = $(this).attr("href");
      // Смена ссылок
      $(".menu_link").attr("href", clicked_href);
      $(this).attr("href", current_href);
      this.preventDefault();
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

$(window).resize(function () {
  if (window.innerWidth < 768) {
    $(".carousel_inner_2").not(".slick-initialized").slick({
      centerMode: true,
      speed: 800,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    });

    let place = $(".append-here-2");
    button.appendTo(place);
  } else {
    if ($(".carousel_inner_2").hasClass("slick-initialized")) {
      $(".carousel_inner_2").slick("unslick");
    }
    let place2 = $(".append-here");
    button.appendTo(place2);
  }
});

function ShowThanksTelegram() {
  Toastify({
    text: "Ваша заявка прийнята!",
    duration: 2500,
    newWindow: false,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d,#8AC248)",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
}

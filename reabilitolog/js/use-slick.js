$(document).ready(function () {
  $(".carousel")
    .not(".slick-initialized")
    .slick({
      centerMode: true,
      centerPadding: "0px",
      speed: 800,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      lazyLoad: "ondemand",
      adaptiveHeight: true,
      variableWidth: true,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
          },
        },
      ],
    });
  resizeSlick();

  $(window).resize(function () {
    resizeSlick();
  });

  function resizeSlick() {
    if ($(window).width() >= 992) {
      const append_arrows = $(".append-arrows");
      let arrow1 = $(".slick-prev");
      let arrow2 = $(".slick-next");
      arrow1.appendTo(append_arrows);
      arrow2.appendTo(append_arrows);
    } else {
      const carousel = $(".carousel.pt-4");
      let arrow1 = $(".slick-prev");
      let arrow2 = $(".slick-next");
      arrow1.appendTo(carousel);
      arrow2.appendTo(carousel);
    }
  }
});

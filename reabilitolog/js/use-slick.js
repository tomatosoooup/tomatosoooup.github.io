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
});

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
      // slidesToShow: 1,
      // slidesToScroll: 1,
      lazyLoad: "ondemand",
      adaptiveHeight: true,
      variableWidth: true,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
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

  changeArrowsInner();

  $(window).resize(function () {
    if ($(window).width() > 1) {
      changeArrowsInner();
    }
  });

  function changeArrowsInner() {
    $(".slick-arrow.slick-next").html(
      '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    );
    $(".slick-arrow.slick-prev").html(
      '<i class="fa fa-angle-left" aria-hidden="true"></i>'
    );
  }
});

$(document).ready(function () {
  $(".menu-burger").click(function (event) {
    $(".menu-burger, .menu").toggleClass("active");
    $("body").toggleClass("lock");
  });

  $(window).resize(function (event) {
    let width = window.innerWidth;
    let licenses_wrapper = document.querySelector(".licenses-wrapper");
    if (width > "768") {
      let html = [
        '<div class="licenses-inner col-lg-10 col-md-10 col-tb-10 col-sm-10">',
        '<div class="license-container">',
        '<img src="images/sertificate.png" alt="">',
        "</div>",
        '<div class="license-container">',
        '<img src="images/sertificate.png" alt="">',
        "</div>",
        '<div class="license-container">',
        '<img src="images/sertificate.png" alt="">',
        "</div>",
        '<div class="license-container">',
        '<img src="images/sertificate.png" alt="">',
        "</div>",
        "</div>",
      ].join("");
      licenses_wrapper.innerHTML = "";
      licenses_wrapper.innerHTML = html;
    } else {
    }
  });
  $(".carousel_inner").slick({
    slidesToShow: 1,
    speed: 800,
    variableWidth: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  });
});

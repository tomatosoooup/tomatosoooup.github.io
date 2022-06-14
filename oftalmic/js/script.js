const widthOnStart = window.innerWidth;
if (widthOnStart <= "768") {
  $(".license-container").removeClass("col-lg-5 col-md-5 col-tb-5 col-sm-5");
  $(".licenses-wrapper").addClass("carousel");
  $(".licenses-inner").addClass("carousel_inner");
  $(".license-container").addClass("carousel_item");
  let allowed = true;
  if (widthOnStart > "600") {
    allowed = true;
  } else {
    allowed = false;
  }
  $(".carousel_inner").slick({
    slidesToShow: 1,
    speed: 800,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    variableWidth: allowed,
  });
}
$(document).ready(function () {
  $(".menu-burger").click(function (event) {
    $(".menu-burger, .menu").toggleClass("active");
    $("body").toggleClass("lock");
  });

  $(window).resize(function (event) {
    let width = window.innerWidth;
    if (width > "768") {
      html = [
        '<div class="licenses-inner col-lg-10 col-md-10 col-tb-9 col-sm-9">',
        '<div class="license-container col-lg-5 col-md-5 col-tb-5 col-sm-5"><img src="images/sertificate.png" alt=""></div>',
        '<div class="license-container col-lg-5 col-md-5 col-tb-5 col-sm-5"><img src="images/sertificate.png" alt=""></div>',
        '<div class="license-container col-lg-5 col-md-5 col-tb-5 col-sm-5"><img src="images/sertificate.png" alt=""></div>',
        '<div class="license-container col-lg-5 col-md-5 col-tb-5 col-sm-5"><img src="images/sertificate.png" alt=""></div>',
        "</div>",
      ].join("");
      document.querySelector(".licenses-wrapper").innerHTML = "";
      document.querySelector(".licenses-wrapper").innerHTML = html;
    } else {
      let width = window.innerWidth;
      $(".license-container").removeClass(
        "col-lg-5 col-md-5 col-tb-5 col-sm-5"
      );
      $(".licenses-wrapper").addClass("carousel");
      $(".licenses-inner").addClass("carousel_inner");
      $(".license-container").addClass("carousel_item");
      let allowed = true;
      if (width > "600") {
        allowed = true;
      } else {
        allowed = false;
      }
      $(".carousel_inner").slick({
        slidesToShow: 1,
        speed: 800,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        variableWidth: allowed,
      });
    }
  });
});

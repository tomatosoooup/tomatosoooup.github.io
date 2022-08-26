// $(window).on("load", function () {
//   $(".preloader").fadeOut().end().delay(400).fadeOut("slow");
//   $("body").toggleClass("lock");
// });

$(document).ready(function () {
  // $("body").toggleClass("lock");
  $(window).resize(function () {
    const img = $(".take");
    if ($(window).width() >= 576) {
      const div = $(".button");
      img.appendTo(div);
    } else {
      const div2 = $(".wrapper");
      img.appendTo(div2);
    }
  });

  const img = $(".take");
  if ($(window).width() >= 576) {
    const div = $(".button");
    img.appendTo(div);
  } else {
    const div2 = $(".wrapper");
    img.appendTo(div2);
  }

  $(".accordion-button").click(function () {
    $(this).toggleClass("collapsed");
    let val = "#" + $(this).attr("value");
    $(val).toggleClass("show");
  });
});

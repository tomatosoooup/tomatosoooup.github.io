$(window).on("load", function () {
  $(".preloader").fadeOut().end().delay(400).fadeOut("slow");
});

$(document).ready(function () {
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
});

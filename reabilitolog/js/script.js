// $(window).on("load", function () {
//   $(".preloader").fadeOut().end().delay(400).fadeOut("slow");
//   $("body").toggleClass("lock");
// });

const img = $(".take");
const insert = $(".insert");
const terms = $(".terms");
const insert_button = $(".insert-button");
const button_move = $(".button-move");
const logo = $("#logo").parent();
const div = $(".button");
const div2 = $(".wrapper");

$(document).ready(function () {
  // $("body").toggleClass("lock");
  $(window).resize(function () {
    if ($(window).width() >= 576) {
      img.appendTo(div);
      terms.appendTo(insert);
      button_move.appendTo(insert_button);
    } else {
      img.appendTo(div2);
      button_move.appendTo(logo);
      terms.appendTo(insert_button);
    }
  });

  if ($(window).width() >= 576) {
    img.appendTo(div);
    terms.appendTo(insert);
    button_move.appendTo(insert_button);
  } else {
    img.appendTo(div2);
    button_move.appendTo(logo);
    terms.appendTo(insert_button);
  }

  $(".accordion-button").click(function () {
    $(this).toggleClass("collapsed");
    let val = "#" + $(this).attr("value");
    $(val).toggleClass("show");
  });

  $(".review a").click(function (e) {
    e.preventDefault();
    $(this).prev().toggleClass("show");
  });

  $(".type span").click(function () {
    $(".type span").removeClass("active");
    $(this).toggleClass("active");
  });
});

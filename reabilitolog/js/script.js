// $(window).on("load", function () {
//   $(".preloader").fadeOut().end().delay(400).fadeOut("slow");
//   $("body").toggleClass("lock");
// });

const img = $(".append-header-img");
const insert = $(".insert");
const terms = $(".terms");
const insert_button = $(".insert-button");
const button_move = $(".button-move");
const logo = $("#logo").parent();
const div = $(".header");
const div2 = $(".header-text");

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
    if ($(this).prev().hasClass("show")) {
      $(this).html("Згорнути");
    }
  });

  $(".type span").click(function (e) {
    e.preventDefault();
    $(".type span").removeClass("active");
    $(this).toggleClass("active");
  });
});

// navbar js starts

$(function () {
  $("#navbar ul li a").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
});
// navbar js en

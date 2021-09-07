//Jquery auto height
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    autoPlay: 3000,
    items: 5,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3],
    center: true,
    nav: true,
    loop: true,
    responsive: {
      600: {
        items: 5
      }
    }
  });
  $(".item").on("click", function () {
    console.log("click item")
    $(".item").removeClass("hover");
    $(this).addClass("hover");
  })
});
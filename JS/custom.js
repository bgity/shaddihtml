$(window).scroll(function () {
  $('nav').toggleClass('scrolled', $(this).scrollTop() > 695);
});

$(document).ready(function () {
  $("#owl-demo").owlCarousel({
    autoplay: true,
    smartSpeed: 300,
    navText: [
      '<span class="fa fa-angle-left"></span>',
      '<span class="fa fa-angle-right"></span>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      760: {
        items: 1,
      },
      1024: {
        items: 1,
      },
      1100: {
        items: 1,
      },
    },
  });
});
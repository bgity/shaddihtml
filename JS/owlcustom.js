$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 1000,
    smartSpeed: 1500,
    autoplayHoverPause: true,
  });

  var scroll_link = $('.scroll');
  //smooth scrolling -----------------------
  scroll_link.click(function (e) {
    e.preventDefault();
    var url = $('body').find($(this).attr('href')).offset().top;
    $('html, body').animate(
      {
        scrollTop: url,
      },
      800
    );
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
    return false;
  });

  $('.panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.panel-heading').addClass('active');
  });

  $('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.panel-heading').removeClass('active');
  });
});

$(window).scroll(function () {
  $('nav').toggleClass('scrolled', $(this).scrollTop() > 400);
});

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 1000,
        smartSpeed: 1500,
        autoplayHoverPause: true
    });
});

$(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 400);
});
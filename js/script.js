$(document).ready(function () {
    $('.block-sliders__logoCompanies').slick({
        dots: false,
        arrows: true,
        adaptiveHeight: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        easing:'ease',
        infinite: false,
        swipe: true,
        //быстрое переключение по стрелочке
        waitForAnimate: false,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-long-arrow-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-long-arrow-right' aria-hidden='true'></i></button>"
    });
});
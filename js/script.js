$(document).ready(function () {
    let window_width = parseInt($(window).width());
    let logoCompaniesCountSlide = 4;
    let aboutUsBlockCountSlide = 3;

    // Если екран меньше 800 пикселей выводим по 1 изображению
    if (window_width <= 800)
    {
        logoCompaniesCountSlide = 1;
        aboutUsBlockCountSlide = 1;
    }

    $('.block-sliders__logoCompanies').slick({
        dots: false,
        arrows: true,
        adaptiveHeight: true,
        slidesToShow: logoCompaniesCountSlide,
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

    $('.aboutUs-block__allSlide').slick({
        dots: false,
        arrows: true,
        adaptiveHeight: true,
        slidesToShow: aboutUsBlockCountSlide,
        slidesToScroll: 1,
        speed: 500,
        easing:'ease',
        infinite: false,
        swipe: true,
        //быстрое переключение по стрелочке
        waitForAnimate: true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-long-arrow-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-long-arrow-right' aria-hidden='true'></i></button>"
    });


}).on('click','.burger', function () {
    $('body').toggleClass('overflow-hidden');
    $('.header__small').slideToggle();
});
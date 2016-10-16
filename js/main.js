$(document).ready(function(){

    //sliders
    $('.main-slider').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        fade: true
    });

    $('.catalog__slider').slick({
        slidesToShow: 5,
        nextArrow: '<i class="icon-arrow-right"></i>',
        prevArrow: '<i class="icon-arrow-left"></i>',

        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 678,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.catalog-slider').slick({
        slidesToShow: 1,
        dots: true,
        autoplay: true,
        fade: true,
        arrows: false,

        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.partners__slider').slick({
        slidesToShow: 7,
        nextArrow: '<i class="icon-arrow-right"></i>',
        prevArrow: '<i class="icon-arrow-left"></i>',

        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 678,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    //tab
    $('.tab-btn').click(function(e){
        e.preventDefault();

        var $tab = $(this).attr("href");

        $(this).parent('li').addClass('active');
        $(this).parent().siblings().removeClass('active');

        $(this).parents('.catalog').find('.tab-item').removeClass('active');
        $($tab).addClass('active');

    });


    //header__nav-btn

    $('.header__nav-btn').click(function(e){
        e.preventDefault();

        $(this).siblings('ul').slideToggle();
    });


    //catalog__menu

    $('.catalog__menu-btn').click(function(e){
        e.preventDefault();

        $(this).siblings('ul').slideToggle();
    });

    $( '.catalog__menu ul li' ).on( 'click', function(){
        $(this).children('.catalog__menu-dropdown').slideToggle();
    });

    //header__bn-close
    $('.header__bn-close').click(function(e){
        e.preventDefault();

        $(this).parent('.header__bn').fadeOut();
    });
    //click-catalog
    $(".sorting__filters__icon").click(function (e) {
        e.preventDefault();
        $(".sorting__filters__block").slideToggle();
    });
    $(".btn-filter").click(function (e) {
        e.preventDefault();
        $(".catalog__item1").slideToggle();
    });
});

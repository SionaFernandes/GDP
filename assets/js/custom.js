const swiperParagraph = new Swiper('.swiperParagraph', {
    // Optional parameters
    loop: true,
    effect: 'fade',
    autoplay: {
        delay: 3000,
        },
    slidesPerView: 1,

});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    breakpoints: {

        // when window width is >= 480px
        320: {
            slidesPerView: 1,
            spaceBetween: 00
        },
        450: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 640px
        1000: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


});





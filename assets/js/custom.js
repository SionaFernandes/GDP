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
        // when window width is >= 640px
        780: {
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





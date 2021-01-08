document.addEventListener("DOMContentLoaded", function () {
    sliderInit.init()
});

var sliderInit = {
    init: function () {
        this.reviewSlider();
        this.gallerySlider();
        this.productGallery();
    },

    reviewSlider: function () {
        var self = this;
        var reviewSlider = new Swiper('.review__slider .swiper-container', {
            direction: 'vertical',
            speed: 400,
            spaceBetween: 27,
            loop: true,
            // loopedSlides:2,
            slidesPerView: 2,
            height:490,
            navigation: {
                nextEl: '.review__button-next',
                prevEl: '.review__button-prev',
            },
            pagination: {
                el: '.review__swiper-pagination',
                type: 'custom',
                renderCustom: function (swiper, current, total) {
                    return self.addZero(current) + ' / ' + self.addZero( total);
                }

            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                    direction: 'horizontal',
                    slidesPerView: 'auto',
                    spaceBetween: 20,
                    autoHeight: true,
                    // loop: false,
                },
                1024: {
                    direction: 'vertical',
                    speed: 400,
                    spaceBetween: 27,
                    loop: true,
                    slidesPerView: 2,
                    height: 395,
                },
                1280:{
                    direction: 'vertical',
                    speed: 400,
                    spaceBetween: 27,
                    loop: true,
                    slidesPerView: 2,
                    height: 510,
                },
                1366: {
                    direction: 'vertical',
                    speed: 400,
                    spaceBetween: 27,
                    loop: true,
                    slidesPerView: 2,
                    height:505,
                },
                1920: {
                    direction: 'vertical',
                    speed: 400,
                    spaceBetween: 27,
                    loop: true,
                    slidesPerView: 2,
                    height:515,
                },
            }
        });

    },
    gallerySlider: function () {
        var self = this;
        var gallerySlider = new Swiper('.gallery__slider .swiper-container', {
            speed: 400,
            spaceBetween: 0,
            loop: true,
            slidesPerView: 'auto',
            touchRatio: false,
            navigation: {
                nextEl: '.gallery-button-next',
                prevEl: '.gallery-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'custom',
                renderCustom: function (swiper, current, total) {
                    return self.addZero(current) + ' / ' + self.addZero( total);
                }

            },
        });
    },
    productGallery: function () {
        var self = this;
        var galleryThumbs = new Swiper('.product__slider-1 .gallery-thumbs', {
            spaceBetween: 0,
            slidesPerView: 'auto',
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: false,
            touchRatio: false,
        });
        var galleryTop = new Swiper('.product__slider-1 .gallery-top', {
            spaceBetween: 10,
            slidesPerView: 'auto',
            loop: true,
            pagination: {
                el: '.product__item_1-swiper-pagination',
                type: 'custom',
                renderCustom: function (swiper, current, total) {
                    return self.addZero(current) + ' / ' + self.addZero( total);
                }

            },
            navigation: {
                nextEl: '.product__item_1-button-next',
                prevEl: '.product__item_1-button-prev',
            },
            thumbs: {
                swiper: galleryThumbs
            }
        });
        var galleryThumbs = new Swiper('.product__slider-2 .gallery-thumbs', {
            spaceBetween: 0,
            slidesPerView: 'auto',
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            touchRatio: false,
        });
        var galleryTop = new Swiper('.product__slider-2 .gallery-top', {
            spaceBetween: 10,
            slidesPerView: 'auto',
            loop: true,
            pagination: {
                el: '.product__item_2-swiper-pagination',
                type: 'custom',
                renderCustom: function (swiper, current, total) {
                    return self.addZero(current) + ' / ' + self.addZero( total);
                }

            },
            navigation: {
                nextEl: '.product__item_2-button-next',
                prevEl: '.product__item_2-button-prev',
            },
            thumbs: {
                swiper: galleryThumbs
            }
        });
        var galleryThumbs = new Swiper('.product__slider-3 .gallery-thumbs', {
            spaceBetween: 0,
            slidesPerView: 'auto',
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            touchRatio: false,
        });
        var galleryTop = new Swiper('.product__slider-3 .gallery-top', {
            spaceBetween: 10,
            slidesPerView: 'auto',
            loop: true,
            pagination: {
                el: '.product__item_3-swiper-pagination',
                type: 'custom',
                renderCustom: function (swiper, current, total) {
                    return self.addZero(current) + ' / ' + self.addZero( total);
                }

            },
            navigation: {
                nextEl: '.product__item_3-button-next',
                prevEl: '.product__item_3-button-prev',
            },
            thumbs: {
                swiper: galleryThumbs
            }
        });

    },


    addZero: function(number){
        if(number < 10){
            return number = '0' + number
        }
        return number
    },
};

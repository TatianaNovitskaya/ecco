$(document).ready(function () {
    Date.prototype.getMonthNameShort = function (lang) {
        lang = lang && (lang in Date.locale) ? lang : 'en';
        return Date.locale[lang].month_names_short[this.getMonth()];
    };
    Date.locale = {
        en: {
            month_names: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            month_names_short: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }
    };

    var currentDay = new Date();
    var currentMothWithName = new Date().getMonthNameShort();
    var currentDayNumber = currentDay.getDate();
    var currentFullYear = currentDay.getFullYear();
    var stringYear = String(currentMothWithName + " " + currentDayNumber + ", " + currentFullYear + " " + "23:59:59");
    var setCurrentDay = new Date(stringYear);
    var countDownDate = setCurrentDay.getTime();
    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        var objectSend = {
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
        generateTemplate(objectSend);

        if (distance < 0) {
            clearInterval(x);
        }
    }, 1000);

    function generateTemplate(obj) {
        var result = '';
        var elementsTimeArray = document.querySelectorAll('.time');
        for (var item in obj) {
            if (obj[item] < 10) {
                result += '<li class="time-bg">0' + obj[item] + '</li><li class="time-bg__dot"></li>';
            } else {
                result += '<li class="time-bg">' + obj[item] + '</li><li class="time-bg__dot"></li>';
            }
        }
        for (var i = 0; i < elementsTimeArray.length; i++) {
            var itemElement = elementsTimeArray[i];
            itemElement.innerHTML = result
        }
    }


});

$(document).ready(function () {
    $("[data-fancybox]").fancybox({
        loop: true
    });


    var $window = $(window),
        win_height_padded = $window.height() * 1.1;
    if (window.innerWidth > 480) {
        $window.on('scroll', revealOnScroll);
    } else {
        $(".block_animated:not(.block_show)").each(function () {
            $(this).addClass('block_show');
        });
    }

    function revealOnScroll() {
        var scrolled = $window.scrollTop(),
            win_height_padded = $window.height() / 1.2;

        $(".block_animated:not(.block_show)").each(function () {
            var $this = $(this),
                offsetTop = $this.offset().top;

            if (scrolled + win_height_padded >= offsetTop) {
                $this.addClass('block_show');
            }
        });
    }

    if (window.innerWidth > 480) {
        revealOnScroll();
    }


    svg4everybody();

    objectFitImages();
});

document.addEventListener("DOMContentLoaded", function () {

    let elementDesktopScroll = document.getElementById('desktop-scroll');
    let btnCart = document.querySelector('.btn-cart');
    let last_known_scroll_position = 0;
    let ticking = false;



    if(window.innerWidth <= 1024) {
        function doSomething(scroll_pos) {
            var heightWindow = window.innerHeight;
            var delta = 1.1;
            var objectElementScroll = elementDesktopScroll.getBoundingClientRect();
            var elementOffsetTop = elementDesktopScroll.offsetTop;
            var bottomLine = objectElementScroll.height + elementOffsetTop;
            console.log(heightWindow);
            // Делаем что-нибудь с позицией скролла
            if (elementOffsetTop - (heightWindow/delta) >= scroll_pos || bottomLine - (heightWindow/delta) <= scroll_pos) {
                btnCart.style.display = "flex";
            }else{
                btnCart.style.display = "none";
            }
        }
        window.addEventListener('scroll', function(e) {
            last_known_scroll_position = window.scrollY;

            if (!ticking) {
                window.requestAnimationFrame(function() {
                    doSomething(last_known_scroll_position);
                    ticking = false;
                });

                ticking = true;
            }
        });
    }



});

$ (document).ready (function () {
    var topMenu = $ (".header__menu"),
        topMenuHeight = $ ('.header').outerHeight (),
        menuItems = $('.js__scroll__to');


    menuItems.on ('click',function (e) {
        e.preventDefault ();
        var mobileVersion = window.innerWidth <= 1023;

        var $this = $ (this);
        var dataHref = mobileVersion ? $this.attr ("data-header-mobile") : $this.attr ("data-header-desktop");

        var offsetTop = $ ('#' + dataHref).offset ().top;
        $ ('html, body').stop ().animate ({
            scrollTop: mobileVersion ? offsetTop -100 : offsetTop
        }, 900);
        changeClassHeader (offsetTop);
        
    });
    document.addEventListener ("mousewheel", onWheel);
    function onWheel (e) {
        changeClassHeader ($ (window).scrollTop ());
        changeClassOnScroll ()
    }
    $(window).on("keypress", onPress);
    function onPress (e) {
        changeClassHeader ($ (window).scrollTop ());
        changeClassOnScroll ()
    }

    changeClassHeader ($ (window).scrollTop ());
    function setActiveClassHeader (currentName, state) {
        $ ('.header a.active').removeClass ('active');
        state = state || false;
        if (state) {
            $ ('[data-header="' + currentName + '"]').addClass ('active');
        } else {
            currentName.addClass ('active');
        }
    }

    function changeClassHeader (offsetTop) {
        if (offsetTop > 0) {
            $ ('.header').addClass ('header_scroll');
        } else {
            $ ('.header').removeClass ('header_scroll');
        }
    }

    function changeClassOnScroll () {
        $ ('section').each (function () {
            var currentElement = $ (this).offset ().top;
            if (currentElement <= $ (window).scrollTop () && currentElement + $ (this).height () >= $ (window).scrollTop ()) {
                var currentClass = $ (this).attr ('class');
                setActiveClassHeader (currentClass, true)
            }
        });
    }


});


document.addEventListener("DOMContentLoaded", function () {
    productCounter.init();


});


var productCounter = {
    productsLeft: document.querySelector('.js__products-left'),
    startProductsLeft: 25,
    currentProductsLeft: null,
    oneMinute: 1000*60,
    init: function () {
        this.setNumberToProductsLeft(this.startProductsLeft);
        this.counterProductsLeft()
    },
    setNumberToProductsLeft: function(number){
        if(this.productsLeft){
            this.productsLeft.innerHTML = number
        }
    },
    counterProductsLeft: function(){
        var self = this;
        this.currentProductsLeft = this.startProductsLeft;
        setInterval(function(){
            self.currentProductsLeft--;
            if(self.currentProductsLeft < 1){
                self.currentProductsLeft = self.startProductsLeft
            }
            self.setNumberToProductsLeft(self.currentProductsLeft);
        },this.oneMinute)
    }
};
document.addEventListener("DOMContentLoaded", function () {
    VideoShow.init()
});

var VideoShow = {
    init: function () {
        this.playVideo();
    },

    playVideo: function () {
        var playButton = document.querySelector('.js__play');
        playButton.addEventListener('click', function () {
            playButton.parentElement.innerHTML = '<iframe width="1280" height="720" src="https://www.youtube.com/embed/WtulWh_5_X0?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        });

    },

};

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

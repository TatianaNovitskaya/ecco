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
document.addEventListener( 'DOMContentLoaded', function () {
    for (var i = 1; i <+ 15; i++) {
        var slide = document.createElement('div');
        slide.classList.add('swiper-slide');
    
        var slideContent = "?";
    
        slide.innerHTML = slideContent;
    
    
        var splideElement = document.querySelector('.swiper-wrapper');
        splideElement.appendChild(slide);
    }
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 5,
        spaceBetween: 30,
        centeredSlides: true,
        noSwiping: true,
        allowTouchMove: false,
        loop: true,
        loopedSlides: 15,
      });

    const btn = document.querySelector('#start');
    // when button id pressed move aleatory to a slide
    btn.addEventListener('click', function() {

        swiper.loop = true;

        let slideCount = 0;
        let interval = setInterval(() => {
            swiper.slideTo(slideCount, 1000, false);
            slideCount++;
            if (slideCount === 15) {
                slideCount = 0;
            }
        }, 100);

        let random = Math.floor(Math.random() * 15);

        setTimeout(() => {
            clearInterval(interval);
            slideCount = 0;


            interval = setInterval(() => {
                swiper.slideTo(slideCount, 1000, false);
                if (slideCount === random) {
                    clearInterval(interval);
                }
                slideCount++;
            }, 100);
        }, 6000);

        console.log(random);
        // keep loo
    });
});
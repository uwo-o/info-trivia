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
        swiper.slideTo(Math.floor(Math.random() * 15), 1000, false);
        // keep loop
        swiper.loop = true;
    });
});
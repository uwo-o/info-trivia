const show_correct = (li, i, ul) => {
    if ( li.classList.contains(i) ) {
        li.classList.add('correct-answer');
    }
    else {
        li.classList.add('incorrect-answer');
    }

    // add to ul other option with li that says next and reload the page if doesnt exist
    if (ul.querySelector('.next') === null) {
        let li = ul.appendChild(document.createElement('li'));
        li.innerText = 'Siguiente';
        li.classList.add('next');
        li.addEventListener('click', function() {
            location.reload();
        });
    }
}
const show_question = () => {
    let bg = document.querySelector('.question-bg.active');
    // load data/cards.json
    fetch('data/cards.json').then(response => {
        return response.json();
    }).then(data => {
        questionIndex = Math.floor(Math.random() * data.questions.length);
        questionIndex = (questionIndex + 1) % data.questions.length;
        let question = data.questions[questionIndex];
        bg.appendChild(document.createElement('h1')).innerText = question.question;
        let options = question.options;
        let ul = bg.appendChild(document.createElement('ul'));
        ul.classList.add('options');
        for (let i = 0; i < 4; i++) {
            let li = ul.appendChild(document.createElement('li'));
            li.innerText = options[i].text;
            li.classList.add(question.answer);
            li.addEventListener('click', function() {
                show_correct(li, i+1, ul);

            });
        }
    });
}

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

            setTimeout(() => {
                let bg = document.querySelector('.question-bg');
                bg.classList.add('active');

                show_question();

            }, 1800);

        }, 6000);
        // keep loo
    });
});
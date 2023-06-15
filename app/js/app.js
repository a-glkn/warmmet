import Swiper from 'swiper/bundle';
import { Fancybox } from "@fancyapps/ui";

import Inputmask from "inputmask/dist/inputmask.es6.js";

// import NiceSelect from 'nice-select2/src/js/nice-select2.js';
// global.NiceSelect = NiceSelect;

document.addEventListener('DOMContentLoaded', () => {

    var selector = document.querySelectorAll(".form__input_tel");

    var im = new Inputmask("+7 (999) 999 99 99");
    im.mask(selector);

    let mainSlider = document.querySelectorAll('.main-slider');

    if(mainSlider) {
        new Swiper(".main-slider", {
            loop: true,
            effect: 'fade',
            autoplay: {
                delay: 5000,
            },
            navigation: {
                nextEl: ".main-slider .swiper-button-next",
                prevEl: ".main-slider .swiper-button-prev",
            },
            pagination: {
                el: '.main-slider .swiper-pagination'
            },
        });
    }


    let socSlider = document.querySelectorAll('.soc-slider');

    if(socSlider) {
        new Swiper(".soc-slider", {
            slidesPerView: 2,
            spaceBetween: 20,
            autoplay: {
                delay: 5000,
            },
            navigation: {
                nextEl: ".soc-slider .swiper-button-next",
                prevEl: ".soc-slider .swiper-button-prev",
            }
        });
    }

    let certSlider = document.querySelectorAll('.cert-slider');

    if(certSlider) {
        new Swiper(".cert-slider", {
            slidesPerView: 1,
            spaceBetween: 20,
            navigation: {
                nextEl: ".cert-slider .swiper-button-next",
                prevEl: ".cert-slider .swiper-button-prev",
            },
            breakpoints: {
                480: {
                    slidesPerView: 1
                },
                768: {
                    slidesPerView: 2
                },
                992: {
                    slidesPerView: 3
                },
            },
        });
    }


    
  
    var togglers = document.querySelectorAll(".menu-toggler");
	togglers.forEach((t) => {
        t.addEventListener("click",function(e){
            document.body.classList.toggle('menu-openned');
        }, false);
    });
    
   

    /* Tabs */
    let tabs = document.querySelectorAll('.tabs');
    if(tabs) {
        tabs.forEach((tab) => {
            let headers = tab.querySelector('.tab-head');
            let contents = tab.querySelector('.tabs-content');

            headers.querySelectorAll('.tab-head__item').forEach((headerItem, index) => {
                headerItem.addEventListener("click",function(e){
                    headers.querySelectorAll('.tab-head__item').forEach(el => el.classList.remove('active'));
                    headerItem.classList.add('active');

                    contents.querySelectorAll('.tabs-content__item').forEach(el => el.classList.remove('active'));
                    contents.querySelectorAll('.tabs-content__item')[index].classList.add('active');
                }, false);
            });
        });
    }

    if( document.body.classList.contains( 'header-fixed-straight' ) ) {
        document.body.classList.add('header-fixed');
    }


    if(window.scrollY) {
        document.body.classList.add('header-fixed');
    }

    window.addEventListener('scroll', function() {
        if( document.body.classList.contains( 'header-fixed-straight' ) ) {
            //
        } else {
            if(window.scrollY) {
                document.body.classList.add('header-fixed');
            } else {
                document.body.classList.remove('header-fixed');
            }
        }

    });

    let gallerySlider = document.querySelectorAll('.gallery-slider');

    if(gallerySlider) {
        var swiper = new Swiper(".thumb-slider", {
            spaceBetween: 10,
            slidesPerView: 7,
            freeMode: true,
            watchSlidesProgress: true,
        });

        var swiper2 = new Swiper(".gallery-slider", {
            spaceBetween: 10,
            thumbs: {
              swiper: swiper,
            },
        });
    }


    /* Quiz */
    const formQuiz = document.querySelector(".form_quiz");

    if(formQuiz) {
        const formQuizBtnPrev = formQuiz.querySelector(".btn-prev");

        formQuiz.addEventListener("submit", function(e) {
            var step = document.querySelector(".quiz").getAttribute('data-step');
            var cont = document.querySelector('.quiz-content-' + step);
    
            var allowedNext = false;
    
            if(step < 5) {
                cont.querySelectorAll('input').forEach((t) => {
                
                    if(t.checked) {
                        allowedNext = true;
                    }
                });
    
                e.preventDefault();
    
            } else {
                cont.querySelectorAll('input').forEach((t) => {
                    if(t.value) {
                        allowedNext = true;
                    }
                });
            }
    
            if(allowedNext) {
                if(step < 5) {
                    cont.style.display = 'none';
                    step++;
    
                    document.querySelector(".quiz").setAttribute('data-step', step);
                    document.querySelector('.quiz-content-' + step).style.display = 'block';
    
    
                    document.querySelector('.quiz__progress span').style.width = ((step-1) / 4 * 100) + '%';
    
    
                    document.querySelector('.quiz .btn-prev').removeAttribute("disabled");
    
                    if(step <= 4) {
                        document.querySelector('.quiz__top-num span').innerHTML = step;
                    }
                } 
            } else {
                e.preventDefault();
            }
    
        }, false);

        formQuizBtnPrev.addEventListener("click", function(e) {

            var step = document.querySelector(".quiz").getAttribute('data-step');
            var cont = document.querySelector('.quiz-content-' + step);

            cont.style.display = 'none';
            step--;

            document.querySelector(".quiz").setAttribute('data-step', step);
            document.querySelector('.quiz-content-' + step).style.display = 'block';
            document.querySelector('.quiz__progress span').style.width = ((step-1) / 4 * 100) + '%';

            if(step == 1) {
                document.querySelector('.quiz .btn-prev').setAttribute("disabled", 'disabled');
            }

            if(step <= 4) {
                document.querySelector('.quiz__top-num span').innerHTML = step;
            }

        }, false);
    }

  
    var liWithSub = document.querySelectorAll(".menu-wrapper li.has-sub");
	liWithSub.forEach((t) => {
        t.querySelector("a").addEventListener("click", function(e) {
            e.preventDefault();
            t.classList.toggle('active');
        }, false);
    });
    
});

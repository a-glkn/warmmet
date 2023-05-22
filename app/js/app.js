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

    window.addEventListener('scroll', function() {
        if(window.scrollY) {
            document.body.classList.add('header-fixed');
        } else {
            document.body.classList.remove('header-fixed');
        }
    });
});

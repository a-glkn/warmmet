import Swiper from 'swiper/bundle';
import { Fancybox } from "@fancyapps/ui";

import Inputmask from "inputmask/dist/inputmask.es6.js";

// import NiceSelect from 'nice-select2/src/js/nice-select2.js';
// global.NiceSelect = NiceSelect;

document.addEventListener('DOMContentLoaded', () => {

    var selector = document.querySelectorAll(".form__input_tel");

    var im = new Inputmask("+7 (999) 999 99 99");
    im.mask(selector);

    new Swiper(".main-slider", {
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 5000,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: '.swiper-pagination'
        },
    });

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

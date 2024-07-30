import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function () {
    const swiper = new Swiper('.js_swiper', {
        modules: [Navigation, Autoplay],
        // autoplay: {
        //     delay: 3000,
        // },
        slidesPerView: 4,
        spaceBetween: 20,
        // loop: true,
        // speed: 500,
        navigation: {
            nextEl: '.swiper-button-next'
        },

        breakpoints: {
            575: {
                slidesPerView: 1
            },
            650: {
                slidesPerView: 2
            },

            935: {
                slidesPerView: 3
            },

            1135: {
                slidesPerView: 4
            }
        }
    });

    // swiper.autoplay.stop();

    // setTimeout(function () {
    //     swiper.autoplay.start();
    // }, 1000);
}

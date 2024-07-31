import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function () {
    const swiper = new Swiper('.js_swiper', {
        modules: [Navigation, Autoplay],
        autoplay: {
            delay: 3000
        },
        direction: 'horizontal',
        slidesPerView: 'auto',
        spaceBetween: 20,
        loop: true,
        speed: 500,
        navigation: {
            nextEl: '.swiper-button-next'
        }
    });

    swiper.autoplay.stop();

    setTimeout(function () {
        swiper.autoplay.start();
    }, 1000);
}

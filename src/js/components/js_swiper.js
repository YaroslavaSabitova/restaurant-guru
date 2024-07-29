import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

export default function () {
    const slider = '.js_swiper';

    const swiper = new Swiper(slider, {
        modules: [Autoplay],
        autoplay: {
            delay: 3000
            // disableOnInteraction: false,
        },
        loop: true,
        speed: 500
    });

    swiper.autoplay.stop();

    const controls = document.querySelectorAll('[data-control]');

    if (controls.length) {
        controls.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault();
                e.stopPropagation();

                if (control.dataset.control === 'next') {
                    swiper.slideNext();
                } else {
                    swiper.slidePrev();
                }
            });
        });
    }

    setTimeout(function () {
        swiper.autoplay.start();
    }, 1000);
}

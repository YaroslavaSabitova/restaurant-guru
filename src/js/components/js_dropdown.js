export default function () {
    const btn = document.querySelector('.js_dropdown');
    const list = document.querySelector('.js_list');
    const cross = document.querySelector('.js_cross');

    btn.addEventListener('click', () => {
        list.classList.toggle('active');
    });

    cross.addEventListener('click', () => {
        list.classList.toggle('active');
    });

    document.body.addEventListener('click', event => {
        if (!event.target.closest('.js_dropdown') && !event.target.closest('.js_list')) {
            list.classList.remove('active');
        }
    });
}

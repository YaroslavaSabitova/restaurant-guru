export default function () {
    const btn = document.querySelector('.js_dropdown');
    const list = document.querySelector('.js_list');
    const cross = document.querySelector('.js_cross');
    const flags = document.querySelectorAll('.js_flag');
    const links = document.querySelectorAll('.js_link');

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

    flags.forEach(flag => {
        flag.addEventListener('click', event => {
            const flagTarget = event.currentTarget;

            btn.src = flagTarget.src;
            list.classList.remove('active');
        });
    });

    links.forEach(link => {
        link.addEventListener('click', event => {
            const linkTarget = event.currentTarget;

            console.log('linkTarget', linkTarget);

            list.classList.remove('active');
        });
    });
}

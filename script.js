const toTop = document.querySelector('.to-top');

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 100) {
        toTop.classList.add('active');
    } else {
        toTop.classList.remove('active');
    }
});

toTop.addEventListener('click', scrollToSection);

function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
}
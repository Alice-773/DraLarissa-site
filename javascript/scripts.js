document.addEventListener('DOMContentLoaded', function () {

    const mobileBtn = document.getElementById('mobile_btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const icon = document.querySelector('#mobile_btn i');

    mobileBtn.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
    });

    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');
    const header = document.querySelector('header');

    window.addEventListener('scroll', function () {

        const scrollPosition = window.scrollY - header.offsetHeight;
        let activeSectionIndex = 0;

        header.style.boxShadow = scrollPosition <= 0
            ? 'none'
            : '5px 1px 5px rgba(0, 0, 0, 0.1)';

        sections.forEach((section, i) => {

            const sectionTop = section.getBoundingClientRect().top + window.scrollY - 96;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
            }

        });

        navItems.forEach(item => item.classList.remove('active'));

        if (navItems[activeSectionIndex]) {
            navItems[activeSectionIndex].classList.add('active');
        }

    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    });

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    });

});

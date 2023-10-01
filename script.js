// Booking modal form
const bookingBtn = document.getElementById('booking-btn');
const modalForm = document.getElementById('modal-form');
const modalFormCancelBtn = document.getElementById('modal-form__cancel-btn');

bookingBtn.addEventListener('click', () => {
    document.body.style.paddingRight = '17px';
    document.body.style.overflow = 'hidden';
    modalForm.style.display = 'flex';
});
modalFormCancelBtn.addEventListener('click', () => {
    document.body.style.paddingRight = '0';
    document.body.style.overflow = 'auto';
    modalForm.style.display = 'none';
});

// Scroll to #ankor links
const headerMenuLinks = document.querySelectorAll('#header__nav .header__link');
const footerMenuLinks = document.querySelectorAll('.footer .footer__link');

[...headerMenuLinks, ...footerMenuLinks].forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('href')?.slice(1);
        const targetElement = document.getElementById(target);

        if (!targetElement) return;

        const header = document.getElementById('header');

        window.scrollTo(0, targetElement.offsetTop - header.clientHeight);
    });
});

// Mobile menu
const burger = document.getElementById('burger');

const mobileMenu = document.getElementById('mobile-menu');

burger.addEventListener('click', (e) => {
    if (mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active')
        burger.classList.remove('active')
        return;
    }
    mobileMenu.classList.add('active');
    burger.classList.add('active');
});
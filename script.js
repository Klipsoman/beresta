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
const mobileMenuLinks = document.querySelectorAll('#mobile-menu .mobile-menu__link');

[...headerMenuLinks, ...footerMenuLinks, ...mobileMenuLinks].forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('href')?.slice(1);
        const targetElement = document.getElementById(target);

        if (!targetElement) return;

        const header = document.getElementById('header');

        window.scrollTo(0, targetElement.offsetTop - header.clientHeight);

        mobileMenu.classList.remove('active');
        burger.classList.remove('active');
    });
});

// Mobile menu
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobile-menu');

burger.addEventListener('click', () => {
    if (mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        burger.classList.remove('active');
        return;
    }
    mobileMenu.classList.add('active');
    burger.classList.add('active');
});

const mobileBookingBtn = document.getElementById('mobile-menu__reserve');

mobileBookingBtn.addEventListener('click', () => {
    document.body.style.overflow = 'hidden';
    modalForm.style.display = 'flex';
});

// Slider gallery

const modalGallery = document.getElementById('modal-gallery');
const pictures = document.querySelectorAll('.pictures__box');

const swiper = new Swiper('.swiper', {
    loop: false,
    observer: true,
    observeSlideChildren: true,
    observeParents: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
});

pictures.forEach((picture) => {
    picture.addEventListener('click', (e) => {
        document.body.style.paddingRight = '17px';
        document.body.style.overflow = 'hidden';
        modalGallery.style.display = 'flex';

        const img = picture.querySelector('img');
        const type = img.getAttribute('alt');
        
        if (!type) {
            return;
        }

        const slides = modalGallery.querySelectorAll('.swiper-slide');
        slides.forEach((slide) => {
            const slideImg = slide.querySelector('img');
            
            if (slideImg.getAttribute('alt').includes(type)) {
                slide.style.display = 'block';
                return;
            }
            
            slide.style.display = 'none';
        })

        swiper.update();
    });
});

modalGallery.addEventListener('click', (e) => {
    if (modalGallery.style.display === 'flex' && e.target === modalGallery) {
        modalGallery.style.display = 'none';
        document.body.style.paddingRight = '0';
        document.body.style.overflow = 'auto';
    }
});
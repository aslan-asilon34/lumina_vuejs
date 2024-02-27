

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navProfile = document.getElementById('nav-profile'),
    navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
        // Set the width and height of navProfile to 20x20 px
        // navProfile.style.width = '45px';
        // navProfile.style.height = '35px';

    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
// Mendapatkan semua elemen yang memiliki kelas CSS '.nav__link'
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    // alert('cekk mobile');
    const navMenu = document.getElementById('nav-menu')

    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')

}
navLink.forEach(n => n.addEventListener('click', linkAction))



/*=============== SWIPER POPULAR ===============*/
const popularSwiper = new Swiper('.popular__content', {
    // Optional parameters 
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            centeredSlides: false,
        }
    }
});

/*=============== CHOOSE FAQ ===============*/
const faqItems = document.querySelectorAll('.choose__faq-item')

// 1. Select each item
faqItems.forEach((item) => {
    const faqHeader = item.querySelector('.choose__faq-header')

    // 2. Select each button click
    faqHeader.addEventListener('click', () => {
        // 7. Select the current faq-open class
        const openItem = document.querySelector('.faq-open')

        // 5. Call the toggleItem function
        toggleItem(item)

        // 8. Remove the faq-open class from other items
        if (openItem && openItem != item) {
            toggleItem(openItem)
        }
    })
})

// 3. Create function to display the content
const toggleItem = (item) => {
    // 3.1. Select each faq content
    const faqContent = item.querySelector('.choose__faq-content')

    // 6. If the same item contains the faq-open class, remove
    if (item.classList.contains('faq-open')) {
        faqContent.removeAttribute('style')
        item.classList.remove('faq-open')
    } else {
        // 4. Add max-height to the content and add the faq-open class
        faqContent.style.height = faqContent.scrollHeight + 'px'
        item.classList.add('faq-open')
    }
}

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    const cartIcon = document.getElementById('cart-icon');
    const cartCount = document.getElementById('cart-count');
    const dropdownProfileName = document.getElementById('dropdown-profile-name');

    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    // this.scrollY >= 350
    //     ? scrollUp.classList.add('show-scroll')
    //     : scrollUp.classList.remove('show-scroll')


    if (this.scrollY >= 350) {
        scrollUp.classList.add('show-scroll');
        cartIcon.style.color = 'white';
        cartCount.style.color = 'white';
        dropdownProfileName.style.color = 'white';
    }
}
window.addEventListener('scroll', scrollUp)


/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    const cartIcon = document.getElementById('cart-icon');
    const cartCount = document.getElementById('cart-count');
    const dropdownProfileName = document.getElementById('dropdown-profile-name');

    // When the scroll is greater than 50 viewport height, add the bg-header class to the header tag
    // this.scrollY >= 50
    //     ? header.classList.add('bg-header')
    //     : header.classList.remove('bg-header')


    if (this.scrollY >= 50) {
        header.classList.add('bg-header');
        cartIcon.style.color = 'black';
        cartCount.style.color = 'black';
        dropdownProfileName.style.color = 'black';
    } else {
        header.classList.remove('bg-header');
        cartIcon.style.color = 'white';
        cartCount.style.color = 'white';
        dropdownProfileName.style.color = 'white';
    }
}
window.addEventListener('scroll', scrollHeader)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')

        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'
const imgLanguageLight = document.getElementById('language-img-light');
const imgLanguageDark = document.getElementById('language-img-dark');


// Initially hide or show the img-language based on the dark theme

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'bx ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {

    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)



    // Initially hide or show the img-language based on the dark theme
    document.addEventListener('DOMContentLoaded', function() {
        imgLanguageLight.style.display = selectedTheme === 'dark' ? 'block' : 'none';
        imgLanguageDark.style.display = selectedTheme === 'dark' ? 'none' : 'block';

    });
    
}


// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true // Animations repeat
})

sr.reveal(`.home__content, .popular__container, .products__container, .join__bg, .footer__container`)
sr.reveal(`.home__image`, { origin: 'bottom' })
sr.reveal(`.choose__image, .features__image`, { origin: 'left' })
sr.reveal(`.choose__content, .features__content`, { origin: 'right' })



// Photo Profile=======================================

let profile = document.querySelector('.profile');
let menu = document.querySelector('.menu');

profile.onclick = function() {
    menu.classList.toggle('active');
}
// End Photo Profile=======================================



const navItem = document.getElementById('cart-nav-item');

// Add click event to navigate to another page
navItem.addEventListener('click', function() {

    // Replace 'your_destination_page.html' with the actual page URL you want to navigate to
    window.location.href = 'cart.html';
});



// index.html


// end index.html



// product_detail.html

$(document).ready(function() {
    $('.product-image-thumb').on('click', function () {
      var $image_element = $(this).find('img')
      $('.product-image').prop('src', $image_element.attr('src'))
      $('.product-image-thumb.active').removeClass('active')
      $(this).addClass('active')
    })
})


// end product_detail.html


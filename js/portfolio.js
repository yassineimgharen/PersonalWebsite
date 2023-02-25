// show menu
const closeBtn = document.getElementById("nav-close"),
    navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle");


if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add("show-menu");
    })
}

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        navMenu.classList.remove("show-menu");
    })
}

// remove menu mobile
const navLink = document.querySelectorAll('.nav-link')

function linkAction() {
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// accordion skills
const skillsContent = document.getElementsByClassName("skills-content"),
    skillsHeader = document.querySelectorAll(".skills-header");

function toggleSkills() {
    let itemClass = this.parentNode.className;
    console.log(itemClass);

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = "skills-content skills-close";
    }

    if (itemClass === 'skills-content skills-close') {
        this.parentNode.className = "skills-content skills-open";
    }
}
skillsHeader.forEach(element => {
    element.addEventListener("click", toggleSkills)
});

// qualification tabs


// const tabs = document.querySelectorAll('[data-target]'),
//     tabContents = document.querySelectorAll("[data-content]");

// tabs.forEach(tab => {
//     tab.addEventListener("click", () => {
//         let target = document.querySelector(tab.datset.target);

//         tabContents.forEach(tabcontent => {
//             tabcontent.classList.remove('qualification-active');
//         })
//         target.classList.add("qualification-active");

//         tab.forEach(tab => {
//             tab.classList.remove("qualification-active");
//         })
//         tab.classList.add("qualification-active");
//     })
// })


// sevices modal
const modalViews = document.querySelectorAll(".services-modal"),
    modalBtns = document.querySelectorAll(".services-button"),
    modalCloses = document.querySelectorAll(".services-modal-close");

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener("click", () => {
        modalViews[i].classList.add("active-modal");
    })
})

modalCloses.forEach((modalClose, i) => {
    modalClose.addEventListener("click", () => {
        console.log(i);
        modalViews[i].classList.remove("active-modal");
    })
})

// portfolio swiper
let swiper = new Swiper(".mySwiper", {
    cssMode: true,
    // loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


// scroll section active link
// const sections = document.querySelectorAll("section[id]");

// window.addEventListener("scroll", () => {
//     const scrollY = window.pageYOffset;

//     sections.forEach(section => {
//         const sectionHeight = window.offsetHeight
//         const sectionTop = window.offsetTop - 50
//         sectionId = window.getAttribute("id")


//         if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//             document.querySelector(`.nav-menu a[href*=${sectionId}]`).classList.add("active-link");
//         } else {
//             document.querySelector(`.nav-menu a[href*=${sectionId}]`).classList.remove("active-link");
//         }
//     })
// })




// change background header
function scrollHeader() {
    const nav  = document.getElementById("header")

    if (this.scrollY >= 150) nav.classList.add("scroll-header"); else nav.classList.remove("scroll-header")
}
window.addEventListener("scroll", scrollHeader);


// show scroll top
function scrollTop () {
    const scrollTopBtn = document.querySelector(".scroll-up");
    if (this.scrollY >= 1200) scrollTopBtn.classList.add("show-scroll"); else scrollTopBtn.classList.remove("show-scroll")
}
window.addEventListener("scroll", scrollTop);


// dark light theme
const themeBtn = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = 'uil-sun'

// previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// we obtain the current theme that the interface has by validation the dark-theme class
let getCurrentTheme = ()=> document.body.classList.contains("dark-theme") ? 'dark' : 'light'
let getCurrentIcon = () => themeBtn.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// we validate if the user previously chose a topic
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeBtn.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// active / desactive the theme with the button
themeBtn.addEventListener("click", () => {
    // add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeBtn.classList.toggle(iconTheme);

    // we save the current theme/icon that user chose on localstorage
    localStorage.setItem("selected-theme", getCurrentTheme())
    localStorage.setItem("selected-icon", getCurrentIcon())
})

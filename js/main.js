/*========SHOW MENU MOBILE==========*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*Menu show*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*Menu hidden*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");

  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};

window.addEventListener("scroll", bgHeader);
bgHeader();

/*=============== SWIPER SERVICIO===============*/
const swiperProductos = new Swiper(".productos__swiper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 24,
  slidesPerView: "auto",
  centeredSlides: false,
  freeMode: false,

  breakpoints: {
    // Cuando el ancho es >= 1150px
    1150: {
      slidesPerView: 3, // Muestra 3 slides en pantallas grandes
      spaceBetween: 30,
      centeredSlides: false,
    },
    // Cuando el ancho es >= 1400px
    1400: {
      slidesPerView: 4, // Muestra 4 slides en pantallas muy grandes
      spaceBetween: 40,
      centeredSlides: false,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next-1",
    prevEl: ".swiper-button-prev-1",
  },
});

/*=============== SWIPER SERVICIO===============*/
const swiperProductos2 = new Swiper(".productos__swiper2", {
  loop: true,
  grabCursor: true,
  spaceBetween: 24,
  slidesPerView: "auto",

  navigation: {
    nextEl: ".swiper-button-next-2",
    prevEl: ".swiper-button-prev-2",
  },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (sectionsClass) {
      if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
        sectionsClass.classList.add("active-link");
      } else {
        sectionsClass.classList.remove("active-link");
      }
    }
  });
};

window.addEventListener("scroll", scrollActive);


/*=============ANIMATION===========*/ 
const sr = ScrollReveal({
  origin: "top",
  distance: "100px",
  duration: 2500,
  delay: 400,
})

sr.reveal(`.home__content, .productos, .clientes__content`)
sr.reveal(`.card__clientes2`, {origin:'bottom', delay:1000})
sr.reveal(`.img-container, .form-container`, {origin: `left`})
sr.reveal(`.text-container, #categoria .card-base, .card2, .mapa-lado`, {origin: `right`})
sr.reveal(`#categoria__content2 .card-base`, {interval:100})


/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav_menu");
const navToggle = document.getElementById("nav_toggle");
const navClose = document.getElementById("nav_close");

//  Menu Show
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
// Hide Menu
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-link')
const LinkAction = () =>{
    const navMenu = document.getElementById("nav_menu");
    // When we click on each link or navbar options, we remove the show-menu class.
    navMenu.classList.remove('show-menu')
}
navLink.forEach((e)=>{
        e.addEventListener('click', LinkAction)
})
/*=============== SHADOW HEADER ===============*/
const shadowHeader = ()=> {
  const header = document.getElementById('header')
  // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('shadow-header'):  header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== SWIPER FAVORITES ===============*/
const swiperFav = new Swiper('.fav-swiper', {
  loop: true,
  grabCursor: true,
  slidesPerview:'auto',
  centeredSlides: 'auto',});

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () =>{
  const scrollUp = document.getElementById('scroll-up')
  //  When the scroll is higher than 350 viewport height,  add the top navigate button.
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');}
  window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/

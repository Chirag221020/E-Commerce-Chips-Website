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

/*=============== SWIPER FAVORITES ===============*/

/*=============== SHOW SCROLL UP ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/

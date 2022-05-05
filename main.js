window.addEventListener("scroll", onScroll);
onScroll();

function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();
}

function showNavOnScroll() {
  scrollY > 0
    ? navigation.classList.add("scroll")
    : navigation.classList.remove("scroll");
}

function showBackToTopButtonOnScroll() {
  scrollY > 500
    ? backToTopButton.classList.add("show")
    : backToTopButton.classList.remove("show");
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
}).reveal(
  `#home, 
  #home img, 
  #home .estatisticas, 
  #services, 
  #services header, 
  #services card, 
  #about, 
  #about header, 
  #about .content`
);

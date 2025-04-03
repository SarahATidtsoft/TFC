document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("nav-links");
  const navbar = document.getElementById("navbar");
  burger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    burger.classList.toggle("show");
    navbar.classList.toggle("show");
    /*alert("Burger menu clicked!");*/
  });
  navLinks.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    burger.classList.toggle("show");
    navbar.classList.toggle("show");
    /*alert("Burger menu clicked!");*/
  });
});

const navbarButton = document.querySelector(".navbar-burger");
const navbar = document.querySelector("#mainNavbar");

navbarButton.addEventListener("click", () => {
  console.log("clicking!");
  navbarButton.classList.toggle("is-active");
  navbar.classList.toggle("is-active");
});

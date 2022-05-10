const menuBtn = document.querySelector(".menu-icon");
const menu = document.querySelector("nav");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("open");
});

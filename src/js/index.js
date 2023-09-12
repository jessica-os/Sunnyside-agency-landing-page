const hamburguer = document.querySelector(".hamburguer");
const menu = document.querySelector(".menu-hamburguer");

hamburguer.addEventListener("click", () => {
  menu.classList.toggle("active");
});

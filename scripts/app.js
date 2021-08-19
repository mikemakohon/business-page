const openButton = document.querySelector(".menu-open");
const closeButton = document.querySelector(".menu-close");

openButton.addEventListener("click", function () {
  document.body.classList.add("menu-opened");
});

closeButton.addEventListener("click", function () {
  document.body.classList.remove("menu-opened");
});

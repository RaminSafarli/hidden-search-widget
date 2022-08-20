const button = document.querySelector(".btn");
const input = document.querySelector(".input");
const container = document.querySelector(".container");

button.addEventListener("click", (e) => {
  container.classList.toggle("active");
  input.focus();
});

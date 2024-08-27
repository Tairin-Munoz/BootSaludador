import saludar from "./saludar";

const name = document.querySelector("#nombre");
const form = document.querySelector("#saludador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstName = name.value;
  div.innerHTML = "<p>" + saludar (firstName) + "</p>";

});

import saludar from "./saludar";

const name = document.querySelector("#nombre");
const gender = document.querySelector("#genero");
const form = document.querySelector("#saludador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstName = name.value;
  const firstGender = gender.value;
    div.innerHTML = "<p>" + saludar (firstName,firstGender) + "</p>";
  

});

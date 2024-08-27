import saludar from "./saludar";

const name = document.querySelector("#nombre");
const gender = document.querySelector("#genero");
const age = document.querySelector("#edad");
const idiom = document.querySelector("#idioma");
const form = document.querySelector("#saludador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstName = name.value;
  const firstGender = gender.value;
  const firstAge = Number.parseInt(age.value);
  const firstIdiom = idiom.value;
    div.innerHTML = "<p>" + saludar (firstName,firstGender,firstAge,firstIdiom) + "</p>";
  

});

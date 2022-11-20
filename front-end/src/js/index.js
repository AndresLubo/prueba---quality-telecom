import { submit } from "./submit.js";
import { validarFormulario } from "./validacion.js";

const $d = document;
const $inputs = $d.querySelectorAll(".input");
const $btnLogin = $d.getElementById("btn-login");



$inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});

$btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  submit($inputs, $btnLogin)
});

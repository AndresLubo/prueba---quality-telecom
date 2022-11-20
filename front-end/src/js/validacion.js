import { expressions } from "./expresiones.js";

const $d = document
//? alertas
const $userAlert = $d.getElementById('alert-user');
const $passwordAlert = $d.getElementById('alert-password')

const validarCampo = (expresion, target, alert) => {
  if (expresion.test(target.value)) {
    target.classList.remove("value-error");
    alert.classList.add("alert-none");
  } else {
    target.classList.add("value-error");
    alert.classList.remove("alert-none");
  }
};

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "user":
      validarCampo(expressions.user, e.target, $userAlert);
      break;

    case "password":
      validarCampo(expressions.password, e.target, $passwordAlert);
      break;
  }
};

export { validarFormulario };

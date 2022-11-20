import { expressions } from "./expresiones.js";

const submit = async (inputs, btnLogin) => {
  const [inputUser, inputPassword] = inputs;

  if (!inputUser.value || !inputPassword.value) {
    alert("No ha ingresado credenciales. Vuelva a intentarlo");
    return;
  }

  if (
    !expressions.user.test(inputUser.value) ||
    !expressions.password.test(inputPassword.value)
  ) {
    alert("Los valores ingresados son inválidos");
    return;
  }

  btnLogin.innerHTML = `
  <div class="spinner-border text-dark" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
  `;


  const data = {
    user: inputUser.value,
    password: inputPassword.value,
  };

  const apiUrl = "http://localhost:3000/api/v1/login";

  const req = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const res = await req.json();

  if (res.error) {
    alert(res.error);
    btnLogin.innerHTML = `Login`;
  } else {
    btnLogin.innerHTML = `Login`;
    location.replace(`../../src/welcome.html?name=${res[0].name}&status=${res[0].status}`)

  }
};

export { submit };

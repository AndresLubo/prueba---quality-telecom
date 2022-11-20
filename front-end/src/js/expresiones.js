const expressions = {
  user: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, números, guion y guion_bajo
  password: /^.{4,12}$/, // 4 a 12 digitos.
};

export { expressions };

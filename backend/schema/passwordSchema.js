// Validación de la contraseña

const validatePassword = (password) => {
  // La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  return passwordRegex.test(password);
};

export default validatePassword;

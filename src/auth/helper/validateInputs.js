
export const validateInputs = ({email, password}) => {

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(!email) return 'El email es requerido';

  if(!emailRegex.test(email)) return 'El email no es válido';

  if(!password) return 'La contraseña es requerida';
  
  };
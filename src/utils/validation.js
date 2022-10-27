export const validateEmailReg = email => {
  const rEmail = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
  const emailValidation = rEmail.test(email);
  return emailValidation;
};

export const validatePswReg = password => {
  const rPassword = new RegExp('.{8,15}');
  const passwordValidation = rPassword.test(password);
  return passwordValidation;
};

export const validateTodoReg = todo => {
  const todoValidation = todo.replace(/ /g, '').length >= 3;
  return todoValidation;
};

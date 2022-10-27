export const emailCheck = email => {
  let regExp = /[@]/;
  return email.trim() !== '' && email !== 'undefined' && regExp.test(email);
};
export const passwordCheck = password => {
  let regExp = /.{8,}/;
  return password.trim() !== '' && password !== 'undefined' && regExp.test(password);
};

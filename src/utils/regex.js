export const emailCheck = (email) => {
  const regEmail = /@/;
  return regEmail.test(email)
}

export const passwordCheck = (password) => {
  const regPassword = /.{8,}/;
  return password.trim() !== "" && password !== "undefined" && regPassword.test(password)
}

export const rePasswordCheck = (password, rePassword) => {
  return(password === rePassword)
}
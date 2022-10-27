export const validCheck = (type, value) => {
  const pattern = type === 'email' ? /\S+@\S+\.\S+/ : /.{8,}/;
  return pattern.test(value);
};

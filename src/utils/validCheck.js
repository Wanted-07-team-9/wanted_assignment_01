export const validCheck = (type, value) => {
  const pattern = type === 'email' ? /\S+@\S+\.\S+/ : /.{8,}/;
  return pattern.test(value);
};

export const validEmptyCheck = (value) => {
  return !value.replace(/ /g, "").length >= 1;
}
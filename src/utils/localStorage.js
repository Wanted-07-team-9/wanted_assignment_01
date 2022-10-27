export const setStorageItem = (key, value) => {
  localStorage.setItem(key, value);
};
export const getStorageItem = key => {
  return localStorage.getItem(key);
};
export const removeStorageItem = key => {
  localStorage.removeItem(key);
};

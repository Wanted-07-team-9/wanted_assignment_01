// Token 가져오기
export const getJwtToken = tokenName => {
  return localStorage.getItem(tokenName);
};

// Token 저장
export const setJwtToken = (tokenName, tokenData) => {
  localStorage.setItem(tokenName, tokenData);
  return 0;
};

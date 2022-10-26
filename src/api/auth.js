import axiosInstance from '../utils/axiosInstance';

export const signIn = async (email, password, hadleModal) => {
  try {
    const response = await axiosInstance.post('/auth/signin', {
      email,
      password,
    });
    window.localStorage.setItem('token', response.data.access_token);
    window.location.reload();
  } catch (error) {
    hadleModal('회원정보를 확인해주세요');
  }
};

export const signUp = async (email, password, handleChangeMode, hadleModal) => {
  try {
    const response = await axiosInstance.post('/auth/signup', {
      email,
      password,
    });
    hadleModal('회원가입에 성공하셨습니다!');
    handleChangeMode();
    console.log(response)
  } catch (error) {
    hadleModal(error.response.data.message);
  }
};

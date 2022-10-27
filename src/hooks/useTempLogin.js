import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';

export const useTempLogin = () => {
  const { tempLogin } = useAuth();
  useEffect(() => {
    if (localStorage.getItem('token')) {
      tempLogin();
    }
  }, [tempLogin]);
};

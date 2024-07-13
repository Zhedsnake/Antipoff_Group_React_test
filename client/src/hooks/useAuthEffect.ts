import { useEffect } from 'react';
import { useAppDispatch } from './hooks';

const useAuthEffect = () => {
  const dispatch = useAppDispatch();

  // Восстанавливаем состояние аутентификации из localStorage при монтировании компонента
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch({ type: 'auth/logIn/fulfilled', payload: { token } });
    }
  }, [dispatch]);
};

export default useAuthEffect;

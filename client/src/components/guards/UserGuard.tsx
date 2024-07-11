import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';
import { RootState } from '../../store';

type UserGuardProps = {
  children: React.ReactNode;
};

// Компонент UserGuard проверяет, что пользователь аутентифицирован.
// Если пользователь аутентифицирован, перенаправляет на главную страницу.
const UserGuard: React.FC<UserGuardProps> = ({ children }) => {
  const isAuthenticated = useAppSelector((state: RootState) => state.auth.isAuthenticated);

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default UserGuard;

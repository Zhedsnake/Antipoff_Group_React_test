import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';
import { RootState } from '../../store';

type GuestGuardProps = {
  children: React.ReactNode;
};

// Компонент GuestGuard проверяет, что пользователь не аутентифицирован.
// Если пользователь неаутентифицирован, перенаправляет на страницу аутентификации.
const GuestGuard: React.FC<GuestGuardProps> = ({ children }) => {
  const isAuthenticated = useAppSelector((state: RootState) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/authentification" />;
  }

  return <>{children}</>;
};

export default GuestGuard;

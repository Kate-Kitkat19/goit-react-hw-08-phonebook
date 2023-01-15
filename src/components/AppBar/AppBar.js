
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header >
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
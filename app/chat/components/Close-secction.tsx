import { type FC } from 'react';
import { useNavigate } from 'react-router';
import { LogOut } from 'lucide-react';
import { Button } from '~/components/ui/button';

export const CloseSecction: FC = () => {
  const navigate = useNavigate();
  const onLogOut = () => {
    localStorage.removeItem('token');
    // queryClient.invalidateQueries({ queryKey: ['user'] });
    navigate('/auth', { replace: true });
  };
  return (
    <div className="p-4 border-t w-full">
      <Button className="w-full cursor-pointer" variant="outline" size="sm" onClick={onLogOut}>
        <LogOut className="mr-2 h-4 w-4" />
        Logout
      </Button>
    </div>
  );
};

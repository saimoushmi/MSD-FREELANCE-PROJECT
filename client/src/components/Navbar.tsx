import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Briefcase, LogOut, User, Settings } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

export default function Navbar() {
  const [, setLocation] = useLocation();
  const { user, isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    setLocation('/');
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <nav className="sticky top-0 z-50 border-b bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link href="/" data-testid="link-home">
            <button className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-md px-3 py-2">
              <Briefcase className="h-6 w-6 text-primary" />
              <span className="text-xl font-semibold">FreelanceConnect</span>
            </button>
          </Link>

          <div className="flex items-center gap-2">
            {isAuthenticated ? (
              <>
                <Link href="/dashboard">
                  <Button variant="ghost" size="default" data-testid="button-dashboard">
                    Dashboard
                  </Button>
                </Link>
                <Link href="/browse">
                  <Button variant="ghost" size="default" data-testid="button-browse">
                    {user?.role === 'client' ? 'Find Freelancers' : 'Find Projects'}
                  </Button>
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="hover-elevate active-elevate-2 rounded-full" data-testid="button-user-menu">
                      <Avatar className="h-9 w-9">
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {getInitials(user?.fullName || 'U')}
                        </AvatarFallback>
                      </Avatar>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem onClick={() => setLocation('/profile')} data-testid="menu-profile">
                      <User className="mr-2 h-4 w-4" />
                      View Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setLocation('/profile/edit')} data-testid="menu-edit-profile">
                      <Settings className="mr-2 h-4 w-4" />
                      Edit Profile
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout} data-testid="menu-logout">
                      <LogOut className="mr-2 h-4 w-4" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost" size="default" data-testid="button-login">
                    Login
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button variant="default" size="default" data-testid="button-signup">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

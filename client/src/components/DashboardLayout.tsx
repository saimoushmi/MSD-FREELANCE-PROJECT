import { Briefcase, FileText, DollarSign, MessageCircle, User, LogOut, Users, PlusCircle, Menu, Moon, Sun } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger
} from '@/components/ui/sidebar';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';
import { useState, useEffect } from 'react';

interface DashboardLayoutProps {
  children: React.ReactNode;
  role: 'freelancer' | 'client';
}

export default function DashboardLayout({ children, role }: DashboardLayoutProps) {
  const [location, setLocation] = useLocation();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', String(newDarkMode));
    document.documentElement.classList.toggle('dark');
  };

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    setLocation('/');
  };

  const freelancerItems = [
    { title: 'Dashboard', url: '/freelancer/dashboard', icon: Briefcase },
    { title: 'Browse Jobs', url: '/freelancer/browse-jobs', icon: Briefcase },
    { title: 'My Proposals', url: '/freelancer/proposals', icon: FileText },
    { title: 'Earnings', url: '/freelancer/earnings', icon: DollarSign },
    { title: 'Messages', url: '/freelancer/messages', icon: MessageCircle },
    { title: 'Profile', url: '/freelancer/profile', icon: User }
  ];

  const clientItems = [
    { title: 'Dashboard', url: '/client/dashboard', icon: Briefcase },
    { title: 'Post Job', url: '/client/post-job', icon: PlusCircle },
    { title: 'View Proposals', url: '/client/proposals', icon: FileText },
    { title: 'Manage Freelancers', url: '/client/freelancers', icon: Users },
    { title: 'Messages', url: '/client/messages', icon: MessageCircle },
    { title: 'Payment', url: '/client/payment', icon: DollarSign },
    { title: 'Profile', url: '/client/profile', icon: User }
  ];

  const items = role === 'freelancer' ? freelancerItems : clientItems;

  const style = {
    '--sidebar-width': '16rem'
  };

  return (
    <SidebarProvider style={style as React.CSSProperties}>
      <div className="flex h-screen w-full">
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <div className="px-4 py-6">
                <h1 className="text-2xl font-bold text-primary">FreelanceHub</h1>
                <p className="text-xs text-muted-foreground mt-1">
                  {role === 'freelancer' ? 'Freelancer Portal' : 'Client Portal'}
                </p>
              </div>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        data-testid={`nav-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                        onClick={() => setLocation(item.url)}
                        isActive={location === item.url}
                        className="hover-elevate"
                      >
                        <item.icon className="w-4 h-4" />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          
          <SidebarFooter>
            <div className="p-4 border-t space-y-3">
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">John Doe</p>
                  <p className="text-xs text-muted-foreground truncate">
                    {localStorage.getItem('userEmail') || 'user@example.com'}
                  </p>
                </div>
              </div>
              <Button
                data-testid="button-logout"
                variant="outline"
                size="sm"
                className="w-full"
                onClick={handleLogout}
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>

        <div className="flex flex-col flex-1">
          <header className="flex items-center justify-between p-4 border-b bg-background sticky top-0 z-10">
            <SidebarTrigger data-testid="button-sidebar-toggle">
              <Menu className="w-5 h-5" />
            </SidebarTrigger>
            
            <Button
              data-testid="button-theme-toggle"
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
          </header>

          <main className="flex-1 overflow-y-auto p-8">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

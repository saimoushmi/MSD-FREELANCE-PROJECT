import { Link, useLocation } from 'wouter';
import { Home, Briefcase, User, Search, Settings, LogOut } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { useAuth } from '@/contexts/AuthContext';

export function AppSidebar() {
  const [location] = useLocation();
  const { user, logout } = useAuth();

  const freelancerItems = [
    { title: 'Dashboard', url: '/dashboard', icon: Home },
    { title: 'Find Projects', url: '/browse', icon: Search },
    { title: 'My Profile', url: '/profile', icon: User },
    { title: 'Settings', url: '/profile/edit', icon: Settings },
  ];

  const clientItems = [
    { title: 'Dashboard', url: '/dashboard', icon: Home },
    { title: 'Find Freelancers', url: '/browse', icon: Search },
    { title: 'My Profile', url: '/profile', icon: User },
    { title: 'Settings', url: '/profile/edit', icon: Settings },
  ];

  const items = user?.role === 'freelancer' ? freelancerItems : clientItems;

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={location === item.url}>
                    <Link href={item.url}>
                      <a data-testid={`sidebar-${item.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={() => logout()} data-testid="sidebar-logout">
                  <LogOut />
                  <span>Logout</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

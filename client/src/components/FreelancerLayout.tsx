import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { 
  Home, Briefcase, FileText, MessageSquare, 
  BarChart2, Users, Settings, LogOut, Bell, Search, 
  Menu, X, Plus, ChevronDown, User, Mail, HelpCircle,
  Calendar, Clock, CheckCircle2, Star, DollarSign
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Dashboard', icon: Home, path: '/freelancer/dashboard' },
  { name: 'My Jobs', icon: Briefcase, path: '/freelancer/jobs' },
  { name: 'Proposals', icon: FileText, path: '/freelancer/proposals' },
  { name: 'Messages', icon: MessageSquare, path: '/freelancer/messages' },
  { name: 'Analytics', icon: BarChart2, path: '/freelancer/analytics' },
  { name: 'Find Work', icon: Search, path: '/freelancer/find-work' },
  { name: 'My Network', icon: Users, path: '/freelancer/network' },
  { name: 'Settings', icon: Settings, path: '/freelancer/settings' },
];

const recentActivities = [
  { id: 1, title: 'New job posted', description: 'UI/UX Designer for Mobile App', time: '2h ago', icon: Briefcase },
  { id: 2, title: 'Proposal accepted', description: 'E-commerce Website Development', time: '5h ago', icon: CheckCircle2 },
  { id: 3, title: 'Message received', description: 'From: John D. (Project Discussion)', time: '1d ago', icon: MessageSquare },
  { id: 4, title: 'Payment received', description: '$1,200 for Web Development', time: '2d ago', icon: DollarSign },
];

interface FreelancerLayoutProps {
  children: React.ReactNode;
}

export default function FreelancerLayout({ children }: FreelancerLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [location] = useLocation();

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 bg-white shadow-md w-64 transform transition-transform duration-300 ease-in-out z-50",
        !isSidebarOpen && "-translate-x-full"
      )}>
        <div className="p-4 flex items-center justify-between border-b h-16">
          <h1 className="text-xl font-bold text-primary">FreelanceConnect</h1>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsSidebarOpen(false)}
            className="md:hidden"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <nav className="p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={cn(
                "flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                location.startsWith(item.path)
                  ? "bg-primary/10 text-primary"
                  : "text-gray-700 hover:bg-gray-100"
              )}
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.name}
            </Link>
          ))}
        </nav>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
          <Button variant="ghost" className="w-full justify-start">
            <LogOut className="h-5 w-5 mr-3" />
            Logout
          </Button>
        </div>
      </div>

      {/* Mobile header */}
      <header className="md:hidden fixed top-0 left-0 right-0 bg-white shadow-sm h-16 flex items-center px-4 z-40">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setIsSidebarOpen(true)}
          className="mr-2"
        >
          <Menu className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-bold">FreelanceConnect</h1>
      </header>

      {/* Main content */}
      <div className={cn(
        "flex-1 flex flex-col overflow-hidden transition-all duration-300",
        isSidebarOpen ? "md:ml-64" : "md:ml-0"
      )}>
        {/* Top navigation */}
        <header className="bg-white shadow-sm h-16 flex items-center px-4 md:px-6">
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search jobs, projects..."
                className="pl-10 w-full"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4 ml-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
            </Button>
            <Button variant="ghost" size="icon">
              <MessageSquare className="h-5 w-5" />
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="h-4 w-4 mr-2" />
              Post a Job
            </Button>
            <div className="relative group">
              <Button variant="ghost" className="relative h-10 w-10 rounded-full p-0">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </Button>
              <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                <div className="py-1">
                  <div className="px-4 py-2 text-sm text-gray-700 border-b">
                    <p className="font-medium">John Doe</p>
                    <p className="text-xs text-gray-500">johndoe@example.com</p>
                  </div>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <User className="inline h-4 w-4 mr-2" />
                    Profile
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <Settings className="inline h-4 w-4 mr-2" />
                    Settings
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <HelpCircle className="inline h-4 w-4 mr-2" />
                    Help
                  </a>
                  <div className="border-t">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <LogOut className="inline h-4 w-4 mr-2" />
                      Sign out
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

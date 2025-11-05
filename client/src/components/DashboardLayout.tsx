import { Briefcase, FileText, DollarSign, MessageCircle, User, LogOut, Users, PlusCircle, Menu, Moon, Sun, X, MessageSquare } from 'lucide-react';
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
  SidebarTrigger,
  SidebarCollapseButton
} from '@/components/ui/sidebar';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
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
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: 'Welcome to FreelanceHub Chat!', sender: 'system', timestamp: new Date() }
  ]);
  const [newMessage, setNewMessage] = useState('');
  
  // Mock messages - in a real app, these would come from an API
  const mockMessages = [
    { id: 1, name: 'Support', lastMessage: 'How can we help you today?', unread: 0 },
    { id: 2, name: 'Project Updates', lastMessage: 'New message about your project', unread: 2 },
  ];

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

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    
    const message = {
      id: messages.length + 1,
      text: newMessage,
      sender: 'me',
      timestamp: new Date()
    };
    
    setMessages([...messages, message]);
    setNewMessage('');
    
    // In a real app, you would send the message to your backend here
  };
  
  const toggleChat = () => {
    setShowChat(!showChat);
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
      <div className="flex h-screen w-full relative">
        <Sidebar collapsed={isCollapsed}>
          <SidebarContent>
            <SidebarGroup>
              <div className={cn("px-4 py-6 flex items-center justify-between", isCollapsed && 'justify-center')}>
                {!isCollapsed && (
                  <div>
                    <h1 className="text-2xl font-bold text-primary">FreelanceHub</h1>
                    <p className="text-xs text-muted-foreground mt-1">
                      {role === 'freelancer' ? 'Freelancer Portal' : 'Client Portal'}
                    </p>
                  </div>
                )}
                <button 
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  className="p-1 rounded-md hover:bg-accent"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </div>
              <SidebarGroupLabel className={cn(isCollapsed ? 'px-2' : 'px-4')}>
                {!isCollapsed && 'Navigation'}
              </SidebarGroupLabel>
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
                  <SidebarFooter className="p-2">
                    <div className="space-y-1">
                      <Button
                        variant="ghost"
                        className={cn("w-full justify-start", isCollapsed && 'justify-center p-2')}
                        onClick={toggleDarkMode}
                      >
                        {darkMode ? (
                          <Sun className="w-4 h-4" />
                        ) : (
                          <Moon className="w-4 h-4" />
                        )}
                        {!isCollapsed && <span className="ml-2">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>}
                      </Button>
                      <Button
                        variant="ghost"
                        className={cn("w-full justify-start text-red-500 hover:text-red-600", isCollapsed && 'justify-center p-2')}
                        onClick={handleLogout}
                      >
                        <LogOut className="w-4 h-4" />
                        {!isCollapsed && <span className="ml-2">Logout</span>}
                      </Button>
                    </div>
                  </SidebarFooter>
                </div>
              </div>
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

          <main className={cn("flex-1 overflow-auto p-6 transition-all duration-300", isCollapsed ? 'ml-16' : 'ml-64')}>
            {children}
          </main>

          {/* Chat Toggle Button */}
          <button
            onClick={toggleChat}
            className={cn(
              "fixed bottom-6 right-6 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-all duration-200 z-50",
              showChat ? 'opacity-0 pointer-events-none' : 'opacity-100'
            )}
            aria-label="Open chat"
          >
            <MessageSquare className="w-6 h-6" />
          </button>

          {/* Chat Panel */}
          <div 
            className={cn(
              "fixed bottom-0 right-0 w-80 h-[500px] bg-card shadow-xl border-l border-t rounded-tl-lg flex flex-col transition-all duration-300 z-50",
              showChat ? 'translate-y-0' : 'translate-y-full'
            )}
          >
            <div className="bg-primary text-primary-foreground p-3 rounded-tl-lg flex justify-between items-center">
              <h3 className="font-medium">Messages</h3>
              <button 
                onClick={toggleChat}
                className="p-1 rounded-full hover:bg-primary/20"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex-1 overflow-hidden flex flex-col">
              {/* Chat messages */}
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div 
                      key={message.id}
                      className={cn(
                        "p-3 rounded-lg max-w-[80%]",
                        message.sender === 'me' 
                          ? 'ml-auto bg-primary text-primary-foreground' 
                          : message.sender === 'system'
                            ? 'mx-auto text-center text-sm text-muted-foreground'
                            : 'bg-muted'
                      )}
                    >
                      <div className="text-sm">{message.text}</div>
                      <div className="text-xs opacity-70 mt-1 text-right">
                        {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              {/* Message input */}
              <form onSubmit={handleSendMessage} className="p-3 border-t">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Type a message..."
                    className="pr-12"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                  />
                  <Button 
                    type="submit" 
                    size="sm" 
                    className="absolute right-1 top-1/2 -translate-y-1/2 h-8"
                    disabled={!newMessage.trim()}
                  >
                    Send
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}

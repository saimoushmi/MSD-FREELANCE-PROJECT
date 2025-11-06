import React, { useState } from 'react';
import { 
  Home, Briefcase, FileText, MessageSquare, 
  BarChart2, Users, Settings, LogOut, Bell, 
  Search, Menu, X, Plus, ChevronDown, 
  Star, MapPin, Clock, DollarSign, CheckCircle2,
  TrendingUp, Calendar, FileCheck, UserPlus, 
  AlertCircle, Mail, ExternalLink, HelpCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { Link } from 'wouter';

const FreelancerDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  
  // Navigation items
  const navItems = [
    { name: 'Dashboard', icon: Home, active: true, path: '/freelancer/dashboard' },
    { name: 'My Jobs', icon: Briefcase, active: false, path: '/freelancer/jobs' },
    { name: 'Proposals', icon: FileText, active: false, path: '/freelancer/proposals' },
    { name: 'Messages', icon: MessageSquare, active: false, path: '/freelancer/messages' },
    { name: 'Analytics', icon: BarChart2, active: false, path: '/freelancer/analytics' },
    { name: 'Find Work', icon: Search, active: false, path: '/freelancer/find-work' },
    { name: 'My Network', icon: Users, active: false, path: '/freelancer/network' },
    { name: 'Settings', icon: Settings, active: false, path: '/freelancer/settings' },
  ];

  // Stats data
  const stats = [
    { 
      title: 'Total Earnings', 
      value: '$28,750', 
      change: '+18% from last month', 
      icon: DollarSign, 
      trend: 'up' 
    },
    { 
      title: 'Active Jobs', 
      value: '8', 
      change: '+2 from last month', 
      icon: Briefcase, 
      trend: 'up' 
    },
    { 
      title: 'Proposals', 
      value: '24', 
      change: '+5 from last month', 
      icon: FileText, 
      trend: 'up' 
    },
    { 
      title: 'Active Clients', 
      value: '6', 
      change: '+2 from last month', 
      icon: Users, 
      trend: 'up' 
    },
  ];

  // Recent activities
  const recentActivities = [
    { id: 1, title: 'New job posted', description: 'UI/UX Designer for Mobile App', time: '2h ago', icon: Briefcase },
    { id: 2, title: 'Proposal accepted', description: 'E-commerce Website Development', time: '5h ago', icon: CheckCircle2 },
    { id: 3, title: 'Message received', description: 'From: John D. (Project Discussion)', time: '1d ago', icon: MessageSquare },
    { id: 4, title: 'Payment received', description: '$1,200 for Web Development', time: '2d ago', icon: DollarSign },
  ];

  // Active jobs
  const activeJobs = [
    {
      id: 1,
      title: 'Senior React Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120k - $150k',
      posted: '2 days ago',
      skills: ['React', 'TypeScript', 'Redux'],
      progress: 75
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      company: 'DesignHub',
      location: 'Remote',
      type: 'Contract',
      salary: '$80 - $100/hr',
      posted: '1 week ago',
      skills: ['Figma', 'Sketch', 'Adobe XD'],
      progress: 30
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 bg-white shadow-md w-64 transform transition-transform duration-300 ease-in-out z-50",
        !isSidebarOpen && "-translate-x-full md:translate-x-0"
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
                item.active
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
        "flex-1 flex flex-col overflow-hidden transition-all duration-300 pt-16 md:pt-0",
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
                    <UserPlus className="inline h-4 w-4 mr-2" />
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
          <div className="mb-8">
            <h1 className="text-2xl font-bold">Welcome back, John!</h1>
            <p className="text-muted-foreground">Here's what's happening with your projects today.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                      <h3 className="text-2xl font-bold">{stat.value}</h3>
                      <p className="text-sm text-green-500 flex items-center mt-1">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        {stat.change}
                      </p>
                    </div>
                    <div className="p-3 rounded-full bg-primary/10">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="my-jobs">My Jobs</TabsTrigger>
              <TabsTrigger value="proposals">Proposals</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              {/* Active Jobs */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Active Jobs</CardTitle>
                      <CardDescription>Jobs you're currently working on</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">
                      View All
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {activeJobs.map((job) => (
                      <div key={job.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start">
                          <div className="space-y-1">
                            <h3 className="font-medium">{job.title}</h3>
                            <p className="text-sm text-muted-foreground">{job.company} • {job.location}</p>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Clock className="h-4 w-4 mr-1" />
                              <span>Posted {job.posted}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">View Details</Button>
                            <Button size="sm">Continue Working</Button>
                          </div>
                        </div>
                        <div className="mt-3 pt-3 border-t">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Badge variant="outline">{job.type}</Badge>
                              {job.skills.map((skill, i) => (
                                <Badge key={i} variant="secondary">{skill}</Badge>
                              ))}
                            </div>
                            <div className="text-sm font-medium">{job.salary}</div>
                          </div>
                          <div className="mt-3">
                            <div className="flex justify-between text-xs text-muted-foreground mb-1">
                              <span>Progress</span>
                              <span>{job.progress}%</span>
                            </div>
                            <Progress value={job.progress} className="h-2" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activities & Upcoming Deadlines */}
              <div className="grid gap-6 md:grid-cols-2">
                {/* Recent Activities */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivities.map((activity) => (
                        <div key={activity.id} className="flex items-start space-x-3">
                          <div className="p-2 rounded-full bg-primary/10">
                            <activity.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">{activity.title}</p>
                            <p className="text-sm text-muted-foreground">{activity.description}</p>
                            <p className="text-xs text-muted-foreground">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Upcoming Deadlines */}
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Deadlines</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="flex items-start space-x-3">
                          <div className="p-2 rounded-full bg-orange-100">
                            <Calendar className="h-5 w-5 text-orange-500" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">Project Milestone {item}</p>
                            <p className="text-sm text-muted-foreground">Due in {item} day{item !== 1 ? 's' : ''}</p>
                            <div className="mt-1">
                              <Progress value={item === 1 ? 75 : item === 2 ? 50 : 25} className="h-2" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default FreelancerDashboard;

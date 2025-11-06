import React, { useState } from 'react';
import { 
  Home, Briefcase, FileText, MessageSquare, 
  BarChart2, Users, Settings, LogOut, Bell, 
  Search, Menu, X, Plus, ChevronDown, 
  Star, MapPin, Clock, DollarSign, CheckCircle2,
  TrendingUp, Calendar, FileCheck, UserPlus, 
  AlertCircle, Mail, ExternalLink, HelpCircle,
  Phone, Video, Send, CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { Link } from 'wouter';

// Mock data with comprehensive information
const stats = [
  { 
    title: 'Total Spent', 
    value: '$28,750', 
    change: '+18% from last month', 
    icon: DollarSign, 
    trend: 'up' 
  },
  { 
    title: 'Active Projects', 
    value: '8', 
    change: '5 in development', 
    icon: Briefcase, 
    trend: 'up' 
  },
  { 
    title: 'Hired Talent', 
    value: '12', 
    change: '+3 from last month', 
    icon: Users, 
    trend: 'up' 
  },
  { 
    title: 'Invoices', 
    value: '5', 
    change: '2 pending approval', 
    icon: FileText, 
    trend: 'up' 
  },
];

// Recent activities
const recentActivities = [
  { id: 1, title: 'Project update', description: 'E-commerce website - Development phase', time: '2h ago', icon: Briefcase },
  { id: 2, title: 'New proposal', description: 'From: Sarah Johnson (UI/UX Designer)', time: '5h ago', icon: FileText },
  { id: 3, title: 'Message received', description: 'From: Alex Chen (Project Manager)', time: '1d ago', icon: MessageSquare },
  { id: 4, title: 'Payment processed', description: '$2,500 for Web Development', time: '2d ago', icon: DollarSign },
];

// Active projects
const activeProjects = [
  {
    id: 1,
    title: 'E-commerce Website',
    freelancer: 'John Smith',
    status: 'In Progress',
    deadline: 'Dec 15, 2023',
    progress: 65,
    budget: '$15,000',
    skills: ['React', 'Node.js', 'MongoDB']
  },
  {
    id: 2,
    title: 'Mobile App Design',
    freelancer: 'Emily Chen',
    status: 'In Review',
    deadline: 'Dec 5, 2023',
    progress: 90,
    budget: '$8,000',
    skills: ['Figma', 'UI/UX', 'Prototyping']
  },
];

// Upcoming deadlines
const upcomingDeadlines = [
  { id: 1, title: 'E-commerce Website', daysLeft: 5, progress: 65 },
  { id: 2, title: 'Mobile App Design', daysLeft: 2, progress: 90 },
  { id: 3, title: 'Brand Identity', daysLeft: 7, progress: 30 },
];

// Navigation items for client
const navItems = [
  { name: 'Dashboard', icon: Home, active: true, path: '/client/dashboard' },
  { name: 'My Projects', icon: Briefcase, active: false, path: '/client/projects' },
  { name: 'Hire Talent', icon: UserPlus, active: false, path: '/client/hire' },
  { name: 'Messages', icon: MessageSquare, active: false, path: '/client/messages' },
  { name: 'Analytics', icon: BarChart2, active: false, path: '/client/analytics' },
  { name: 'My Team', icon: Users, active: false, path: '/client/team' },
  { name: 'Settings', icon: Settings, active: false, path: '/client/settings' },
];

export default function ClientDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 bg-white shadow-md w-64 transform transition-transform duration-300 ease-in-out z-50",
        !isSidebarOpen && "-translate-x-full md:translate-x-0"
      )}>
        <div className="p-4 flex items-center justify-between border-b h-16">
          <h1 className="text-xl font-bold text-primary">Client Portal</h1>
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
        <h1 className="text-xl font-bold">Client Portal</h1>
      </header>
          <Card className="border border-gray-200">
            <CardHeader className="border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">My Projects</CardTitle>
                  <CardDescription>Track and manage your active projects</CardDescription>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50">
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-4">
              {activeProjects.map((project) => (
                <Card key={project.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{project.title}</CardTitle>
                        <CardDescription className="mt-1">
                          {project.freelancer} • {project.status}
                        </CardDescription>
                      </div>
                      <Badge variant="outline">{project.status}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-muted-foreground">Progress</p>
                        <div className="mt-1">
                          <Progress value={project.progress} className="h-2" />
                          <p className="text-xs text-muted-foreground mt-1 text-right">
                            {project.progress}% complete
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Deadline</p>
                        <p className="text-sm font-medium">{project.deadline}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Budget</p>
                        <p className="text-sm font-medium">{project.budget}</p>
                      </div>
                      <div className="flex justify-between pt-2">
                        <Button variant="outline" size="sm">View Details</Button>
                        <Button size="sm">Message</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Activity Feed */}
        <Card className="border border-gray-200">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates and notifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
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
          </CardContent>
        </Card>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Upcoming Deadlines */}
          <Card className="border border-gray-200">
            <CardHeader>
              <CardTitle>Upcoming Deadlines</CardTitle>
              <CardDescription>Your upcoming project milestones</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {activeProjects.map((project) => (
                <div key={project.id} className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <Calendar className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">{project.title}</h4>
                    <p className="text-sm text-gray-500">Due: {project.deadline}</p>
                    <div className="mt-1">
                      <Badge 
                        variant={project.status === 'High' ? 'destructive' : project.status === 'Medium' ? 'secondary' : 'default'}
                        className="text-xs"
                      >
                        {project.status} Priority
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="border border-gray-200">
            <CardHeader>
              <CardTitle>Project Statistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Project Completion</span>
                  <span className="text-sm font-medium">65%</span>
                </div>
                <Progress value={65} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Tasks Completed</span>
                  <span className="text-sm font-medium">24/36</span>
                </div>
                <Progress value={(24/36)*100} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Team Performance</span>
                  <span className="text-sm font-medium">89%</span>
                </div>
                <Progress value={89} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* Team Members */}
          <Card className="border border-gray-200">
            <CardHeader>
              <CardTitle>Team Members</CardTitle>
              <CardDescription>People working on your projects</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: 'John Doe', role: 'Project Manager', avatar: '/avatars/01.png' },
                { name: 'Sarah Smith', role: 'UI/UX Designer', avatar: '/avatars/02.png' },
                { name: 'Alex Johnson', role: 'Frontend Developer', avatar: '/avatars/03.png' },
                { name: 'Emma Wilson', role: 'Backend Developer', avatar: '/avatars/04.png' },
              ].map((member, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src={member.avatar} />
                      <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{member.name}</p>
                      <p className="text-xs text-gray-500">{member.role}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50">
                    Message
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

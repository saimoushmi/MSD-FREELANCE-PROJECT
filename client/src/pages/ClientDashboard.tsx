import { Briefcase, Users, FileText, DollarSign, Clock, MessageSquare, Bell, Search, Filter, CheckCircle, XCircle, MoreHorizontal, ArrowUpDown, Star, Plus, BarChart2, TrendingUp, CheckCircle2, AlertCircle, Clock as ClockIcon, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { useLocation } from 'wouter';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';

// Mock data with comprehensive information
const stats = [
  { 
    title: 'Total Earnings', 
    value: '$28,750', 
    change: '+18% from last month',
    icon: DollarSign,
    trend: 'up',
    color: 'text-green-500',
    chart: 'up',
    details: [
      { month: 'Jan', amount: 18500 },
      { month: 'Feb', amount: 20500 },
      { month: 'Mar', amount: 24500 },
      { month: 'Apr', amount: 21800 },
      { month: 'May', amount: 26750 },
      { month: 'Jun', amount: 28750 },
    ]
  },
  { 
    title: 'Active Projects', 
    value: '8', 
    change: '5 in development',
    icon: Briefcase,
    trend: 'up',
    color: 'text-blue-500',
    chart: 'up',
    details: [
      { status: 'In Progress', count: 5 },
      { status: 'In Review', count: 2 },
      { status: 'On Hold', count: 1 },
    ]
  },
  { 
    title: 'New Messages', 
    value: '17', 
    change: '5 unread',
    icon: MessageSquare,
    trend: 'up',
    color: 'text-purple-500',
    chart: 'up',
    details: [
      { type: 'Project Updates', count: 8 },
      { type: 'Client Queries', count: 5 },
      { type: 'Team Messages', count: 4 },
    ]
  },
  { 
    title: 'Tasks Completed', 
    value: '87/120', 
    change: '33 remaining',
    icon: CheckCircle2,
    trend: 'up',
    color: 'text-orange-500',
    chart: 'up',
    details: [
      { status: 'Completed', count: 87 },
      { status: 'In Progress', count: 25 },
      { status: 'Pending', count: 8 },
    ]
  }
];

const recentActivities = [
  { 
    id: 1, 
    title: 'E-commerce Project Milestone Reached', 
    description: 'Completed checkout flow and payment integration', 
    time: '2 hours ago', 
    icon: CheckCircle,
    status: 'completed',
    project: 'Fashion Store',
    priority: 'High',
    read: false
  },
  { 
    id: 2, 
    title: 'Payment Processed', 
    description: 'Invoice #INV-2023-056 for $3,200 has been paid', 
    time: '5 hours ago', 
    icon: DollarSign,
    status: 'completed',
    project: 'Tech Solutions',
    priority: 'Medium',
    read: false
  },
  { 
    id: 3, 
    title: 'New Project Requirements', 
    description: 'Client uploaded new design assets and requirements document', 
    time: '1 day ago', 
    icon: FileText,
    status: 'in-progress',
    project: 'Healthcare App',
    priority: 'High',
    read: true
  },
  { 
    id: 4, 
    title: 'Project Deadline Extended', 
    description: 'Mobile app delivery pushed to next week', 
    time: '2 days ago', 
    icon: ClockIcon,
    status: 'pending',
    project: 'Fitness Tracker',
    priority: 'Medium',
    read: true
  },
  { 
    id: 5, 
    title: 'New Team Member Added', 
    description: 'Sarah Johnson joined as UI/UX Designer', 
    time: '3 days ago', 
    icon: Users,
    status: 'completed',
    project: 'All Projects',
    priority: 'Low',
    read: true
  }
];

const projects = [
  {
    id: 1,
    name: 'E-commerce Platform',
    client: 'Fashion Store',
    status: 'In Progress',
    progress: 65,
    deadline: '15 Dec 2023',
    startDate: '15 Sep 2023',
    priority: 'High',
    budget: '$12,500',
    description: 'Complete e-commerce solution with product catalog, cart, and payment integration',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    team: [
      { 
        name: 'John D.', 
        role: 'Lead Developer', 
        avatar: '/avatars/01.png',
        email: 'john.d@example.com',
        phone: '+1 (555) 123-4567'
      },
      { 
        name: 'Sarah M.', 
        role: 'UI/UX Designer', 
        avatar: '/avatars/02.png',
        email: 'sarah.m@example.com',
        phone: '+1 (555) 234-5678'
      },
      {
        name: 'Mike R.',
        role: 'Backend Developer',
        avatar: '/avatars/03.png',
        email: 'mike.r@example.com',
        phone: '+1 (555) 345-6789'
      }
    ],
    tasks: [
      { id: 1, title: 'Product Page Design', status: 'Completed', assignee: 'Sarah M.' },
      { id: 2, title: 'Shopping Cart Logic', status: 'In Progress', assignee: 'John D.' },
      { id: 3, title: 'Payment Integration', status: 'In Progress', assignee: 'Mike R.' },
      { id: 4, title: 'User Authentication', status: 'Pending', assignee: 'John D.' },
      { id: 5, title: 'Admin Dashboard', status: 'Pending', assignee: 'Unassigned' }
    ],
    milestones: [
      { id: 1, title: 'Project Kickoff', date: '20 Sep 2023', completed: true },
      { id: 2, title: 'UI/UX Approval', date: '15 Oct 2023', completed: true },
      { id: 3, title: 'Core Features', date: '30 Nov 2023', completed: false },
      { id: 4, title: 'Beta Testing', date: '10 Dec 2023', completed: false },
      { id: 5, title: 'Launch', date: '15 Dec 2023', completed: false }
    ]
  },
  {
    id: 2,
    name: 'Mobile App UI/UX',
    client: 'Tech Solutions Inc.',
    status: 'Review',
    progress: 90,
    deadline: '20 Dec 2023',
    startDate: '1 Nov 2023',
    priority: 'Medium',
    budget: '$8,200',
    description: 'Mobile application design for iOS and Android platforms',
    technologies: ['Figma', 'Adobe XD', 'Sketch'],
    team: [
      { 
        name: 'Alex K.', 
        role: 'UI/UX Designer', 
        avatar: '/avatars/03.png',
        email: 'alex.k@example.com',
        phone: '+1 (555) 456-7890'
      },
      {
        name: 'Lisa T.',
        role: 'UX Researcher',
        avatar: '/avatars/04.png',
        email: 'lisa.t@example.com',
        phone: '+1 (555) 567-8901'
      }
    ],
    tasks: [
      { id: 1, title: 'User Research', status: 'Completed', assignee: 'Lisa T.' },
      { id: 2, title: 'Wireframing', status: 'Completed', assignee: 'Alex K.' },
      { id: 3, title: 'High-Fidelity Design', status: 'In Review', assignee: 'Alex K.' },
      { id: 4, title: 'Design System', status: 'Completed', assignee: 'Alex K.' },
      { id: 5, title: 'Client Presentation', status: 'Pending', assignee: 'Alex K.' }
    ],
    milestones: [
      { id: 1, title: 'Research Complete', date: '10 Nov 2023', completed: true },
      { id: 2, title: 'Initial Designs', date: '25 Nov 2023', completed: true },
      { id: 3, title: 'Client Feedback', date: '5 Dec 2023', completed: true },
      { id: 4, title: 'Final Revisions', date: '15 Dec 2023', completed: false },
      { id: 5, title: 'Delivery', date: '20 Dec 2023', completed: false }
    ]
  },
  {
    id: 3,
    name: 'Content Marketing',
    client: 'Blog Platform',
    status: 'Not Started',
    progress: 0,
    deadline: '25 Dec 2023',
    startDate: '1 Dec 2023',
    priority: 'Low',
    budget: '$2,500',
    description: 'Content creation and SEO optimization for blog platform',
    technologies: ['WordPress', 'Yoast SEO', 'Google Analytics'],
    team: [
      { 
        name: 'Emma W.', 
        role: 'Content Writer', 
        avatar: '/avatars/04.png',
        email: 'emma.w@example.com',
        phone: '+1 (555) 678-9012'
      }
    ],
    tasks: [
      { id: 1, title: 'Keyword Research', status: 'Not Started', assignee: 'Emma W.' },
      { id: 2, title: 'Content Outline', status: 'Not Started', assignee: 'Emma W.' },
      { id: 3, title: 'First Draft', status: 'Not Started', assignee: 'Emma W.' },
      { id: 4, title: 'SEO Optimization', status: 'Not Started', assignee: 'Emma W.' },
      { id: 5, title: 'Publishing', status: 'Not Started', assignee: 'Emma W.' }
    ],
    milestones: [
      { id: 1, title: 'Kickoff Meeting', date: '5 Dec 2023', completed: false },
      { id: 2, title: 'First Draft', date: '15 Dec 2023', completed: false },
      { id: 3, title: 'Revisions', date: '20 Dec 2023', completed: false },
      { id: 4, title: 'Final Approval', date: '23 Dec 2023', completed: false },
      { id: 5, title: 'Publish', date: '25 Dec 2023', completed: false }
    ]
  }
];

export default function ClientDashboard() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500">Welcome back, John! Here's what's happening with your projects.</p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-3">
          <Button variant="outline" size="sm" className="flex items-center">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            New Project
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* Projects Overview */}
        <div className="md:col-span-2 space-y-6">
          {/* Projects Table */}
          <Card className="border border-gray-200">
            <CardHeader className="border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">My Projects</CardTitle>
                  <CardDescription>Track and manage your active projects</CardDescription>
                </div>
                <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50">
                  View All
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="w-[300px]">Project Name</TableHead>
                    <TableHead>Progress</TableHead>
                    <TableHead>Team</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {projects.map((project) => (
                    <TableRow key={project.id} className="hover:bg-gray-50">
                      <TableCell className="font-medium">
                        <div className="flex items-center">
                          <div className="p-2 bg-blue-100 rounded-lg mr-3">
                            <Briefcase className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium">{project.name}</p>
                            <p className="text-sm text-gray-500">{project.client}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>{project.progress}%</span>
                            <span className="text-gray-500">{project.deadline}</span>
                          </div>
                          <Progress value={project.progress} className="h-2" />
                          <div className="text-xs text-gray-500">
                            {project.status} • {project.priority} Priority
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex -space-x-2">
                          {project.team.map((member, i) => (
                            <Avatar key={i} className="h-8 w-8 border-2 border-white">
                              <AvatarImage src={member.avatar} />
                              <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                          ))}
                          <Avatar className="h-8 w-8 border-2 border-white bg-gray-100">
                            <AvatarFallback className="bg-gray-200">+{project.team.length}</AvatarFallback>
                          </Avatar>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
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
                <div key={activity.id} className="flex items-start">
                  <div className="relative">
                    <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center">
                      <activity.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    {activity.status === 'completed' && (
                      <CheckCircle2 className="h-4 w-4 text-green-500 absolute -right-1 -top-1 bg-white rounded-full" />
                    )}
                    {activity.status === 'pending' && (
                      <AlertCircle className="h-4 w-4 text-yellow-500 absolute -right-1 -top-1 bg-white rounded-full" />
                    )}
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{activity.title}</h4>
                      <span className="text-xs text-gray-500">{activity.time}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Upcoming Deadlines */}
          <Card className="border border-gray-200">
            <CardHeader>
              <CardTitle>Upcoming Deadlines</CardTitle>
              <CardDescription>Your upcoming project milestones</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {projects.map((project) => (
                <div key={project.id} className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <Calendar className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">{project.name}</h4>
                    <p className="text-sm text-gray-500">Due: {project.deadline}</p>
                    <div className="mt-1">
                      <Badge 
                        variant={project.priority === 'High' ? 'destructive' : project.priority === 'Medium' ? 'secondary' : 'default'}
                        className="text-xs"
                      >
                        {project.priority} Priority
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

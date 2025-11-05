import { Briefcase, Users, FileText, DollarSign, Clock, MessageSquare, Bell, Search, Filter, CheckCircle, XCircle, MoreHorizontal, ArrowUpDown, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { useLocation } from 'wouter';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

// Mock data
const stats = [
  { 
    title: 'Total Spent', 
    value: '$8,750', 
    change: '+$1,200 this month',
    icon: DollarSign,
    trend: 'up',
    color: 'text-green-500'
  },
  { 
    title: 'Active Jobs', 
    value: '5', 
    change: '3 in progress',
    icon: Briefcase,
    trend: 'up',
    color: 'text-blue-500'
  },
  { 
    title: 'Proposals', 
    value: '24', 
    change: '8 new today',
    icon: FileText,
    trend: 'up',
    color: 'text-purple-500'
  },
  { 
    title: 'Hired Freelancers', 
    value: '12', 
    change: '3 active now',
    icon: Users,
    trend: 'up',
    color: 'text-orange-500'
  }
];

const recentActivities = [
  { id: 1, title: 'New proposal received', description: 'From: Alex Johnson (Senior Developer)', time: '30 min ago', icon: FileText },
  { id: 2, title: 'Project milestone completed', description: 'E-commerce Website - Homepage', time: '2 hours ago', icon: CheckCircle },
  { id: 3, title: 'Message from freelancer', description: 'Regarding project requirements', time: '5 hours ago', icon: MessageSquare },
  { id: 4, title: 'Payment processed', description: '$1,200 for Web Development', time: '1 day ago', icon: DollarSign },
];

const activeJobs = [
  {
    id: 1,
    title: 'E-commerce Website Development',
    status: 'In Progress',
    progress: 65,
    freelancer: {
      name: 'Sarah Johnson',
      role: 'Full Stack Developer',
      avatar: '/placeholder-avatar.jpg',
      rating: 4.9
    },
    budget: '$5,000',
    timeline: '2 weeks left',
    lastUpdated: 'Updated 2 hours ago'
  },
  {
    id: 2,
    title: 'Mobile App UI/UX Design',
    status: 'Review',
    progress: 90,
    freelancer: {
      name: 'Michael Chen',
      role: 'UI/UX Designer',
      avatar: '/placeholder-avatar.jpg',
      rating: 4.7
    },
    budget: '$3,200',
    timeline: '3 days left',
    lastUpdated: 'Updated 5 hours ago'
  },
  {
    id: 3,
    title: 'Content Writing - Tech Blog',
    status: 'In Progress',
    progress: 30,
    freelancer: {
      name: 'Emily Wilson',
      role: 'Content Writer',
      avatar: '/placeholder-avatar.jpg',
      rating: 4.8
    },
    budget: '$800',
    timeline: '1 week left',
    lastUpdated: 'Updated 1 day ago'
  }
];

export default function ClientDashboard() {
  const [, setLocation] = useLocation();

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Client Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's an overview of your projects and activities.</p>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button onClick={() => setLocation('/client/post-job')}>
            Post New Job
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} className="border-none shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className={stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}>
                  {stat.change}
                </span>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Recent Activity */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your recent interactions and updates</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <activity.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{activity.title}</p>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">{activity.time}</span>
              </div>
            ))}
          </CardContent>
        </Card>
          icon={FileText}
          label="Total Proposals"
          value={45}
          change="+12 new"
          trend="up"
        />
        <StatCard
          icon={Users}
          label="Hired Freelancers"
          value={5}
        />
        <StatCard
          icon={DollarSign}
          label="Total Spent"
          value="$24,500"
        />
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Recent Proposals</h2>
      </div>

      <div className="space-y-4">
        {mockProposals.map((proposal) => (
          <ProposalCard
            key={proposal.id}
            {...proposal}
            onViewDetails={(id) => console.log('View proposal:', id)}
            onAccept={(id) => console.log('Accept proposal:', id)}
            onReject={(id) => console.log('Reject proposal:', id)}
          />
        ))}
      </div>
    </div>
  );
}

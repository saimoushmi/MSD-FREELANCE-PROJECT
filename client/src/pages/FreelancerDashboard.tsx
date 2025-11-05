import { Briefcase, DollarSign, FileText, Users, Clock, CheckCircle, Clock3, MessageSquare, Bell, Search, Filter, ChevronDown, ArrowUpDown, Star, MapPin, Calendar, Bookmark, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

// Mock data
const stats = [
  { 
    title: 'Total Earnings', 
    value: '$12,450', 
    change: '+12.5% from last month',
    icon: DollarSign,
    trend: 'up',
    color: 'text-green-500'
  },
  { 
    title: 'Active Jobs', 
    value: '8', 
    change: '+2 from last month',
    icon: Briefcase,
    trend: 'up',
    color: 'text-blue-500'
  },
  { 
    title: 'Proposals', 
    value: '24', 
    change: '+5 from last month',
    icon: FileText,
    trend: 'up',
    color: 'text-purple-500'
  },
  { 
    title: 'Active Clients', 
    value: '6', 
    change: '+2 from last month',
    icon: Users,
    trend: 'up',
    color: 'text-orange-500'
  }
];

const recentActivities = [
  { id: 1, title: 'New job posted', description: 'UI/UX Designer for Mobile App', time: '2 hours ago', icon: Briefcase },
  { id: 2, title: 'Proposal accepted', description: 'E-commerce Website Development', time: '5 hours ago', icon: CheckCircle },
  { id: 3, title: 'Message received', description: 'From: John D. (Project Discussion)', time: '1 day ago', icon: MessageSquare },
  { id: 4, title: 'Payment received', description: '$1,200 for Web Development', time: '2 days ago', icon: DollarSign },
];

const recommendedJobs = [
  {
    id: 1,
    title: 'Senior React Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$90k - $120k',
    posted: '2 days ago',
    skills: ['React', 'TypeScript', 'Redux', 'Node.js'],
    isSaved: true
  },
  {
    id: 2,
    title: 'UI/UX Designer',
    company: 'DesignHub',
    location: 'Remote',
    type: 'Contract',
    salary: '$50 - $70/hr',
    posted: '1 week ago',
    skills: ['Figma', 'Sketch', 'UI/UX', 'Prototyping'],
    isSaved: false
  },
  {
    id: 3,
    title: 'Full Stack Developer',
    company: 'WebSolutions',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$110k - $150k',
    posted: '3 days ago',
    skills: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
    isSaved: true
  },
  {
    id: 4,
    title: 'Product Manager',
    company: 'ProductLabs',
    location: 'Austin, TX',
    type: 'Full-time',
    salary: '$100k - $140k',
    posted: '5 days ago',
    skills: ['Product Management', 'Agile', 'JIRA', 'Roadmapping'],
    isSaved: false
  }
];

export default function FreelancerDashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, John! Here's what's happening with your account today.</p>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Avatar>
            <AvatarImage src="/placeholder-avatar.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
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
            <CardDescription>Your recent activities and notifications</CardDescription>
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
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Profile Completion */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Profile Strength</CardTitle>
            <CardDescription>Complete your profile to get better job matches</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Profile Completion</span>
                <span className="font-medium">75%</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Basic Information</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Clock3 className="h-4 w-4" />
                <span>Add portfolio items (0/3)</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Clock3 className="h-4 w-4" />
                <span>Complete skills assessment</span>
              </div>
            </div>
            <Button className="w-full">Complete Profile</Button>
          </CardContent>
        </Card>
      </div>

      {/* Recommended Jobs */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Recommended Jobs</CardTitle>
            <CardDescription>Jobs that match your profile</CardDescription>
          </div>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search jobs..."
                className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
              />
            </div>
            <Button variant="outline" size="sm" className="h-9">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recommendedJobs.map((job) => (
              <Card key={job.id} className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Briefcase className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">{job.title}</h3>
                        <p className="text-sm text-muted-foreground">{job.company} • {job.location}</p>
                        <div className="flex items-center mt-2 space-x-2">
                          <Badge variant="outline">{job.type}</Badge>
                          <span className="text-sm text-muted-foreground">{job.salary}</span>
                          <span className="text-xs text-muted-foreground">• {job.posted}</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {job.skills.map((skill, i) => (
                            <Badge key={i} variant="secondary" className="font-normal">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <Bookmark className={`h-4 w-4 ${job.isSaved ? 'fill-current' : ''}`} />
                      </Button>
                      <Button size="sm">Apply Now</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button variant="outline" className="w-full">
            View All Jobs
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
        />
        <StatCard
          icon={TrendingUp}
          label="Success Rate"
          value="87%"
          change="+3% this month"
          trend="up"
        />
      </div>

      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Recommended Jobs</h2>
        <Button data-testid="button-browse-all" variant="outline">
          Browse All Jobs
        </Button>
      </div>

      <div className="space-y-4">
        {mockJobs.map((job) => (
          <JobCard
            key={job.id}
            {...job}
            onApply={(id) => console.log('Apply to job:', id)}
            onViewDetails={(id) => console.log('View job details:', id)}
          />
        ))}
      </div>
    </div>
  );
}

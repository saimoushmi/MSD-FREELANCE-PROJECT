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

// TypeScript Interfaces
interface Milestone {
  id: number;
  title: string;
  date: string;
  completed: boolean;
}

interface Task {
  id: number;
  title: string;
  status: 'Completed' | 'In Progress' | 'In Review' | 'Pending';
  assignee: string;
}

interface Project {
  id: number;
  name: string;
  client: string;
  status: string;
  progress: number;
  deadline: string;
  startDate: string;
  priority: 'High' | 'Medium' | 'Low';
  budget: string;
  description: string;
  technologies: string[];
  tasks: Task[];
  milestones: Milestone[];
  companyLogo?: string;
  companyName?: string;
}

interface CompanyInfo {
  name: string;
  description: string;
  employees: string;
  website: string;
  industry: string;
  logo?: string;
}

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
  skills: string[];
  description: string;
  responsibilities: string[];
  requirements: string[];
  companyInfo: CompanyInfo;
  saved: boolean;
  applied: boolean;
  applicants?: string;
  experience?: string;
  workType?: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance' | 'Internship';
  isFeatured?: boolean;
  deadline?: string;
  category?: string;
}

interface Activity {
  id: number;
  title: string;
  description: string;
  time: string;
  icon: React.ComponentType<{ className?: string }>;
  status: 'completed' | 'in-progress' | 'pending';
  project: string;
  priority: 'High' | 'Medium' | 'Low';
  read: boolean;
  action?: () => void;
}

interface StatCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  value: string;
  change: string;
  color: string;
  trend?: 'up' | 'down' | 'neutral';
  chartData?: Array<{ month: string; value: number }>;
}

interface JobCardProps {
  job: Job;
  onSave: (id: number) => void;
  onApply: (id: number) => void;
  className?: string;
}

interface ProjectCardProps {
  project: Project;
  className?: string;
}

interface ActivityItemProps {
  activity: Activity;
  className?: string;
}

// Utility function to format currency
const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

// Utility function to format date
const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

// UI Components
const StatCard: React.FC<StatCardProps> = ({
  icon: Icon,
  title,
  value,
  change,
  color,
  trend = 'neutral',
  className = ''
}) => {
  return (
    <Card className={cn('flex-1', className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <h3 className="text-2xl font-bold">{value}</h3>
            <div className="flex items-center">
              <span className={`text-sm ${color} flex items-center`}>
                {trend === 'up' ? (
                  <TrendingUp className="w-4 h-4 mr-1" />
                ) : trend === 'down' ? (
                  <TrendingUp className="w-4 h-4 mr-1 transform rotate-180" />
                ) : null}
                {change}
              </span>
            </div>
          </div>
          <div className={`p-3 rounded-full ${color.replace('text', 'bg').replace('-500', '-100')}`}>
            <Icon className={`w-6 h-6 ${color}`} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const JobCard: React.FC<JobCardProps> = ({ job, onSave, onApply, className = '' }) => {
  return (
    <Card className={cn('mb-4 hover:shadow-md transition-shadow', className)}>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div className="space-y-2 flex-1">
            <div className="flex items-center space-x-2">
              <h3 className="text-lg font-semibold">{job.title}</h3>
              {job.isFeatured && (
                <Badge variant="secondary" className="text-xs">
                  Featured
                </Badge>
              )}
              <Badge variant="outline" className="text-xs">
                {job.type}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">{job.company} • {job.location}</p>
            
            <div className="flex flex-wrap gap-2 mt-2">
              {job.skills.slice(0, 3).map((skill, i) => (
                <Badge key={i} variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              ))}
              {job.skills.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{job.skills.length - 3} more
                </Badge>
              )}
            </div>

            <div className="flex items-center text-sm text-muted-foreground mt-2">
              <Clock className="w-4 h-4 mr-1" />
              <span>Posted {job.posted}</span>
              {job.applicants && (
                <span className="mx-2">•</span>
              )}
              {job.applicants && (
                <span>{job.applicants} applicants</span>
              )}
            </div>

            <p className="text-sm mt-2 line-clamp-2">{job.description}</p>
          </div>

          <div className="ml-4 flex flex-col items-end space-y-2">
            <div className="font-semibold text-lg">{job.salary}</div>
            <div className="flex space-x-2">
              <Button
                variant={job.saved ? 'default' : 'outline'}
                size="sm"
                onClick={() => onSave(job.id)}
                className="w-10 h-10 p-0"
              >
                <Bookmark className={`w-4 h-4 ${job.saved ? 'fill-current' : ''}`} />
              </Button>
              <Button
                onClick={() => onApply(job.id)}
                disabled={job.applied}
                className="min-w-[100px]"
              >
                {job.applied ? 'Applied' : 'Apply Now'}
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className = '' }) => {
  return (
    <Card className={cn('mb-4', className)}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <Badge variant="outline" className="text-xs">
                {project.status}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">{project.client}</p>
          </div>
          <Badge 
            variant={project.priority === 'High' ? 'destructive' : project.priority === 'Medium' ? 'warning' : 'default'}
            className="text-xs"
          >
            {project.priority} Priority
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Progress</span>
              <span>{project.progress}%</span>
            </div>
            <Progress value={project.progress} className="h-2" />
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Start Date</p>
              <p>{formatDate(project.startDate)}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Deadline</p>
              <p className={new Date(project.deadline) < new Date() ? 'text-red-500' : ''}>
                {formatDate(project.deadline)}
              </p>
            </div>
            <div>
              <p className="text-muted-foreground">Budget</p>
              <p>{project.budget}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Tasks</p>
              <p>{project.tasks.length} tasks</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ActivityItem: React.FC<ActivityItemProps> = ({ activity, className = '' }) => {
  const Icon = activity.icon;
  return (
    <div className={cn("flex items-start space-x-4 p-4 hover:bg-muted/50 rounded-lg transition-colors", className)}>
      <div className={`p-2 rounded-full ${getActivityColor(activity.status)}`}>
        <Icon className="w-4 h-4" />
      </div>
      <div className="flex-1 space-y-1">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium">{activity.title}</p>
          <span className="text-xs text-muted-foreground">{activity.time}</span>
        </div>
        <p className="text-sm text-muted-foreground">{activity.description}</p>
        {activity.action && (
          <Button variant="link" size="sm" className="h-auto p-0" onClick={activity.action}>
            View details
          </Button>
        )}
      </div>
    </div>
  );
};

// Helper function to get activity color based on status
const getActivityColor = (status: 'completed' | 'in-progress' | 'pending') => {
  switch (status) {
    case 'completed':
      return 'bg-green-100 text-green-600';
    case 'in-progress':
      return 'bg-blue-100 text-blue-600';
    case 'pending':
      return 'bg-yellow-100 text-yellow-600';
    default:
      return 'bg-gray-100 text-gray-600';
  }
};

// Mock data with comprehensive information
const stats = [
  { 
    title: 'Total Earnings', 
    value: '$28,750', 
    change: '+18% from last month',
    icon: DollarSign,
    color: 'text-green-500',
    trend: 'up',
    details: [
      { month: 'Jan', amount: 8500 },
      { month: 'Feb', value: 9500 },
      { month: 'Mar', value: 12500 },
      { month: 'Apr', value: 15800 },
      { month: 'May', value: 22750 },
      { month: 'Jun', value: 28750 },
    ]
  },
  { 
    title: 'Active Projects', 
    value: '6', 
    change: '4 in development',
    icon: Briefcase,
    trend: 'up',
    color: 'text-blue-500',
    chart: 'up',
    details: [
      { status: 'In Progress', count: 4 },
      { status: 'In Review', count: 1 },
      { status: 'On Hold', count: 1 },
    ]
  },
  { 
    title: 'Proposals', 
    value: '12', 
    change: '3 pending review',
    icon: FileText,
    trend: 'up',
    color: 'text-purple-500',
    details: [
      { status: 'Submitted', count: 5 },
      { status: 'In Review', count: 3 },
      { status: 'Accepted', count: 4 },
    ]
  },
  { 
    title: 'Client Rating', 
    value: '4.8/5.0', 
    change: 'From 42 reviews',
    icon: Star,
    trend: 'up',
    color: 'text-yellow-500',
    details: [
      { stars: 5, count: 36 },
      { stars: 4, count: 5 },
      { stars: 3, count: 1 },
    ]
  }
];

const recentActivities = [
  { 
    id: 1, 
    title: 'Project Milestone Approved', 
    description: 'E-commerce website checkout flow approved', 
    time: '2 hours ago', 
    icon: CheckCircle,
    status: 'completed',
    project: 'Fashion Store',
    priority: 'High',
    read: false
  },
  { 
    id: 2, 
    title: 'Payment Received', 
    description: 'Invoice #INV-2023-056 for $3,200 has been processed', 
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
    description: 'Client uploaded new design assets and requirements', 
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
    icon: Clock,
    status: 'pending',
    project: 'Fitness Tracker',
    priority: 'Medium',
    read: true
  },
  { 
    id: 5, 
    title: 'New Client Onboarded', 
    description: 'New project kickoff meeting scheduled', 
    time: '3 days ago', 
    icon: UserPlus,
    status: 'completed',
    project: 'EduTech Platform',
    priority: 'High',
    read: true
  }
];

const recommendedJobs = [
  {
    id: 1,
    title: 'Senior React Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA (Remote)',
    type: 'Full-time',
    salary: '$90k - $120k',
    posted: '2 days ago',
    skills: ['React', 'TypeScript', 'Redux', 'Node.js'],
    description: 'We are looking for an experienced React developer to join our team. You will be responsible for building user interfaces and implementing features using React.js.',
    responsibilities: [
      'Develop new user-facing features using React.js',
      'Build reusable components and front-end libraries',
      'Optimize components for maximum performance',
      'Collaborate with the design team to implement UI/UX designs'
    ],
    requirements: [
      '5+ years of experience with React.js',
      'Strong proficiency in JavaScript, including DOM manipulation',
      'Experience with popular React workflows (such as Redux)',
      'Familiarity with RESTful APIs'
    ],
    companyInfo: {
      name: 'TechCorp Inc.',
      description: 'A leading technology company specializing in enterprise software solutions.',
      employees: '201-500',
      website: 'https://techcorp.com',
      industry: 'Information Technology & Services'
    },
    saved: false,
    applied: false,
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
    skills: ['Figma', 'Sketch', 'Adobe XD', 'UI/UX'],
    description: 'We are seeking a talented UI/UX Designer to create amazing user experiences. The ideal candidate should have an eye for clean and artful design, possess superior UI skills and be able to translate high-level requirements into beautiful, intuitive, and functional user interfaces.',
    responsibilities: [
      'Execute all visual design stages from concept to final hand-off to engineering',
      'Create wireframes, user flows, process flows and site maps',
      'Present and defend designs and key milestone deliverables to peers and executive level stakeholders',
      'Establish and promote design guidelines, best practices and standards'
    ],
    requirements: [
      'Proven UI/UX design experience with a strong portfolio',
      'Proficiency in Figma, Sketch, or Adobe XD',
      'Experience with user research and usability testing',
      'Excellent visual design skills with sensitivity to user-system interaction'
    ],
    companyInfo: {
      name: 'DesignHub',
      description: 'A creative design agency focused on delivering exceptional digital experiences.',
      employees: '11-50',
      website: 'https://designhub.com',
      industry: 'Design'
    },
    saved: true,
    applied: false,
    skills: ['Figma', 'Sketch', 'UI/UX', 'Prototyping']
  },
  {
    id: 3,
    title: 'Backend Developer',
    company: 'DataSystems',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$100k - $140k',
    posted: '3 days ago',
    skills: ['Node.js', 'Python', 'MongoDB', 'AWS'],
    description: 'We are looking for a skilled Backend Developer to join our growing engineering team. You will be responsible for server-side web application logic and integration of the work front-end developers do.',
    responsibilities: [
      'Develop and maintain all server-side network components',
      'Ensure optimal performance of the central database and responsiveness to front-end requests',
      'Collaborate with front-end developers on the integration of elements',
      'Design customer-facing UI and back-end services for various business processes'
    ],
    requirements: [
      'Proven experience as a Backend Developer',
      'Experience with database design and management',
      'Knowledge of server-side languages (Node.js, Python, etc.)',
      'Familiarity with cloud services (AWS, GCP, or Azure)'
    ],
    companyInfo: {
      name: 'DataSystems',
      description: 'Enterprise data solutions provider helping businesses make data-driven decisions.',
      employees: '501-1000',
      website: 'https://datasystems.com',
      industry: 'Information Technology & Services'
    },
    saved: false,
    applied: false
  },
  {
    id: 4,
    title: 'Product Manager',
    company: 'ProductLabs',
    location: 'Austin, TX',
    type: 'Full-time',
    salary: '$110k - $150k',
    posted: '1 day ago',
    skills: ['Product Management', 'Agile', 'Jira', 'User Stories'],
    description: 'We are seeking a Product Manager to lead the development of our core products. You will work cross-functionally to guide products from conception to launch by connecting the technical and business worlds.',
    responsibilities: [
      'Define product strategy and roadmap',
      'Deliver PRDs with prioritized features and corresponding justification',
      'Work with external third parties to assess partnerships and licensing opportunities',
      'Run beta and pilot programs with early-stage products and samples'
    ],
    requirements: [
      'Proven work experience in product management',
      'Proven track record of managing all aspects of a successful product throughout its lifecycle',
      'Strong problem-solving skills and willingness to roll up one\'s sleeves to get the job done',
      'Skilled at working effectively with cross functional teams in a matrix organization'
    ],
    companyInfo: {
      name: 'ProductLabs',
      description: 'Innovative product development company focused on creating cutting-edge solutions.',
      employees: '51-200',
      website: 'https://productlabs.io',
      industry: 'Computer Software'
    },
    saved: false,
    applied: false
  }
];

const activeProjects = [
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
    tasks: [
      { id: 1, title: 'Product Page Design', status: 'Completed', assignee: 'You' },
      { id: 2, title: 'Shopping Cart Logic', status: 'In Progress', assignee: 'You' },
      { id: 3, title: 'Payment Integration', status: 'In Progress', assignee: 'Team' },
      { id: 4, title: 'User Authentication', status: 'Pending', assignee: 'You' },
      { id: 5, title: 'Admin Dashboard', status: 'Pending', assignee: 'Team' }
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
    tasks: [
      { id: 1, title: 'User Research', status: 'Completed', assignee: 'You' },
      { id: 2, title: 'Wireframing', status: 'Completed', assignee: 'You' },
      { id: 3, title: 'High-Fidelity Design', status: 'In Review', assignee: 'You' },
      { id: 4, title: 'Design System', status: 'Completed', assignee: 'Team' },
      { id: 5, title: 'Client Presentation', status: 'Pending', assignee: 'You' }
    ],
    milestones: [
      { id: 1, title: 'Research Complete', date: '10 Nov 2023', completed: true },
      { id: 2, title: 'Initial Designs', date: '25 Nov 2023', completed: true },
      { id: 3, title: 'Client Feedback', date: '5 Dec 2023', completed: true },
      { id: 4, title: 'Final Revisions', date: '15 Dec 2023', completed: false },
      { id: 5, title: 'Delivery', date: '20 Dec 2023', completed: false }
// UI Components
const StatCard: React.FC<StatCardProps> = ({ icon: Icon, title, value, change, color }) => {
  <Card className="flex-1">
    <CardContent className="p-6">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="text-2xl font-bold">{value}</h3>
          <p className={`text-sm ${color}`}>{change}</p>
        </div>
        <div className={`p-3 rounded-full ${color.replace('text', 'bg').replace('-500', '-100')}`}>
          <Icon className={`w-6 h-6 ${color}`} />
        </div>
      </div>
    </CardContent>
  </Card>
);

const JobCard: React.FC<JobCardProps> = ({ job, onSave, onApply }) => {
  <Card className="mb-4 hover:shadow-md transition-shadow">
    <CardContent className="p-6">
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <h3 className="text-lg font-semibold">{job.title}</h3>
            <Badge variant="outline" className="text-xs">{job.type}</Badge>
          </div>
          <p className="text-sm text-muted-foreground">{job.company} • {job.location}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {job.skills.slice(0, 3).map((skill: string, index: number) => (
              <Badge key={index} variant="secondary" className="text-xs">{skill}</Badge>
            ))}
            {job.skills.length > 3 && (
              <Badge variant="outline" className="text-xs">+{job.skills.length - 3} more</Badge>
            )}
          </div>
          <p className="text-sm mt-2 text-muted-foreground">{job.posted} • {job.applicants} applicants</p>
        </div>
        <div className="flex flex-col space-y-2">
          <Button 
            variant={job.saved ? 'outline' : 'outline'} 
            size="sm" 
            onClick={() => onSave(job.id)}
          >
            {job.saved ? 'Saved' : 'Save'}
          </Button>
          <Button 
            variant={job.applied ? 'secondary' : 'default'} 
            size="sm"
            onClick={() => onApply(job.id)}
            disabled={job.applied}
          >
            {job.applied ? 'Applied' : 'Apply Now'}
          </Button>
        </div>
      </div>
    </CardContent>
  </Card>
);

const FreelancerDashboard: React.FC = () => {
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [jobs, setJobs] = React.useState<Job[]>(recommendedJobs);
  const [activeTab, setActiveTab] = React.useState<string>('overview');
  
  // Ensure all jobs have the required properties
  React.useEffect(() => {
    setJobs(prevJobs => 
      prevJobs.map(job => ({
        ...job,
        saved: job.saved || false,
        applied: job.applied || false,
        skills: job.skills || [],
        responsibilities: job.responsibilities || [],
        requirements: job.requirements || [],
        companyInfo: job.companyInfo || {
          name: job.company,
          description: '',
          employees: '',
          website: '',
          industry: ''
        }
      }))
    );
  }, []);

  const handleSaveJob = React.useCallback((id: number) => {
    setJobs(prevJobs => 
      prevJobs.map(job => 
        job.id === id ? { ...job, saved: !job.saved } : job
      )
    );
  }, []);

  const handleApplyJob = React.useCallback((id: number) => {
    setJobs(prevJobs => 
      prevJobs.map(job => 
        job.id === id ? { ...job, applied: true } : job
      )
    );

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 bg-white shadow-md w-64 transform transition-transform duration-300 ease-in-out z-50
        ${!isSidebarOpen && '-translate-x-full md:translate-x-0'}
      `}>
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
              className={`
                flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors
                ${item.active
                  ? 'bg-primary/10 text-primary'
                  : 'text-gray-700 hover:bg-gray-100'}
              `}
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
      <div className={`
        flex-1 flex flex-col overflow-hidden transition-all duration-300
        ${isSidebarOpen ? 'md:ml-64' : 'md:ml-0'}
      `}>
        {/* Top navigation */}
        <header className="bg-white shadow-sm h-16 flex items-center px-4 md:px-6">
          <div className="flex-1 max-w-2xl">
              <div className="flex justify-between text-sm">
                <span>Profile Completion</span>
                <span className="font-medium">75%</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
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

import { Briefcase, DollarSign, FileText, TrendingUp } from 'lucide-react';
import StatCard from '@/components/StatCard';
import JobCard from '@/components/JobCard';
import { Button } from '@/components/ui/button';

// todo: remove mock functionality
const mockJobs = [
  {
    id: '1',
    title: 'Senior React Developer Needed',
    description: 'We\'re looking for an experienced React developer to help build our new e-commerce platform. You\'ll work with our team to create reusable components and implement best practices.',
    budget: 5000,
    postedDate: '2 hours ago',
    proposalCount: 8,
    skills: ['React', 'TypeScript', 'Tailwind CSS'],
    clientName: 'Tech Innovations Inc',
    clientInitials: 'TI'
  },
  {
    id: '2',
    title: 'UI/UX Designer for Mobile App',
    description: 'Design a modern mobile app interface for our fitness tracking application. We need someone who can create beautiful, intuitive designs.',
    budget: 3500,
    postedDate: '5 hours ago',
    proposalCount: 15,
    skills: ['Figma', 'UI Design', 'Mobile UX'],
    clientName: 'FitLife Studios',
    clientInitials: 'FL'
  }
];

export default function FreelancerDashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's your activity overview.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard
          icon={Briefcase}
          label="Active Jobs"
          value={12}
          change="+2 this week"
          trend="up"
        />
        <StatCard
          icon={FileText}
          label="My Proposals"
          value={28}
          change="+5 pending"
          trend="up"
        />
        <StatCard
          icon={DollarSign}
          label="Total Earned"
          value="$12,450"
          change="+$850 this month"
          trend="up"
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

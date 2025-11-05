import { Briefcase, Users, FileText, DollarSign } from 'lucide-react';
import StatCard from '@/components/StatCard';
import ProposalCard from '@/components/ProposalCard';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';

// todo: remove mock functionality
const mockProposals = [
  {
    id: '1',
    freelancerName: 'Sarah Johnson',
    freelancerInitials: 'SJ',
    rating: 4.9,
    bidAmount: 4800,
    deliveryTime: '2 weeks',
    excerpt: 'I have over 5 years of experience with React and TypeScript. I\'ve built similar e-commerce platforms.',
    submittedTime: 'Submitted 2 hours ago',
    status: 'pending' as const
  },
  {
    id: '2',
    freelancerName: 'Michael Chen',
    freelancerInitials: 'MC',
    rating: 4.7,
    bidAmount: 5200,
    deliveryTime: '3 weeks',
    excerpt: 'Full-stack developer with expertise in React, Node.js, and cloud deployment.',
    submittedTime: 'Submitted 5 hours ago',
    status: 'pending' as const
  }
];

export default function ClientDashboard() {
  const [, setLocation] = useLocation();

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Manage your projects and freelancers</p>
        </div>
        <Button
          data-testid="button-post-job"
          onClick={() => setLocation('/client/post-job')}
        >
          Post New Job
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard
          icon={Briefcase}
          label="Active Jobs"
          value={8}
        />
        <StatCard
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

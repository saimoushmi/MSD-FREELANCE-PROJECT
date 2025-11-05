import ProposalCard from '@/components/ProposalCard';
import { Card } from '@/components/ui/card';

// todo: remove mock functionality
const mockJob = {
  title: 'Senior React Developer Needed',
  budget: 5000,
  proposalCount: 8
};

const mockProposals = [
  {
    id: '1',
    freelancerName: 'Sarah Johnson',
    freelancerInitials: 'SJ',
    rating: 4.9,
    bidAmount: 4800,
    deliveryTime: '2 weeks',
    excerpt: 'I have over 5 years of experience with React and TypeScript. I\'ve built similar e-commerce platforms and can deliver high-quality, maintainable code.',
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
    excerpt: 'Full-stack developer with expertise in React, Node.js, and cloud deployment. I can help you build a scalable solution.',
    submittedTime: 'Submitted 5 hours ago',
    status: 'accepted' as const
  },
  {
    id: '3',
    freelancerName: 'Emma Davis',
    freelancerInitials: 'ED',
    rating: 4.8,
    bidAmount: 4500,
    deliveryTime: '2 weeks',
    excerpt: 'Specialized in React development with a focus on performance optimization and user experience.',
    submittedTime: 'Submitted 1 day ago',
    status: 'pending' as const
  }
];

export default function ViewProposals() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Proposals</h1>
        <p className="text-muted-foreground">Review proposals for your job posting</p>
      </div>

      <Card className="p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-2">{mockJob.title}</h2>
        <div className="flex gap-4 text-sm text-muted-foreground">
          <span>Budget: ${mockJob.budget.toLocaleString()}</span>
          <span>•</span>
          <span>{mockJob.proposalCount} Proposals</span>
        </div>
      </Card>

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

import ProposalCard from '@/components/ProposalCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// todo: remove mock functionality
const mockProposals = {
  pending: [
    {
      id: '1',
      freelancerName: 'React Developer Position',
      freelancerInitials: 'RD',
      rating: 4.8,
      bidAmount: 4800,
      deliveryTime: '2 weeks',
      excerpt: 'Proposed to work on the e-commerce platform with React and TypeScript...',
      submittedTime: 'Submitted 2 hours ago',
      status: 'pending' as const
    }
  ],
  accepted: [
    {
      id: '2',
      freelancerName: 'UI Design Project',
      freelancerInitials: 'UD',
      rating: 4.9,
      bidAmount: 3200,
      deliveryTime: '10 days',
      excerpt: 'Excited to design the mobile app interface for your fitness application...',
      submittedTime: 'Accepted 1 day ago',
      status: 'accepted' as const
    }
  ],
  rejected: [
    {
      id: '3',
      freelancerName: 'Backend Development',
      freelancerInitials: 'BD',
      rating: 4.5,
      bidAmount: 6000,
      deliveryTime: '3 weeks',
      excerpt: 'Would love to build the backend API using Node.js and PostgreSQL...',
      submittedTime: 'Rejected 3 days ago',
      status: 'rejected' as const
    }
  ]
};

export default function MyProposals() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">My Proposals</h1>
        <p className="text-muted-foreground">Track all your submitted proposals</p>
      </div>

      <Tabs defaultValue="pending" className="w-full">
        <TabsList data-testid="tabs-proposals">
          <TabsTrigger data-testid="tab-pending" value="pending">
            Pending ({mockProposals.pending.length})
          </TabsTrigger>
          <TabsTrigger data-testid="tab-accepted" value="accepted">
            Accepted ({mockProposals.accepted.length})
          </TabsTrigger>
          <TabsTrigger data-testid="tab-rejected" value="rejected">
            Rejected ({mockProposals.rejected.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-4 mt-6">
          {mockProposals.pending.map((proposal) => (
            <ProposalCard
              key={proposal.id}
              {...proposal}
              onViewDetails={(id) => console.log('View proposal:', id)}
            />
          ))}
        </TabsContent>

        <TabsContent value="accepted" className="space-y-4 mt-6">
          {mockProposals.accepted.map((proposal) => (
            <ProposalCard
              key={proposal.id}
              {...proposal}
              onViewDetails={(id) => console.log('View proposal:', id)}
            />
          ))}
        </TabsContent>

        <TabsContent value="rejected" className="space-y-4 mt-6">
          {mockProposals.rejected.map((proposal) => (
            <ProposalCard
              key={proposal.id}
              {...proposal}
              onViewDetails={(id) => console.log('View proposal:', id)}
            />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}

import EarningsTimeline from '../EarningsTimeline';

const mockEarnings = [
  {
    id: '1',
    projectName: 'E-commerce Platform Development',
    clientName: 'Tech Innovations Inc',
    amount: 5000,
    date: 'Mar 15, 2024',
    status: 'completed' as const
  },
  {
    id: '2',
    projectName: 'Mobile App UI Design',
    clientName: 'FitLife Studios',
    amount: 3500,
    date: 'Mar 10, 2024',
    status: 'completed' as const
  },
  {
    id: '3',
    projectName: 'Website Redesign',
    clientName: 'Creative Agency',
    amount: 2800,
    date: 'Mar 5, 2024',
    status: 'pending' as const
  }
];

export default function EarningsTimelineExample() {
  return (
    <div className="p-8 max-w-2xl">
      <h2 className="text-2xl font-semibold mb-6">Recent Earnings</h2>
      <EarningsTimeline earnings={mockEarnings} />
    </div>
  );
}

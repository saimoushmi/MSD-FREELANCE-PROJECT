import EarningsTimeline from '@/components/EarningsTimeline';
import StatCard from '@/components/StatCard';
import { DollarSign, TrendingUp, CreditCard } from 'lucide-react';

// todo: remove mock functionality
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
  },
  {
    id: '4',
    projectName: 'API Integration',
    clientName: 'StartUp Labs',
    amount: 4200,
    date: 'Feb 28, 2024',
    status: 'completed' as const
  }
];

export default function Earnings() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Earnings</h1>
        <p className="text-muted-foreground">Track your income and payment history</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard
          icon={DollarSign}
          label="Total Earnings"
          value="$15,500"
        />
        <StatCard
          icon={TrendingUp}
          label="This Month"
          value="$8,500"
          change="+24% from last month"
          trend="up"
        />
        <StatCard
          icon={CreditCard}
          label="Pending Payments"
          value="$2,800"
        />
      </div>

      <h2 className="text-2xl font-semibold mb-6">Payment History</h2>
      <EarningsTimeline earnings={mockEarnings} />
    </div>
  );
}

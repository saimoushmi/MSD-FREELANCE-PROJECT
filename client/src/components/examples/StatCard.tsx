import StatCard from '../StatCard';
import { Briefcase, DollarSign, FileText, Users } from 'lucide-react';

export default function StatCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-8">
      <StatCard
        icon={Briefcase}
        label="Active Jobs"
        value={12}
        change="+2 this week"
        trend="up"
      />
      <StatCard
        icon={FileText}
        label="Proposals"
        value={48}
        change="+8 new"
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
        icon={Users}
        label="Active Clients"
        value={5}
      />
    </div>
  );
}

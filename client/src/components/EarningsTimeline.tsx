import { Card } from '@/components/ui/card';
import { DollarSign } from 'lucide-react';

interface Earning {
  id: string;
  projectName: string;
  clientName: string;
  amount: number;
  date: string;
  status: 'completed' | 'pending';
}

interface EarningsTimelineProps {
  earnings: Earning[];
}

export default function EarningsTimeline({ earnings }: EarningsTimelineProps) {
  return (
    <div className="space-y-4">
      {earnings.map((earning, index) => (
        <div key={earning.id} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-primary" />
            </div>
            {index < earnings.length - 1 && (
              <div className="w-0.5 flex-1 bg-border mt-2" />
            )}
          </div>
          
          <Card data-testid={`earning-${earning.id}`} className="flex-1 p-4 mb-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-semibold">{earning.projectName}</h4>
                <p className="text-sm text-muted-foreground">{earning.clientName}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-primary">${earning.amount.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">{earning.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-xs px-2 py-1 rounded-full ${
                earning.status === 'completed' 
                  ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                  : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
              }`}>
                {earning.status === 'completed' ? 'Completed' : 'Pending'}
              </span>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}

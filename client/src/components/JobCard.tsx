import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Clock, DollarSign, FileText } from 'lucide-react';

interface JobCardProps {
  id: string;
  title: string;
  description: string;
  budget: number;
  postedDate: string;
  proposalCount: number;
  skills: string[];
  clientName: string;
  clientInitials: string;
  onApply?: (id: string) => void;
  onViewDetails?: (id: string) => void;
}

export default function JobCard({
  id,
  title,
  description,
  budget,
  postedDate,
  proposalCount,
  skills,
  clientName,
  clientInitials,
  onApply,
  onViewDetails
}: JobCardProps) {
  return (
    <Card data-testid={`card-job-${id}`} className="p-6 hover-elevate">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold flex-1">{title}</h3>
        <div className="text-xl font-bold text-primary">${budget.toLocaleString()}</div>
      </div>
      
      <p className="text-muted-foreground line-clamp-3 leading-relaxed mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary" className="text-xs">
            {skill}
          </Badge>
        ))}
      </div>
      
      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>{postedDate}</span>
        </div>
        <div className="flex items-center gap-1">
          <FileText className="w-4 h-4" />
          <span>{proposalCount} proposals</span>
        </div>
      </div>
      
      <div className="flex items-center justify-between pt-4 border-t">
        <div className="flex items-center gap-3">
          <Avatar className="w-8 h-8">
            <AvatarFallback className="text-xs">{clientInitials}</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">{clientName}</span>
        </div>
        
        <div className="flex gap-2">
          <Button
            data-testid={`button-view-details-${id}`}
            variant="outline"
            size="sm"
            onClick={() => onViewDetails?.(id)}
          >
            View Details
          </Button>
          <Button
            data-testid={`button-apply-${id}`}
            size="sm"
            onClick={() => onApply?.(id)}
          >
            Apply Now
          </Button>
        </div>
      </div>
    </Card>
  );
}

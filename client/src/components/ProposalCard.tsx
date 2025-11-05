import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star, Clock } from 'lucide-react';

interface ProposalCardProps {
  id: string;
  freelancerName: string;
  freelancerInitials: string;
  rating: number;
  bidAmount: number;
  deliveryTime: string;
  excerpt: string;
  submittedTime: string;
  status?: 'pending' | 'accepted' | 'rejected';
  onViewDetails?: (id: string) => void;
  onAccept?: (id: string) => void;
  onReject?: (id: string) => void;
}

export default function ProposalCard({
  id,
  freelancerName,
  freelancerInitials,
  rating,
  bidAmount,
  deliveryTime,
  excerpt,
  submittedTime,
  status = 'pending',
  onViewDetails,
  onAccept,
  onReject
}: ProposalCardProps) {
  const getStatusBadge = () => {
    switch (status) {
      case 'accepted':
        return <Badge className="bg-green-600">Accepted</Badge>;
      case 'rejected':
        return <Badge variant="destructive">Rejected</Badge>;
      default:
        return <Badge variant="secondary">Pending</Badge>;
    }
  };

  return (
    <Card data-testid={`card-proposal-${id}`} className="p-4 hover-elevate">
      <div className="flex items-start gap-3">
        <Avatar className="w-12 h-12">
          <AvatarFallback>{freelancerInitials}</AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h4 className="font-semibold">{freelancerName}</h4>
              <div className="flex items-center gap-1 text-sm">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{rating}</span>
              </div>
            </div>
            {getStatusBadge()}
          </div>
          
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{excerpt}</p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Bid: </span>
                <span className="font-semibold text-primary">${bidAmount.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>{deliveryTime}</span>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button
                data-testid={`button-view-proposal-${id}`}
                variant="outline"
                size="sm"
                onClick={() => onViewDetails?.(id)}
              >
                View
              </Button>
              {status === 'pending' && (
                <>
                  <Button
                    data-testid={`button-accept-${id}`}
                    size="sm"
                    onClick={() => onAccept?.(id)}
                  >
                    Accept
                  </Button>
                  <Button
                    data-testid={`button-reject-${id}`}
                    variant="destructive"
                    size="sm"
                    onClick={() => onReject?.(id)}
                  >
                    Reject
                  </Button>
                </>
              )}
            </div>
          </div>
          
          <p className="text-xs text-muted-foreground mt-2">{submittedTime}</p>
        </div>
      </div>
    </Card>
  );
}

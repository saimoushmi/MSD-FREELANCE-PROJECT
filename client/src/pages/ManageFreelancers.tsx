import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, MessageCircle } from 'lucide-react';

// todo: remove mock functionality
const mockFreelancers = [
  {
    id: '1',
    name: 'Sarah Johnson',
    initials: 'SJ',
    role: 'React Developer',
    project: 'E-commerce Platform',
    status: 'active',
    rating: 4.9,
    hoursWorked: 120
  },
  {
    id: '2',
    name: 'Michael Chen',
    initials: 'MC',
    role: 'Full Stack Developer',
    project: 'Mobile App Backend',
    status: 'active',
    rating: 4.7,
    hoursWorked: 85
  },
  {
    id: '3',
    name: 'Emma Davis',
    initials: 'ED',
    role: 'UI/UX Designer',
    project: 'Brand Redesign',
    status: 'completed',
    rating: 4.8,
    hoursWorked: 60
  }
];

export default function ManageFreelancers() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Manage Freelancers</h1>
        <p className="text-muted-foreground">View and manage your hired freelancers</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {mockFreelancers.map((freelancer) => (
          <Card key={freelancer.id} data-testid={`card-freelancer-${freelancer.id}`} className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex gap-4">
                <Avatar className="w-16 h-16">
                  <AvatarFallback className="text-lg">{freelancer.initials}</AvatarFallback>
                </Avatar>
                
                <div>
                  <h3 className="text-lg font-semibold mb-1">{freelancer.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{freelancer.role}</p>
                  
                  <div className="flex items-center gap-4 text-sm mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{freelancer.rating}</span>
                    </div>
                    <span className="text-muted-foreground">
                      {freelancer.hoursWorked} hours worked
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground">
                      Project: {freelancer.project}
                    </span>
                    <Badge
                      variant={freelancer.status === 'active' ? 'default' : 'secondary'}
                    >
                      {freelancer.status}
                    </Badge>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button
                  data-testid={`button-message-${freelancer.id}`}
                  variant="outline"
                  size="sm"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Message
                </Button>
                <Button
                  data-testid={`button-view-details-${freelancer.id}`}
                  size="sm"
                >
                  View Details
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

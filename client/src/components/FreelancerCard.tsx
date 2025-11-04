import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MapPin, DollarSign, Star } from 'lucide-react';

interface FreelancerCardProps {
  name: string;
  title: string;
  location: string;
  hourlyRate: number;
  rating: number;
  skills: string[];
  bio: string;
  avatar?: string;
  onClick?: () => void;
}

export default function FreelancerCard({
  name,
  title,
  location,
  hourlyRate,
  rating,
  skills,
  bio,
  avatar,
  onClick,
}: FreelancerCardProps) {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <Card className="hover-elevate h-full flex flex-col">
      <CardContent className="p-6 flex-1">
        <div className="flex items-start gap-4 mb-4">
          <Avatar className="h-16 w-16">
            {avatar && <AvatarImage src={avatar} alt={name} />}
            <AvatarFallback className="bg-primary text-primary-foreground">
              {getInitials(name)}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg mb-1" data-testid="text-freelancer-name">{name}</h3>
            <p className="text-sm text-muted-foreground mb-2" data-testid="text-freelancer-title">{title}</p>
            
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                <span>{location}</span>
              </div>
              <div className="flex items-center gap-1">
                <DollarSign className="h-3 w-3" />
                <span className="font-medium">${hourlyRate}/hr</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{rating}</span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{bio}</p>

        <div className="flex flex-wrap gap-2">
          {skills.slice(0, 5).map((skill, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
          {skills.length > 5 && (
            <Badge variant="secondary" className="text-xs">
              +{skills.length - 5} more
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button className="w-full" onClick={onClick} data-testid="button-view-profile">
          View Profile
        </Button>
      </CardFooter>
    </Card>
  );
}

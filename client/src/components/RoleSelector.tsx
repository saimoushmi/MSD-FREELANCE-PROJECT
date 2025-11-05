import { Users, Briefcase } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface RoleSelectorProps {
  selectedRole: 'freelancer' | 'client' | null;
  onRoleSelect: (role: 'freelancer' | 'client') => void;
}

export default function RoleSelector({ selectedRole, onRoleSelect }: RoleSelectorProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card
        data-testid="card-role-freelancer"
        className={`p-6 cursor-pointer hover-elevate active-elevate-2 transition-all ${
          selectedRole === 'freelancer' ? 'border-primary border-2' : ''
        }`}
        onClick={() => onRoleSelect('freelancer')}
      >
        <div className="flex flex-col items-center text-center space-y-3">
          <div className={`p-4 rounded-full ${
            selectedRole === 'freelancer' ? 'bg-primary text-primary-foreground' : 'bg-muted'
          }`}>
            <Users className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-semibold">Freelancer</h3>
            <p className="text-xs text-muted-foreground mt-1">Find projects and earn</p>
          </div>
        </div>
      </Card>
      
      <Card
        data-testid="card-role-client"
        className={`p-6 cursor-pointer hover-elevate active-elevate-2 transition-all ${
          selectedRole === 'client' ? 'border-primary border-2' : ''
        }`}
        onClick={() => onRoleSelect('client')}
      >
        <div className="flex flex-col items-center text-center space-y-3">
          <div className={`p-4 rounded-full ${
            selectedRole === 'client' ? 'bg-primary text-primary-foreground' : 'bg-muted'
          }`}>
            <Briefcase className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-semibold">Client</h3>
            <p className="text-xs text-muted-foreground mt-1">Hire top talent</p>
          </div>
        </div>
      </Card>
    </div>
  );
}

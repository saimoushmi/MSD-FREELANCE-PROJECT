import { useState } from 'react';
import RoleSelector from '../RoleSelector';

export default function RoleSelectorExample() {
  const [role, setRole] = useState<'freelancer' | 'client' | null>(null);
  
  return (
    <div className="p-8 max-w-md">
      <RoleSelector 
        selectedRole={role} 
        onRoleSelect={(newRole) => {
          setRole(newRole);
          console.log('Role selected:', newRole);
        }} 
      />
    </div>
  );
}

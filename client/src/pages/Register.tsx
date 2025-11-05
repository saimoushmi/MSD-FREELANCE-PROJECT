import { useState } from 'react';
import { useLocation } from 'wouter';
import AuthLayout from '@/components/AuthLayout';
import RoleSelector from '@/components/RoleSelector';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Register() {
  const [, setLocation] = useLocation();
  const [role, setRole] = useState<'freelancer' | 'client' | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!role) {
      alert('Please select a role');
      return;
    }
    
    console.log('Register:', { email, password, name, role });
    
    // todo: remove mock functionality - simulate registration and auto-login to profile
    localStorage.setItem('userRole', role);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userName', name);
    
    if (role === 'freelancer') {
      setLocation('/freelancer/profile');
    } else {
      setLocation('/client/profile');
    }
  };

  return (
    <AuthLayout>
      <Card className="p-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold mb-2">Create Account</h2>
          <p className="text-muted-foreground">Join our freelance community</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <Label className="mb-3 block">I want to:</Label>
            <RoleSelector selectedRole={role} onRoleSelect={setRole} />
          </div>

          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              data-testid="input-name"
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              data-testid="input-email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              data-testid="input-password"
              type="password"
              placeholder="Create a strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button
            data-testid="button-register"
            type="submit"
            className="w-full"
          >
            Create Account
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Already have an account?{' '}
            <button
              data-testid="link-login"
              onClick={() => setLocation('/login')}
              className="text-primary hover:underline"
            >
              Sign in
            </button>
          </p>
        </div>
      </Card>
    </AuthLayout>
  );
}

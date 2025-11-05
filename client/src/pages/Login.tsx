import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Navbar from '@/components/Navbar';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';

export default function Login() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const { loginWithCredentials } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [debugInfo, setDebugInfo] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setDebugInfo('');
    
    // Basic validation
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    
    setIsLoading(true);
    
    try {
      console.log('Login attempt started');
      const success = loginWithCredentials(email, password);
      console.log('Login result:', success);
      
      if (success) {
        toast({
          title: 'Welcome back!',
          description: 'You have successfully logged in.',
        });
        setLocation('/dashboard');
      } else {
        // Check what's in localStorage to help debug
        const savedUser = localStorage.getItem('freelanceconnect_user');
        const savedEmail = localStorage.getItem('freelanceconnect_email');
        const savedPassword = localStorage.getItem('freelanceconnect_password');
        
        console.log('Login failed. Current localStorage state:', {
          hasUser: !!savedUser,
          savedEmail: savedEmail,
          hasPassword: !!savedPassword
        });
        
        setError('Login failed. Please check your credentials and try again.');
        setDebugInfo(
          `Debug info: ${savedEmail ? 'User exists' : 'No user found'} | ` +
          `Email match: ${savedEmail === email ? 'Yes' : 'No'}`
        );
        
        toast({
          title: 'Login failed',
          description: 'Invalid email or password. Please try again or sign up for a new account.',
          variant: 'destructive',
        });
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('An error occurred during login. Please try again.');
      setDebugInfo(`Error: ${err instanceof Error ? err.message : 'Unknown error'}`);
      toast({
        title: 'Error',
        description: 'An error occurred during login. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Welcome Back</CardTitle>
            <CardDescription>Log in to your FreelanceConnect account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  data-testid="input-email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  data-testid="input-password"
                />
              </div>
              {error && (
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-red-500">{error}</div>
                  {debugInfo && (
                    <div className="text-xs text-muted-foreground bg-muted p-2 rounded">
                      {debugInfo}
                    </div>
                  )}
                  <div className="text-xs text-muted-foreground">
                    Forgot your password? <a href="/reset-password" className="text-primary hover:underline">Reset it here</a>
                  </div>
                </div>
              )}
              <Button 
                type="submit" 
                className="w-full" 
                data-testid="button-login"
                disabled={isLoading}
              >
                {isLoading ? 'Logging in...' : 'Log In'}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            <p className="text-sm text-muted-foreground text-center">
              Don't have an account?{' '}
              <Link href="/signup">
                <a className="text-primary hover:underline" data-testid="link-signup">
                  Sign up
                </a>
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

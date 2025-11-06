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
      console.log('Login attempt started for email:', email);
      
      // Get all user keys from localStorage
      const allKeys = Object.keys(localStorage);
      const userKeys = allKeys.filter(key => key.startsWith('freelanceconnect_user_'));
      
      console.log('Found user keys in localStorage:', userKeys);
      
      // Try to find a user with matching email (case-insensitive)
      const normalizedEmail = email.trim().toLowerCase();
      let foundUser = null;
      
      for (const userKey of userKeys) {
        try {
          const userData = localStorage.getItem(userKey);
          if (!userData) continue;
          
          const userProfile = JSON.parse(userData);
          const userEmail = userProfile?.email?.toLowerCase();
          
          if (userEmail === normalizedEmail) {
            foundUser = userProfile;
            break;
          }
        } catch (err) {
          console.error('Error processing user data:', err);
          continue;
        }
      }
      
      if (!foundUser) {
        console.error('No user found with email:', email);
        setError('No account found with this email. Please sign up first.');
        toast({
          title: 'Login failed',
          description: 'No account found with this email. Please sign up first.',
          variant: 'destructive',
        });
        return;
      }
      
      // Now try to log in with the found user
      const success = loginWithCredentials(email, password);
      console.log('Login result:', success);
      
      if (success) {
        toast({
          title: 'Welcome back!',
          description: 'You have successfully logged in.',
        });
        setLocation('/dashboard');
      } else {
        // Check if password might be the issue
        const passwordKey = `freelanceconnect_password_${normalizedEmail}`;
        const savedPassword = localStorage.getItem(passwordKey);
        
        console.log('Login failed. Password check:', {
          inputPassword: password,
          savedPassword: savedPassword ? '***' : 'not found',
          passwordMatch: savedPassword === password
        });
        
        setError('Invalid email or password. Please try again.');
        toast({
          title: 'Login failed',
          description: 'Invalid email or password. Please try again.',
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

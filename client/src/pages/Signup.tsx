import { useState } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Briefcase, Building2 } from 'lucide-react';
import { useAuth, type UserRole, type FreelancerProfile, type ClientProfile } from '@/contexts/AuthContext';
import Navbar from '@/components/Navbar';
import { useToast } from '@/hooks/use-toast';

export default function Signup() {
  const [, setLocation] = useLocation();
  const { login } = useAuth();
  const { toast } = useToast();
  const [role, setRole] = useState<UserRole | null>(null);

  const [freelancerData, setFreelancerData] = useState({
    fullName: '',
    email: '',
    password: '',
    title: '',
    bio: '',
    skills: '',
    hourlyRate: '',
    location: '',
    experience: '',
    portfolio: '',
    availability: 'Full-time',
  });

  const [clientData, setClientData] = useState({
    fullName: '',
    email: '',
    password: '',
    companyName: '',
    industry: '',
    location: '',
    bio: '',
    website: '',
  });

  const handleFreelancerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const profile: FreelancerProfile = {
      role: 'freelancer',
      fullName: freelancerData.fullName,
      email: freelancerData.email,
      title: freelancerData.title,
      bio: freelancerData.bio,
      skills: freelancerData.skills.split(',').map(s => s.trim()).filter(Boolean),
      hourlyRate: parseFloat(freelancerData.hourlyRate) || 0,
      location: freelancerData.location,
      experience: freelancerData.experience,
      portfolio: freelancerData.portfolio,
      availability: freelancerData.availability,
    };

    login(profile);
    toast({
      title: 'Account created!',
      description: 'Your freelancer profile has been created successfully.',
    });
    setLocation('/profile');
  };

  const handleClientSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const profile: ClientProfile = {
      role: 'client',
      fullName: clientData.fullName,
      email: clientData.email,
      companyName: clientData.companyName,
      industry: clientData.industry,
      location: clientData.location,
      bio: clientData.bio,
      website: clientData.website,
    };

    login(profile);
    toast({
      title: 'Account created!',
      description: 'Your client account has been created successfully.',
    });
    setLocation('/profile');
  };

  if (!role) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-4xl space-y-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-2">Join FreelanceConnect</h1>
              <p className="text-muted-foreground">Choose how you want to get started</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover-elevate cursor-pointer" onClick={() => setRole('freelancer')} data-testid="card-role-freelancer">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>I'm a Freelancer</CardTitle>
                  <CardDescription>
                    Find projects and build your freelance career
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Create a professional profile</li>
                    <li>• Browse available projects</li>
                    <li>• Get hired by clients</li>
                    <li>• Build your portfolio</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover-elevate cursor-pointer" onClick={() => setRole('client')} data-testid="card-role-client">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Building2 className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>I'm a Client</CardTitle>
                  <CardDescription>
                    Hire talented freelancers for your projects
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Post project requirements</li>
                    <li>• Browse freelancer profiles</li>
                    <li>• Hire top talent</li>
                    <li>• Manage projects easily</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (role === 'freelancer') {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl">
            <CardHeader>
              <CardTitle>Create Freelancer Profile</CardTitle>
              <CardDescription>Tell us about yourself and your skills</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleFreelancerSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      required
                      value={freelancerData.fullName}
                      onChange={(e) => setFreelancerData({ ...freelancerData, fullName: e.target.value })}
                      data-testid="input-fullname"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={freelancerData.email}
                      onChange={(e) => setFreelancerData({ ...freelancerData, email: e.target.value })}
                      data-testid="input-email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password *</Label>
                  <Input
                    id="password"
                    type="password"
                    required
                    value={freelancerData.password}
                    onChange={(e) => setFreelancerData({ ...freelancerData, password: e.target.value })}
                    data-testid="input-password"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="title">Professional Title *</Label>
                  <Input
                    id="title"
                    placeholder="e.g., Full Stack Developer"
                    required
                    value={freelancerData.title}
                    onChange={(e) => setFreelancerData({ ...freelancerData, title: e.target.value })}
                    data-testid="input-title"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio *</Label>
                  <Textarea
                    id="bio"
                    placeholder="Tell clients about your experience and expertise..."
                    required
                    value={freelancerData.bio}
                    onChange={(e) => setFreelancerData({ ...freelancerData, bio: e.target.value })}
                    data-testid="input-bio"
                    className="min-h-24"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="skills">Skills (comma-separated) *</Label>
                  <Input
                    id="skills"
                    placeholder="React, Node.js, TypeScript"
                    required
                    value={freelancerData.skills}
                    onChange={(e) => setFreelancerData({ ...freelancerData, skills: e.target.value })}
                    data-testid="input-skills"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="hourlyRate">Hourly Rate ($) *</Label>
                    <Input
                      id="hourlyRate"
                      type="number"
                      required
                      value={freelancerData.hourlyRate}
                      onChange={(e) => setFreelancerData({ ...freelancerData, hourlyRate: e.target.value })}
                      data-testid="input-hourly-rate"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location *</Label>
                    <Input
                      id="location"
                      placeholder="City, Country"
                      required
                      value={freelancerData.location}
                      onChange={(e) => setFreelancerData({ ...freelancerData, location: e.target.value })}
                      data-testid="input-location"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Years of Experience *</Label>
                  <Input
                    id="experience"
                    placeholder="e.g., 5+ years"
                    required
                    value={freelancerData.experience}
                    onChange={(e) => setFreelancerData({ ...freelancerData, experience: e.target.value })}
                    data-testid="input-experience"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="portfolio">Portfolio URL</Label>
                  <Input
                    id="portfolio"
                    type="url"
                    placeholder="https://yourportfolio.com"
                    value={freelancerData.portfolio}
                    onChange={(e) => setFreelancerData({ ...freelancerData, portfolio: e.target.value })}
                    data-testid="input-portfolio"
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <Button type="button" variant="outline" onClick={() => setRole(null)} data-testid="button-back">
                    Back
                  </Button>
                  <Button type="submit" className="flex-1" data-testid="button-create-profile">
                    Create Profile
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle>Create Client Account</CardTitle>
            <CardDescription>Tell us about your company and hiring needs</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleClientSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Your Name *</Label>
                  <Input
                    id="fullName"
                    required
                    value={clientData.fullName}
                    onChange={(e) => setClientData({ ...clientData, fullName: e.target.value })}
                    data-testid="input-fullname"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={clientData.email}
                    onChange={(e) => setClientData({ ...clientData, email: e.target.value })}
                    data-testid="input-email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password *</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  value={clientData.password}
                  onChange={(e) => setClientData({ ...clientData, password: e.target.value })}
                  data-testid="input-password"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name *</Label>
                <Input
                  id="companyName"
                  required
                  value={clientData.companyName}
                  onChange={(e) => setClientData({ ...clientData, companyName: e.target.value })}
                  data-testid="input-company-name"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry *</Label>
                  <Input
                    id="industry"
                    placeholder="e.g., Technology, Finance"
                    required
                    value={clientData.industry}
                    onChange={(e) => setClientData({ ...clientData, industry: e.target.value })}
                    data-testid="input-industry"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location *</Label>
                  <Input
                    id="location"
                    placeholder="City, Country"
                    required
                    value={clientData.location}
                    onChange={(e) => setClientData({ ...clientData, location: e.target.value })}
                    data-testid="input-location"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Company Description *</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell freelancers about your company..."
                  required
                  value={clientData.bio}
                  onChange={(e) => setClientData({ ...clientData, bio: e.target.value })}
                  data-testid="input-bio"
                  className="min-h-24"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Company Website</Label>
                <Input
                  id="website"
                  type="url"
                  placeholder="https://yourcompany.com"
                  value={clientData.website}
                  onChange={(e) => setClientData({ ...clientData, website: e.target.value })}
                  data-testid="input-website"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <Button type="button" variant="outline" onClick={() => setRole(null)} data-testid="button-back">
                  Back
                </Button>
                <Button type="submit" className="flex-1" data-testid="button-create-account">
                  Create Account
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

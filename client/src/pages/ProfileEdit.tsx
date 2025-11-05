import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import { useAuth, type FreelancerProfile, type ClientProfile } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

export default function ProfileEdit() {
  const [, setLocation] = useLocation();
  const { user, isAuthenticated, updateProfile } = useAuth();
  const { toast } = useToast();

  const [freelancerData, setFreelancerData] = useState({
    fullName: '',
    email: '',
    title: '',
    bio: '',
    skills: '',
    hourlyRate: '',
    location: '',
    experience: '',
    portfolio: '',
    availability: '',
  });

  const [clientData, setClientData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    industry: '',
    location: '',
    bio: '',
    website: '',
  });

  useEffect(() => {
    if (!isAuthenticated || !user) {
      setLocation('/login');
      return;
    }

    if (user.role === 'freelancer') {
      setFreelancerData({
        fullName: user.fullName,
        email: user.email,
        title: user.title,
        bio: user.bio,
        skills: user.skills.join(', '),
        hourlyRate: user.hourlyRate.toString(),
        location: user.location,
        experience: user.experience,
        portfolio: user.portfolio,
        availability: user.availability,
      });
    } else {
      setClientData({
        fullName: user.fullName,
        email: user.email,
        companyName: user.companyName,
        industry: user.industry,
        location: user.location,
        bio: user.bio,
        website: user.website,
      });
    }
  }, [user, isAuthenticated, setLocation]);

  if (!isAuthenticated || !user) {
    return null;
  }

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

    updateProfile(profile);
    toast({
      title: 'Profile updated!',
      description: 'Your changes have been saved successfully.',
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

    updateProfile(profile);
    toast({
      title: 'Profile updated!',
      description: 'Your changes have been saved successfully.',
    });
    setLocation('/profile');
  };

  const sidebarStyle = {
    "--sidebar-width": "16rem",
    "--sidebar-width-icon": "3rem",
  };

  if (user.role === 'freelancer') {
    return (
      <SidebarProvider style={sidebarStyle as React.CSSProperties}>
        <div className="flex h-screen w-full">
          <AppSidebar />
          <div className="flex flex-col flex-1 overflow-hidden">
            <header className="flex items-center gap-4 border-b p-4">
              <SidebarTrigger data-testid="button-sidebar-toggle" />
              <h1 className="text-xl font-semibold">Edit Profile</h1>
            </header>
            
            <main className="flex-1 overflow-auto py-8 px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Edit Freelancer Profile</CardTitle>
              <CardDescription>Update your profile information</CardDescription>
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
                  <Label htmlFor="title">Professional Title *</Label>
                  <Input
                    id="title"
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
                    value={freelancerData.portfolio}
                    onChange={(e) => setFreelancerData({ ...freelancerData, portfolio: e.target.value })}
                    data-testid="input-portfolio"
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <Button type="button" variant="outline" onClick={() => setLocation('/profile')} data-testid="button-cancel">
                    Cancel
                  </Button>
                  <Button type="submit" className="flex-1" data-testid="button-save-changes">
                    Save Changes
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </main>
          </div>
        </div>
      </SidebarProvider>
    );
  }

  return (
    <SidebarProvider style={sidebarStyle as React.CSSProperties}>
      <div className="flex h-screen w-full">
        <AppSidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <header className="flex items-center gap-4 border-b p-4">
            <SidebarTrigger data-testid="button-sidebar-toggle" />
            <h1 className="text-xl font-semibold">Edit Profile</h1>
          </header>
          
          <main className="flex-1 overflow-auto py-8 px-4 sm:px-6 lg:px-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Edit Client Profile</CardTitle>
            <CardDescription>Update your account information</CardDescription>
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
                  value={clientData.website}
                  onChange={(e) => setClientData({ ...clientData, website: e.target.value })}
                  data-testid="input-website"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <Button type="button" variant="outline" onClick={() => setLocation('/profile')} data-testid="button-cancel">
                  Cancel
                </Button>
                <Button type="submit" className="flex-1" data-testid="button-save-changes">
                  Save Changes
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
          </div>
        </div>
      </SidebarProvider>
    );
  }

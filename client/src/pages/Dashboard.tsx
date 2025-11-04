import { useLocation } from 'wouter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import { Briefcase, DollarSign, Star, TrendingUp, Clock } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

export default function Dashboard() {
  const [, setLocation] = useLocation();
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated || !user) {
    setLocation('/login');
    return null;
  }

  const sidebarStyle = {
    "--sidebar-width": "16rem",
    "--sidebar-width-icon": "3rem",
  };

  return (
    <SidebarProvider style={sidebarStyle as React.CSSProperties}>
      <div className="flex h-screen w-full">
        <AppSidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <header className="flex items-center gap-4 border-b p-4">
            <SidebarTrigger data-testid="button-sidebar-toggle" />
            <h1 className="text-xl font-semibold">Dashboard</h1>
          </header>
          
          <main className="flex-1 overflow-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, {user.fullName}!</h1>
            <p className="text-muted-foreground">
              {user.role === 'freelancer' 
                ? 'Here\'s your freelance activity overview' 
                : 'Manage your projects and find talent'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div className="text-2xl font-bold" data-testid="stat-active-projects">
                  {user.role === 'freelancer' ? '3' : '5'}
                </div>
                <p className="text-sm text-muted-foreground">
                  Active {user.role === 'freelancer' ? 'Projects' : 'Jobs Posted'}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <DollarSign className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div className="text-2xl font-bold" data-testid="stat-earnings">
                  $12,450
                </div>
                <p className="text-sm text-muted-foreground">
                  {user.role === 'freelancer' ? 'Total Earnings' : 'Budget Spent'}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Star className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div className="text-2xl font-bold" data-testid="stat-rating">4.9</div>
                <p className="text-sm text-muted-foreground">Average Rating</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div className="text-2xl font-bold" data-testid="stat-success-rate">98%</div>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest updates and notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium">New project inquiry</p>
                    <p className="text-sm text-muted-foreground">
                      {user.role === 'freelancer' 
                        ? 'A client is interested in your services' 
                        : 'New proposal received from freelancer'}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium">Milestone completed</p>
                    <p className="text-sm text-muted-foreground">
                      Project "Website Redesign" milestone approved
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">1 day ago</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium">New 5-star review</p>
                    <p className="text-sm text-muted-foreground">
                      "Excellent work and great communication!"
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">3 days ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks and shortcuts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {user.role === 'freelancer' ? (
                  <>
                    <Button className="w-full justify-start" variant="outline" onClick={() => setLocation('/browse')} data-testid="button-find-projects">
                      <Briefcase className="mr-2 h-4 w-4" />
                      Find New Projects
                    </Button>
                    <Button className="w-full justify-start" variant="outline" onClick={() => setLocation('/profile/edit')} data-testid="button-update-profile">
                      <Star className="mr-2 h-4 w-4" />
                      Update Profile
                    </Button>
                    <Button className="w-full justify-start" variant="outline" data-testid="button-view-earnings">
                      <DollarSign className="mr-2 h-4 w-4" />
                      View Earnings
                    </Button>
                  </>
                ) : (
                  <>
                    <Button className="w-full justify-start" variant="outline" onClick={() => setLocation('/browse')} data-testid="button-find-freelancers">
                      <Briefcase className="mr-2 h-4 w-4" />
                      Find Freelancers
                    </Button>
                    <Button className="w-full justify-start" variant="outline" data-testid="button-post-job">
                      <Star className="mr-2 h-4 w-4" />
                      Post a New Job
                    </Button>
                    <Button className="w-full justify-start" variant="outline" data-testid="button-manage-projects">
                      <DollarSign className="mr-2 h-4 w-4" />
                      Manage Projects
                    </Button>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

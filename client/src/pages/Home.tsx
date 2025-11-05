import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Users, Briefcase, TrendingUp, Star, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-background overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 -z-10">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
              alt="Professional team collaborating"
              className="w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  FreelanceConnect
                </span>
              </h1>
              <p className="text-2xl sm:text-3xl font-medium text-foreground mb-8">
                Where Talent Meets Opportunity
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                The best platform for freelancers to showcase their skills and for clients to find the perfect match for their projects.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/signup">
                  <Button size="lg" className="px-8 py-6 text-lg">
                    Join Now - It's Free
                  </Button>
                </Link>
                <Link href="/browse">
                  <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
                    Browse Projects
                  </Button>
                </Link>
              </div>
              
              {/* Stats */}
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="bg-background p-6 rounded-xl shadow-sm border">
                  <p className="text-3xl font-bold text-primary">10K+</p>
                  <p className="text-sm text-muted-foreground">Freelancers</p>
                </div>
                <div className="bg-background p-6 rounded-xl shadow-sm border">
                  <p className="text-3xl font-bold text-primary">5K+</p>
                  <p className="text-sm text-muted-foreground">Projects</p>
                </div>
                <div className="bg-background p-6 rounded-xl shadow-sm border">
                  <p className="text-3xl font-bold text-primary">95%</p>
                  <p className="text-sm text-muted-foreground">Success Rate</p>
                </div>
                <div className="bg-background p-6 rounded-xl shadow-sm border">
                  <p className="text-3xl font-bold text-primary">24/7</p>
                  <p className="text-sm text-muted-foreground">Support</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-primary/5 to-transparent blur-3xl"></div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <Search className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium">1. Search & Discover</h3>
                  <p className="text-muted-foreground">
                    Browse thousands of talented freelancers or find your ideal project
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium">2. Connect & Collaborate</h3>
                  <p className="text-muted-foreground">
                    Message, negotiate, and start working together seamlessly
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium">3. Grow Your Business</h3>
                  <p className="text-muted-foreground">
                    Build long-term relationships and scale your success
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-12">Why Choose FreelanceConnect</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Star className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-2">Vetted Professionals</h3>
                  <p className="text-sm text-muted-foreground">
                    Every freelancer is verified to ensure quality and reliability
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-2">Secure Payments</h3>
                  <p className="text-sm text-muted-foreground">
                    Protected transactions and milestone-based payments
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-2">Diverse Projects</h3>
                  <p className="text-sm text-muted-foreground">
                    From web development to design, writing, and more
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of freelancers and clients already using FreelanceConnect
            </p>
            <Link href="/signup">
              <Button size="lg" data-testid="button-join-now">
                Join Now - It's Free
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

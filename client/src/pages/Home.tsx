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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-background">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Find the Perfect Freelancer<br />
              <span className="text-primary">Or Your Next Project</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Connect with top talent or showcase your skills. FreelanceConnect makes hiring and getting hired simple.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/signup">
                <Button size="lg" data-testid="button-get-started">
                  Get Started
                </Button>
              </Link>
              <Link href="/browse">
                <Button size="lg" variant="outline" data-testid="button-browse-talent">
                  Browse Talent
                </Button>
              </Link>
            </div>
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

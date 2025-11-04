import { Link } from 'wouter';
import { Briefcase } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t bg-card mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Briefcase className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold">FreelanceConnect</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Connecting talented freelancers with clients worldwide.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-4">For Freelancers</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/browse"><a className="hover:text-foreground">Find Work</a></Link></li>
              <li><Link href="/signup"><a className="hover:text-foreground">Sign Up</a></Link></li>
              <li><a href="#" className="hover:text-foreground">Success Stories</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">For Clients</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/browse"><a className="hover:text-foreground">Find Talent</a></Link></li>
              <li><Link href="/signup"><a className="hover:text-foreground">Post a Job</a></Link></li>
              <li><a href="#" className="hover:text-foreground">How it Works</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">About Us</a></li>
              <li><a href="#" className="hover:text-foreground">Contact</a></li>
              <li><a href="#" className="hover:text-foreground">Terms of Service</a></li>
              <li><a href="#" className="hover:text-foreground">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © 2024 FreelanceConnect. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

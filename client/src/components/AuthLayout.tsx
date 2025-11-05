import heroImage from '@assets/generated_images/Freelance_marketplace_hero_image_ad4d6d88.png';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40 z-10" />
        <img 
          src={heroImage} 
          alt="Freelance marketplace" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 flex flex-col justify-center px-12 text-white">
          <h1 className="text-4xl font-bold mb-4">Welcome to FreelanceHub</h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Connect with talented professionals or find your next exciting project. 
            Join thousands of freelancers and clients building the future together.
          </p>
        </div>
      </div>
      
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>
    </div>
  );
}

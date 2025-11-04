import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FreelancerCard from '@/components/FreelancerCard';
import avatar1 from '@assets/generated_images/Female_web_developer_portrait_6b55fef7.png';
import avatar2 from '@assets/generated_images/Male_graphic_designer_portrait_2d5a27de.png';
import avatar3 from '@assets/generated_images/Female_content_writer_portrait_c51a626d.png';
import avatar4 from '@assets/generated_images/Male_app_developer_portrait_7f718f30.png';

const mockFreelancers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    title: 'Full Stack Developer',
    location: 'San Francisco, CA',
    hourlyRate: 85,
    rating: 4.9,
    skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS'],
    bio: 'Experienced full-stack developer with 8+ years building scalable web applications. Specialized in React and Node.js ecosystems.',
    avatar: avatar1,
  },
  {
    id: 2,
    name: 'Michael Chen',
    title: 'UI/UX Designer',
    location: 'New York, NY',
    hourlyRate: 75,
    rating: 4.8,
    skills: ['Figma', 'Adobe XD', 'UI Design', 'Prototyping', 'User Research'],
    bio: 'Creative designer passionate about crafting beautiful and intuitive user experiences. 6 years of experience in product design.',
    avatar: avatar2,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    title: 'Content Writer & Copywriter',
    location: 'Austin, TX',
    hourlyRate: 60,
    rating: 5.0,
    skills: ['SEO Writing', 'Blog Posts', 'Technical Writing', 'Copywriting', 'Content Strategy'],
    bio: 'Professional writer specializing in tech and SaaS content. Helping brands tell their stories and engage their audiences.',
    avatar: avatar3,
  },
  {
    id: 4,
    name: 'David Park',
    title: 'Mobile App Developer',
    location: 'Seattle, WA',
    hourlyRate: 90,
    rating: 4.7,
    skills: ['React Native', 'iOS', 'Android', 'Flutter', 'Firebase'],
    bio: 'Mobile-first developer with expertise in cross-platform app development. Built 20+ apps with millions of downloads.',
    avatar: avatar4,
  },
];

export default function Browse() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFreelancers = mockFreelancers.filter(
    (freelancer) =>
      freelancer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      freelancer.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      freelancer.skills.some((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Find Top Freelancers</h1>
            <p className="text-muted-foreground">
              Browse talented professionals ready to bring your projects to life
            </p>
          </div>

          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, skills, or title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
                data-testid="input-search"
              />
            </div>
            <Button variant="outline" data-testid="button-filters">
              Filters
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFreelancers.map((freelancer) => (
              <FreelancerCard
                key={freelancer.id}
                {...freelancer}
                onClick={() => console.log('View profile:', freelancer.name)}
              />
            ))}
          </div>

          {filteredFreelancers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No freelancers found matching your search.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

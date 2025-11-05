import { useState } from 'react';
import JobCard from '@/components/JobCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Search, Filter } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// todo: remove mock functionality
const mockJobs = [
  {
    id: '1',
    title: 'Senior React Developer Needed',
    description: 'We\'re looking for an experienced React developer to help build our new e-commerce platform. You\'ll work with our team to create reusable components and implement best practices.',
    budget: 5000,
    postedDate: '2 hours ago',
    proposalCount: 8,
    skills: ['React', 'TypeScript', 'Tailwind CSS'],
    clientName: 'Tech Innovations Inc',
    clientInitials: 'TI'
  },
  {
    id: '2',
    title: 'UI/UX Designer for Mobile App',
    description: 'Design a modern mobile app interface for our fitness tracking application.',
    budget: 3500,
    postedDate: '5 hours ago',
    proposalCount: 15,
    skills: ['Figma', 'UI Design', 'Mobile UX'],
    clientName: 'FitLife Studios',
    clientInitials: 'FL'
  },
  {
    id: '3',
    title: 'Full Stack Developer - Node.js & React',
    description: 'Build a SaaS application from scratch with modern technologies.',
    budget: 8000,
    postedDate: '1 day ago',
    proposalCount: 22,
    skills: ['Node.js', 'React', 'PostgreSQL'],
    clientName: 'StartUp Labs',
    clientInitials: 'SL'
  }
];

const skillCategories = ['React', 'TypeScript', 'Node.js', 'UI Design', 'Figma', 'Python'];

export default function BrowseJobs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev =>
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };

  return (
    <div className="flex gap-6">
      <aside className="w-72 flex-shrink-0">
        <Card className="p-6 sticky top-6">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filters
          </h3>
          
          <div className="mb-6">
            <label className="text-sm font-medium mb-2 block">Skills</label>
            <div className="flex flex-wrap gap-2">
              {skillCategories.map(skill => (
                <Badge
                  key={skill}
                  data-testid={`filter-skill-${skill.toLowerCase()}`}
                  variant={selectedSkills.includes(skill) ? 'default' : 'secondary'}
                  className="cursor-pointer hover-elevate"
                  onClick={() => toggleSkill(skill)}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <Button data-testid="button-clear-filters" variant="outline" className="w-full">
            Clear Filters
          </Button>
        </Card>
      </aside>

      <div className="flex-1">
        <div className="mb-6">
          <h1 className="text-4xl font-bold mb-4">Browse Jobs</h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              data-testid="input-search"
              placeholder="Search for jobs..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-4">
          {mockJobs.map((job) => (
            <JobCard
              key={job.id}
              {...job}
              onApply={(id) => console.log('Apply to job:', id)}
              onViewDetails={(id) => console.log('View job details:', id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

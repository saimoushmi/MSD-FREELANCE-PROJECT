import JobCard from '../JobCard';

export default function JobCardExample() {
  return (
    <div className="p-8 max-w-3xl space-y-4">
      <JobCard
        id="1"
        title="Senior React Developer Needed"
        description="We're looking for an experienced React developer to help build our new e-commerce platform. You'll work with our team to create reusable components and implement best practices."
        budget={5000}
        postedDate="2 hours ago"
        proposalCount={8}
        skills={['React', 'TypeScript', 'Tailwind CSS']}
        clientName="Tech Innovations Inc"
        clientInitials="TI"
        onApply={(id) => console.log('Apply clicked for job:', id)}
        onViewDetails={(id) => console.log('View details for job:', id)}
      />
      <JobCard
        id="2"
        title="UI/UX Designer for Mobile App"
        description="Design a modern mobile app interface for our fitness tracking application. We need someone who can create beautiful, intuitive designs."
        budget={3500}
        postedDate="1 day ago"
        proposalCount={15}
        skills={['Figma', 'UI Design', 'Mobile UX']}
        clientName="FitLife Studios"
        clientInitials="FL"
        onApply={(id) => console.log('Apply clicked for job:', id)}
        onViewDetails={(id) => console.log('View details for job:', id)}
      />
    </div>
  );
}

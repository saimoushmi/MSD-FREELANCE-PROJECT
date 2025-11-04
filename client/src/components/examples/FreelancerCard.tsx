import FreelancerCard from '../FreelancerCard';
import avatar1 from '@assets/generated_images/Female_web_developer_portrait_6b55fef7.png';

export default function FreelancerCardExample() {
  return (
    <div className="p-4 max-w-md">
      <FreelancerCard
        name="Sarah Johnson"
        title="Full Stack Developer"
        location="San Francisco, CA"
        hourlyRate={85}
        rating={4.9}
        skills={['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS']}
        bio="Experienced full-stack developer with 8+ years building scalable web applications. Specialized in React and Node.js ecosystems."
        avatar={avatar1}
        onClick={() => console.log('View profile clicked')}
      />
    </div>
  );
}

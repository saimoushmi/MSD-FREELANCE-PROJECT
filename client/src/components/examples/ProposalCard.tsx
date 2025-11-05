import ProposalCard from '../ProposalCard';

export default function ProposalCardExample() {
  return (
    <div className="p-8 max-w-3xl space-y-4">
      <ProposalCard
        id="1"
        freelancerName="Sarah Johnson"
        freelancerInitials="SJ"
        rating={4.9}
        bidAmount={4800}
        deliveryTime="2 weeks"
        excerpt="I have over 5 years of experience with React and TypeScript. I've built similar e-commerce platforms and can deliver high-quality, maintainable code."
        submittedTime="Submitted 2 hours ago"
        status="pending"
        onViewDetails={(id) => console.log('View proposal:', id)}
        onAccept={(id) => console.log('Accept proposal:', id)}
        onReject={(id) => console.log('Reject proposal:', id)}
      />
      <ProposalCard
        id="2"
        freelancerName="Michael Chen"
        freelancerInitials="MC"
        rating={4.7}
        bidAmount={5200}
        deliveryTime="3 weeks"
        excerpt="Full-stack developer with expertise in React, Node.js, and cloud deployment. I can help you build a scalable solution."
        submittedTime="Submitted 5 hours ago"
        status="accepted"
        onViewDetails={(id) => console.log('View proposal:', id)}
      />
    </div>
  );
}


import { ReactNode } from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-myfarm-green/10 hover:shadow-md transition-shadow duration-300">
      <div className="w-12 h-12 bg-myfarm-green/10 rounded-full flex items-center justify-center mb-4 text-myfarm-green">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-myfarm-brown">{title}</h3>
      <p className="text-myfarm-brown-light">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-myfarm-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-myfarm-brown font-semibold mb-4">Why Choose MyFarm?</h2>
          <p className="text-myfarm-brown-light text-lg max-w-2xl mx-auto">
            We provide a unique solution for people who want to enjoy fresh, organic food without the challenges of traditional farming.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Your Personal Farm Plot"
            description="Rent your own plot of farmland in Nuwara Eliya, Sri Lanka, and decide what to grow."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 6l6-3l6 3l6-3v15l-6 3l-6-3l-6 3z"></path>
                <path d="M9 3v15"></path>
                <path d="M15 6v15"></path>
              </svg>
            }
          />
          <FeatureCard
            title="100% Organic"
            description="All our farms follow organic practices, ensuring your food is free from harmful chemicals and pesticides."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a9 9 0 0 0-9 9c0 4 3 8 9 10 6-2 9-6 9-10a9 9 0 0 0-9-9z"></path>
                <path d="M9 10a3 3 0 0 1 6 0c0 1.5-.6 3-3 5.5-2.4-2.5-3-4-3-5.5z"></path>
              </svg>
            }
          />
          <FeatureCard
            title="Farm to Door"
            description="We deliver your harvest directly to your doorstep when it's ready, ensuring maximum freshness."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="M12 9v4"></path>
                <path d="M12 16h.01"></path>
              </svg>
            }
          />
          <FeatureCard
            title="Expert Farmers"
            description="Our experienced farmers take care of planting, nurturing, and harvesting your crops with expertise."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            }
          />
          <FeatureCard
            title="Mobile App"
            description="Track your farm's progress, plan your harvests, and manage deliveries through our user-friendly app."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
              </svg>
            }
          />
          <FeatureCard
            title="Visit Your Plot"
            description="You're welcome to visit your farm plot and even harvest your crops personally for a complete farm experience."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

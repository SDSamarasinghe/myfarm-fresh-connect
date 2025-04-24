
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const StepCard = ({ number, title, description }: { number: number; title: string; description: string }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-full bg-myfarm-green flex items-center justify-center text-white font-semibold text-xl mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-myfarm-brown">{title}</h3>
      <p className="text-myfarm-brown-light">{description}</p>
    </div>
  );
};

const HowItWorksSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-myfarm-brown font-semibold mb-4">How MyFarm Works</h2>
          <p className="text-myfarm-brown-light text-lg max-w-2xl mx-auto">
            In just a few simple steps, you can have your own farm plot and fresh organic produce.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <StepCard 
            number={1} 
            title="Choose Your Plot" 
            description="Select the size of your farm plot and the location from our available farms." 
          />
          <StepCard 
            number={2} 
            title="Select Your Crops" 
            description="Choose what vegetables and fruits you want to grow from our extensive catalog." 
          />
          <StepCard 
            number={3} 
            title="We Grow It For You" 
            description="Our expert farmers will plant, nurture, and harvest your crops using organic methods." 
          />
          <StepCard 
            number={4} 
            title="Receive Your Harvest" 
            description="Get fresh produce delivered to your door, or visit the farm to harvest it yourself." 
          />
        </div>

        <div className="text-center">
          <Link to="/register">
            <Button className="bg-myfarm-green hover:bg-myfarm-green-dark text-white">
              Start Growing Today
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

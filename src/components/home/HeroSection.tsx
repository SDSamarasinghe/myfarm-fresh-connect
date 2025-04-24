
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="hero-pattern py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-myfarm-brown mb-6 font-bold">
            Your Personal Farm, <br />
            <span className="text-myfarm-green">Without the Work</span>
          </h1>
          <p className="text-myfarm-brown-light text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Grow your own organic vegetables without the time, space, or knowledge.
            MyFarm connects you with Sri Lankan farmers who will grow food just for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register">
              <Button size="lg" className="bg-myfarm-green hover:bg-myfarm-green-dark text-white">
                Get Started <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button variant="outline" size="lg" className="border-myfarm-green text-myfarm-green hover:bg-myfarm-green hover:text-white">
                Learn How It Works
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

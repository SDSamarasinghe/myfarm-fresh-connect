
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  quote: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Chathurika Fonseka",
    location: "Colombo",
    quote: "Living in an apartment, I never thought I could grow my own food. MyFarm has changed that completely! Now I get fresh vegetables every month without any work.",
    avatar: "CF",
  },
  {
    id: 2,
    name: "Sangeeth Liyanage",
    location: "Kandy",
    quote: "The quality of the produce is outstanding. Everything tastes so much better than what I used to buy from supermarkets. MyFarm has transformed how my family eats.",
    avatar: "SL",
  },
  {
    id: 3,
    name: "Devinda Bandara",
    location: "Galle",
    quote: "I visited my farm plot last month and harvested my own vegetables. It was such a rewarding experience that I'm planning to get a bigger plot next year.",
    avatar: "DB",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-myfarm-brown font-semibold mb-4">What Our Customers Say</h2>
          <p className="text-myfarm-brown-light text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Hear from people who are already growing with MyFarm.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Card className="border border-myfarm-green/10">
              <CardContent className="p-6 sm:p-8">
                <div className="mb-6 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-myfarm-green/20 text-myfarm-green flex items-center justify-center text-lg font-medium">
                    {testimonials[activeIndex].avatar}
                  </div>
                </div>
                <blockquote className="text-center">
                  <p className="text-xl text-myfarm-brown mb-4 italic">"{testimonials[activeIndex].quote}"</p>
                  <footer className="text-myfarm-brown">
                    <cite className="font-medium block">{testimonials[activeIndex].name}</cite>
                    <span className="text-sm text-myfarm-brown-light">{testimonials[activeIndex].location}</span>
                  </footer>
                </blockquote>
              </CardContent>
            </Card>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-myfarm-green hover:bg-myfarm-green hover:text-white transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 6-6 6 6 6"/>
              </svg>
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-myfarm-green hover:bg-myfarm-green hover:text-white transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 6 6 6-6 6"/>
              </svg>
            </button>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? 'bg-myfarm-green' : 'bg-myfarm-green/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

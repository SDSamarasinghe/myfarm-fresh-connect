
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MainLayout from "@/components/layout/MainLayout";

const HowItWorks = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-myfarm-brown mb-4">How MyFarm Works</h1>
          <p className="text-lg text-myfarm-brown-light max-w-2xl mx-auto">
            We make it easy for you to grow your own food without the time, space, or knowledge typically required.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-myfarm-green/20"></div>
            
            <div className="space-y-16">
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-10 flex justify-end">
                    <div className="bg-myfarm-beige p-6 rounded-lg shadow-sm w-full md:max-w-md">
                      <h2 className="text-xl font-semibold text-myfarm-brown mb-4">1. Choose Your Farm Plot</h2>
                      <p className="text-myfarm-brown-light mb-4">
                        Browse our available farm locations in Nuwara Eliya and select the plot size that matches your needs. Each farm has different characteristics that make it suitable for various types of plants.
                      </p>
                      <Link to="/farms">
                        <Button variant="outline" className="border-myfarm-green text-myfarm-green hover:bg-myfarm-green hover:text-white">
                          View Available Farms
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-myfarm-green rounded-full flex items-center justify-center text-white font-bold text-xl top-1/2">
                    1
                  </div>
                  <div className="md:w-1/2 md:pl-10 flex md:justify-start justify-center">
                    <div className="w-32 h-32 md:w-48 md:h-48 bg-myfarm-green/10 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-myfarm-green">
                        <path d="M3 6l6-3l6 3l6-3v15l-6 3l-6-3l-6 3z"></path>
                        <path d="M9 3v15"></path>
                        <path d="M15 6v15"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-10 flex md:justify-end order-1 md:order-2">
                    <div className="w-32 h-32 md:w-48 md:h-48 bg-myfarm-green/10 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-myfarm-green">
                        <path d="M14 11c5.333 0 5.333-8 0-8"></path>
                        <path d="M6 11h8"></path>
                        <path d="M10 15c5.333 0 5.333 8 0 8"></path>
                        <path d="M4 15h12"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-myfarm-green rounded-full flex items-center justify-center text-white font-bold text-xl top-1/2">
                    2
                  </div>
                  <div className="md:w-1/2 md:pl-10 flex justify-center md:justify-start order-2 md:order-1">
                    <div className="bg-myfarm-beige p-6 rounded-lg shadow-sm w-full md:max-w-md">
                      <h2 className="text-xl font-semibold text-myfarm-brown mb-4">2. Select Your Plants</h2>
                      <p className="text-myfarm-brown-light mb-4">
                        Choose from our variety of organic vegetables, fruits, and herbs to grow on your farm plot. We offer seasonal options and guidance on what grows best in different conditions.
                      </p>
                      <Link to="/plants">
                        <Button variant="outline" className="border-myfarm-green text-myfarm-green hover:bg-myfarm-green hover:text-white">
                          Explore Plants
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-10 flex justify-end">
                    <div className="bg-myfarm-beige p-6 rounded-lg shadow-sm w-full md:max-w-md">
                      <h2 className="text-xl font-semibold text-myfarm-brown mb-4">3. We Grow It For You</h2>
                      <p className="text-myfarm-brown-light">
                        Our experienced farmers take care of everything: planting, maintenance, pest control (using organic methods), watering, and harvesting. You'll receive regular updates on your crops' progress through our app.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-myfarm-green rounded-full flex items-center justify-center text-white font-bold text-xl top-1/2">
                    3
                  </div>
                  <div className="md:w-1/2 md:pl-10 flex md:justify-start justify-center">
                    <div className="w-32 h-32 md:w-48 md:h-48 bg-myfarm-green/10 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-myfarm-green">
                        <path d="M12 2v8"></path>
                        <path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-10 flex md:justify-end order-1 md:order-2">
                    <div className="w-32 h-32 md:w-48 md:h-48 bg-myfarm-green/10 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-myfarm-green">
                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                        <path d="M14 4v16"></path>
                        <path d="M18 8h.01"></path>
                        <path d="M18 12h.01"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-myfarm-green rounded-full flex items-center justify-center text-white font-bold text-xl top-1/2">
                    4
                  </div>
                  <div className="md:w-1/2 md:pl-10 flex justify-center md:justify-start order-2 md:order-1">
                    <div className="bg-myfarm-beige p-6 rounded-lg shadow-sm w-full md:max-w-md">
                      <h2 className="text-xl font-semibold text-myfarm-brown mb-4">4. Enjoy Your Harvest</h2>
                      <p className="text-myfarm-brown-light mb-4">
                        When your crops are ready, we'll deliver the fresh harvest directly to your door. Alternatively, you can visit the farm and enjoy the experience of harvesting your own produce.
                      </p>
                      <Link to="/pricing">
                        <Button className="bg-myfarm-green hover:bg-myfarm-green-dark text-white">
                          View Pricing Plans
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default HowItWorks;

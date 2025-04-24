
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";

interface PricingTier {
  name: string;
  description: string;
  price: number;
  features: string[];
  popular?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    description: "Perfect for beginners who want to try growing their own food.",
    price: 10000,
    features: [
      "1 perch of farmland",
      "Up to 5 different plant varieties",
      "Monthly harvest updates",
      "Standard delivery (monthly)",
      "Email support"
    ]
  },
  {
    name: "Family",
    description: "Ideal for families who want a steady supply of fresh produce.",
    price: 18000,
    popular: true,
    features: [
      "2 perch of farmland",
      "Up to 10 different plant varieties",
      "Bi-weekly harvest updates",
      "Flexible delivery (bi-weekly)",
      "Priority email & phone support",
      "Farm visit once per season",
      "10% discount on additional plants"
    ]
  },
  {
    name: "Premium",
    description: "For those who want the full farm-to-table experience.",
    price: 26000,
    features: [
      "3 perch of farmland",
      "Unlimited plant varieties",
      "Weekly harvest updates",
      "Premium delivery (weekly)",
      "24/7 priority support",
      "Unlimited farm visits",
      "20% discount on additional plants",
      "Seasonal cooking workshops",
      "Exclusive access to rare plant varieties"
    ]
  }
];

const Pricing = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-myfarm-brown mb-4">Simple, Transparent Pricing</h1>
          <p className="text-lg text-myfarm-brown-light max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include expert farming care, organic practices, and doorstep delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier) => (
            <Card 
              key={tier.name}
              className={`flex flex-col ${tier.popular ? 'border-myfarm-green shadow-lg relative' : 'border-myfarm-green/10'}`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-myfarm-green text-white text-xs font-semibold py-1 px-3 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-myfarm-brown text-xl">{tier.name}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-6">
                  <span className="text-3xl font-bold text-myfarm-brown">Rs. {tier.price.toLocaleString()}</span>
                  <span className="text-myfarm-brown-light">/year</span>
                </div>
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-4 w-4 text-myfarm-green mr-2" />
                      <span className="text-myfarm-brown">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link to="/register" className="w-full">
                  <Button 
                    className={`w-full ${tier.popular ? 'bg-myfarm-green hover:bg-myfarm-green-dark' : 'bg-myfarm-brown hover:bg-myfarm-brown-dark'}`}
                  >
                    Choose Plan
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-myfarm-brown mb-6 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-myfarm-brown mb-2">What's included in the price?</h3>
              <p className="text-myfarm-brown-light">
                The price includes the rental of farmland, seeds, farming expertise, maintenance, harvesting, and delivery of produce to your doorstep. Our farmers use organic practices to grow your food.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-myfarm-brown mb-2">How often will I receive my harvest?</h3>
              <p className="text-myfarm-brown-light">
                Harvest frequency depends on your plan and the crops you choose. Some vegetables mature quickly, while others take more time. You'll receive regular updates on your crops' progress.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-myfarm-brown mb-2">Can I visit my farm plot?</h3>
              <p className="text-myfarm-brown-light">
                Yes! We encourage you to visit your plot and see how your food is grown. Visit frequency depends on your plan, but all customers are welcome to schedule visits.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-myfarm-brown mb-2">What if I want to change my plants mid-season?</h3>
              <p className="text-myfarm-brown-light">
                You can request changes to your crop selection, though this may affect harvest times. Our team will work with you to accommodate reasonable requests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Pricing;

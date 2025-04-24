
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MainLayout from "@/components/layout/MainLayout";
import { farms } from "@/data/farms";

const Farms = () => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const filteredFarms = selectedLocation 
    ? farms.filter(farm => farm.location === selectedLocation) 
    : farms;

  const locations = Array.from(new Set(farms.map(farm => farm.location)));

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-myfarm-brown mb-4">Our Farms</h1>
          <p className="text-lg text-myfarm-brown-light max-w-2xl mx-auto">
            Choose a farm where you'd like to grow your crops. Each farm has different characteristics that make it suitable for various types of plants.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-2 justify-center">
            <span className="text-myfarm-brown font-medium">Filter by location:</span>
            <Button 
              variant={selectedLocation === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedLocation(null)}
              className={selectedLocation === null ? "bg-myfarm-green" : ""}
            >
              All Locations
            </Button>
            {locations.map(location => (
              <Button 
                key={location} 
                variant={selectedLocation === location ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedLocation(location)}
                className={selectedLocation === location ? "bg-myfarm-green" : ""}
              >
                {location}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFarms.map((farm) => (
            <Card key={farm.id} className="overflow-hidden border border-myfarm-green/10 hover:shadow-md transition-shadow duration-300">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={farm.imageUrl} 
                  alt={farm.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-myfarm-brown">{farm.name}</CardTitle>
                    <CardDescription>{farm.location}</CardDescription>
                  </div>
                  <Badge variant="outline" className="border-myfarm-green text-myfarm-green">
                    {farm.availablePlots} plots available
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-myfarm-brown-light mb-4">{farm.description}</p>
                <div className="mt-4">
                  <h4 className="font-semibold text-sm text-myfarm-brown mb-2">Features:</h4>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                    {farm.features.map((feature, index) => (
                      <li key={index} className="text-sm text-myfarm-brown-light flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-myfarm-green mr-1">
                          <path d="M20 6L9 17l-5-5"/>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <div className="text-myfarm-brown">
                  <span className="font-semibold">Rs. {farm.pricePerPerch.toLocaleString()}</span> per perch/year
                </div>
                <Link to={`/farms/${farm.id}`}>
                  <Button className="bg-myfarm-green hover:bg-myfarm-green-dark">
                    Select Farm
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Farms;


import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import MainLayout from "@/components/layout/MainLayout";
import { plants, categories, climates } from "@/data/plants";

const Plants = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedClimate, setSelectedClimate] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPlants = plants.filter((plant) => {
    const matchesCategory = selectedCategory ? plant.category === selectedCategory : true;
    const matchesClimate = selectedClimate ? plant.climate.includes(selectedClimate) : true;
    const matchesSearch = plant.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          plant.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesClimate && matchesSearch;
  });

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-myfarm-brown mb-4">Choose Your Plants</h1>
          <p className="text-lg text-myfarm-brown-light max-w-2xl mx-auto">
            Select from our variety of organic vegetables and fruits to grow on your farm plot. Our expert farmers will plant and care for them until they're ready for harvest.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap gap-6 mb-6 justify-center">
            <div className="w-full md:w-auto">
              <Input
                type="search"
                placeholder="Search plants..."
                className="w-full md:w-80"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-myfarm-brown mb-2">Categories</h3>
              <div className="flex flex-wrap items-center gap-2">
                <Button 
                  variant={selectedCategory === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(null)}
                  className={selectedCategory === null ? "bg-myfarm-green" : ""}
                >
                  All Categories
                </Button>
                {categories.map(category => (
                  <Button 
                    key={category} 
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-myfarm-green" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium text-myfarm-brown mb-2">Climate</h3>
              <div className="flex flex-wrap items-center gap-2">
                <Button 
                  variant={selectedClimate === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedClimate(null)}
                  className={selectedClimate === null ? "bg-myfarm-green" : ""}
                >
                  All Climates
                </Button>
                {climates.map(climate => (
                  <Button 
                    key={climate} 
                    variant={selectedClimate === climate ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedClimate(climate)}
                    className={selectedClimate === climate ? "bg-myfarm-green" : ""}
                  >
                    {climate}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {filteredPlants.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPlants.map((plant) => (
              <Card key={plant.id} className="overflow-hidden border border-myfarm-green/10 hover:shadow-md transition-shadow duration-300">
                <div className="aspect-square w-full bg-myfarm-beige flex items-center justify-center text-myfarm-green">
                  {/* Replace with actual images when available */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v8"></path>
                    <path d="M12 22v-2"></path>
                    <path d="M4.93 10.93l1.41 1.41"></path>
                    <path d="M17.66 11.7l1.41-1.41"></path>
                    <path d="M2 18h2"></path>
                    <path d="M20 18h2"></path>
                    <path d="M12 19c-4.2 0-7-1.8-7-6 0-2 1-5 3-5 1.8 0 0 4 4 4s2.25-4 4-4c2 0 3 3 3 5 0 4.2-2.8 6-7 6Z"></path>
                  </svg>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-myfarm-brown text-lg">{plant.name}</CardTitle>
                    <Badge variant="outline" className="border-myfarm-green text-myfarm-green">
                      {plant.category}
                    </Badge>
                  </div>
                  <CardDescription>Growing time: {plant.growingTime}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-myfarm-brown-light">{plant.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center pt-2">
                  <div className="text-myfarm-brown font-semibold">
                    Rs. {plant.price.toLocaleString()}
                  </div>
                  <Button className="bg-myfarm-green hover:bg-myfarm-green-dark">
                    Add to Plot
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-myfarm-brown-light text-lg">No plants match your search criteria.</p>
            <Button 
              variant="link" 
              className="text-myfarm-green mt-2"
              onClick={() => {
                setSelectedCategory(null);
                setSelectedClimate(null);
                setSearchTerm("");
              }}
            >
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Plants;

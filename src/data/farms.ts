
export interface Farm {
  id: string;
  name: string;
  location: string;
  description: string;
  imageUrl: string;
  availablePlots: number;
  pricePerPerch: number;
  features: string[];
}

export const farms: Farm[] = [
  {
    id: "farm1",
    name: "Green Valley Farm",
    location: "Nuwara Eliya",
    description: "Located in the heart of Sri Lanka's hill country, Green Valley Farm offers rich soil and ideal growing conditions for a variety of vegetables and herbs.",
    imageUrl: "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
    availablePlots: 15,
    pricePerPerch: 10000,
    features: ["Organic farming methods", "Greenhouse facilities", "Irrigation system", "Expert farmer guidance"]
  },
  {
    id: "farm2",
    name: "Highland Gardens",
    location: "Nuwara Eliya",
    description: "A picturesque farm with excellent growing conditions for cool-weather crops. Perfect for growing lettuce, carrots, and other vegetables that thrive in cooler climates.",
    imageUrl: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    availablePlots: 8,
    pricePerPerch: 12000,
    features: ["Cool climate", "Natural pest control", "Composting facilities", "Regular soil testing"]
  },
  {
    id: "farm3",
    name: "Sunlight Acres",
    location: "Nuwara Eliya",
    description: "This farm gets abundant sunshine throughout the year, making it ideal for growing sun-loving crops like tomatoes, peppers, and eggplants.",
    imageUrl: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    availablePlots: 12,
    pricePerPerch: 9000,
    features: ["Full sun exposure", "Drip irrigation", "Composting facilities", "Tool storage"]
  },
  {
    id: "farm4",
    name: "Misty Meadows",
    location: "Nuwara Eliya",
    description: "A farm situated in a misty area with moderate temperatures, perfect for growing a variety of crops including root vegetables and leafy greens.",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    availablePlots: 10,
    pricePerPerch: 11000,
    features: ["Moderate climate", "Water harvesting", "Wind protection", "Close to main road"]
  }
];

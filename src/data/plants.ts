
export interface Plant {
  id: string;
  name: string;
  category: string;
  growingTime: string;
  description: string;
  imageUrl: string;
  price: number;
  climate: string[];
}

export const plants: Plant[] = [
  {
    id: "plant1",
    name: "Carrot",
    category: "Root Vegetables",
    growingTime: "70-80 days",
    description: "Carrots are root vegetables that are easy to grow and packed with nutrients. They prefer cool temperatures and loose, sandy soil.",
    imageUrl: "/carrot.jpg",
    price: 100,
    climate: ["Cool", "Moderate"]
  },
  {
    id: "plant2",
    name: "Tomato",
    category: "Fruits",
    growingTime: "70-90 days",
    description: "Tomatoes are popular garden plants that produce juicy fruits. They need warm temperatures and full sun to thrive.",
    imageUrl: "/tomato.jpg",
    price: 150,
    climate: ["Warm", "Hot"]
  },
  {
    id: "plant3",
    name: "Lettuce",
    category: "Leafy Greens",
    growingTime: "45-60 days",
    description: "Lettuce is a cool-season crop that grows quickly and is perfect for beginners. It prefers cooler temperatures and can be harvested multiple times.",
    imageUrl: "/lettuce.jpg",
    price: 80,
    climate: ["Cool", "Moderate"]
  },
  {
    id: "plant4",
    name: "Bell Pepper",
    category: "Fruits",
    growingTime: "60-90 days",
    description: "Bell peppers are warm-season crops that produce colorful, nutritious fruits. They require full sun and warm temperatures.",
    imageUrl: "/pepper.jpg",
    price: 120,
    climate: ["Warm", "Hot"]
  },
  {
    id: "plant5",
    name: "Spinach",
    category: "Leafy Greens",
    growingTime: "40-50 days",
    description: "Spinach is a fast-growing leafy green that's packed with nutrients. It prefers cool temperatures and can be harvested multiple times.",
    imageUrl: "/spinach.jpg",
    price: 90,
    climate: ["Cool", "Moderate"]
  },
  {
    id: "plant6",
    name: "Eggplant",
    category: "Fruits",
    growingTime: "70-85 days",
    description: "Eggplants are warm-season crops that produce glossy fruits. They require warm temperatures and full sun to thrive.",
    imageUrl: "/eggplant.jpg",
    price: 140,
    climate: ["Warm", "Hot"]
  },
  {
    id: "plant7",
    name: "Cabbage",
    category: "Leafy Greens",
    growingTime: "80-100 days",
    description: "Cabbage is a cool-season crop that forms dense heads. It prefers cool temperatures and consistent moisture.",
    imageUrl: "/cabbage.jpg",
    price: 110,
    climate: ["Cool", "Moderate"]
  },
  {
    id: "plant8",
    name: "Cucumber",
    category: "Fruits",
    growingTime: "50-70 days",
    description: "Cucumbers are warm-season crops that produce refreshing fruits. They require warm temperatures and full sun.",
    imageUrl: "/cucumber.jpg",
    price: 130,
    climate: ["Warm", "Hot"]
  },
  {
    id: "plant9",
    name: "Radish",
    category: "Root Vegetables",
    growingTime: "20-30 days",
    description: "Radishes are fast-growing root vegetables that are perfect for beginners. They prefer cool temperatures and can be harvested quickly.",
    imageUrl: "/radish.jpg",
    price: 70,
    climate: ["Cool", "Moderate"]
  }
];

export const categories = Array.from(new Set(plants.map(plant => plant.category)));
export const climates = Array.from(new Set(plants.flatMap(plant => plant.climate)));

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "./ui/card"

import {
  Car,
  Truck,
  Bike,
  Caravan,
  Ship,
  Dumbbell,
} from "lucide-react";

const DEFAULT_ITEMS = [
  {
    id: 1,
    icon: Car,
    title: "Automobile",
    description:
      "A departure from what is normal, usual, or expectedA departure from what is normal, usual, or expectedA departure from what is normal, usual, or expected...",
  },
  {
    id: 2,
    icon: Truck,
    title: "Trucks",
    description:
      "Hostile and aggressiveA departure from what is normal, usual, or expectedA departure from what is normal, usual, or expectedA departure from what is normal, usual, or expected...",
  },
  {
    id: 3,
    icon: Bike,
    title: "Powersports",
    description:
      "Giving a lot of information clearly and in a few wordsA departure from what is normal, usual, or expectedA departure from what is normal, usual, or expectedA departure from what is normal, usual, or expectedA departure from what is normal, usual, or expected...",
  },
  {
    id: 4,
    icon: Caravan,
    title: "Rvs",
    description:
      "Giving a lot of information clearly and in a few wordsA departure from what is normal, usual, or expectedA departure from what is normal, usual, or expectedA departure from what is normal, usual, or expectedA departure from what is normal, usual, or expected...",
  },
  {
    id: 5,
    icon: Ship,
    title: "Marine",
    description:
      "Giving a lot of information clearly and in a few wordsA departure from what is normal, usual, or expectedA departure from what is normal, usual, or expectedA departure from what is normal, usual, or expectedA departure from what is normal, usual, or expected...",
  },
  {
    id: 6,
    icon: Dumbbell,
    title: "Heavy Duty",
    description:
      "Giving a lot of information clearly and in a few wordsA departure from what is normal, usual, or expectedA departure from what is normal, usual, or expectedA departure from what is normal, usual, or expectedA departure from what is normal, usual, or expected...",
  },
]

const PopulatArticles = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 m-10">
        
      <h1 className="text-3xl font-bold text-center">Industries</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {DEFAULT_ITEMS.map((item) => (
          <ArticleCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default PopulatArticles



const ArticleCard = ({ item }) => {
  const [expanded, setExpanded] = useState(false)
  const Icon = item.icon

  return (
    <Card className="rounded-xl p-6 flex flex-col items-center text-center">

      <CardHeader className="flex flex-col items-center space-y-4 p-0">
        
        
        <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-gray-100">
          <Icon size={32} className="text-gray-500" />
        </div>

        
        <CardTitle className="text-lg">{item.title}</CardTitle>

        
        <CardDescription
          className={`text-gray-600 transition-all ${
            expanded ? "line-clamp-none" : "line-clamp-2"
          }`}
        >
          {item.description}
        </CardDescription>

      </CardHeader>

      
      {item.description.length > 40 && (
        <CardFooter className="p-0 mt-4">
          <button
            onClick={() => setExpanded(!expanded)}
            className="px-4 py-2 rounded-lg text-purple-600 bg-purple-100/50 hover:bg-purple-200 transition"
          >
            {expanded ? "Read less" : "Read more..."}
          </button>
        </CardFooter>
      )}

    </Card>
  )
}

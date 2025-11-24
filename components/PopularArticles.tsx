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
import { motion } from "framer-motion";

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
    <div id="industries" className="max-w-7xl mx-auto px-4 md:px-6 m-10 text-center py-24 md:py-24">

      {/* <h1 className="text-3xl font-bold text-center">Industries</h1> */}
      <div className="inline-block px-2.5 py-0.5 bg-[#7367f0]/20 rounded mb-4">
        <span className="text-[#7367f0] text-sm font-medium">
          Industries
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {DEFAULT_ITEMS.map((item) => (
          <ArticleCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default PopulatArticles



type ArticleItem = {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
};

const ArticleCard = ({ item }: { item: ArticleItem }) => {
  const [expanded, setExpanded] = useState(false)
  const [isHovered, setIsHovered] = useState(false);
  const Icon = item.icon

  return (
    <motion.div
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.25 }}
  onHoverStart={() => setIsHovered(true)}
  onHoverEnd={() => setIsHovered(false)}
>
    <Card className="rounded-xl p-6 flex flex-col items-center text-center">

      <CardHeader className="flex flex-col items-center space-y-4 p-0">


        <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-[#7367f0]/10">
          <Icon size={32} className="text-[#7367f0]" />
        </div>


        <CardTitle className="text-lg">
            <motion.div
          className="text-center text-lg font-medium leading-7"
          animate={{
            color: isHovered ? "#7367f0" : "var(--foreground)",
          }}
        >
          {item.title}
        </motion.div>
            
            </CardTitle>


        <CardDescription
          className={`text-gray-600 transition-all dark:text-slate-400 ${expanded ? "line-clamp-none" : "line-clamp-2" 
            }`}
        >
          {item.description}
        </CardDescription>

      </CardHeader>


      {item.description.length > 40 && (
        <CardFooter className="p-0 mt-4">
          <button
            onClick={() => setExpanded(!expanded)}
            className="px-4 py-2 rounded-lg text-[#7367f0] bg-[#7367f0]/10 hover:bg-[#7367f0]/20 transition"
          >
            {expanded ? "Read less" : "Read more..."}
          </button>
        </CardFooter>
      )}

    </Card>
    </motion.div>
  )
}

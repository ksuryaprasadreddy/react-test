import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "./ui/card"
import car  from "../public/car.jpg"
import marine from "../public/marine.jpg"
import rvs from "../public/rvs.jpg"
import truck from "../public/truck.jpg"
import power from "../public/power.jpg"
import heavy from "../public/heavy.jpg"
import Image from "next/image"
import { motion } from "framer-motion";


const DEFAULT_ITEMS = [
  {
    id: 1,
    icon: car,
    title: "Automobile",
    description:
      "A departure from what is normal, usual, or expectedA departure from what is normal, usual, or expectedA departure from what is normal, usual, or expected...",
  },
  {
    id: 2,
    icon: truck,
    title: "Trucks",
    description:
      "Hostile and aggressiveA departure from what is normal, usual, or expectedA departure from what is normal, usual, or expectedA departure from what is normal, usual, or expected...",
  },
  {
    id: 3,
    icon: power,
    title: "Powersports",
    description:
      "Giving a lot of information clearly and in a few wordsA departure from what is normal, usual, or expectedA departure from what is normal, usual, or expectedA departure from what is normal, usual, or expectedA departure from what is normal, usual, or expected...",
  },
  {
    id: 4,
    icon: rvs,
    title: "Rvs",
    description:
      "Giving a lot of information clearly and in a few wordsA departure from what is normal, usual, or expectedA departure from what is normal, usual, or expectedA departure from what is normal, usual, or expectedA departure from what is normal, usual, or expected...",
  },
  {
    id: 5,
    icon: marine,
    title: "Marine",
    description:
      "Giving a lot of information clearly and in a few wordsA departure from what is normal, usual, or expectedA departure from what is normal, usual, or expectedA departure from what is normal, usual, or expectedA departure from what is normal, usual, or expected...",
  },
  {
    id: 6,
    icon: heavy,
    title: "Heavy Duty",
    description:
      "Giving a lot of information clearly and in a few wordsA departure from what is normal, usual, or expectedA departure from what is normal, usual, or expectedA departure from what is normal, usual, or expectedA departure from what is normal, usual, or expected...",
  },
]

const PopulatArticles = () => {
  return (
    <div id="industries" className="max-w-7xl mx-auto px-4 md:px-6 m-10 text-center">

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



import type { StaticImport } from "next/dist/shared/lib/get-img-props";

type ArticleItem = {
  id: number;
  icon: StaticImport;
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


       
          <div className="w-[200px] h-[200px] flex items-center justify-center">
            <Image
                src={item.icon}
                width={200}
                height={200}
                alt={item.title}
                className="object-contain"
            />
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
            className="px-4 py-2 rounded-lg text-[#7367f0] bg-[#7367f0]/10 hover:bg-[#7367f0]/20 transition font-bold"
          >
            {expanded ? "Read less" : "Read more"}
          </button>
        </CardFooter>
      )}

    </Card>
    </motion.div>
  )
}

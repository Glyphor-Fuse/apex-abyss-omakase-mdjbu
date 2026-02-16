
import { useState } from "react";
import { motion } from "framer-motion";
import { Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface MenuItem {
  id: string;
  name: string;
  jpName: string;
  description: string;
  price: string;
  sharkSpecies: string;
  sharkImage: string;
  sushiImage: string;
  depth: string;
}

const MENU_ITEMS: MenuItem[] = [
  {
    id: "1",
    name: "Abyss Bluefin",
    jpName: "本マグロ",
    description: "Aged bluefin otoro, caviar, gold leaf, truffle soy.",
    price: "$45",
    sharkSpecies: "Great White",
    sharkImage: "/images/shark-great-white.png",
    sushiImage: "/images/sushi-1.png",
    depth: "Surface - 300m"
  },
  {
    id: "2",
    name: "Reef Scallop",
    jpName: "ホタテ",
    description: "Hokkaido scallop, yuzu kosho, sea salt.",
    price: "$32",
    sharkSpecies: "Hammerhead",
    sharkImage: "/images/shark-hammerhead.png",
    sushiImage: "/images/sushi-2.png",
    depth: "Surface - 80m"
  },
  {
    id: "3",
    name: "Deep Sea Urchin",
    jpName: "ウニ",
    description: "Bafun uni, nori crisp, fresh wasabi root.",
    price: "$55",
    sharkSpecies: "Tiger Shark",
    sharkImage: "/images/shark-tiger.png",
    sushiImage: "/images/sushi-3.png",
    depth: "Surface - 350m"
  },
  {
    id: "4",
    name: "Midnight Eel",
    jpName: "うなぎ",
    description: "Freshwater eel, sansho pepper, sweet soy reduction.",
    price: "$38",
    sharkSpecies: "Mako Shark",
    sharkImage: "/images/shark-great-white.png", // Reuse image due to limit
    sushiImage: "/images/sushi-1.png", // Reuse image due to limit
    depth: "Surface - 150m"
  },
];

export function MenuExplorer() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <section id="menu" className="relative w-full bg-background py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Predator & Plate</span>
          <h2 className="font-display mt-3 text-4xl text-foreground md:text-5xl lg:text-6xl">
            The Omakase <span className="text-foreground-600">Collection</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-foreground-400">
            Hover over our signature selections to reveal the apex predators that patrol 
            the waters where these delicacies are sourced.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {MENU_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group relative h-[450px] w-full cursor-pointer overflow-hidden rounded-2xl border border-border/5 bg-background-900/50 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(20,184,166,0.15)]"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Background Images */}
              <div className="absolute inset-0 z-0">
                {/* Default Sushi Image */}
                <motion.div
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.sushiImage})` }}
                  animate={{ 
                    scale: hoveredItem === item.id ? 1.1 : 1,
                    opacity: hoveredItem === item.id ? 0.3 : 1
                  }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Revealed Shark Image */}
                <motion.div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.sharkImage})` }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredItem === item.id ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-6">
                <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                  <div className="mb-2 flex items-center justify-between">
                    <Badge variant="outline" className="border-primary/50 text-primary-foreground bg-primary/20 backdrop-blur-md">
                      {item.jpName}
                    </Badge>
                    <span className="font-mono text-lg text-primary">{item.price}</span>
                  </div>
                  
                  <h3 className="font-display text-2xl text-foreground group-hover:text-primary-foreground transition-colors">
                    {item.name}
                  </h3>
                  
                  <p className="mt-2 text-sm text-foreground-300 line-clamp-2">
                    {item.description}
                  </p>

                  <div className={`mt-4 overflow-hidden transition-all duration-500 ${hoveredItem === item.id ? "max-h-20 opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="flex items-center gap-2 text-xs text-primary font-mono border-t border-border/10 pt-3">
                      <Info className="h-3 w-3" />
                      <span>APEX: {item.sharkSpecies}</span>
                    </div>
                     <div className="flex items-center gap-2 text-xs text-foreground-400 font-mono mt-1">
                      <span>DEPTH: {item.depth}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MenuExplorer;

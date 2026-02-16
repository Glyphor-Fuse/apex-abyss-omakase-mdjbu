
import { motion } from "framer-motion";
import { Fish, Anchor, ShieldCheck, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Traceable Origins",
    description: "Every cut of fish is tagged with GPS coordinates of its catch, ensuring you know exactly where your meal began its journey.",
    icon: <MapPin className="h-6 w-6 text-primary" />,
    className: "col-span-1 md:col-span-2 lg:col-span-2",
    bgImage: "/images/shark-great-white.png" // Reusing
  },
  {
    title: "Apex Protection",
    description: "We partner with marine biologists to track local shark populations. 5% of all revenue supports shark conservation efforts.",
    icon: <ShieldCheck className="h-6 w-6 text-primary" />,
    className: "col-span-1 md:col-span-1 lg:col-span-1",
    bgImage: "/images/shark-hammerhead.png" // Reusing
  },
  {
    title: "Sustainable Line-Caught",
    description: "No nets. No bycatch. Just traditional line fishing that respects the ocean's balance.",
    icon: <Anchor className="h-6 w-6 text-primary" />,
    className: "col-span-1 md:col-span-1 lg:col-span-1",
    bgImage: "/images/shark-tiger.png" // Reusing
  },
  {
    title: "Live Aquarium",
    description: "Our 200,000-gallon center tank is home to 12 species of shark, viewable from every seat in the house.",
    icon: <Fish className="h-6 w-6 text-primary" />,
    className: "col-span-1 md:col-span-2 lg:col-span-2",
    bgImage: "/images/hero-poster.png" // Reusing
  },
];

export function Sourcing() {
  return (
    <section className="bg-background-950 py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl text-foreground md:text-5xl">Conscious Consumption</h2>
            <p className="mt-4 text-foreground-400 text-lg">
              We believe luxury dining shouldn't cost the earth. Our sourcing is as transparent as the glass walls surrounding you.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="text-right">
              <div className="text-3xl font-bold text-primary">12+</div>
              <div className="text-xs text-foreground-500 uppercase tracking-wider">Shark Species</div>
            </div>
            <div className="h-12 w-[1px] bg-background-800" />
            <div className="text-right">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-xs text-foreground-500 uppercase tracking-wider">Traceable</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3 auto-rows-[300px]">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "group relative overflow-hidden rounded-3xl border border-border/5 bg-background-900 transition-all hover:border-primary/20",
                feature.className
              )}
            >
              <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
                <img 
                  src={feature.bgImage} 
                  alt={feature.title} 
                  className="h-full w-full object-cover opacity-40 group-hover:opacity-30 transition-opacity" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-950 via-background-950/50 to-transparent" />
              </div>
              
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-8">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-background-950/50 backdrop-blur-sm border border-primary/20">
                  {feature.icon}
                </div>
                <h3 className="font-display text-2xl text-foreground mb-2">{feature.title}</h3>
                <p className="text-foreground-300 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sourcing;

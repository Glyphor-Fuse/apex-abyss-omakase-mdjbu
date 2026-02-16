
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    id: 1,
    name: "Elena V.",
    role: "Food Critic",
    rating: 5,
    text: "The feeling of dining while a 12-foot tiger shark glides inches from your table is indescribable. The food matches the drama—absolute perfection.",
  },
  {
    id: 2,
    name: "Marcus J.",
    role: "Marine Biologist",
    rating: 5,
    text: "I was skeptical about an aquarium restaurant, but their conservation efforts are genuine. The sourcing data on the menu is a game changer for sustainable dining.",
  },
  {
    id: 3,
    name: "Sarah L.",
    role: "Travel Blogger",
    rating: 5,
    text: "A surreal descent into luxury. The 'Abyss Bluefin' was the best sushi I've had outside of Tokyo, and the atmosphere is simply cinematic.",
  },
];

export function Reviews() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className="bg-background py-24 relative overflow-hidden">
      {/* Decorative blurred blobs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-background-900/20 rounded-full blur-3xl translate-x-1/2" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl text-foreground mb-4">Voices from the Deep</h2>
          <div className="flex justify-center gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="h-5 w-5 fill-primary text-primary" />
            ))}
          </div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-background-900/40 backdrop-blur-md border border-border/5 rounded-3xl p-8 md:p-12 text-center"
            >
              <Star className="h-12 w-12 text-primary/30 mx-auto mb-6" />
              <p className="font-display text-2xl md:text-3xl text-foreground-100 leading-relaxed italic mb-8">
                "{reviews[current].text}"
              </p>
              
              <div className="flex items-center justify-center gap-4">
                <Avatar className="h-14 w-14 border-2 border-primary/20">
                  <AvatarFallback className="bg-background-800 text-primary">{reviews[current].name[0]}</AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <div className="font-semibold text-foreground text-lg">{reviews[current].name}</div>
                  <div className="text-primary text-sm">{reviews[current].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full border-border/10 bg-background/5 hover:bg-primary/20 hover:text-primary hover:border-primary/50"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full border-border/10 bg-background/5 hover:bg-primary/20 hover:text-primary hover:border-primary/50"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;

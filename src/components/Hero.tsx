
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-background text-foreground">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`h-full w-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Fallback Image */}
        <div
          className={`absolute inset-0 bg-[url('/images/hero-poster.png')] bg-cover bg-center transition-opacity duration-1000 ${
            isVideoLoaded ? "opacity-0" : "opacity-100"
          }`}
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        <div className="absolute inset-0 bg-background/20" /> 
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-6 flex items-center space-x-2 rounded-full border border-border/10 bg-background/5 px-4 py-4.5 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-xs font-medium tracking-widest text-primary-foreground/90 uppercase">
            Live Depth Feed • 45m
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-display max-w-4xl text-6xl font-medium tracking-tight text-foreground sm:text-7xl md:text-8xl lg:text-9xl"
        >
          APEX <span className="text-transparent bg-clip-text bg-gradient-to-b from-background-200 to-background-500">ABYSS</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-6 max-w-xl text-lg font-light text-foreground-300 md:text-xl leading-relaxed"
        >
          Dining at the top of the food chain. An immersive omakase experience 
          surrounded by the silent majesty of the deep ocean.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Button 
            size="lg" 
            className="h-14 bg-primary px-8 text-base text-primary-foreground hover:bg-primary/90 border-0 ring-0 shadow-[0_0_20px_rgba(20,184,166,0.3)]"
            onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Reserve Your Table
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="h-14 border-border/20 bg-background/5 px-8 text-base text-foreground hover:bg-background/10 hover:text-foreground backdrop-blur-sm"
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore The Menu
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/40">Descent</span>
        <div className="h-12 w-[1px] bg-gradient-to-b from-background/0 via-background-500/50 to-background/0" />
      </motion.div>
    </section>
  );
}

export default Hero;

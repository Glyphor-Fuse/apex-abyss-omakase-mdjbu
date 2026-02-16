import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Hero } from "@/components/Hero";
import { MenuExplorer } from "@/components/MenuExplorer";
import { Sourcing } from "@/components/Sourcing";
import { Reviews } from "@/components/Reviews";
import { Reservation } from "@/components/Reservation";
import { Footer } from "@/components/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-teal-500/30 selection:text-teal-200">
          <Hero />
          <MenuExplorer />
          <Sourcing />
          <Reviews />
          <Reservation />
          <Footer />
        </main>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

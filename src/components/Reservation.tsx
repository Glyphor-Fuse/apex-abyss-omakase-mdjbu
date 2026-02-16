
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from 'react';
import { toast } from "sonner";
import { Clock, Users } from "lucide-react";

export function Reservation() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Reservation Request Sent", {
      description: "Our concierge will confirm your dive time shortly.",
    });
  };

  return (
    <section id="reservation" className="bg-background-950 py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-[url('/images/hero-poster.png')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-background-950 via-background-950/80 to-background-950" />

      <div className="relative z-10 mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-display text-4xl text-foreground mb-6">Secure Your Descent</h2>
          <p className="text-foreground-400 mb-8 text-lg">
            Reservations are released 30 days in advance. 
            A deposit is required to secure the Ocean View Counter.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-full bg-background-900/50 flex items-center justify-center border border-primary/20 shrink-0">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="text-foreground font-medium">Dinner Service</h4>
                <p className="text-sm text-foreground-500">5:00 PM – 11:00 PM, Tuesday - Sunday</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-full bg-background-900/50 flex items-center justify-center border border-primary/20 shrink-0">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="text-foreground font-medium">Private Events</h4>
                <p className="text-sm text-foreground-500">Available for full aquarium buyout (max 50 guests)</p>
              </div>
            </div>
          </div>
        </div>

        <Card className="border-border/10 bg-background-900/60 backdrop-blur-xl shadow-2xl">
          <CardHeader>
            <CardTitle className="text-foreground font-display text-2xl">Book a Table</CardTitle>
            <CardDescription>Select your preferred date and party size.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleBooking} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-foreground-300">Date</Label>
                  <div className="rounded-md border border-border/10 bg-background-950 p-2 flex justify-center">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md"
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="guests" className="text-foreground-300">Guests</Label>
                    <Select>
                      <SelectTrigger className="bg-background-950 border-border/10 text-foreground">
                        <SelectValue placeholder="2 Guests" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Guest</SelectItem>
                        <SelectItem value="2">2 Guests</SelectItem>
                        <SelectItem value="4">4 Guests</SelectItem>
                        <SelectItem value="6">6 Guests</SelectItem>
                        <SelectItem value="8">8+ (Contact Us)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time" className="text-foreground-300">Time</Label>
                    <Select>
                      <SelectTrigger className="bg-background-950 border-border/10 text-foreground">
                        <SelectValue placeholder="7:00 PM" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="17:00">5:00 PM</SelectItem>
                        <SelectItem value="18:00">6:00 PM</SelectItem>
                        <SelectItem value="19:00">7:00 PM</SelectItem>
                        <SelectItem value="20:00">8:00 PM</SelectItem>
                        <SelectItem value="21:00">9:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground-300">Name</Label>
                    <Input id="name" placeholder="John Doe" className="bg-background-950 border-border/10 text-foreground" />
                  </div>
                  
                  <div className="space-y-2">
                     <Label htmlFor="email" className="text-foreground-300">Email</Label>
                     <Input id="email" type="email" placeholder="john@example.com" className="bg-background-950 border-border/10 text-foreground" />
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-lg">
                Confirm Reservation
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default Reservation;

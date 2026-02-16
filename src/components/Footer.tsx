
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/10 bg-background-950 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-display text-2xl text-foreground mb-6">APEX ABYSS</h3>
            <p className="text-foreground-400 text-sm leading-relaxed">
              Sustainable omakase dining in the heart of the ocean. Experience the thrill of the deep.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-6 uppercase tracking-wider text-xs">Location</h4>
            <div className="flex items-start gap-3 text-foreground-400 text-sm mb-4">
              <MapPin className="h-4 w-4 mt-1 shrink-0 text-primary" />
              <span>
                Pier 57, Underwater Level B2<br />
                Seattle, WA 98101
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-6 uppercase tracking-wider text-xs">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-foreground-400 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (206) 555-0199</span>
              </div>
              <div className="flex items-center gap-3 text-foreground-400 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>concierge@apexabyss.com</span>
              </div>
            </div>
          </div>

          <div>
             <h4 className="font-semibold text-foreground mb-6 uppercase tracking-wider text-xs">Follow Us</h4>
             <div className="flex gap-4">
               <a href="#" className="h-10 w-10 rounded-full bg-background/5 flex items-center justify-center text-foreground hover:bg-primary/80 transition-colors">
                 <Instagram className="h-5 w-5" />
               </a>
               <a href="#" className="h-10 w-10 rounded-full bg-background/5 flex items-center justify-center text-foreground hover:bg-primary/80 transition-colors">
                 <Twitter className="h-5 w-5" />
               </a>
               <a href="#" className="h-10 w-10 rounded-full bg-background/5 flex items-center justify-center text-foreground hover:bg-primary/80 transition-colors">
                 <Facebook className="h-5 w-5" />
               </a>
             </div>
          </div>
        </div>

        <div className="border-t border-border/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-foreground-600">
            © 2024 Apex Abyss Omakase. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-foreground-600">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

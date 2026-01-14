import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export const Hero = () => {
  const scrollToForm = () => {
    document.getElementById("download-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-gradient min-h-[85vh] relative overflow-hidden flex items-center">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent rounded-full blur-3xl animate-float" />
      </div>
      
      <div className="section-container relative z-10 text-center py-16">
        <span className="animate-fade-up inline-block mb-5 px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium backdrop-blur-sm border border-accent/30">
          Free 60-Page Guide
        </span>
        
        <h1 className="animate-fade-up-delay-1 text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight max-w-4xl mx-auto text-balance">
          Scale Your Business with AI in 2026
        </h1>
        
        <p className="animate-fade-up-delay-2 mt-5 text-lg sm:text-xl text-primary-foreground/80 max-w-xl mx-auto">
          For entrepreneurs doing ₹5–15L/month. No extra hires. No extra stress.
        </p>
        
        <Button 
          variant="cta" 
          size="xl" 
          onClick={scrollToForm}
          className="animate-fade-up-delay-3 mt-8"
        >
          <Download className="w-5 h-5" />
          Get Free Playbook
        </Button>
      </div>
    </section>
  );
};

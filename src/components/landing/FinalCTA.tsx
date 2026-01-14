import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, Check, Loader2 } from "lucide-react";
import { toast } from "sonner";

export const FinalCTA = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !name) {
      toast.error("Please fill in all fields");
      return;
    }
    
    if (!email.includes("@")) {
      toast.error("Please enter a valid email");
      return;
    }
    
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Check your email!");
  };

  return (
    <section id="download-form" className="hero-gradient">
      <div className="section-container py-16">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-3">
            Ready to Scale Smarter?
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Get your free AI Playbook now.
          </p>
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 shadow-2xl">
              <div className="space-y-3 mb-4">
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-12 bg-secondary border-border"
                  disabled={isSubmitting}
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 bg-secondary border-border"
                  disabled={isSubmitting}
                />
              </div>
              
              <Button 
                type="submit" 
                variant="cta" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Download className="w-5 h-5" />
                    Get Playbook
                  </>
                )}
              </Button>
            </form>
          ) : (
            <div className="bg-card rounded-2xl p-8 shadow-2xl">
              <div className="w-16 h-16 rounded-full cta-gradient mx-auto mb-4 flex items-center justify-center">
                <Check className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Done!</h3>
              <p className="text-muted-foreground">Check your inbox.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

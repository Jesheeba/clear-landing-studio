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
      toast.error("Please enter a valid email address");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Success! Check your email for the playbook.");
  };

  return (
    <section id="download-form" className="hero-gradient">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Build a Smarter Business for 2026
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10">
            Start with clarity, systems, and practical AI.
          </p>
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-2xl">
              <div className="space-y-4 mb-6">
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-14 text-lg px-5 bg-secondary border-border"
                  disabled={isSubmitting}
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-14 text-lg px-5 bg-secondary border-border"
                  disabled={isSubmitting}
                />
              </div>
              
              <Button 
                type="submit" 
                variant="cta" 
                size="xl" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5" />
                    Download the Free AI Playbook
                  </>
                )}
              </Button>
              
              <p className="mt-4 text-sm text-muted-foreground">
                No spam. Unsubscribe anytime.
              </p>
            </form>
          ) : (
            <div className="bg-card rounded-2xl p-10 shadow-2xl text-center">
              <div className="w-20 h-20 rounded-full cta-gradient mx-auto mb-6 flex items-center justify-center">
                <Check className="w-10 h-10 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                You're All Set!
              </h3>
              <p className="text-lg text-muted-foreground">
                Check your email inbox for the AI Playbook. It should arrive within a few minutes.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

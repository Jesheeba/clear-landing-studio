import { Cog, Sparkles } from "lucide-react";

export const WhyItWorks = () => {
  return (
    <section className="bg-secondary">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Systems Beat Tools
          </h2>
          
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Cog className="w-6 h-6" />
              <span>Tools change</span>
            </div>
            <span className="text-accent text-2xl">→</span>
            <div className="flex items-center gap-2 text-accent font-semibold">
              <Sparkles className="w-6 h-6" />
              <span>Systems scale</span>
            </div>
          </div>
          
          <div className="hero-gradient rounded-2xl p-8 text-center">
            <p className="text-5xl font-bold text-primary-foreground mb-2">60+</p>
            <p className="text-primary-foreground/80">Pages of real workflows</p>
          </div>
        </div>
      </div>
    </section>
  );
};

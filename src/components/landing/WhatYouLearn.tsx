import { Phone, MessageCircle, BarChart3, Rocket } from "lucide-react";

const learnings = [
  { icon: Phone, text: "Automate leads & missed calls" },
  { icon: MessageCircle, text: "AI WhatsApp that sounds human" },
  { icon: BarChart3, text: "Auto follow-ups & CRM" },
  { icon: Rocket, text: "AI content for ads & reels" },
];

export const WhatYouLearn = () => {
  return (
    <section className="bg-background">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            What You'll Learn
          </h2>
          <p className="text-muted-foreground mb-10">Practical workflows. No buzzwords.</p>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {learnings.map((item, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-5 card-elevated border border-border flex items-center gap-4 text-left group hover:border-accent/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                  <item.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <p className="font-medium text-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

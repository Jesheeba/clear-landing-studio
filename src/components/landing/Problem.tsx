import { AlertCircle, MessageSquare, Users } from "lucide-react";

const painPoints = [
  { icon: AlertCircle, text: "Missed follow-ups killing revenue" },
  { icon: MessageSquare, text: "Drowning in WhatsApp messages" },
  { icon: Users, text: "Too dependent on your team" },
];

export const Problem = () => {
  return (
    <section className="bg-secondary">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Your Problem Isn't Demand
          </h2>
          <p className="text-lg text-muted-foreground mb-10">It's operations.</p>
          
          <div className="grid sm:grid-cols-3 gap-4">
            {painPoints.map((point, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 card-elevated border border-border text-center"
              >
                <point.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="font-medium text-foreground">{point.text}</p>
              </div>
            ))}
          </div>
          
          <p className="mt-10 text-lg text-foreground">
            <span className="text-accent font-semibold">AI solves this</span> — when applied right.
          </p>
        </div>
      </div>
    </section>
  );
};

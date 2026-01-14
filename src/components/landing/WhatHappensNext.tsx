import { Download, ShieldCheck, Handshake } from "lucide-react";

const steps = [
  { icon: Download, text: "Instant download" },
  { icon: ShieldCheck, text: "No spam" },
  { icon: Handshake, text: "No sales calls" },
];

export const WhatHappensNext = () => {
  return (
    <section className="bg-background">
      <div className="section-container py-12">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center gap-2 text-muted-foreground">
                <step.icon className="w-5 h-5 text-accent" />
                <span className="font-medium">{step.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

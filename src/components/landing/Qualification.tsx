import { CheckCircle2 } from "lucide-react";

const qualifications = [
  "Running a profitable business (₹5–15L/month)",
  "Service business, clinic, showroom, or training institute",
  "Want systems that scale — not more hustle",
];

export const Qualification = () => {
  return (
    <section id="qualification" className="bg-background">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Built for Business Owners Like You
          </h2>
          
          <ul className="space-y-4 text-left">
            {qualifications.map((item, index) => (
              <li key={index} className="flex items-center gap-4 bg-card p-4 rounded-xl border border-border">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="text-lg text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

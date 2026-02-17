// components/PricingSection.tsx
'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const plans = [
  { name: "Gratis", price: "$0", features: ["5 proyectos", "1GB storage"], popular: false },
  { name: "Pro", price: "$19", features: ["Proyectos ilimitados", "100GB storage"], popular: true },
];

export default function PricingSection() {
  return (
    <section id="precios" className="py-32">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Planes simples</h2>
          <p className="text-xl text-muted-foreground">Elige el plan perfecto para tu proyecto</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`group ${plan.popular ? 'border-2 border-primary shadow-2xl scale-105' : ''}`}>
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <div className="text-4xl font-bold">{plan.price}</div>
              </CardHeader>
              <CardContent className="pt-0 space-y-4">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    {feature}
                  </div>
                ))}
                <Button className="w-full mt-8">Elegir {plan.name}</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

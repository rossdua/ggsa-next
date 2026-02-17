'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const features = [
  { title: "Rápido", description: "Despliegue en segundos con Vercel", icon: CheckCircle },
  { title: "Accesible", description: "Cumple WCAG 2.1 AA", icon: CheckCircle },
  { title: "Personalizable", description: "Tailwind CSS + TypeScript", icon: CheckCircle },
  { title: "Responsive", description: "Funciona en todos los dispositivos", icon: CheckCircle },
];

export default function FeaturesSection() {
  return (
    <section id="caracteristicas" className="py-32 bg-muted/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Todo lo que necesitas
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Componentes modernos construidos con las mejores prácticas
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

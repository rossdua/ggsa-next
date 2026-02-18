// app/page.tsx
'use client';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';  
import QuienesSomosSection from '@/components/QuienesSomosSection';         // ← Inglés
import FeaturesSection from '@/components/FeaturesSection'; 
import ServicesSection from '@/components/ServicesSection';
import AliadosSection from '@/components/AliadosSection';  
import AcademicoSection from '@/components/AcademicoSection';
import NuestroEquipoSection from '@/components/NuestroEquipoSection'; // ← Inglés  
import PricingSection from '@/components/PricingSection';
import UbicacionSection from '@/components/UbicacionSection';     // ← Inglés
import CTASection from '@/components/CTASection';             // ← Inglés
import Footer from '@/components/Footer';                     // ← Inglés

export default function LandingPage() {
  return (
    <main id="top">
      <Navbar />
      <HeroSection />
      <QuienesSomosSection id="quienes-somos" />
      <ServicesSection id="servicios" />
      <AliadosSection id="aliados" />
      <AcademicoSection id="academico" />
      <NuestroEquipoSection id="nuestro-equipo" />
      {/* <FeaturesSection id="caracteristicas" /> */}
      {/* <PricingSection id="precios" /> */}
      <UbicacionSection id="ubicacion" />
      <CTASection id="contacto" />
      <Footer />
    </main>
  );
}

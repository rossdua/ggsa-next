'use client';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileCheck, FileText, ShieldCheck, Gavel, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from 'react';


const servicios = [
  {
    icon: FileCheck,
    titulo: "Auditoría\n(Venezuela)",
    items: [
      "Auditoría independiente de estados financieros para Grandes Empresas, Pequeña y Mediana Entidad y Fundaciones sin Fines de Lucro",
      "Auditoría independiente para propósitos estatutarios y reglamentarios",
      "Otros servicios relacionados con auditoría y derivados"
    ]
  },
  {
    icon: FileText,
    titulo: "Impuestos\n(Venezuela & Perú)",
    items: [
      "Asistencia en la preparación y revisión de la declaración de rentas",
      "Revisión de deberes formales en impuesto sobre la renta e impuesto a las ventas",
      "Servicio de outsourcing fiscal",
      "Gerencia de administración fiscal (planificaciones)",
      "Entrenamiento 'In Company' ajustado a las necesidades de la entidad",
      "Consultoría y asesoría sobre mejores prácticas"
    ]
  },
  {
    icon: ShieldCheck,
    titulo: "Asesoría/Consultoría\n(Venezuela & Perú)",
    items: [
      "Outsourcing contable",
      "Análisis de posiciones contables y consultas técnicas",
      "Conversión a Normas Internacionales de Información Financiera (NIIF para GE y PYME)",
      "Soporte en auditoría externa: Estados Financieros y Notas Revelatorias",
      "Entrenamiento en normas internacionales y control interno"
    ]
  },
  {
    icon: Gavel,
    titulo: "Legal\n(Venezuela)",
    items: [
      "Mercantil-Comercial",
      "Tributario",
      "Laboral"
    ]
  }
];


interface ServicesSectionProps {
  id?: string;
}


export default function ServicesSection({ id }: ServicesSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);


  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % servicios.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + servicios.length) % servicios.length);


  const renderIcon = (index: number) => {
    const icons = [FileCheck, FileText, ShieldCheck, Gavel];
    const IconComponent = icons[index];
    return <IconComponent className="h-10 w-10 text-white drop-shadow-lg" />;
  };


  return (
    <section id={id} className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto max-w-7xl px-4">
        
        {/* Título - RESPONSIVE */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20 max-w-3xl mx-auto"
        >
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r 
                       from-[#044559] via-gray-900 to-[#044559] bg-clip-text text-transparent 
                       leading-tight tracking-tight drop-shadow-xl px-2">
          Nuestros Servicios
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-900 leading-tight font-light px-4 sm:px-0 max-w-2xl mx-auto whitespace-nowrap">
          Soluciones integrales para el crecimiento de tu empresa
        </p>
        </motion.div>


        {/* MÓVIL: CAROUSEL - RESPONSIVE */}
        <div className="lg:hidden w-full max-w-2xl mx-auto mb-12 sm:mb-16 px-2 sm:px-4">
          <div className="relative">
            {/* Indicadores */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
              {servicios.map((_, i) => (
                <motion.button
                  key={i}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all ${currentSlide === i ? 'w-6 sm:w-8 bg-[#044559]' : 'bg-gray-300'}`}
                  onClick={() => setCurrentSlide(i)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>


            {/* Card del carousel */}
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.9 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative shadow-2xl bg-white border border-white/50 rounded-3xl p-6 sm:p-8 backdrop-blur-sm group w-full"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-[#044559] to-[#044559]/90 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl border-2 border-[#044559]/30">
                {renderIcon(currentSlide)}
              </div>
              
              <h3 className="text-xl sm:text-2xl font-black text-center text-gray-900 mb-6 sm:mb-8 bg-gradient-to-r from-[#044559] to-[#044559]/70 bg-clip-text px-2 leading-tight">
                <span>{servicios[currentSlide].titulo}</span>
              </h3>
              
              <div className="space-y-3">
                {servicios[currentSlide].items.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="flex items-start gap-3 p-3 sm:p-4 bg-white/60 hover:bg-white/80 backdrop-blur-sm rounded-2xl border-l-4 border-[#044559]/40 hover:border-[#044559]/70 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-2 h-2 sm:w-2 sm:h-2 mt-3 bg-gradient-to-r from-[#044559] to-[#044559]/70 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <span className="text-gray-900 font-medium leading-relaxed text-sm sm:text-base line-clamp-2">{item}</span>
                  </motion.div>
                ))}
              </div>


              {/* Botones navegación */}
              <div className="absolute -top-16 right-0 flex gap-1 sm:gap-2">
                <motion.button
                  onClick={prevSlide}
                  className="w-8 h-8 sm:w-10 sm:h-10 shadow-lg bg-gradient-to-r from-[#044559]/90 to-[#044559] hover:from-[#044559] hover:to-[#044559]/90 text-white border border-[#044559]/30 hover:border-[#044559]/50 hover:shadow-xl backdrop-blur-sm rounded-2xl flex items-center justify-center transition-all duration-300 flex-shrink-0"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
                <motion.button
                  onClick={nextSlide}
                  className="w-8 h-8 sm:w-10 sm:h-10 shadow-lg bg-gradient-to-r from-[#044559]/90 to-[#044559] hover:from-[#044559] hover:to-[#044559]/90 text-white border border-[#044559]/30 hover:border-[#044559]/50 hover:shadow-xl backdrop-blur-sm rounded-2xl flex items-center justify-center transition-all duration-300 flex-shrink-0"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>


        {/* DESKTOP: Grid Tabs + Contenido - FIX COMPLETO */}
        <div className="hidden lg:grid lg:grid-cols-5 lg:gap-8 max-w-7xl mx-auto mb-12 px-4">
          {/* Tabs - CAMBIO AQUÍ SOLO */}
          <div className="lg:col-span-1">
            <div className="space-y-4 sticky top-24">
              {servicios.map((servicio, index) => {
                const isActive = currentSlide === index;
                return (
                <motion.button
                  key={servicio.titulo}
                  className={`group w-full p-3 sm:p-4 lg:p-5 xl:p-6 shadow-xl border border-white/50 rounded-3xl transition-all duration-700 
                            flex flex-col items-center justify-center text-center backdrop-blur-sm select-none
                            h-36 lg:h-40 xl:h-44 2xl:h-48
                            ${isActive 
                              ? 'bg-gradient-to-r from-[#044559] to-[#044559]/90 text-white shadow-2xl scale-[1.02] border-2 border-[#044559]/50 hover:shadow-3xl hover:shadow-[#044559]/25 hover:scale-[1.05]' 
                              : 'bg-white/80 text-gray-900 hover:bg-white hover:shadow-2xl hover:scale-[1.02] hover:border-[#044559]/30'
                            }`}
                  onClick={() => setCurrentSlide(index)}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <servicio.icon className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mb-3 lg:mb-4 drop-shadow-lg transition-all flex-shrink-0 
                                          ${isActive ? 'drop-shadow-2xl text-white' : 'text-[#044559] group-hover:scale-110'}`} />
                  <span className={`font-black text-xs sm:text-sm lg:text-sm xl:text-base 2xl:text-lg tracking-tight 
                                  leading-tight lg:leading-relaxed px-1 max-w-full overflow-wrap-anywhere select-none
                                  ${isActive ? 'drop-shadow-lg text-white' : 'text-gray-900 group-hover:text-[#044559]'}`}>
                    {servicio.titulo}
                  </span>
                </motion.button>
              )})}
            </div>
          </div>


          {/* Contenido activo */}
          <motion.div 
            className="hidden lg:block lg:col-span-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -30, scale: 0.95 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="shadow-2xl bg-white border border-white/50 backdrop-blur-sm rounded-3xl p-8 sm:p-12 px-4"
            >
              <div className="w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-r from-[#044559] to-[#044559]/90 rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-10 shadow-2xl border-2 border-[#044559]/30 group-hover:scale-110 transition-all duration-700">
                {renderIcon(currentSlide)}
              </div>
              
              <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-center text-gray-900 mb-8 sm:mb-12 bg-gradient-to-r from-[#044559] to-[#044559]/70 bg-clip-text leading-tight tracking-tight px-2">
                <span>{servicios[currentSlide].titulo}</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {servicios[currentSlide].items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="group flex items-start gap-3 sm:gap-4 p-4 sm:p-6 shadow-lg bg-white/80 hover:bg-white hover:shadow-xl hover:scale-[1.02] backdrop-blur-sm rounded-3xl 
                              border border-white/50 hover:border-[#044559]/30 transition-all duration-500"
                  >
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 mt-4 bg-gradient-to-r from-[#044559] to-[#044559]/70 rounded-full flex-shrink-0 
                                    group-hover:scale-125 group-hover:rotate-180 transition-all duration-500" />
                    <span className="text-gray-900 font-semibold leading-relaxed text-sm sm:text-base lg:text-lg tracking-tight line-clamp-3">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>


        {/* CTA - RESPONSIVE */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ scale: 1.05, y: -4 }}
          whileTap={{ scale: 0.98 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-6 sm:pt-8 px-4 w-full"
        >
          <Button 
            size="lg" 
            className="text-lg sm:text-xl h-14 sm:h-16 px-8 sm:px-12 shadow-2xl bg-gradient-to-r from-[#044559] to-[#044559]/90 
                      hover:from-[#044559]/90 hover:to-[#044559] text-white font-black border-2 
                      border-[#044559]/30 hover:border-[#044559]/50 hover:shadow-3xl 
                      hover:shadow-[#044559]/25 backdrop-blur-sm rounded-3xl group tracking-tight w-full sm:w-auto max-w-md mx-auto"
            onClick={() => {
              const element = document.querySelector('#contacto');
              element?.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }}
          >
            <span className="flex items-center gap-2 sm:gap-3 justify-center">
              Comienza Hoy
              <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

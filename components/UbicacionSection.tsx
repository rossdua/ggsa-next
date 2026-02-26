'use client';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useState, useEffect } from 'react';

interface UbicacionSectionProps {
  id?: string;
}

export default function UbicacionSection({ id }: UbicacionSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText("Centro Comercial Cristal, Edificio Principal, mezanina 2, Oficina N° 309, Alta Vista Sur (Frente a la Plaza del Hierro), Puerto Ordaz, Estado Bolívar-Venezuela");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const iframe = document.querySelector('iframe');
      if (iframe) {
        iframe.src = iframe.src;
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id={id} className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-start w-full">
          
          {/* Información de Ubicación - RESPONSIVE */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8 max-w-lg w-full px-2 sm:px-0"
          >
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-[#044559]/10 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-8 w-full sm:w-auto justify-center sm:justify-start">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#044559] flex-shrink-0" />
              <span className="font-semibold text-[#044559] tracking-wide text-sm sm:text-base">Nuestra Oficina</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight px-2">
              Oficina Principal
              <span className="block bg-gradient-to-r from-[#044559] to-[#044559]/70 bg-clip-text text-transparent">Puerto Ordaz</span>
            </h2>

            {/* Dirección completa */}
            <div className="group bg-gradient-to-br from-[#044559]/5 to-[#044559]/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-[#044559]/20 hover:border-[#044559]/40 shadow-xl hover:shadow-2xl transition-all duration-500 w-full">
              <h4 className="text-lg sm:text-xl font-black text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#044559] flex-shrink-0" />
                Dirección Completa
              </h4>
              
              <div className="relative">
                <p className="text-gray-700 leading-relaxed mb-4 sm:mb-6 text-base sm:text-lg break-words line-height-tight pr-2 sm:pr-32 pb-10 sm:pb-6 pt-1 sm:pt-0">
                  <strong>Centro Comercial Cristal</strong><br/>
                  Edificio Principal, Mezanina 2<br/>
                  Oficina N° 309<br/>
                  Alta Vista Sur<br/>
                  <em>(Frente a la Plaza del Hierro)</em><br/><br/>
                  <strong>Puerto Ordaz, Estado Bolívar</strong><br/>
                  <span className="text-sm sm:text-base text-gray-500">Venezuela</span>
                </p>
                
                <Button
                  onClick={handleCopyAddress}
                  size="sm"
                  className="absolute -top-1 -right-2 sm:top-0 sm:right-0 bg-gradient-to-r from-[#044559] to-[#044559]/90 text-white text-xs sm:text-sm px-3 sm:px-4 h-8 sm:h-9 rounded-xl font-semibold shadow-lg hover:shadow-xl w-16 sm:w-auto"
                >
                  {copied ? '¡Copiado!' : 'Copiar'}
                </Button>
              </div>

              {/* Contacto rápido */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-[#044559]/10">
                <a href="tel:+584123302158" className="group flex items-center gap-2 sm:gap-3 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-[#044559]/20 hover:border-[#044559]/40 hover:shadow-xl transition-all w-full">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#044559] group-hover:scale-110 transition-transform flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="text-xs sm:text-sm text-gray-500 font-medium">Llámanos</div>
                    <div className="font-bold text-[#044559] text-sm sm:text-base">+58 412 3302158</div>
                  </div>
                </a>
                
                <a href="mailto:ggsa@ggsa.com.ve" className="group flex items-center gap-2 sm:gap-3 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-[#044559]/20 hover:border-[#044559]/40 hover:shadow-xl transition-all w-full">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#044559] group-hover:scale-110 transition-transform flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="text-xs sm:text-sm text-gray-500 font-medium">Escríbenos</div>
                    <div className="font-bold text-[#044559] text-sm sm:text-base">ggsa@ggsa.com.ve</div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Mapa - RESPONSIVE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-br from-[#044559]/5 to-[#044559]/10 border-2 border-[#044559]/20 hover:border-[#044559]/40 transition-all duration-500 h-80 sm:h-[500px] lg:h-[600px] w-full"
          >
            {/* Header */}
            <div className="sticky top-0 z-20 p-4 sm:p-6 bg-white/95 backdrop-blur-sm border-b border-[#044559]/20">
              <h3 className="text-lg sm:text-xl font-black text-gray-900 flex items-center gap-2 sm:gap-3">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#044559] flex-shrink-0" />
                Ubicación Exacta
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1 px-1">Centro Comercial Cristal - Oficina 309</p>
            </div>

            {/* IFRAME */}
            <div className="w-full h-[calc(100%-60px)] sm:h-[calc(100%-80px)] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.08441908353!2d-62.73528452110463!3d8.294397678781769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8dcbfbd7b176935b%3A0x4cd3aef98f196c6a!2sCentro%20Comercial%20Cristal!5e0!3m2!1ses!2sve!4v1712027545163!5m2!1ses!2sve"
                width="100%"
                height="100%"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full absolute inset-0 rounded-b-3xl !border-0"
                title="GGSA - Centro Comercial Cristal"
                key="map-refresh"
              />
            </div>

            {/* Botón directo */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 z-30 bg-white/95 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-2xl shadow-2xl border border-white/50 hover:shadow-3xl hover:scale-105 transition-all w-[calc(100%-2rem)] sm:w-auto">
              <a 
                href="https://maps.app.goo.gl/X7LY329PQX62fYeP6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#044559] font-bold text-xs sm:text-sm hover:text-[#044559]/80 transition-colors justify-center"
              >
                🚗 Abrir en Google Maps
              </a>
            </div>
          </motion.div>
        </div>

        {/* CTA - RESPONSIVE */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16 sm:mt-20 sm:mt-24 px-4 w-full"
        >
          <Button 
            size="lg"
            className="text-lg sm:text-xl h-14 sm:h-16 px-8 sm:px-16 shadow-2xl bg-gradient-to-r from-[#044559] to-[#044559]/90 
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
            <span className="flex items-center gap-2 sm:gap-3">
              Contactar Ahora
              <Send className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

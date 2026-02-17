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

  // Refrescar iframe cuando se carga la sección
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
    <section id={id} className="py-32 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Información de Ubicación */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 max-w-lg"
          >
            <div className="inline-flex items-center gap-3 bg-[#044559]/10 px-6 py-3 rounded-full mb-8">
              <MapPin className="w-6 h-6 text-[#044559]" />
              <span className="font-semibold text-[#044559] tracking-wide">Nuestra Oficina</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
              Oficina Principal
              <span className="block bg-gradient-to-r from-[#044559] to-[#044559]/70 bg-clip-text text-transparent">Puerto Ordaz</span>
            </h2>

            {/* Dirección completa */}
            <div className="group bg-gradient-to-br from-[#044559]/5 to-[#044559]/10 backdrop-blur-sm rounded-3xl p-8 border border-[#044559]/20 hover:border-[#044559]/40 shadow-xl hover:shadow-2xl transition-all duration-500">
              <h4 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-[#044559]" />
                Dirección Completa
              </h4>
              
              <div className="relative">
                <p className="text-gray-700 leading-relaxed mb-6 text-lg break-words">
                  <strong>Centro Comercial Cristal</strong><br/>
                  Edificio Principal, Mezanina 2<br/>
                  Oficina N° 309<br/>
                  Alta Vista Sur<br/>
                  <em>(Frente a la Plaza del Hierro)</em><br/><br/>
                  <strong>Puerto Ordaz, Estado Bolívar</strong><br/>
                  <span className="text-sm text-gray-500">Venezuela</span>
                </p>
                
                <Button
                  onClick={handleCopyAddress}
                  size="sm"
                  className="absolute top-0 right-0 bg-gradient-to-r from-[#044559] to-[#044559]/90 text-white text-xs px-4 h-8 rounded-xl font-semibold shadow-lg hover:shadow-xl"
                >
                  {copied ? '¡Copiado!' : 'Copiar'}
                </Button>
              </div>

              {/* Contacto rápido */}
              <div className="grid md:grid-cols-2 gap-4 mt-8 pt-8 border-t border-[#044559]/10">
                <a href="tel:+584123302158" className="group flex items-center gap-3 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-[#044559]/20 hover:border-[#044559]/40 hover:shadow-xl transition-all">
                  <Phone className="w-5 h-5 text-[#044559] group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-xs text-gray-500 font-medium">Llámanos</div>
                    <div className="font-bold text-[#044559]">+58 412 3302158</div>
                  </div>
                </a>
                
                <a href="mailto:info@ggsa.com.ve" className="group flex items-center gap-3 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-[#044559]/20 hover:border-[#044559]/40 hover:shadow-xl transition-all">
                  <Mail className="w-5 h-5 text-[#044559] group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-xs text-gray-500 font-medium">Escríbenos</div>
                    <div className="font-bold text-[#044559]">info@ggsa.com.ve</div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Mapa GOOGLE MAPS con PIN ROJO OFICIAL */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-br from-[#044559]/5 to-[#044559]/10 border-2 border-[#044559]/20 hover:border-[#044559]/40 transition-all duration-500 h-[600px] w-full"
          >
            {/* Header */}
            <div className="sticky top-0 z-20 p-6 bg-white/95 backdrop-blur-sm border-b border-[#044559]/20">
              <h3 className="text-xl font-black text-gray-900 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-[#044559]" />
                Ubicación Exacta
              </h3>
              <p className="text-sm text-gray-600 mt-1">Centro Comercial Cristal - Oficina 309</p>
            </div>

            {/* IFRAME GOOGLE MAPS - PIN ROJO OFICIAL */}
            <div className="w-full h-[calc(100%-80px)] relative">
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
            <div className="absolute bottom-6 left-6 z-30 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-2xl border border-white/50 hover:shadow-3xl hover:scale-105 transition-all">
              <a 
                href="https://maps.app.goo.gl/X7LY329PQX62fYeP6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#044559] font-bold text-sm hover:text-[#044559]/80 transition-colors"
              >
                🚗 Abrir en Google Maps
              </a>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-24"
        >
          <Button 
            asChild
            size="lg"
            className="text-xl h-16 px-16 shadow-2xl bg-gradient-to-r from-[#044559] to-[#044559]/90 
                      hover:from-[#044559]/90 hover:to-[#044559] text-white font-black border-2 
                      border-[#044559]/30 hover:border-[#044559]/50 hover:shadow-3xl 
                      hover:shadow-[#044559]/25 backdrop-blur-sm rounded-3xl group tracking-tight"
          >
            <a href="#contacto" className="flex items-center gap-3">
              Contactar Ahora
              <Send className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

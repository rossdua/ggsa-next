'use client';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { Instagram, Mail, Phone } from "lucide-react";

interface NuestroEquipoSectionProps {
  id?: string;
}

export default function NuestroEquipoSection({ id }: NuestroEquipoSectionProps) {
  const equipo = [
    { 
      nombre: "Henry Gómez", 
      cargo: "Auditor", 
      avatar: "/face1.jpg", 
      color: "from-[#044559]",
      username: "hcgt71"
    },
    { 
      nombre: "Wladimir García", 
      cargo: "Impuestos, Legal, TAX", 
      avatar: "/face3.jpg", 
      color: "from-[#006760]",
      username: "wlagc"
    },
    { 
      nombre: "Jessica Chirinos", 
      cargo: "Auditora", 
      avatar: "/face2.jpg", 
      color: "from-emerald-500",
      username: "jessich08"
    },
    { 
      nombre: "Audines Milano", 
      cargo: "Consultor", 
      avatar: "/face4.jpg", 
      color: "from-purple-500",
      username: "audinesmilano"
    },
  ];

  // FUNCIÓN INTELIGENTE: Móvil → App | Desktop → Web
  const getInstagramUrl = (username: string) => {
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    return isMobile 
      ? `instagram://user?username=${username}`      // Móvil: Abre app Instagram
      : `https://www.instagram.com/${username}/`;    // Desktop: Abre web Instagram
  };

  return (
    <section id={id} className="w-full py-20 px-6 bg-[#006760]/95 backdrop-blur-sm">
      <div className="container mx-auto max-w-7xl text-white">
        
        {/* Título */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r 
                         from-white via-gray-100 to-white bg-clip-text text-transparent 
                         leading-tight tracking-tight drop-shadow-xl">
            Nuestro Equipo
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed font-light px-4 lg:px-0 mt-6">
            Profesionales con experiencia comprobada
          </p>
        </motion.div>

        {/* Grid Equipo CON INSTAGRAM */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20 max-w-5xl mx-auto">
          {equipo.map((miembro, index) => (
            <motion.div
              key={miembro.nombre}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl 
                         hover:shadow-[#006760]/25 bg-gradient-to-br from-white/20 to-white/10 
                         border border-white/30 hover:border-white/50 transition-all duration-700 backdrop-blur-sm h-[460px]"
            >
              {/* Imagen */}
              <div className="relative h-[280px] overflow-hidden">
                <Image
                  src={miembro.avatar}
                  alt={miembro.nombre}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 rounded-t-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Contenido CON INSTAGRAM INTELIGENTE */}
              <div className="p-6 relative z-10 h-[180px] flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-black text-white tracking-tight leading-tight group-hover:text-white/90 transition-all mb-2">
                    {miembro.nombre}
                  </h3>
                  <p className="text-base font-semibold text-white/90 leading-tight mb-4">
                    {miembro.cargo}
                  </p>
                </div>
                
                {/* INSTAGRAM: MÓVIL=APP | DESKTOP=WEB */}
                <motion.a
                  href={getInstagramUrl(miembro.username)}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group/insta inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm 
                                   border border-white/40 hover:border-white/60 rounded-2xl px-4 py-2 transition-all duration-300
                                   text-white/90 hover:text-white hover:shadow-lg hover:shadow-white/20"
                >
                  <Instagram className="w-5 h-5 group-hover/insta:scale-110 transition-transform" />
                  <span className="font-semibold text-sm tracking-tight">Sígueme</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA - Scroll sin URL */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ scale: 1.05, y: -4 }}
          whileTap={{ scale: 0.98 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
        >
          <Button 
            size="lg" 
            className="text-xl h-16 px-12 shadow-2xl bg-white text-[#006760] font-black border-2 
                          border-white hover:bg-white/90 hover:border-white hover:shadow-3xl 
                          hover:shadow-[#006760]/25 backdrop-blur-sm rounded-3xl group tracking-tight w-full sm:w-auto"
            onClick={() => {
              const element = document.querySelector('#contacto');
              element?.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }}
          >
            <span className="flex items-center gap-3 justify-center">
              Contáctanos Hoy
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

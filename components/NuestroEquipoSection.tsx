'use client';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { Instagram, Mail, Phone } from "lucide-react";

interface NuestroEquipoSectionProps {
  id?: string;
}

const equipo = [
  { 
    nombre: "Henry Gómez", 
    cargo: "Auditor", 
    avatar: "/face1.jpg", 
    color: "from-[#044559]",
    instagram: "https://instagram.com/hcgt71"
  },
  { 
    nombre: "Wladimir García", 
    cargo: "Impuestos, Legal, TAX", 
    avatar: "/face3.jpg", 
    color: "from-[#006760]",
    instagram: "https://instagram.com/wlagc"
  },
  { 
    nombre: "Jessica Chirinos", 
    cargo: "Auditora", 
    avatar: "/face2.jpg", 
    color: "from-emerald-500",
    instagram: "https://instagram.com/jessich08"
  },
  { 
    nombre: "Audines Milano", 
    cargo: "Consultor", 
    avatar: "/face4.jpg", 
    color: "from-purple-500",
    instagram: "https://instagram.com/audines.milano"
  },
];

export default function NuestroEquipoSection({ id }: NuestroEquipoSectionProps) {
  return (
    <section id={id} className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#006760]/95 backdrop-blur-sm">
      <div className="container mx-auto max-w-7xl px-4 text-white">
        
        {/* Título - RESPONSIVE */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r 
                         from-white via-gray-100 to-white bg-clip-text text-transparent 
                         leading-tight tracking-tight drop-shadow-xl px-2">
            Nuestro Equipo
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed font-light px-4 sm:px-0 mt-4 sm:mt-6">
            Profesionales con experiencia comprobada
          </p>
        </motion.div>

        {/* Grid Equipo - RESPONSIVE MEJORADO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full max-w-5xl mx-auto mb-12 sm:mb-16 lg:mb-20 px-2 sm:px-4">
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
                         border border-white/30 hover:border-white/50 transition-all duration-700 backdrop-blur-sm 
                         h-[380px] sm:h-[420px] lg:h-[460px] w-full" // ← ALTURA FIJA RESPONSIVA
            >
              {/* Imagen - ALTURA REDUCIDA */}
              <div className="relative h-[55%] min-h-[200px] overflow-hidden pt-1"> {/* ← 55% + pt-1 */}
                <Image
                  src={miembro.avatar}
                  alt={miembro.nombre}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 rounded-t-3xl"
                />
                <div className={`absolute top-4 sm:top-6 left-4 sm:left-6 w-5 h-5 sm:w-6 sm:h-6 ${miembro.color} to-transparent/20 rounded-2xl group-hover:scale-125 transition-all duration-500`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Contenido - ESPACIO GARANTIZADO */}
              <div className="p-4 sm:p-6 relative z-20 flex-1 flex flex-col justify-between min-h-[45%]"> {/* ← z-20 + min-h */}
                <div className="flex-1 flex flex-col justify-between px-1 sm:px-0 pb-3 sm:pb-4"> {/* ← pb para botón */}
                  <div className={`w-3 h-3 sm:w-4 sm:h-4 ${miembro.color} rounded-full mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300 mx-1 sm:mx-0`} />
                  <h3 className="text-base sm:text-lg lg:text-xl font-black text-white tracking-tight leading-tight group-hover:text-white/90 transition-all mb-1 sm:mb-2 px-1 sm:px-0">
                    {miembro.nombre}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base font-semibold text-white/90 leading-tight px-1 sm:px-0 line-clamp-2 flex-1">
                    {miembro.cargo}
                  </p>
                </div>
                
                {/* Instagram Button - SIEMPRE VISIBLE */}
                <motion.a
                  href={miembro.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group/insta inline-flex items-center gap-1 sm:gap-2 mt-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm 
                                   border border-white/40 hover:border-white/60 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 transition-all duration-300
                                   text-white/90 hover:text-white hover:shadow-lg hover:shadow-white/20 w-full sm:w-auto mx-1 sm:mx-0 z-30"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5 group-hover/insta:scale-110 transition-transform flex-shrink-0" />
                  <span className="font-semibold text-xs sm:text-sm tracking-tight">Sígueme</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA - RESPONSIVE */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ scale: 1.05, y: -4 }}
          whileTap={{ scale: 0.98 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-6 sm:pt-8 px-4 w-full"
        >
          <Button 
            size="lg" 
            className="text-lg sm:text-xl h-14 sm:h-16 px-8 sm:px-12 shadow-2xl bg-white text-[#006760] font-black border-2 
                             border-white hover:bg-white/90 hover:border-white hover:shadow-3xl 
                             hover:shadow-[#006760]/25 backdrop-blur-sm rounded-3xl group tracking-tight w-full sm:w-auto max-w-md mx-auto"
            onClick={() => {
              const element = document.querySelector('#contacto');
              element?.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }}
          >
            <span className="flex items-center gap-2 sm:gap-3 justify-center">
              Contáctanos Hoy
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

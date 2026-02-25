'use client';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import Image from 'next/image';

interface AliadosSectionProps {
  id?: string;
}

export default function AliadosSection({ id }: AliadosSectionProps) {
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
            Nuestro Aliado Internacional
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed font-light px-4 sm:px-0 mt-4 sm:mt-6">
            Red global de profesionales confiables
          </p>
        </motion.div>

        {/* Card Principal IPG - RESPONSIVE */}
        <div className="w-full max-w-6xl mx-auto mb-12 sm:mb-16 lg:mb-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group shadow-2xl bg-gradient-to-r from-[#006760] to-[#006760]/90 
                        rounded-3xl border-2 border-white/30 hover:shadow-3xl hover:shadow-[#006760]/25 
                        p-8 sm:p-12 lg:p-16 backdrop-blur-sm transition-all duration-700 overflow-hidden relative z-10 w-full"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-12 lg:gap-20 relative z-20 w-full">
              
              {/* Texto - RESPONSIVE */}
              <div className="space-y-4 sm:space-y-6 lg:pr-8 w-full order-2 lg:order-1">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0 border-2 border-white/50 mx-auto sm:mx-0">
                    <span className="font-black text-[#006760] text-base sm:text-lg">IPG</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight text-center sm:text-left">
                    International Practice Group
                  </h3>
                </div>

                <div className="space-y-4 w-full">
                  <p className="text-base sm:text-lg lg:text-xl text-white/95 leading-relaxed font-light px-2 sm:px-0">
                    Asociación de abogados, contadores y asesores tributarios independientes que cooperan en transacciones internacionales con altos estándares de calidad.
                  </p>
                  
                  <div className="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-4 sm:p-6 rounded-3xl border border-white/40 hover:border-white/60 transition-all w-full">
                    <p className="text-sm sm:text-base lg:text-lg text-white/95 leading-relaxed font-light">
                      IPG provee una plataforma para establecer relaciones de negocio y mantener altos niveles de confianza entre miembros, clientes y la comunidad.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4 w-full">
                    <a 
                      href="https://www.ipg-online.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 bg-white text-[#006760] font-black text-base sm:text-lg 
                                       px-6 sm:px-8 py-4 sm:py-5 rounded-3xl shadow-xl hover:bg-white/90 hover:shadow-3xl 
                                       hover:shadow-[#006760]/25 hover:-translate-y-1 transition-all duration-500 
                                       border-2 border-white hover:border-white flex-shrink-0 w-full sm:w-auto"
                    >
                      Visitar IPG
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    
                    <Button 
                      size="lg"
                      className="text-lg sm:text-xl h-14 sm:h-16 px-8 sm:px-12 shadow-2xl bg-white text-[#006760] font-black border-2 
                                       border-white hover:bg-white/90 hover:border-white hover:shadow-3xl 
                                       hover:shadow-[#006760]/25 backdrop-blur-sm rounded-3xl group tracking-tight flex-shrink-0 w-full sm:w-auto max-w-md mx-auto sm:mx-0"
                      onClick={() => {
                        const element = document.querySelector('#contacto');
                        element?.scrollIntoView({ 
                          behavior: 'smooth',
                          block: 'start'
                        });
                      }}
                    >
                      <span className="flex items-center gap-2 sm:gap-3 justify-center">
                        Consultar Ahora
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </Button>
                  </div>
                </div>
              </div>

              {/* IMAGEN CON FONDO BLANCO - RESPONSIVE */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 hover:border-white/80 transition-all duration-700 bg-white hover:shadow-3xl hover:shadow-white/20 group/image w-full h-64 sm:h-80 lg:h-96 order-1 lg:order-2">
                <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-white/90 blur-sm"></div>
                <Image
                  src="/ipg-logo.png"
                  alt="International Practice Group"
                  fill
                  className="object-contain object-center p-6 sm:p-8 lg:p-16 rounded-3xl relative z-10 drop-shadow-2xl"
                  priority={false}
                />
                {/* Logo fallback */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl border-4 border-white/70 group-hover/image:scale-110 transition-all duration-500">
                    <span className="font-black text-xl sm:text-2xl lg:text-3xl text-[#006760] drop-shadow-lg">IPG</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

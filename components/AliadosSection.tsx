'use client';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';

interface AliadosSectionProps {
  id?: string;
}

export default function AliadosSection({ id }: AliadosSectionProps) {
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
            Nuestro Aliado Internacional
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed font-light px-4 lg:px-0 mt-6">
            Red global de profesionales confiables
          </p>
        </motion.div>

        {/* Card Principal IPG */}
        <div className="max-w-6xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group shadow-2xl bg-gradient-to-r from-[#006760] to-[#006760]/90 
                       rounded-3xl border-2 border-white/30 hover:shadow-3xl hover:shadow-[#006760]/25 
                       p-12 lg:p-16 backdrop-blur-sm transition-all duration-700 overflow-hidden relative z-10"
          >
            {/* Logo esquina superior derecha */}
            <div className="absolute top-8 right-8 w-20 h-20 bg-white/30 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl z-20">
              <span className="font-black text-[#006760] text-xl">IPG</span>
            </div>

            <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-20 relative z-20">
              
              {/* Texto */}
              <div className="space-y-6 lg:pr-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0">
                    <span className="font-black text-[#006760] text-lg">IPG</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-black text-white tracking-tight">
                    International Practice Group
                  </h3>
                </div>

                <div className="space-y-4">
                  <p className="text-lg lg:text-xl text-white/95 leading-relaxed font-light">
                    Asociación de abogados, contadores y asesores tributarios independientes que cooperan en transacciones internacionales con altos estándares de calidad.
                  </p>
                  
                  <div className="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-6 rounded-3xl border border-white/40 hover:border-white/60 transition-all">
                    <p className="text-base lg:text-lg text-white/95 leading-relaxed font-light">
                      IPG provee una plataforma para establecer relaciones de negocio y mantener altos niveles de confianza entre miembros, clientes y la comunidad.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <a 
                      href="https://www.ipg-online.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 bg-white text-[#006760] font-black text-lg 
                                 px-8 py-5 rounded-3xl shadow-xl hover:bg-white/90 hover:shadow-3xl 
                                 hover:shadow-[#006760]/25 hover:-translate-y-1 transition-all duration-500 
                                 border-2 border-white hover:border-white flex-shrink-0"
                    >
                      Visitar IPG
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    
                    <Button 
                      asChild
                      size="lg"
                      className="text-xl h-16 px-12 shadow-2xl bg-white text-[#006760] font-black border-2 
                                 border-white hover:bg-white/90 hover:border-white hover:shadow-3xl 
                                 hover:shadow-[#006760]/25 backdrop-blur-sm rounded-3xl group tracking-tight flex-shrink-0"
                    >
                      <Link href="#contacto" className="flex items-center gap-3 justify-center">
                        Consultar Ahora
                        <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* IMAGEN CON FONDO BLANCO */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/30 h-80 lg:h-96 hover:shadow-3xl transition-all duration-700 bg-white">
                <Image
                  src="/ipg-logo.png"  // ← TU IMAGEN AQUÍ
                  alt="International Practice Group"
                  fill
                  className="object-contain object-center p-8 rounded-3xl"
                  priority={false}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

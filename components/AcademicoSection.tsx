'use client';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { GraduationCap, Users, Monitor, Users2, BarChart3, Target } from "lucide-react";

interface AcademicoSectionProps {
  id?: string;
}

export default function AcademicoSection({ id }: AcademicoSectionProps) {
  return (
    <section id={id} className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto max-w-7xl px-4">
        
        {/* Header diferente */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center justify-center gap-3 bg-[#044559]/10 px-6 py-3 rounded-full mb-8 mx-auto max-w-max">
            <GraduationCap className="w-6 h-6 text-[#044559] flex-shrink-0" />
            <span className="font-semibold text-[#044559] tracking-wide text-base">GGSA Academy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight px-4">
            Formación Académica 
            <span className="block bg-gradient-to-r from-[#044559] to-[#044559]/70 bg-clip-text text-transparent">a la Medida</span>
          </h2>
        </motion.div>

        {/* Cards horizontales - MEJORADO RESPONSIVE */}
        <div className="w-full max-w-6xl mx-auto mb-16 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            
            {/* Card 1: Metodología */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group bg-gradient-to-br from-[#044559]/5 to-[#044559]/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-[#044559]/20 hover:border-[#044559]/40 shadow-xl hover:shadow-2xl transition-all duration-500 w-full"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[#044559] to-[#044559]/90 rounded-2xl flex items-center justify-center mb-6 shadow-2xl group-hover:scale-110 transition-all duration-500 mx-auto">
                <Users className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-black text-gray-900 text-center mb-4 tracking-tight leading-tight">Aprendizaje Experiencial</h3>
              <p className="text-gray-700 text-center leading-relaxed text-sm sm:text-base px-2">
                Metodologías dinámicas de grupo y aprendizaje metafórico para máxima retención.
              </p>
            </motion.div>

            {/* Card 2: Plataformas */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group bg-gradient-to-br from-[#044559]/5 to-[#044559]/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-[#044559]/20 hover:border-[#044559]/40 shadow-xl hover:shadow-2xl transition-all duration-500 w-full"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[#044559] to-[#044559]/90 rounded-2xl flex items-center justify-center mb-6 shadow-2xl group-hover:scale-110 transition-all duration-500 mx-auto">
                <Monitor className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-black text-gray-900 text-center mb-4 tracking-tight leading-tight">Teams & Zoom</h3>
              <p className="text-gray-700 text-center leading-relaxed text-sm sm:text-base px-2">
                Plataformas tecnológicas que optimizan tiempo, recursos y dispersión geográfica.
              </p>
            </motion.div>

            {/* Card 3: Expertos */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group bg-gradient-to-br from-[#044559]/5 to-[#044559]/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-[#044559]/20 hover:border-[#044559]/40 shadow-xl hover:shadow-2xl transition-all duration-500 w-full"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[#044559] to-[#044559]/90 rounded-2xl flex items-center justify-center mb-6 shadow-2xl group-hover:scale-110 transition-all duration-500 mx-auto">
                <Users2 className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-black text-gray-900 text-center mb-4 tracking-tight leading-tight">Consultores Especializados</h3>
              <p className="text-gray-700 text-center leading-relaxed text-sm sm:text-base px-2">
                Personalización total para lograr objetivos específicos de cada capacitación.
              </p>
            </motion.div>
          </div>
        </div>

        {/* SECCIÓN PRINCIPAL - RESPONSIVE MEJORADO */}
        <div className="w-full max-w-4xl mx-auto mb-20 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.01 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-white via-white/80 to-white/50 backdrop-blur-xl rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl border border-white/50 hover:shadow-3xl hover:shadow-[#044559]/20 transition-all duration-700 w-full"
          >
            <div className="text-center mb-10 sm:mb-12">
              {/* LOGO GGSA CENTRADO */}
              <div className="inline-flex items-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-[#044559] to-[#044559]/90 rounded-3xl shadow-2xl mb-6 mx-auto border-4 border-white/30">
                <span className="font-black text-xl sm:text-2xl text-white drop-shadow-lg w-full h-full flex items-center justify-center px-1">
                  GGSA
                </span>
              </div>
              
              <p className="text-lg sm:text-xl md:text-2xl text-gray-900 font-light leading-relaxed max-w-3xl mx-auto px-4">
                A través de <span className="font-black text-[#044559]">García Gómez Services & Asociados</span> desarrollamos 
                <span className="font-black text-[#044559]"> habilidades blandas</span> con enfoque 100% práctico y resultados medibles.
              </p>
            </div>

            {/* STATS - RESPONSIVE MEJORADO */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 pt-10 sm:pt-12 w-full">
              <div className="text-center group">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-[#044559] to-[#044559]/70 bg-clip-text text-transparent mb-3 sm:mb-2 mx-auto">100%</div>
                <div className="text-gray-700 font-semibold text-base sm:text-lg">Personalizado</div>
              </div>
              <div className="text-center group">
                <BarChart3 className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 mx-auto mb-3 sm:mb-2 text-[#044559] drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
                <div className="text-gray-700 font-semibold text-base sm:text-lg">Resultados Medibles</div>
              </div>
              <div className="text-center group">
                <Target className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 mx-auto mb-3 sm:mb-2 text-[#044559] drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
                <div className="text-gray-700 font-semibold text-base sm:text-lg">Objetivos Alcanzados</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA diferente - RESPONSIVE MEJORADO */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center px-4"
        >
          <Button 
            size="lg"
            className="text-lg sm:text-xl h-14 sm:h-16 px-12 sm:px-16 shadow-2xl bg-gradient-to-r from-[#044559] to-[#044559]/90 
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
              Comenzar Capacitación
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

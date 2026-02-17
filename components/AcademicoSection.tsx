'use client';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';
import { GraduationCap, Users, Monitor, Users2 } from "lucide-react";

export default function AcademicoSection() {
  return (
    <section id="academico" className="w-full py-20 px-6 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header diferente */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-3 bg-[#044559]/10 px-6 py-3 rounded-full mb-8">
            <GraduationCap className="w-6 h-6 text-[#044559]" />
            <span className="font-semibold text-[#044559] tracking-wide">GGSA Academy</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Formación Académica 
            <span className="block bg-gradient-to-r from-[#044559] to-[#044559]/70 bg-clip-text text-transparent">a la Medida</span>
          </h2>
        </motion.div>

        {/* Cards horizontales - DIFERENTE A IPG */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1: Metodología */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group bg-gradient-to-br from-[#044559]/5 to-[#044559]/10 backdrop-blur-sm rounded-3xl p-8 border border-[#044559]/20 hover:border-[#044559]/40 shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#044559] to-[#044559]/90 rounded-2xl flex items-center justify-center mb-6 shadow-2xl group-hover:scale-110 transition-all duration-500 mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-black text-gray-900 text-center mb-4 tracking-tight">Aprendizaje Experiencial</h3>
              <p className="text-gray-700 text-center leading-relaxed">
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
              className="group bg-gradient-to-br from-[#044559]/5 to-[#044559]/10 backdrop-blur-sm rounded-3xl p-8 border border-[#044559]/20 hover:border-[#044559]/40 shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#044559] to-[#044559]/90 rounded-2xl flex items-center justify-center mb-6 shadow-2xl group-hover:scale-110 transition-all duration-500 mx-auto">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-black text-gray-900 text-center mb-4 tracking-tight">Teams & Zoom</h3>
              <p className="text-gray-700 text-center leading-relaxed">
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
              className="group bg-gradient-to-br from-[#044559]/5 to-[#044559]/10 backdrop-blur-sm rounded-3xl p-8 border border-[#044559]/20 hover:border-[#044559]/40 shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#044559] to-[#044559]/90 rounded-2xl flex items-center justify-center mb-6 shadow-2xl group-hover:scale-110 transition-all duration-500 mx-auto">
                <Users2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-black text-gray-900 text-center mb-4 tracking-tight">Consultores Especializados</h3>
              <p className="text-gray-700 text-center leading-relaxed">
                Personalización total para lograr objetivos específicos de cada capacitación.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Sección principal diferente */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.01 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-white via-white/80 to-white/50 backdrop-blur-xl rounded-3xl p-12 lg:p-16 shadow-2xl border border-white/50 hover:shadow-3xl hover:shadow-[#044559]/20 transition-all duration-700"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center w-24 h-24 bg-gradient-to-r from-[#044559] to-[#044559]/90 rounded-3xl shadow-2xl mb-6 mx-auto border-4 border-white/30">
                <span className="font-black text-2xl text-white drop-shadow-lg">GGSA</span>
              </div>
              <p className="text-xl md:text-2xl text-gray-900 font-light leading-relaxed max-w-3xl mx-auto">
                A través de <span className="font-black text-[#044559]">García Gómez Services & Asociados</span> desarrollamos 
                <span className="font-black text-[#044559]">habilidades blandas</span> con enfoque 100% práctico y resultados medibles.
              </p>
            </div>

            {/* Stats horizontales */}
            <div className="grid md:grid-cols-3 gap-8 pt-12">
              <div className="text-center group">
                <div className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-[#044559] to-[#044559]/70 bg-clip-text text-transparent mb-2">100%</div>
                <div className="text-gray-700 font-semibold text-lg">Personalizado</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-[#044559] to-[#044559]/70 bg-clip-text text-transparent mb-2">📊</div>
                <div className="text-gray-700 font-semibold text-lg">Resultados Medibles</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-[#044559] to-[#044559]/70 bg-clip-text text-transparent mb-2">🎯</div>
                <div className="text-gray-700 font-semibold text-lg">Objetivos Alcanzados</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA diferente */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button 
            asChild
            size="lg"
            className="text-xl h-16 px-16 shadow-2xl bg-gradient-to-r from-[#044559] to-[#044559]/90 
                       hover:from-[#044559]/90 hover:to-[#044559] text-white font-black border-2 
                       border-[#044559]/30 hover:border-[#044559]/50 hover:shadow-3xl 
                       hover:shadow-[#044559]/25 backdrop-blur-sm rounded-3xl group tracking-tight"
          >
            <Link href="#contacto" className="flex items-center gap-3">
              Comenzar Capacitación
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

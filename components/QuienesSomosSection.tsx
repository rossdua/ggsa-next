'use client';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

interface QuienesSomosSectionProps {
  id?: string;
}

export default function QuienesSomosSection({ id }: QuienesSomosSectionProps) {
  return (
    <section id={id} className="w-full py-20 px-6 bg-[#006760]/95 backdrop-blur-sm">
      <div className="container mx-auto max-w-7xl text-white">
        
        {/* Título principal */}
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
            ¿Quiénes Somos?
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Columna Misión + Visión */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Misión */}
            <div className="group shadow-2xl bg-gradient-to-r from-[#006760] to-[#006760]/90 
                            rounded-3xl p-8 lg:p-10 border-2 border-white/30 hover:shadow-3xl 
                            hover:shadow-[#006760]/25 hover:scale-[1.02] transition-all duration-700">
              <h3 className="text-2xl lg:text-3xl font-black text-white mb-6 flex items-center gap-3 tracking-tight">
                <div className="w-3 h-3 bg-white rounded-full group-hover:scale-125 transition-all"></div>
                Misión
              </h3>
              <p className="text-lg lg:text-xl text-white/95 leading-relaxed font-light px-4 lg:px-0">
                Proveer servicios en materia contable, tributaria y de entrenamiento con altos estándares de calidad, 
                con los cuales podamos contribuir a mejoras tangibles en nuestros clientes y relacionados, así como con nuestra comunidad profesional.
              </p>
            </div>

            {/* Visión */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group shadow-2xl bg-gradient-to-r from-[#006760]/90 to-[#006760] 
                         rounded-3xl p-8 lg:p-10 border-2 border-white/30 hover:shadow-3xl 
                         hover:shadow-[#006760]/25 hover:scale-[1.02] transition-all duration-700"
            >
              <h3 className="text-2xl lg:text-3xl font-black text-white mb-6 flex items-center gap-3 tracking-tight">
                <div className="w-3 h-3 bg-white rounded-full group-hover:scale-125 transition-all"></div>
                Visión
              </h3>
              <p className="text-lg lg:text-xl text-white/95 leading-relaxed font-light px-4 lg:px-0">
                Ser reconocidos como una Firma que provee soluciones confiables, en servicios contables, tributarios y de entrenamiento.
              </p>
            </motion.div>
          </motion.div>

          {/* Columna Objetivos */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-8"
          >
            <div className="group shadow-2xl bg-white/20 hover:bg-white/30 rounded-3xl p-8 lg:p-10 
                            border-2 border-white/40 hover:border-white/60 hover:shadow-3xl 
                            hover:shadow-[#006760]/25 transition-all duration-700 overflow-hidden backdrop-blur-sm">
              <h3 className="text-2xl lg:text-3xl font-black text-white mb-8 flex items-center gap-3 pb-6 
                             border-b border-white/30 tracking-tight">
                <div className="w-3 h-3 bg-white rounded-full group-hover:scale-125 transition-all"></div>
                Objetivos
              </h3>
              
              <div className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="group/item flex items-start gap-4 p-6 shadow-lg bg-white/10 hover:bg-white/20 
                                  hover:shadow-xl hover:scale-[1.02] rounded-3xl 
                                  border border-white/30 hover:border-white/50 transition-all duration-500 backdrop-blur-sm"
                >
                  <div className="w-8 h-8 flex-shrink-0 bg-gradient-to-r from-white to-white/70 
                                  rounded-xl flex items-center justify-center mt-1 shadow-lg">
                    <span className="text-sm font-black text-[#006760]">01</span>
                  </div>
                  <div>
                    <div className="font-black text-white text-lg mb-1 tracking-tight">Liderazgo en el Mercado</div>
                    <p className="text-white/90 leading-relaxed text-base font-light">Ser reconocidos como la firma líder en servicios contables, tributarios, de asesoría, consultoría y entrenamiento.</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="group/item flex items-start gap-4 p-6 shadow-lg bg-white/10 hover:bg-white/20 
                                  hover:shadow-xl hover:scale-[1.02] rounded-3xl 
                                  border border-white/30 hover:border-white/50 transition-all duration-500 backdrop-blur-sm"
                >
                  <div className="w-8 h-8 flex-shrink-0 bg-gradient-to-r from-white to-white/70 
                                  rounded-xl flex items-center justify-center mt-1 shadow-lg">
                    <span className="text-sm font-black text-[#006760]">02</span>
                  </div>
                  <div>
                    <div className="font-black text-white text-lg mb-1 tracking-tight">Desarrollo del Talento</div>
                    <p className="text-white/90 leading-relaxed text-base font-light">Identificar y fortalecer las competencias del personal dentro de la firma en todas las áreas, potenciando los valores del profesionalismo, calidad y servicio.</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="group/item flex items-start gap-4 p-6 shadow-lg bg-white/10 hover:bg-white/20 
                                  hover:shadow-xl hover:scale-[1.02] rounded-3xl 
                                  border border-white/30 hover:border-white/50 transition-all duration-500 backdrop-blur-sm"
                >
                  <div className="w-8 h-8 flex-shrink-0 bg-gradient-to-r from-white to-white/70 
                                  rounded-xl flex items-center justify-center mt-1 shadow-lg">
                    <span className="text-sm font-black text-[#006760]">03</span>
                  </div>
                  <div>
                    <div className="font-black text-white text-lg mb-1 tracking-tight">Innovación y Crecimiento</div>
                    <p className="text-white/90 leading-relaxed text-base font-light">Ofrecer servicios de calidad a los clientes y lograr la modernización de los sistemas y redes de la empresa, creciendo en liderazgo, calidad y mercado nacional.</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats + CTA en una sola línea */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ scale: 1.05, y: -4 }}
          whileTap={{ scale: 0.98 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-8 lg:gap-12 mt-20 pt-12 border-t border-white/20"
        >
          <div className="flex items-center gap-12 lg:gap-16 flex-wrap justify-center lg:justify-start flex-1">
            <div className="text-center min-w-[120px]">
              <div className="text-3xl lg:text-4xl font-black text-white mb-1 tracking-tight">+500</div>
              <div className="text-lg font-semibold text-white/90">Clientes Satisfechos</div>
            </div>
            <div className="text-center min-w-[120px]">
              <div className="text-3xl lg:text-4xl font-black text-white mb-1 tracking-tight">10+</div>
              <div className="text-lg font-semibold text-white/90">Años de Experiencia</div>
            </div>
            <div className="text-center min-w-[120px]">
              <div className="text-3xl lg:text-4xl font-black text-white mb-1 tracking-tight">95%</div>
              <div className="text-lg font-semibold text-white/90">Tasa de Éxito</div>
            </div>
          </div>

          {/* CTA - Scroll sin URL */}
          <Button 
            size="lg" 
            className="text-xl h-16 px-12 shadow-2xl bg-white text-[#006760] font-black border-2 
                          border-white hover:bg-white/90 hover:border-white hover:shadow-3xl 
                          hover:shadow-[#006760]/25 backdrop-blur-sm rounded-3xl group tracking-tight flex-shrink-0"
            onClick={() => {
              const element = document.querySelector('#nuestro-equipo');
              element?.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }}
          >
            <span className="flex items-center gap-3 justify-center">
              Conoce Nuestro Equipo
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

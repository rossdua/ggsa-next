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
        
        {/* Título principal - ORIGINAL */}
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

        {/* 🆕 DESCRIPCIÓN LANDING PAGE PREMIUM - TEXTO JUSTIFICADO */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full mb-20"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* TARJETA PRINCIPAL PREMIUM CON ESTILO LANDING PAGE */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-2 lg:col-span-3 group hover:scale-[1.02] transition-all duration-500 relative overflow-hidden"
            >
              <div className="relative bg-gradient-to-br from-white/5 via-white/2 to-transparent 
                             backdrop-blur-2xl rounded-3xl p-12 lg:p-16 border border-white/20 
                             shadow-2xl hover:shadow-3xl hover:shadow-[#006760]/30 hover:border-white/40 
                             transition-all duration-1000 before:absolute before:inset-0 
                             before:bg-gradient-to-r before:from-[#00d4aa]/10 before:to-transparent 
                             before:opacity-0 before:group-hover:opacity-100 before:transition-all 
                             before:duration-1000 after:absolute after:inset-[-10px] after:bg-[radial-gradient(circle_at_20%_80%,#00d4aa15_0%,transparent_50%)] 
                             after:opacity-0 after:group-hover:opacity-100 after:transition-all after:duration-1000">
                
                {/* ✨ HEADER PREMIUM */}
                <div className="flex items-center gap-6 mb-12 pb-8 border-b border-white/20 relative">
                  <div className="relative group/logo">
                    <div className="w-24 h-24 lg:w-24 lg:h-24 bg-gradient-to-br from-[#00d4aa] to-[#00b894] rounded-3xl flex items-center justify-center shadow-2xl ring-4 ring-white/20 group-hover/logo:ring-white/40 transition-all duration-700">
                      <span className="text-3xl lg:text-4xl font-black text-[#006760] drop-shadow-lg">GGSA</span>
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-[#00d4aa]/20 to-[#00b894]/20 rounded-3xl blur-xl opacity-0 group-hover/logo:opacity-100 transition-opacity duration-700 animate-pulse"></div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-3xl lg:text-4xl xl:text-5xl font-black bg-gradient-to-r from-white via-white/90 to-white/50 bg-clip-text text-transparent tracking-tight leading-tight drop-shadow-xl">
                      García Gómez Services & Asociados
                    </h3>
                    <p className="text-xl text-white/80 font-semibold tracking-widest uppercase mt-2 bg-gradient-to-r from-white/30 to-transparent bg-clip-text">
                      Miembros de IPG International
                    </p>
                  </div>
                </div>

                {/* TEXTO JUSTIFICADO - 3 PÁRRAFOS COMPLETOS */}
                <div className="space-y-8 text-justify">
                  
                  {/* Párrafo 1 */}
                  <div className="group/p group-hover/p:-translate-x-1 transition-transform duration-500">
                    <p className="text-xl lg:text-2xl text-white/95 leading-[1.7] font-light tracking-wide hyphens-auto">
                      Somos <span className="font-black text-white bg-gradient-to-r from-white/60 to-transparent bg-clip-text text-transparent drop-shadow-sm">
                        García Gómez Services & Asociados, S.C.
                      </span> (GGS & Asociados), una firma miembro de{' '}
                      <span className="font-semibold text-white bg-gradient-to-r from-white/40 to-transparent bg-clip-text text-transparent">
                        International Practice Group-IPG
                      </span> conformada por un equipo de profesionales con amplia trayectoria, conocimientos y experiencia, con presencia en el Sur Oriente de Venezuela y alcance nacional. Tenemos{' '}
                      <span className="font-black text-3xl text-white">+</span>
                      <span className="font-black text-white">13 años</span> ininterrumpidos apoyando el crecimiento de empresas de distintos sectores.
                    </p>
                  </div>

                  {/* Párrafo 2 */}
                  <div className="group/p pt-8 pb-8 border-t border-white/10 group-hover/p:-translate-x-1 transition-transform duration-500">
                    <p className="text-xl lg:text-2xl text-white/92 leading-[1.7] font-light tracking-wide hyphens-auto">
                      Nuestra propuesta de valor consiste en el compromiso de agregar valor y apuntalar el éxito de cada uno de nuestros clientes mediante la construcción de una relación de confianza mutuamente beneficiosa. Nos especializamos en la búsqueda y desarrollo de soluciones a la medida, implementadas de forma eficiente y rápida para obtener resultados óptimos.
                    </p>
                  </div>

                  {/* Párrafo 3 - ITÁLICO */}
                  <div className="group/p pt-8 pb-8 border-t border-white/10 group-hover/p:-translate-x-1 transition-transform duration-500">
                    <p className="text-lg lg:text-xl text-white/88 leading-[1.8] font-light italic tracking-wide hyphens-auto">
                      Nuestra intervención abarca áreas críticas como el mejoramiento operativo financiero, el desarrollo de nuevos negocios e innovación, la adecuación de procesos y la gestión integral del talento humano, siempre bajo un modelo de trabajo que garantiza el acompañamiento constante y la medición de resultados.
                    </p>
                  </div>

                </div>
              </div>
            </motion.div>

            {/* 3 tarjetas pequeñas COMPACTAS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group hover:scale-[1.02] transition-all duration-500"
            >
              <div className="bg-gradient-to-br from-[#006760]/95 to-[#006760]/80 backdrop-blur-xl rounded-3xl p-8 h-full 
                             border-2 border-white/20 hover:border-white/40 hover:shadow-3xl hover:shadow-[#006760]/40 
                             transition-all duration-700">
                <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3 tracking-tight">
                  <div className="w-4 h-4 bg-white rounded-full group-hover:scale-125 transition-all"></div>
                  Misión
                </h3>
                <p className="text-lg text-white/95 leading-relaxed font-light">
                  Proveer servicios contables, tributarios y de entrenamiento con altos estándares...
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group hover:scale-[1.02] transition-all duration-500"
            >
              <div className="bg-gradient-to-br from-[#006760]/80 to-[#006760]/95 backdrop-blur-xl rounded-3xl p-8 h-full 
                             border-2 border-white/20 hover:border-white/40 hover:shadow-3xl hover:shadow-[#006760]/40 
                             transition-all duration-700">
                <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3 tracking-tight">
                  <div className="w-4 h-4 bg-white rounded-full group-hover:scale-125 transition-all"></div>
                  Visión
                </h3>
                <p className="text-lg text-white/95 leading-relaxed font-light">
                  Firma referente en soluciones confiables contables...
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group hover:scale-[1.02] transition-all duration-500"
            >
              <div className="bg-white/20 backdrop-blur-xl hover:bg-white/30 rounded-3xl p-8 h-full 
                             border-2 border-white/30 hover:border-white/50 hover:shadow-3xl hover:shadow-[#006760]/40 
                             transition-all duration-700">
                <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3 tracking-tight">
                  <div className="w-4 h-4 bg-white rounded-full group-hover:scale-125 transition-all"></div>
                  +13 Años
                </h3>
                <p className="text-lg text-white/95 leading-relaxed font-light text-center">
                  <span className="text-3xl font-black block">Apoyo Empresarial</span>
                  ininterrumpido
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* OBJETIVOS COMPLETOS */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-8 mb-20"
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

        {/* Stats + CTA - ORIGINAL */}
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

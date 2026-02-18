'use client';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="w-full py-20 px-6 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center space-y-8 lg:space-y-12">
         
          {/* Logo CENTRO ARRIBA - MÁS PEQUEÑO */}
          <motion.div 
            initial={{ opacity: 0, y: -30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center pt-4"
          >
            <Image
              src="/ggsaf.png"
              alt="GGSaf Logo"
              width={320}
              height={320}
              className="w-100 h-30 lg:w-100 lg:h-30 object-contain hover:scale-110 transition-all duration-700"
              priority
            />
            {/* Anillo sutil */}
            <div className="absolute -inset-2 lg:-inset-4 bg-gradient-to-r from-[#044559]/5 to-transparent 
                           rounded-2xl blur-xl opacity-40 animate-pulse" />
          </motion.div>

          {/* Contenido DEBAJO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-3xl space-y-6 lg:space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r 
                        from-[#044559] via-gray-900 to-[#044559] bg-clip-text text-transparent 
                        leading-tight tracking-tight drop-shadow-xl"
            >
              Mejora tus negocios con nosotros
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl lg:text-3xl text-gray-900 leading-relaxed font-light px-4 lg:px-0"
            >
              Prestando servicios de consultoría empresarial y gerencial en materia contable, 
              <br className="hidden md:block" />
              <span className="font-semibold bg-gradient-to-r from-[#044559] to-[#044559]/70 
                             bg-clip-text text-transparent"> financiera y de entrenamiento.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center pt-4"
            >
              <Button 
                size="lg" 
                className="text-xl h-16 px-12 shadow-2xl bg-gradient-to-r from-[#044559] to-[#044559]/90 
                          hover:from-[#044559]/90 hover:to-[#044559] text-white font-bold border-2 
                          border-[#044559]/30 hover:border-[#044559]/50 hover:shadow-3xl 
                          hover:shadow-[#044559]/25 backdrop-blur-sm rounded-3xl group w-full sm:w-auto"
                onClick={() => {
                  const element = document.querySelector('#contacto');
                  element?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                <span className="flex items-center gap-3 justify-center">
                  ¡Empecemos!
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" 
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

'use client';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto max-w-7xl px-0 sm:px-4">
        <div className="flex flex-col items-center text-center space-y-2 sm:space-y-4 lg:space-y-6 w-full">
         
          {/* Logo RECTANGULAR HORIZONTAL - FULL WIDTH MOBILE */}
          <motion.div 
            initial={{ opacity: 0, y: -30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center pt-2 sm:pt-4 w-full max-w-[22rem] sm:max-w-[28rem] lg:max-w-[50rem] mx-auto px-4 sm:px-0"
            style={{ aspectRatio: '3 / 1' }}
          >
            <Image
              src="/ggsaf.png"
              alt="GGSaf Logo"
              width={600}
              height={200}
              className="w-full h-24 sm:h-28 lg:h-50 max-w-[22rem] sm:max-w-[28rem] lg:max-w-[50rem] object-contain hover:scale-105 transition-all duration-700"
              priority
            />
            {/* Anillo sutil */}
            <div className="absolute -inset-4 sm:-inset-6 lg:-inset-10 bg-gradient-to-r from-[#044559]/5 to-transparent 
                           rounded-2xl blur-xl opacity-40 animate-pulse pointer-events-none w-full h-[110%]" />
          </motion.div>

          {/* Contenido DEBAJO - MÁS CERCA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-3xl w-full space-y-3 sm:space-y-4 lg:space-y-6 px-4 sm:px-2 lg:px-4"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black bg-gradient-to-r 
                        from-[#044559] via-gray-900 to-[#044559] bg-clip-text text-transparent 
                        leading-tight tracking-tight drop-shadow-xl px-1 sm:px-2"
            >
              Mejora tus negocios con nosotros
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-900 leading-relaxed font-light px-2 sm:px-4 max-w-2xl mx-auto"
            >
              <span className="font-semibold bg-gradient-to-r from-[#044559] to-[#044559]/70 bg-clip-text text-transparent">
                Prestando servicios de consultoría empresarial y gerencial en materia contable,
              </span>
              <br className="hidden sm:block lg:hidden xl:block" />
              <span className="font-semibold bg-gradient-to-r from-[#044559] to-[#044559]/70 bg-clip-text text-transparent">
                financiera y de entrenamiento.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-2 w-full px-4 sm:px-0 max-w-md mx-auto"
            >
              <Button 
                size="lg" 
                className="text-lg sm:text-xl h-14 sm:h-16 px-8 sm:px-12 shadow-2xl bg-gradient-to-r from-[#044559] to-[#044559]/90 
                                   hover:from-[#044559]/90 hover:to-[#044559] text-white font-bold border-2 
                                   border-[#044559]/30 hover:border-[#044559]/50 hover:shadow-3xl 
                                   hover:shadow-[#044559]/25 backdrop-blur-sm rounded-3xl group tracking-tight w-full sm:w-auto"
                onClick={() => {
                  const element = document.querySelector('#contacto');
                  element?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                <span className="flex items-center gap-2 sm:gap-3 justify-center">
                  ¡Empecemos!
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0" 
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

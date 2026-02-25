'use client';
import { Mail, Instagram, Linkedin, MapPin, Phone, Copyright } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-[#044559]/20 bg-gradient-to-t from-[#044559] to-[#044559]/90">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Grid principal - RESPONSIVE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-20 mb-12 sm:mb-16 w-full">
          
          {/* Columna 1 - Información empresa */}
          <div className="space-y-4 sm:space-y-6 text-white w-full">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 bg-white/10 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl backdrop-blur-sm border border-white/20">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-black text-lg sm:text-xl text-white leading-tight">GGSA</h3>
                <p className="text-white/80 text-xs sm:text-sm">Asesores Contables</p>
              </div>
            </div>
            
            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-white/80 w-full">
              <div className="flex items-start gap-3 p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0 text-white/80" />
                <a href="mailto:ggsa@ggsa.com.ve" className="hover:text-white transition-colors font-medium line-clamp-1 min-w-0">
                  ggsa@ggsa.com.ve
                </a>
              </div>
              <div className="flex items-start gap-3 p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0 text-white/80" />
                <a href="tel:+584123302158" className="hover:text-white transition-colors font-medium line-clamp-1 min-w-0">
                  +58 412 3302158
                </a>
              </div>
            </div>
          </div>

          {/* Columna 2 - Enlaces rápidos */}
          <div className="space-y-4 sm:space-y-6 md:col-span-2 lg:col-span-1 w-full">
            <h4 className="text-lg sm:text-xl font-black text-white mb-4 sm:mb-6">Enlaces Rápidos</h4>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <button 
                onClick={() => {
                  const element = document.querySelector('#servicios');
                  element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="block w-full text-left text-white/80 hover:text-white hover:translate-x-2 transition-all duration-300 font-medium p-2 sm:p-3 rounded hover:bg-white/10 text-left"
              >
                Servicios
              </button>
              <button 
                onClick={() => {
                  const element = document.querySelector('#contacto');
                  element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="block w-full text-left text-white/80 hover:text-white hover:translate-x-2 transition-all duration-300 font-medium p-2 sm:p-3 rounded hover:bg-white/10"
              >
                Contáctanos
              </button>
              <button 
                onClick={() => {
                  const element = document.querySelector('#ubicacion');
                  element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="block w-full text-left text-white/80 hover:text-white hover:translate-x-2 transition-all duration-300 font-medium p-2 sm:p-3 rounded hover:bg-white/10"
              >
                Ubicación
              </button>
              <button 
                onClick={() => {
                  const element = document.querySelector('#academico');
                  element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="block w-full text-left text-white/80 hover:text-white hover:translate-x-2 transition-all duration-300 font-medium p-2 sm:p-3 rounded hover:bg-white/10"
              >
                Capacitaciones
              </button>
            </div>
          </div>

          {/* Columna 3 - Social Media */}
          <div className="space-y-4 sm:space-y-6 w-full">
            <h4 className="text-lg sm:text-xl font-black text-white mb-4 sm:mb-6">Síguenos</h4>
            <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 justify-center lg:justify-start">
              <a 
                href="mailto:ggsa@ggsa.com.ve"
                className="group p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 hover:shadow-xl hover:-translate-y-1 hover:rotate-3 transition-all duration-300 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center flex-shrink-0"
                aria-label="Email GGSA"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
              </a>
              
              <a 
                href="https://instagram.com/ggsasociados" 
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 sm:p-4 bg-gradient-to-r from-pink-500 to-purple-500/80 backdrop-blur-sm rounded-2xl border border-white/20 hover:shadow-2xl hover:-translate-y-1 hover:rotate-3 hover:from-pink-400 hover:to-purple-400 transition-all duration-300 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shadow-lg flex-shrink-0"
                aria-label="Instagram GGSA"
              >
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
              </a>
              
              <a 
                href="https://www.linkedin.com/company/garc%C3%ADa-g%C3%B3mez-services-asociados-s-c/" 
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 sm:p-4 bg-[#0077B5]/90 backdrop-blur-sm rounded-2xl border border-white/20 hover:shadow-2xl hover:-translate-y-1 hover:rotate-3 hover:bg-[#0077B5] transition-all duration-300 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shadow-lg flex-shrink-0"
                aria-label="LinkedIn GGSA"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-6 sm:mb-8" />

        {/* Copyright */}
        <div className="text-center px-2">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 rounded-2xl border border-white/20 w-full sm:w-auto">
            <p className="text-white/80 text-xs sm:text-sm font-medium leading-relaxed">
              © 2026 GGSA Asesores Contables. Todos los derechos reservados. Design by Rosangela B.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

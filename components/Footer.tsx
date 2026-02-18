'use client';
import { Mail, Instagram, Linkedin, MapPin, Phone, Copyright } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-16 border-t border-[#044559]/20 bg-gradient-to-t from-[#044559] to-[#044559]/90">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Grid principal */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-20 mb-16">
          
          {/* Columna 1 - Información empresa */}
          <div className="space-y-6 text-white">
            <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-2xl backdrop-blur-sm border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-black text-xl text-white">GGSA</h3>
                <p className="text-white/80 text-sm">Asesores Contables</p>
              </div>
            </div>
            
            <div className="space-y-4 text-sm text-white/80">
              <div className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:info@ggsa.com.ve" className="hover:text-white transition-colors font-medium">
                  info@ggsa.com.ve
                </a>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+584123302158" className="hover:text-white transition-colors font-medium">
                  +58 412 3302158
                </a>
              </div>
            </div>
          </div>

          {/* Columna 2 - Enlaces rápidos */}
          <div className="space-y-6">
            <h4 className="text-xl font-black text-white mb-6">Enlaces Rápidos</h4>
            <div className="space-y-3 text-sm">
              <Link href="#servicios" className="block text-white/80 hover:text-white hover:translate-x-2 transition-all duration-300 font-medium">
                Servicios
              </Link>
              <Link href="#contacto" className="block text-white/80 hover:text-white hover:translate-x-2 transition-all duration-300 font-medium">
                Contáctanos
              </Link>
              <Link href="#ubicacion" className="block text-white/80 hover:text-white hover:translate-x-2 transition-all duration-300 font-medium">
                Ubicación
              </Link>
              <Link href="#academico" className="block text-white/80 hover:text-white hover:translate-x-2 transition-all duration-300 font-medium">
                Capacitaciones
              </Link>
            </div>
          </div>

          {/* Columna 3 - Solo ICONOS Social Media */}
          <div className="space-y-6">
            <h4 className="text-xl font-black text-white mb-6">Síguenos</h4>
            <div className="flex gap-4 pt-2">
              <a 
                href="mailto:info@ggsa.com.ve"
                className="group p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 hover:shadow-xl hover:-translate-y-1 hover:rotate-3 transition-all duration-300 w-14 h-14 flex items-center justify-center"
                aria-label="Email GGSA"
              >
                <Mail className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </a>
              
              <a 
                href="https://instagram.com/ggsasociados" 
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-gradient-to-r from-pink-500 to-purple-500/80 backdrop-blur-sm rounded-2xl border border-white/20 hover:shadow-2xl hover:-translate-y-1 hover:rotate-3 hover:from-pink-400 hover:to-purple-400 transition-all duration-300 w-14 h-14 flex items-center justify-center shadow-lg"
                aria-label="Instagram GGSA"
              >
                <Instagram className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </a>
              
              <a 
                href="https://www.linkedin.com/company/garc%C3%ADa-g%C3%B3mez-services-asociados-s-c/" 
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-[#0077B5]/90 backdrop-blur-sm rounded-2xl border border-white/20 hover:shadow-2xl hover:-translate-y-1 hover:rotate-3 hover:bg-[#0077B5] transition-all duration-300 w-14 h-14 flex items-center justify-center shadow-lg"
                aria-label="LinkedIn GGSA"
              >
                <Linkedin className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-8" />

        {/* Copyright MODIFICADO */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-2xl border border-white/20">
            <Copyright className="w-4 h-4 text-white/70" />
            <p className="text-white/80 text-sm font-medium">
              © 2026 GGSA Asesores Contables. Todos los derechos reservados. Design by Rosangela B. 
              <br />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

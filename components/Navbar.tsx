'use client';
import * as React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown, Users, GraduationCap, Settings, Mail, Phone, Handshake } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';

const enlaces = [
  { 
    nombre: "Quienes somos", 
    href: "#quienes-somos", 
    icon: Users
  },
  { nombre: "Servicios", href: "#servicios", icon: Settings },
  { nombre: "Aliados", href: "#aliados", icon: Handshake },
  { nombre: "Académico", href: "#academico", icon: GraduationCap },
  { nombre: "Contacto", href: "#contacto", icon: Mail },
];

export default function Navbar() {
  const [abierto, setAbierto] = React.useState(false);
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const esScrolled = scrollY > 20;

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    setAbierto(false);
  };

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50 w-full h-14 sm:h-16 px-4 sm:px-6 lg:px-8
      transition-all duration-300
      ${esScrolled 
        ? 'bg-[#044559]/95 backdrop-blur-md shadow-lg border-b border-[#044559]/50' 
        : 'bg-[#044559]/90 backdrop-blur-md'
      }
    `}>
      <div className="container mx-auto h-full px-4 flex items-center justify-between max-w-7xl">
        {/* LOGO CON SCROLL AL TOP - RESPONSIVE */}
        <Link 
          href="/" 
          onClick={scrollToTop}
          className="flex items-center gap-2 sm:gap-3 flex-shrink-0"
        >
          <div className="relative w-16 h-22 sm:w-20 sm:h-16 lg:w-24 lg:h-24">
            <Image
              src="/ggsa2f.png"
              alt="GGSA Logo"
              fill
              className="object-contain"
            />
          </div>
        </Link>

        {/* ENLACES DESKTOP */}
        <div className="hidden lg:flex items-center gap-2 sm:gap-4 lg:gap-8">
          {enlaces.map((enlace) => (
            <Link
              key={enlace.nombre}
              href={enlace.href}
              onClick={(e) => scrollToSection(enlace.href, e)}
              className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base font-medium text-white/90 
                        hover:text-white hover:bg-white/20 px-3 sm:px-4 py-2 rounded-xl transition-all duration-300
                        backdrop-blur-sm border border-white/10 hover:border-white/30 whitespace-nowrap"
            >
              <enlace.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white/90 flex-shrink-0" />
              {enlace.nombre}
            </Link>
          ))}
        </div>

        {/* Teléfono + Menú móvil */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Teléfono desktop */}
          <div className="hidden md:flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-xl border border-white/30 hover:bg-white/30 transition-all cursor-pointer">
            <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-white/90 flex-shrink-0" />
            <a href="tel:+582863272699" className="text-white font-semibold text-xs sm:text-sm hover:text-white whitespace-nowrap">
              +58-286-3272699
            </a>
          </div>

          {/* Menú móvil */}
          <Sheet open={abierto} onOpenChange={setAbierto}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-10 w-10 sm:h-11 sm:w-11 bg-white/20 hover:bg-white/30 border-white/30 lg:hidden"
              >
                <Menu className="h-5 w-5 text-white" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="bg-[#044559]/95 border-l-[#044559]/50 w-[90vw] sm:w-[380px] lg:w-[420px] p-0"
            >
              {/* Teléfono en móvil */}
              <div className="sticky top-0 z-10 bg-[#044559]/95 p-4 sm:p-6 border-b border-white/20 -mt-1 sm:-mt-4 rounded-t-xl">
                <a 
                  href="tel:+582863272699" 
                  className="flex items-center gap-3 text-white/95 hover:text-white p-3 sm:p-4 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all w-full"
                >
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                  <span className="font-semibold text-base sm:text-lg">+58-286-3272699</span>
                </a>
              </div>
              
              {/* ENLACES MÓVIL */}
              <div className="mt-6 sm:mt-8 flex flex-col gap-2 sm:gap-4 px-4 sm:px-6 pt-2">
                {enlaces.map((enlace) => (
                  <Link
                    key={enlace.nombre}
                    href={enlace.href}
                    onClick={(e) => scrollToSection(enlace.href, e)}
                    className="flex items-center gap-3 text-base sm:text-lg font-medium text-white/95 hover:text-white 
                              px-4 py-4 rounded-xl hover:bg-white/20 backdrop-blur-sm transition-all group"
                  >
                    <enlace.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white/90 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    {enlace.nombre}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

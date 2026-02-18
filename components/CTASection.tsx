'use client';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { X, Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { useState, ChangeEvent, ReactEventHandler } from 'react';
import Link from 'next/link';

type FormData = {
  nombre: string;
  telefono: string;
  email: string;
  comentarios: string;
};

interface CTASectionProps {
  id?: string;
}

export default function CTASection({ id }: CTASectionProps) {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    telefono: '',
    email: '',
    comentarios: ''
  });
  const [aceptaPoliticas, setAceptaPoliticas] = useState(false);
  const [recibirInfo, setRecibirInfo] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  // 🆕 DIALOGO POLITICAS
  const [showPoliticasDialog, setShowPoliticasDialog] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!aceptaPoliticas) {
      setError('Debes aceptar las políticas de privacidad');
      setShowPoliticasDialog(true); // 🆕 Abrir dialogo
      return;
    }

    setSending(true);
    setError('');

    const formDataToSend = new FormData();
    formDataToSend.append('nombre', formData.nombre);
    formDataToSend.append('telefono', formData.telefono);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('comentarios', formData.comentarios);
    formDataToSend.append('recibir_info', recibirInfo ? 'Sí' : 'No');
    formDataToSend.append('_subject', 'Nuevo contacto desde la web');

    try {
      const response = await fetch('https://formspree.io/f/mdalzvld', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSent(true);
        setFormData({ nombre: '', telefono: '', email: '', comentarios: '' });
        setAceptaPoliticas(false);
        setRecibirInfo(false);
      } else {
        throw new Error('Error en el servidor');
      }
    } catch (err) {
      setError('Error al enviar. Inténtalo de nuevo.');
      console.error('Error:', err);
    } finally {
      setSending(false);
    }
  };

  // 🆕 CERRAR DIALOGO Y MARCAR CHECKBOX
  const handleAceptarPoliticas = () => {
    setAceptaPoliticas(true);
    setShowPoliticasDialog(false);
    setError('');
  };

  if (sent) {
    return (
      <section id={id} className="py-32 bg-gradient-to-r from-[#006760] to-[#044559]/80">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/20 backdrop-blur-xl rounded-3xl p-16 max-w-2xl mx-auto border border-white/30"
          >
            <CheckCircle className="w-24 h-24 text-emerald-400 mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">¡Mensaje Enviado!</h2>
            <p className="text-xl text-white/90 mb-8">Te contactaremos pronto.</p>
            <Button 
              onClick={() => setSent(false)}
              className="text-xl h-16 px-12 shadow-2xl bg-white text-[#006760] font-black rounded-3xl"
            >
              Enviar Otro
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section id={id || "contacto"} className="py-32 bg-gradient-to-r from-[#006760] to-[#044559]/80">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Información de Contacto */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 text-white"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                Contáctanos
              </h2>
              <p className="text-xl text-white/90 leading-relaxed max-w-lg">
                Estamos listos para ayudarte con tus necesidades contables, tributarias y de capacitación.
              </p>

              {/* Emails */}
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
                  <Mail className="w-6 h-6 mt-1 text-white/80 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Correos:</h4>
                    <div className="space-y-1 text-sm">
                      <a href="mailto:info@ggsa.com.ve" className="block hover:text-white transition-colors">info@ggsa.com.ve</a>
                      <a href="mailto:ggsasociados@gmail.com" className="block hover:text-white transition-colors">ggsasociados@gmail.com</a>
                      <a href="mailto:wgarcia@ggsa.com.ve" className="block hover:text-white transition-colors">wgarcia@ggsa.com.ve</a>
                      <a href="mailto:hgomez@ggsa.com.ve" className="block hover:text-white transition-colors">hgomez@ggsa.com.ve</a>
                      <a href="mailto:jchirinos@ggsa.com.ve" className="block hover:text-white transition-colors">jchirinos@ggsa.com.ve</a>
                      <a href="mailto:amilano@ggsa.com.ve" className="block hover:text-white transition-colors">amilano@ggsa.com.ve</a>
                    </div>
                  </div>
                </div>

                {/* Teléfonos */}
                <div className="flex items-start gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
                  <Phone className="w-6 h-6 mt-1 text-white/80 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-2">Venezuela:</h4>
                    <div className="space-y-1 text-sm mb-4">
                      <a href="tel:+582863272699" className="block hover:text-white transition-colors">+58-286-3272699</a>
                      <a href="tel:+582869623488" className="block hover:text-white transition-colors">9623488 / 9625300</a>
                      <a href="tel:+584123302158" className="block hover:text-white transition-colors">+58-412-3302158</a>
                      <a href="tel:+584122868102" className="block hover:text-white transition-colors">+58-412-2868102</a>
                    </div>
                    <h4 className="font-semibold text-white mb-2">Perú:</h4>
                    <div className="space-y-1 text-sm">
                      <a href="tel:+5116812459" className="block hover:text-white transition-colors">+51 1 6812459</a>
                      <a href="tel:+51958988842" className="block hover:text-white transition-colors">+51 958988842</a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Formulario */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <form onSubmit={handleSubmit} className="space-y-6 bg-white/10 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-white/20">
                
                {error && (
                  <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-2xl text-red-100 text-sm mb-4">
                    {error}
                  </div>
                )}

                {/* Campos del formulario - IGUALES */}
                <div className="space-y-2">
                  <Label className="text-white font-semibold text-lg">Nombre Completo</Label>
                  <Input
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    className="h-14 text-lg bg-white/20 border-white/40 focus:border-white rounded-2xl backdrop-blur-sm"
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-white font-semibold text-lg">Teléfono</Label>
                  <Input
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    className="h-14 text-lg bg-white/20 border-white/40 focus:border-white rounded-2xl backdrop-blur-sm"
                    placeholder="Tu número de teléfono"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-white font-semibold text-lg">Correo Electrónico</Label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="h-14 text-lg bg-white/20 border-white/40 focus:border-white rounded-2xl backdrop-blur-sm"
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-white font-semibold text-lg">Comentarios</Label>
                  <Textarea
                    name="comentarios"
                    value={formData.comentarios}
                    onChange={handleInputChange}
                    className="h-32 text-lg bg-white/20 border-white/40 focus:border-white rounded-2xl backdrop-blur-sm resize-none"
                    placeholder="Cuéntanos qué necesitas..."
                  />
                </div>

                {/* 🆕 CHECKBOX CON DIALOGO */}
                <div className="space-y-4 pt-4 border-t border-white/20">
                  <div className="flex items-start space-x-3">
                    <Checkbox 
                      id="politicas"
                      checked={aceptaPoliticas}
                      onCheckedChange={(checked) => {
                        if (!checked) {
                          setAceptaPoliticas(false);
                        } else {
                          setShowPoliticasDialog(true); // 🆕 Abrir dialogo al marcar
                        }
                      }}
                      className="mt-1 border-white/60 data-[state=checked]:bg-white data-[state=checked]:border-white h-6 w-6"
                    />
                    <Label htmlFor="politicas" className="text-white/90 text-sm leading-relaxed cursor-pointer flex-1">
                      Acepto las <button 
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          setShowPoliticasDialog(true);
                        }}
                        className="text-white underline hover:no-underline font-semibold"
                      >
                        políticas de privacidad
                      </button> y términos de uso
                    </Label>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox 
                      id="info"
                      checked={recibirInfo}
                      onCheckedChange={(checked) => setRecibirInfo(!!checked)}
                      className="mt-1 border-white/60 data-[state=checked]:bg-white data-[state=checked]:border-white h-6 w-6"
                    />
                    <Label htmlFor="info" className="text-white/90 text-sm leading-relaxed cursor-pointer flex-1">
                      Deseo recibir más información sobre servicios y capacitaciones
                    </Label>
                  </div>
                </div>

                <Button 
                  type="submit"
                  disabled={sending || !aceptaPoliticas}
                  className="w-full h-16 text-xl shadow-2xl bg-white text-[#006760] font-black border-2 
                            border-white/50 hover:bg-white/90 hover:shadow-3xl hover:shadow-[#006760]/25 
                            rounded-3xl backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {sending ? (
                    <span className="flex items-center gap-2">
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </span>
                  ) : (
                    <>
                      Enviar Mensaje
                      <Send className="w-6 h-6 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🆕 DIALOGO POLITICAS DE PRIVACIDAD */}
      {showPoliticasDialog && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowPoliticasDialog(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-gradient-to-br from-white to-gray-50 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#044559]/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Dialogo */}
            <div className="sticky top-0 bg-white/90 backdrop-blur-sm rounded-t-3xl p-6 border-b border-[#044559]/10 z-10 flex items-center justify-between">
              <h3 className="text-2xl font-black text-[#044559]">Política de Privacidad</h3>
              <button
                onClick={() => setShowPoliticasDialog(false)}
                className="p-2 hover:bg-gray-200 rounded-xl transition-all group"
              >
                <X className="w-6 h-6 text-gray-600 group-hover:text-[#044559]" />
              </button>
            </div>

            {/* Contenido Dialogo */}
            <div className="p-8 space-y-6 text-gray-800 max-h-[60vh] overflow-y-auto">
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  <strong>GGSA Asesores Contables</strong> respeta tu privacidad. Al enviar este formulario:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 p-6 bg-blue-50/50 rounded-2xl border border-blue-200">
                  <div>
                    <h4 className="font-semibold text-lg text-[#006760] mb-3">📋 Recopilamos:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Nombre completo</li>
                      <li>• Teléfono</li>
                      <li>• Correo electrónico</li>
                      <li>• Comentarios</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-[#006760] mb-3">🎯 Para:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Responder tu consulta</li>
                      <li>• Contactarte por teléfono/email</li>
                      <li>• Enviarte información solicitada</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50/50 p-6 rounded-2xl border border-green-200">
                  <h4 className="font-semibold text-lg text-green-800 mb-3">✅ Tus Derechos:</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <span>• Acceso a tus datos</span>
                    <span>• Rectificación</span>
                    <span>• Supresión ("olvido")</span>
                    <span>• Oposición al tratamiento</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 italic">
                  <strong>Responsable:</strong> GGSA Asesores Contables - info@ggsa.com.ve
                </p>
              </div>
            </div>

            {/* Footer Dialogo */}
            <div className="sticky bottom-0 bg-white/90 backdrop-blur-sm rounded-b-3xl p-6 border-t border-[#044559]/10 flex gap-4 justify-end">
              <Button
                variant="outline"
                onClick={() => setShowPoliticasDialog(false)}
                className="border-[#044559]/50 text-[#044559] hover:bg-[#044559]/10"
              >
                Cancelar
              </Button>
              <Button
                onClick={handleAceptarPoliticas}
                className="bg-gradient-to-r from-[#044559] to-[#006760] hover:from-[#006760] hover:to-[#044559] shadow-lg"
              >
                Acepto y Continuar
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

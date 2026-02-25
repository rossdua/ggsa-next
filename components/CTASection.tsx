'use client';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { X, Mail, Phone, Send, CheckCircle } from "lucide-react";
import { useState, ChangeEvent } from 'react';

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
      setShowPoliticasDialog(true);
      return;
    }

    setSending(true);
    setError('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          telefono: formData.telefono,
          comentarios: formData.comentarios,
          recibir_info: recibirInfo ? 'Sí' : 'No'
        })
      });

      const result = await response.json();
      
      if (result.success) {
        setSent(true);
        setFormData({ nombre: '', telefono: '', email: '', comentarios: '' });
        setAceptaPoliticas(false);
        setRecibirInfo(false);
      } else {
        throw new Error(result.error || 'Error del servidor');
      }
    } catch (err) {
      setError('Error al enviar. Inténtalo de nuevo.');
      console.error('Error:', err);
    } finally {
      setSending(false);
    }
  };

  const handleAceptarPoliticas = () => {
    setAceptaPoliticas(true);
    setShowPoliticasDialog(false);
    setError('');
  };

  if (sent) {
    return (
      <section id={id} className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#006760] to-[#044559]/80">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/20 backdrop-blur-xl rounded-3xl p-8 sm:p-12 lg:p-16 max-w-2xl w-full mx-auto border border-white/30"
          >
            <CheckCircle className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-emerald-400 mx-auto mb-6 sm:mb-8" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6">¡Mensaje Enviado!</h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 px-4">Te contactaremos pronto.</p>
            <Button 
              onClick={() => setSent(false)}
              className="text-lg sm:text-xl h-14 sm:h-16 px-8 sm:px-12 shadow-2xl bg-white text-[#006760] font-black rounded-3xl w-full sm:w-auto max-w-md mx-auto"
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
      <section id={id} className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#006760] to-[#044559]/80">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start w-full">
            
            {/* Información de Contacto - RESPONSIVE */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8 text-white w-full"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight px-2">
                Contáctanos
              </h2>
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-lg px-2">
                Estamos listos para ayudarte con tus necesidades contables, tributarias y de capacitación.
              </p>

              {/* Emails */}
              <div className="space-y-4 w-full">
                <div className="flex flex-col sm:flex-row items-start gap-3 p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 mt-1 text-white/80 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-white mb-2 sm:mb-1 text-base sm:text-lg">Correos:</h4>
                    <div className="space-y-1 text-sm sm:text-base">
                      <a href="mailto:ggsa@ggsa.com.ve" className="block hover:text-white transition-colors line-clamp-1">ggsa@ggsa.com.ve</a>
                      <a href="mailto:ggsasociados@gmail.com" className="block hover:text-white transition-colors line-clamp-1">ggsasociados@gmail.com</a>
                      <a href="mailto:wgarcia@ggsa.com.ve" className="block hover:text-white transition-colors line-clamp-1">wgarcia@ggsa.com.ve</a>
                      <a href="mailto:hgomez@ggsa.com.ve" className="block hover:text-white transition-colors line-clamp-1">hgomez@ggsa.com.ve</a>
                      <a href="mailto:jchirinos@ggsa.com.ve" className="block hover:text-white transition-colors line-clamp-1">jchirinos@ggsa.com.ve</a>
                      <a href="mailto:amilano@ggsa.com.ve" className="block hover:text-white transition-colors line-clamp-1">amilano@ggsa.com.ve</a>
                    </div>
                  </div>
                </div>

                {/* Teléfonos */}
                <div className="flex flex-col sm:flex-row items-start gap-3 p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 mt-1 text-white/80 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-white mb-2 text-base sm:text-lg">Venezuela:</h4>
                    <div className="space-y-1 text-sm sm:text-base mb-4">
                      <a href="tel:+582863272699" className="block hover:text-white transition-colors line-clamp-1">+58-286-3272699</a>
                      <a href="tel:+582869623488" className="block hover:text-white transition-colors line-clamp-1">9623488 / 9625300</a>
                      <a href="tel:+584123302158" className="block hover:text-white transition-colors line-clamp-1">+58-412-3302158</a>
                    </div>
                    <h4 className="font-semibold text-white mb-2 text-base sm:text-lg">Perú:</h4>
                    <div className="space-y-1 text-sm sm:text-base">
                      <a href="tel:+5116812459" className="block hover:text-white transition-colors line-clamp-1">+51 1 6812459</a>
                      <a href="tel:+51958988842" className="block hover:text-white transition-colors line-clamp-1">+51 958988842</a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Formulario - RESPONSIVE */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 w-full"
            >
              <form onSubmit={handleSubmit} className="space-y-6 bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/20 w-full">
                
                {error && (
                  <div className="p-3 sm:p-4 bg-red-500/20 border border-red-500/50 rounded-2xl text-red-100 text-sm mb-4 px-2">
                    {error}
                  </div>
                )}

                {/* Campos del formulario */}
                <div className="space-y-2">
                  <Label className="text-white font-semibold text-base sm:text-lg">Nombre Completo</Label>
                  <Input
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    className="h-12 sm:h-14 text-base sm:text-lg bg-white/20 border-white/40 focus:border-white rounded-2xl backdrop-blur-sm w-full"
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-white font-semibold text-base sm:text-lg">Teléfono</Label>
                  <Input
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    className="h-12 sm:h-14 text-base sm:text-lg bg-white/20 border-white/40 focus:border-white rounded-2xl backdrop-blur-sm w-full"
                    placeholder="Tu número de teléfono"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-white font-semibold text-base sm:text-lg">Correo Electrónico</Label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="h-12 sm:h-14 text-base sm:text-lg bg-white/20 border-white/40 focus:border-white rounded-2xl backdrop-blur-sm w-full"
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-white font-semibold text-base sm:text-lg">Comentarios</Label>
                  <Textarea
                    name="comentarios"
                    value={formData.comentarios}
                    onChange={handleInputChange}
                    className="h-28 sm:h-32 text-base sm:text-lg bg-white/20 border-white/40 focus:border-white rounded-2xl backdrop-blur-sm resize-none w-full"
                    placeholder="Cuéntanos qué necesitas..."
                  />
                </div>

                {/* Checkbox con diálogo */}
                <div className="space-y-4 pt-4 border-t border-white/20 px-2 sm:px-0">
                  <div className="flex items-start space-x-3">
                    <Checkbox 
                      id="politicas"
                      checked={aceptaPoliticas}
                      onCheckedChange={(checked) => {
                        if (!checked) {
                          setAceptaPoliticas(false);
                        } else {
                          setShowPoliticasDialog(true);
                        }
                      }}
                      className="mt-1 border-white/60 data-[state=checked]:bg-white data-[state=checked]:border-white h-5 w-5 sm:h-6 sm:w-6"
                    />
                    <Label htmlFor="politicas" className="text-white/90 text-sm sm:text-base leading-relaxed cursor-pointer flex-1">
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
                      className="mt-1 border-white/60 data-[state=checked]:bg-white data-[state=checked]:border-white h-5 w-5 sm:h-6 sm:w-6"
                    />
                    <Label htmlFor="info" className="text-white/90 text-sm sm:text-base leading-relaxed cursor-pointer flex-1">
                      Deseo recibir más información sobre servicios y capacitaciones
                    </Label>
                  </div>
                </div>

                <Button 
                  type="submit"
                  disabled={sending || !aceptaPoliticas}
                  className="w-full h-14 sm:h-16 text-lg sm:text-xl shadow-2xl bg-white text-[#006760] font-black border-2 
                                   border-white/50 hover:bg-white/90 hover:shadow-3xl hover:shadow-[#006760]/25 
                                   rounded-3xl backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed px-4 sm:px-8"
                >
                  {sending ? (
                    <span className="flex items-center gap-2 justify-center">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </span>
                  ) : (
                    <>
                      Enviar Mensaje
                      <Send className="w-5 h-5 sm:w-6 sm:h-6 ml-2 flex-shrink-0" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diálogo Políticas - RESPONSIVE */}
      {showPoliticasDialog && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6"
          onClick={() => setShowPoliticasDialog(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-gradient-to-br from-white to-gray-50 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#044559]/20 mx-2 sm:mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white/90 backdrop-blur-sm rounded-t-3xl p-4 sm:p-6 border-b border-[#044559]/10 z-10 flex items-center justify-between">
              <h3 className="text-xl sm:text-2xl font-black text-[#044559]">Política de Privacidad</h3>
              <button
                onClick={() => setShowPoliticasDialog(false)}
                className="p-2 hover:bg-gray-200 rounded-xl transition-all group flex-shrink-0"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-[#044559]" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6 text-gray-800 max-h-[60vh] overflow-y-auto">
              <div className="space-y-4">
                <p className="text-base sm:text-lg leading-relaxed px-2 sm:px-0">
                  <strong>GGSA Asesores Contables</strong> respeta tu privacidad. Al enviar este formulario:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6 bg-blue-50/50 rounded-2xl border border-blue-200">
                  <div>
                    <h4 className="font-semibold text-base sm:text-lg text-[#006760] mb-3">📋 Recopilamos:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Nombre completo</li>
                      <li>• Teléfono</li>
                      <li>• Correo electrónico</li>
                      <li>• Comentarios</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-base sm:text-lg text-[#006760] mb-3">👤 Para:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Responder tu consulta</li>
                      <li>• Contactarte por teléfono/email</li>
                      <li>• Enviarte información solicitada</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50/50 p-4 sm:p-6 rounded-2xl border border-green-200">
                  <h4 className="font-semibold text-base sm:text-lg text-green-800 mb-3">✅ Tus Derechos:</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <span>• Acceso a tus datos</span>
                    <span>• Rectificación</span>
                    <span>• Supresión ("olvido")</span>
                    <span>• Oposición al tratamiento</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 italic px-2 sm:px-0">
                  <strong>Responsable:</strong> GGSA Asesores Contables - <a href="mailto:ggsa@ggsa.com.ve" className="underline">ggsa@ggsa.com.ve</a>
                </p>
              </div>
            </div>

            <div className="sticky bottom-0 bg-white/90 backdrop-blur-sm rounded-b-3xl p-4 sm:p-6 border-t border-[#044559]/10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-end">
              <Button
                variant="outline"
                onClick={() => setShowPoliticasDialog(false)}
                className="border-[#044559]/50 text-[#044559] hover:bg-[#044559]/10 w-full sm:w-auto px-6 sm:px-8"
              >
                Cancelar
              </Button>
              <Button
                onClick={handleAceptarPoliticas}
                className="bg-gradient-to-r from-[#044559] to-[#006760] hover:from-[#006760] hover:to-[#044559] shadow-lg w-full sm:w-auto px-6 sm:px-8"
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

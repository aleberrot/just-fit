"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactoPage() {
  return (
    <div className="bg-black text-white min-h-screen font-roboto">
      {/* Encabezado */}
      <div className="py-16 text-center border-b border-gray-800">
        <h1 className="text-4xl md:text-6xl font-bold italic tracking-tighter">
          CONTÁC<span className="text-[#CCFF00]">TANOS</span>
        </h1>
        <p className="text-gray-400 mt-4 uppercase tracking-widest text-sm">
          Estamos aquí para ayudarte con tu equipamiento
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-16">
        
        {/* Información de Contacto */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-6 uppercase">Datos de la Tienda</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-[#CCFF00] p-3 rounded-full text-black">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase">Teléfono</p>
                  <p className="font-bold">+56 9 1234 5678</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-[#CCFF00] p-3 rounded-full text-black">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase">Email</p>
                  <p className="font-bold">soporte@justfit.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-[#CCFF00] p-3 rounded-full text-black">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase">Ubicación</p>
                  <p className="font-bold">Av. Principal 123, Santiago, Chile</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mapa Ficticio */}
          <div className="h-64 flex items-center justify-center">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.425426898708!2d-70.61938742545532!3d-33.490306999552494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d006eb6d4865%3A0xa821e7eea1660626!2sInacap%20Santiago%20Sur!5e0!3m2!1ses!2scl!4v1778107867370!5m2!1ses!2scl" 
                width="400" 
                height="256"  
                allowFullScreen 
                loading="lazy">

              </iframe>
          </div>
        </div>

        {/* Formulario de Contacto */}
        <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Nombre</label>
                <input 
                  type="text" 
                  className="w-full bg-black border border-gray-700 p-3 rounded focus:border-[#CCFF00] outline-none transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-black border border-gray-700 p-3 rounded focus:border-[#CCFF00] outline-none transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Asunto</label>
              <select className="w-full bg-black border border-gray-700 p-3 rounded focus:border-[#CCFF00] outline-none transition-colors">
                <option>Consulta General</option>
                <option>Estado de Pedido</option>
                <option>Devoluciones</option>
                <option>Ventas Mayoristas</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Mensaje</label>
              <textarea 
                rows={4}
                className="w-full bg-black border border-gray-700 p-3 rounded focus:border-[#CCFF00] outline-none transition-colors"
                placeholder="¿En qué podemos ayudarte?"
              ></textarea>
            </div>

            <button className="w-full bg-[#CCFF00] text-black font-bold py-4 rounded uppercase tracking-widest flex items-center justify-center space-x-2 hover:bg-white transition-colors">
              <span>Enviar Mensaje</span>
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
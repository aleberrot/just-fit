"use client";

import Link from "next/link";
import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white sticky top-0 z-50 font-roboto">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
        
        {/* Logo */}
        <div className="font-bold text-2xl tracking-tighter italic">
          JUST<span className="text-[#CCFF00] ml-1">FIT</span>
        </div>
        
        {/* Desktop Links - Centrados */}
        <div className="hidden md:flex space-x-10 text-sm uppercase tracking-widest">
          <Link href="/" className="hover:text-[#CCFF00] transition-colors hover:underline">Inicio</Link>
          <Link href="/hombre" className="hover:text-[#CCFF00] transition-colors hover:underline">Hombre</Link>
          <Link href="/mujer" className="hover:text-[#CCFF00] transition-colors hover:underline">Mujer</Link>
          <Link href="/contacto" className="hover:text-[#CCFF00] transition-colors hover:underline">Contacto</Link>
        </div>

        {/* Carrito e Icono Mobile */}
        <div className="flex items-center space-x-5">
          <Link href="/carrito" className="flex items-center space-x-2 group">
            <ShoppingCart className="w-6 h-6 group-hover:text-[#CCFF00] transition-colors" />
            <span className="text-lg">(0)</span>
          </Link>
          
          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 p-6 space-y-4 uppercase text-sm tracking-widest">
          <Link href="/" onClick={() => setIsOpen(false)} className="block hover:text-[#CCFF00]">Inicio</Link>
          <Link href="/hombre" onClick={() => setIsOpen(false)} className="block hover:text-[#CCFF00]">Hombre</Link>
          <Link href="/mujer" onClick={() => setIsOpen(false)} className="block hover:text-[#CCFF00]">Mujer</Link>
          <Link href="/contacto" onClick={() => setIsOpen(false)} className="block hover:text-[#CCFF00]">Contacto</Link>
        </div>
      )}
    </nav>
  );
}
import { useState } from 'react';
import { Menu, X, MapPin } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
        
          <div className="flex items-center gap-2 font-bold text-xl text-blue-400">
            <MapPin className="w-6 h-6" />
            <span>FreteExpress</span>
          </div>

      
          <div className="hidden md:flex items-center space-x-8">
            <a href="#endereco" className="text-gray-300 hover:text-white transition-colors font-medium">
              Endereço
            </a>
            <a href="#cep" className="text-gray-300 hover:text-white transition-colors font-medium">
              Consultar CEP
            </a>
            <a href="#sobre" className="text-gray-300 hover:text-white transition-colors font-medium">
              Sobre
            </a>
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
              Calcular Frete
            </button>
          </div>

         
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Abrir Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

     
      {isOpen && (
        <div className="md:hidden bg-slate-800 px-4 pt-2 pb-4 space-y-3">
          <a
            href="#endereco"
            onClick={() => setIsOpen(false)}
            className="block text-gray-300 hover:text-white py-2 font-medium"
          >
            Endereço
          </a>
          <a
            href="#cep"
            onClick={() => setIsOpen(false)}
            className="block text-gray-300 hover:text-white py-2 font-medium"
          >
            Consultar CEP
          </a>
          <a
            href="#sobre"
            onClick={() => setIsOpen(false)}
            className="block text-gray-300 hover:text-white py-2 font-medium"
          >
            Sobre
          </a>
          <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-lg text-sm font-semibold transition-colors">
            Calcular Frete
          </button>
        </div>
      )}
    </nav>
  );
}
import { useState } from 'react';
import { Menu, X, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-slate-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2 font-bold text-xl text-blue-400"
          >
            <MapPin className="w-6 h-6" />
            <span>FreteExpress</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/endereco"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Endereço
            </Link>

            <Link
              to="/cep"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Consultar CEP
            </Link>

            <Link
              to="/sobre"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Sobre
            </Link>

            <Link
              to="/endereco"
              className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              Calcular Frete
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Abrir Menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-800 px-4 pt-2 pb-4 space-y-3">
          <Link
            to="/endereco"
            onClick={closeMenu}
            className="block text-gray-300 hover:text-white py-2 font-medium"
          >
            Endereço
          </Link>

          <Link
            to="/cep"
            onClick={closeMenu}
            className="block text-gray-300 hover:text-white py-2 font-medium"
          >
            Consultar CEP
          </Link>

          <Link
            to="/sobre"
            onClick={closeMenu}
            className="block text-gray-300 hover:text-white py-2 font-medium"
          >
            Sobre
          </Link>

          <Link
            to="/endereco"
            onClick={closeMenu}
            className="block text-center bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-lg text-sm font-semibold transition-colors"
          >
            Calcular Frete
          </Link>
        </div>
      )}
    </nav>
  );
}
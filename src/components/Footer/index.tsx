import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-400 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
   
          <div className="flex items-center gap-2 font-bold text-lg text-blue-400">
            <MapPin className="w-5 h-5" />
            <span>FreteExpress</span>
          </div>

       
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <Link to="/" className="hover:text-white transition-colors">
              Início
            </Link>
            <Link to="/endereco" className="hover:text-white transition-colors">
              Endereço
            </Link>
            <Link to="/cep" className="hover:text-white transition-colors">
              Consultar CEP
            </Link>
            <Link to="/sobre" className="hover:text-white transition-colors">
              Sobre
            </Link>
          </div>

        
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} FreteExpress. Todos os direitos reservados.
          </p>
          
        </div>
      </div>
    </footer>
  );
}
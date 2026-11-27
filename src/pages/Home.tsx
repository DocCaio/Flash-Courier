import { Link } from 'react-router-dom';
import { Search, Truck, MapPin, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-16 py-6">
      
      
      <section className="text-center max-w-3xl mx-auto space-y-6 pt-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
          <Zap className="w-4 h-4" />
          <span>Consultas rápidas e cálculo preciso</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
          Endereços e Fretes em <span className="text-blue-400">segundos</span>.
        </h1>

        <p className="text-gray-400 text-lg leading-relaxed">
          Encontre endereços completos a partir de qualquer CEP do Brasil e simule o valor e prazo de entrega das suas encomendas de forma simples.
        </p>

   
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            to="/cep"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-blue-600/20"
          >
            <Search className="w-5 h-5" />
            Consultar CEP
          </Link>

          <Link
            to="/endereco"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-xl font-semibold border border-slate-700 transition-all"
          >
            <Truck className="w-5 h-5" />
            Calcular Frete
          </Link>
        </div>
      </section>

   
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-blue-500/40 transition-colors space-y-4">
          <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400">
            <MapPin className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white">Busca por CEP</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Digite os 8 dígitos do CEP e obtenha logradouro, bairro, cidade e estado automaticamente.
          </p>
          <Link
            to="/cep"
            className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm font-semibold pt-2"
          >
            Acessar busca <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-blue-500/40 transition-colors space-y-4">
          <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400">
            <Truck className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white">Simulador de Frete</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Calcule prazos estimados e valores de envio informando origem, destino e peso do pacote.
          </p>
          <Link
            to="/endereco"
            className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 text-sm font-semibold pt-2"
          >
            Simular agora <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

    
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-blue-500/40 transition-colors space-y-4">
          <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white">Arquitetura Robusta</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Conectado a uma API em GoLand de alta performance para respostas confiáveis e em tempo real.
          </p>
          <Link
            to="/sobre"
            className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 text-sm font-semibold pt-2"
          >
            Saiba mais <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </section>

    </div>
  );
}
import { Code2, Server, Layers, Cpu, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Sobre() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 py-6">
      
    
      <section className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
          <Sparkles className="w-4 h-4" />
          <span>Sobre o Projeto & Stack</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Tecnologia moderna com <span className="text-blue-400">React 19</span> e Kotlin
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
          O <strong>FreteExpress</strong> foi projetado seguindo princípios de Clean Architecture, unindo uma interface ultrarrápida no frontend com uma API robusta e escalável no backend.
        </p>
      </section>


      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
       
        <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-2xl space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400">
              <Code2 className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-white">Frontend: React 19 + Vite</h2>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed">
            Construído sobre a versão mais recente do React, aproveitando o novo compilador automático, gerenciamento otimizado de formulários com <em>Actions</em> e renderização instantânea com Tailwind CSS v4.
          </p>

          <ul className="space-y-2 text-sm text-gray-300 pt-2">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
              Gerenciamento de pacotes rápido com Yarn
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
              Roteamento dinâmico com React Router DOM
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
              Estilização CSS-first com Tailwind v4
            </li>
          </ul>
        </div>

       
        <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-2xl space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400">
              <Server className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-white">Backend: Kotlin + Spring Boot</h2>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed">
            API RESTful desenvolvida em Kotlin seguindo Clean Architecture, garantindo baixo acoplamento, tipagem segura e alta performance nas consultas de CEP e cálculos logísticos.
          </p>

          <ul className="space-y-2 text-sm text-gray-300 pt-2">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
              Separação estrita entre Domain, UseCases e Infra
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
              Integração assíncrona com serviços de CEP e frete
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
              Pipelines automatizadas de CI/CD via GitHub Actions
            </li>
          </ul>
        </div>

      </section>

     
      <section className="bg-slate-900/60 border border-slate-800 p-6 sm:p-8 rounded-2xl space-y-6">
        <div className="flex items-center gap-3">
          <Cpu className="w-6 h-6 text-emerald-400" />
          <h3 className="text-lg font-bold text-white">Por que React 19 neste projeto?</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 space-y-1">
            <span className="text-emerald-400 font-semibold block">Actions & Transitions</span>
            <p className="text-gray-400 text-xs leading-relaxed">
              Estados de carregamento e erros de envio tratados nativamente de forma mais limpa e declarativa.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 space-y-1">
            <span className="text-blue-400 font-semibold block">React Compiler</span>
            <p className="text-gray-400 text-xs leading-relaxed">
              Memoização automática de componentes sem necessidade de poluir o código com useMemo e useCallback.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 space-y-1">
            <span className="text-purple-400 font-semibold block">Metadados Nativos</span>
            <p className="text-gray-400 text-xs leading-relaxed">
              Suporte direto a tags de título e metadados dentro dos próprios componentes de página.
            </p>
          </div>
        </div>
      </section>

    
      <div className="flex justify-center pt-2">
        <Link
          to="/cep"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-blue-600/20"
        >
          <Layers className="w-5 h-5" />
          <span>Testar Consulta de CEP</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
}
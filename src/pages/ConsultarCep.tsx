import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Search, MapPin, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';
import type { EnderecoViaCep } from '../types/cep';
import { consultarCepApi } from '../services/cepService';

export default function ConsultarCep() {
  const [cep, setCep] = useState<string>('');
  const [endereco, setEndereco] = useState<EnderecoViaCep | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [erro, setErro] = useState<string>('');

  const handleCepChange = (e: ChangeEvent<HTMLInputElement>) => {
    let valor = e.target.value.replace(/\D/g, '');
    if (valor.length > 8) valor = valor.slice(0, 8);

    if (valor.length > 5) {
      valor = `${valor.slice(0, 5)}-${valor.slice(5)}`;
    }
    setCep(valor);
    setErro('');
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cepLimpo = cep.replace(/\D/g, '');

    if (cepLimpo.length !== 8) {
      setErro('O CEP deve conter exatamente 8 dígitos.');
      return;
    }

    setLoading(true);
    setErro('');
    setEndereco(null);

    try {
      const data = await consultarCepApi(cepLimpo);
      setEndereco(data);
    } catch (err: any) {
      setErro(
        err.message || 'Ocorreu um erro ao buscar o CEP. Verifique sua conexão.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8 py-6">
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
          <MapPin className="w-4 h-4" />
          <span>Busca Inteligente</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-white">
          Consultar Endereço por CEP
        </h1>
        <p className="text-gray-400 text-sm">
          Digite o CEP abaixo para preencher automaticamente as informações de logradouro e localização.
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-2xl shadow-xl">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="cep" className="block text-sm font-medium text-gray-300 mb-2">
              Digite o CEP
            </label>
            <div className="relative">
              <input
                type="text"
                id="cep"
                value={cep}
                onChange={handleCepChange}
                placeholder="00000-000"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors text-lg font-mono tracking-wider"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
                <Search className="w-5 h-5" />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 text-white font-semibold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 cursor-pointer disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Buscando endereço...
              </>
            ) : (
              <>
                <Search className="w-5 h-5" />
                Buscar Endereço
              </>
            )}
          </button>
        </form>

        {erro && (
          <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-400 text-sm">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span>{erro}</span>
          </div>
        )}
      </div>

      {endereco && (
        <div className="bg-slate-900 border border-emerald-500/30 p-6 sm:p-8 rounded-2xl shadow-xl space-y-6 animate-fade-in">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold text-lg border-b border-slate-800 pb-4">
            <CheckCircle2 className="w-6 h-6" />
            <span>Endereço Encontrado com Sucesso</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/60">
              <span className="text-gray-500 block text-xs uppercase font-semibold mb-1">Logradouro</span>
              <span className="text-white font-medium">{endereco.logradouro || 'Não informado'}</span>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/60">
              <span className="text-gray-500 block text-xs uppercase font-semibold mb-1">Bairro</span>
              <span className="text-white font-medium">{endereco.bairro || 'Não informado'}</span>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/60">
              <span className="text-gray-500 block text-xs uppercase font-semibold mb-1">Cidade / Estado</span>
              <span className="text-white font-medium">{endereco.localidade} - {endereco.uf}</span>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/60">
              <span className="text-gray-500 block text-xs uppercase font-semibold mb-1">CEP</span>
              <span className="text-white font-medium font-mono">{endereco.cep}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
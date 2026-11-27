import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { Truck, Package, Loader2, AlertCircle, Clock, DollarSign } from 'lucide-react';
import { calcularFreteService } from '../services/freteService';
import type {
  CampoConfig,
  CepField,
  FreteFormData,
  FreteFormField,
  OpcaoFrete,
} from '../types/frete';

const CAMPOS_CEP: CampoConfig[] = [
  { name: 'cepOrigem', label: 'CEP de Origem', type: 'text', placeholder: '00000-000' },
  { name: 'cepDestino', label: 'CEP de Destino', type: 'text', placeholder: '00000-000' },
];

const CAMPOS_MEDIDAS: CampoConfig[] = [
  { name: 'peso', label: 'Peso (kg)', type: 'number', placeholder: 'Ex: 1.5', step: '0.1' },
  { name: 'comprimento', label: 'Comprimento (cm)', type: 'number' },
  { name: 'altura', label: 'Altura (cm)', type: 'number' },
  { name: 'largura', label: 'Largura (cm)', type: 'number' },
];

const CAMPOS_COM_MASCARA: FreteFormField[] = ['cepOrigem', 'cepDestino'];

const ESTADO_INICIAL: FreteFormData = {
  cepOrigem: '',
  cepDestino: '',
  peso: '',
  comprimento: '20',
  altura: '10',
  largura: '15',
};


const formatarCep = (valor: string): string => {
  let limpo = valor.replace(/\D/g, '').slice(0, 8);
  if (limpo.length > 5) {
    limpo = `${limpo.slice(0, 5)}-${limpo.slice(5)}`;
  }
  return limpo;
};

const isCepField = (name: string): name is CepField =>
  CAMPOS_COM_MASCARA.includes(name as FreteFormField);

const somenteDigitos = (valor: string): string => valor.replace(/\D/g, '');

export default function CalcularFrete() {
  const [formData, setFormData] = useState<FreteFormData>(ESTADO_INICIAL);
  const [opcoesFrete, setOpcoesFrete] = useState<OpcaoFrete[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [erro, setErro] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as FreteFormField;
    const value = isCepField(name) ? formatarCep(e.target.value) : e.target.value;

    setFormData((prev) => ({ ...prev, [name]: value }));
    setErro('');
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      somenteDigitos(formData.cepOrigem).length !== 8 ||
      somenteDigitos(formData.cepDestino).length !== 8
    ) {
      setErro('Preencha corretamente os CEPs de origem e destino (8 dígitos).');
      return;
    }

    if (!formData.peso || parseFloat(formData.peso) <= 0) {
      setErro('Informe um peso válido maior que zero.');
      return;
    }

    setLoading(true);
    setErro('');
    setOpcoesFrete([]);

    try {
      const resultados: OpcaoFrete[] = await calcularFreteService(formData);
      setOpcoesFrete(resultados);
    } catch {
      setErro('Não foi possível calcular o frete. Verifique a conexão com o servidor.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 py-6">
      
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
          <Truck className="w-4 h-4" />
          <span>Simulador Logístico</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-white">
          Calcular Frete e Prazo
        </h1>
        <p className="text-gray-400 text-sm">
          Informe os CEPs e as medidas da encomenda para simular as opções de entrega.
        </p>
      </div>

    
      <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-2xl shadow-xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CAMPOS_CEP.map((campo) => (
              <div key={campo.name}>
                <label
                  htmlFor={campo.name}
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  {campo.label}
                </label>
                <input
                  id={campo.name}
                  type={campo.type}
                  name={campo.name}
                  value={formData[campo.name]}
                  onChange={handleChange}
                  placeholder={campo.placeholder}
                  inputMode="numeric"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500 transition-colors font-mono"
                />
              </div>
            ))}
          </div>

        
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {CAMPOS_MEDIDAS.map((campo) => (
              <div key={campo.name}>
                <label
                  htmlFor={campo.name}
                  className="block text-xs font-medium text-gray-400 mb-2"
                >
                  {campo.label}
                </label>
                <input
                  id={campo.name}
                  type={campo.type}
                  step={campo.step}
                  name={campo.name}
                  value={formData[campo.name]}
                  onChange={handleChange}
                  placeholder={campo.placeholder}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>
            ))}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-600/50 text-white font-semibold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 cursor-pointer disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Calculando opções...
              </>
            ) : (
              <>
                <Package className="w-5 h-5" />
                Calcular Frete
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

   
      {opcoesFrete.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {opcoesFrete.map((opcao) => (
            <div
              key={`${opcao.modalidade}-${opcao.prazoDias}`}
              className="bg-slate-900 border border-emerald-500/30 p-6 rounded-2xl flex flex-col justify-between space-y-4 hover:border-emerald-400 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-lg text-white">{opcao.modalidade}</span>
                <Truck className="w-5 h-5 text-emerald-400" />
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>Até {opcao.prazoDias} dias úteis</span>
                </div>

                <div className="flex items-center gap-1 text-emerald-400 font-extrabold text-xl">
                  <DollarSign className="w-5 h-5" />
                  <span>
                    {opcao.valor.toLocaleString('pt-BR', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
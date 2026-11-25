import axios from 'axios';
import type { FreteRequest, OpcaoFrete } from '../types/logistica';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_URL,
});

export async function calcularFreteService({
  cepOrigem,
  cepDestino,
  peso,
  comprimento,
  altura,
  largura,
}: FreteRequest): Promise<OpcaoFrete[]> {
  try {
    const response = await api.post<OpcaoFrete[]>('/frete/calcular', {
      cepOrigem: cepOrigem.replace(/\D/g, ''),
      cepDestino: cepDestino.replace(/\D/g, ''),
      peso: parseFloat(peso),
      dimensoes: {
        comprimento: parseFloat(comprimento),
        altura: parseFloat(altura),
        largura: parseFloat(largura),
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao conectar com o backend Go, usando modo simulação de fallback:', error);
    
    await new Promise((resolve) => setTimeout(resolve, 800));
    const pesoNum = parseFloat(peso) || 1;
    const valorBase = 15.0 + pesoNum * 4.5;

    return [
      {
        modalidade: 'PAC (Econômico)',
        valor: valorBase,
        prazoDias: 7,
      },
      {
        modalidade: 'SEDEX (Expresso)',
        valor: valorBase * 1.85,
        prazoDias: 2,
      },
    ];
  }
}
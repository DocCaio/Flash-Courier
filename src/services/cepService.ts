import axios from 'axios';
import type { EnderecoViaCep } from '../types/cep';

export async function consultarCepApi(cep: string): Promise<EnderecoViaCep> {
  const response = await axios.get<EnderecoViaCep>(
    `https://viacep.com.br/ws/${cep}/json/`
  );

  if (response.data.erro) {
    throw new Error('CEP não encontrado na base de dados.');
  }

  return response.data;
}
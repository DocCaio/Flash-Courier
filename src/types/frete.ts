
export interface FreteFormData {
  cepOrigem: string;
  cepDestino: string;
  peso: string;
  comprimento: string;
  altura: string;
  largura: string;
}


export type FreteFormField = keyof FreteFormData;


export type CepField = Extract<FreteFormField, 'cepOrigem' | 'cepDestino'>;


export interface OpcaoFrete {
  modalidade: string;
  prazoDias: number;
  valor: number;
}


export interface CampoConfig {
  name: FreteFormField;
  label: string;
  type: 'text' | 'number';
  placeholder?: string;
  step?: string;
}
export interface EnderecoResponse {
  cep: string;
  logradouro: string;
  complemento?: string;
  bairro: string;
  localidade: string;
  uf: string;
  erro?: boolean;
}

export interface FreteRequest {
  cepOrigem: string;
  cepDestino: string;
  peso: string;
  comprimento: string;
  altura: string;
  largura: string;
}

export interface OpcaoFrete {
  modalidade: string;
  valor: number;
  prazoDias: number;
}
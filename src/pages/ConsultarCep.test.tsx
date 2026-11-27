import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import ConsultarCep from './ConsultarCep';
import { consultarCepApi } from '../services/cepService';

vi.mock('../services/cepService');

describe('Página ConsultarCep', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('deve aplicar máscara de CEP automaticamente ao digitar', async () => {
    render(<ConsultarCep />);

    const input = screen.getByLabelText('Digite o CEP');
    await userEvent.type(input, '99999999');

    expect(input).toHaveValue('99999-999');
  });

  it('deve exibir erro ao tentar buscar CEP com menos de 8 dígitos', async () => {
    render(<ConsultarCep />);

    await userEvent.type(screen.getByLabelText('Digite o CEP'), '1234');
    await userEvent.click(screen.getByRole('button', { name: /buscar endereço/i }));

    expect(
      await screen.findByText('O CEP deve conter exatamente 8 dígitos.')
    ).toBeInTheDocument();
    expect(consultarCepApi).not.toHaveBeenCalled();
  });

  it('deve exibir os dados do endereço quando a API retornar sucesso', async () => {
    vi.mocked(consultarCepApi).mockResolvedValueOnce({
      cep: '01001-000',
      logradouro: 'Praça da Sé',
      bairro: 'Sé',
      localidade: 'São Paulo',
      uf: 'SP',
    } as any);

    render(<ConsultarCep />);

    await userEvent.type(screen.getByLabelText('Digite o CEP'), '01001000');
    await userEvent.click(screen.getByRole('button', { name: /buscar endereço/i }));

    expect(await screen.findByText('Endereço Encontrado com Sucesso')).toBeInTheDocument();
    expect(screen.getByText('Praça da Sé')).toBeInTheDocument();
    expect(screen.getByText('São Paulo - SP')).toBeInTheDocument();
    expect(consultarCepApi).toHaveBeenCalledWith('01001000');
  });

  it('deve exibir mensagem de erro quando a API falhar ou CEP não existir', async () => {
    
    vi.mocked(consultarCepApi).mockRejectedValueOnce(new Error());

    render(<ConsultarCep />);

    await userEvent.type(screen.getByLabelText('Digite o CEP'), '99999999');
    await userEvent.click(screen.getByRole('button', { name: /buscar endereço/i }));

    expect(
      await screen.findByText('Ocorreu um erro ao buscar o CEP. Verifique sua conexão.')
    ).toBeInTheDocument();
  });
});
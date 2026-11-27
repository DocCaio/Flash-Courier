import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import CalcularFrete from './CalcularFrete';
import * as freteService from '../services/freteService';

describe('Página CalcularFrete', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('deve validar CEPs obrigatórios antes de enviar o formulário', async () => {
    render(<CalcularFrete />);

    fireEvent.click(screen.getByRole('button', { name: /calcular frete/i }));

    expect(
      await screen.findByText('Preencha corretamente os CEPs de origem e destino (8 dígitos).')
    ).toBeInTheDocument();
  });

  it('deve validar se o peso informado é maior que zero', async () => {
    render(<CalcularFrete />);

    const inputsCep = screen.getAllByPlaceholderText('00000-000');
    fireEvent.change(inputsCep[0], { target: { value: '35180000' } });
    fireEvent.change(inputsCep[1], { target: { value: '01001000' } });

    fireEvent.change(screen.getByPlaceholderText('Ex: 1.5'), { target: { value: '0' } });
    fireEvent.click(screen.getByRole('button', { name: /calcular frete/i }));

    expect(await screen.findByText('Informe um peso válido maior que zero.')).toBeInTheDocument();
  });

  it('deve exibir opções PAC e SEDEX formatadas após cálculo bem-sucedido', async () => {
    vi.spyOn(freteService, 'calcularFreteService').mockResolvedValueOnce([
      { modalidade: 'PAC (Econômico)', valor: 22.5, prazoDias: 6 },
      { modalidade: 'SEDEX (Expresso)', valor: 41.63, prazoDias: 2 },
    ]);

    render(<CalcularFrete />);

    const inputsCep = screen.getAllByPlaceholderText('00000-000');
    fireEvent.change(inputsCep[0], { target: { value: '35180000' } });
    fireEvent.change(inputsCep[1], { target: { value: '01001000' } });
    fireEvent.change(screen.getByPlaceholderText('Ex: 1.5'), { target: { value: '2' } });

    fireEvent.click(screen.getByRole('button', { name: /calcular frete/i }));

    await waitFor(() => {
      expect(screen.getByText('PAC (Econômico)')).toBeInTheDocument();
      expect(screen.getByText('SEDEX (Expresso)')).toBeInTheDocument();
      expect(screen.getByText('Até 6 dias úteis')).toBeInTheDocument();
      expect(screen.getByText('22,50')).toBeInTheDocument();
      expect(screen.getByText('41,63')).toBeInTheDocument();
    });
  });

  it('deve exibir alerta de erro se o serviço falhar', async () => {
    vi.spyOn(freteService, 'calcularFreteService').mockRejectedValueOnce(new Error('Network Error'));

    render(<CalcularFrete />);

    const inputsCep = screen.getAllByPlaceholderText('00000-000');
    fireEvent.change(inputsCep[0], { target: { value: '35180000' } });
    fireEvent.change(inputsCep[1], { target: { value: '01001000' } });
    fireEvent.change(screen.getByPlaceholderText('Ex: 1.5'), { target: { value: '1.5' } });

    fireEvent.click(screen.getByRole('button', { name: /calcular frete/i }));

    expect(
      await screen.findByText('Não foi possível calcular o frete. Verifique a conexão com o servidor.')
    ).toBeInTheDocument();
  });
});
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Navbar from './index';

describe('Componente Navbar', () => {
  it('deve renderizar a marca e os links principais', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByText('FreteExpress')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Calcular Frete' })).toHaveAttribute('href', '/endereco');
    expect(screen.getByRole('link', { name: 'Consultar CEP' })).toHaveAttribute('href', '/cep');
    expect(screen.getByRole('link', { name: 'Sobre' })).toHaveAttribute('href', '/sobre');
  });

  it('deve abrir e fechar o menu mobile ao clicar no botão', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const botaoMenu = screen.getByLabelText('Abrir Menu');
    fireEvent.click(botaoMenu);


    const linksFrete = screen.getAllByText('Calcular Frete');
    expect(linksFrete.length).toBe(2);

    fireEvent.click(botaoMenu);
    expect(screen.getAllByText('Calcular Frete').length).toBe(1);
  });
});
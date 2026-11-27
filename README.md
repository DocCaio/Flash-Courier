# FreteExpress - Frontend

<div align="center">

![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-729B1B?style=for-the-badge&logo=vitest&logoColor=white)

Interface web moderna e responsiva desenvolvida para consulta rápida de endereços por CEP e simulação precisa de fretes, integrada a um backend em Go (Gin).

</div>

---

## 🚀 Tecnologias Utilizadas

* **React 19** & **TypeScript** (Tipagem estática e componentes modernos)
* **Tailwind CSS v4** (Estilização utilitária e design responsivo)
* **React Router DOM** (Gerenciamento de rotas e navegação SPA)
* **Axios** (Cliente HTTP para comunicação com a API)
* **Lucide React** (Biblioteca de ícones moderna e limpa)
* **Vitest & Testing Library** (Ambiente de testes unitários)
* **Yarn** (Gerenciador de pacotes)

---

## 📂 Estrutura de Pastas

```text
src/
├── components/       # Componentes globais reutilizáveis (Navbar, Footer, etc.)
├── pages/            # Páginas principais da aplicação (Home, ConsultarCep, CalcularFrete, Sobre)
├── services/         # Camada de comunicação com a API (Axios)
├── types/            # Interfaces e tipagens TypeScript compartilhadas
├── App.tsx           # Configuração de rotas e layout principal
└── main.tsx          # Ponto de entrada da aplicação
```

---

## ⚙️ Pré-requisitos

Certifique-se de ter instalado em sua máquina:
* [Node.js](https://nodejs.org/) (Versão 18+ recomendada)
* [Yarn](https://yarnpkg.com/)

---

## 📥 Instalação e Execução Local

1. Clone o repositório e acesse a pasta do frontend:
   ```bash
   git clone https://github.com/SEU-USUARIO/freteexpress-frontend.git
   cd freteexpress-frontend
   ```

2. Instale as dependências utilizando o **Yarn**:
   ```bash
   yarn install
   ```

3. Crie um arquivo `.env` na raiz baseando-se no ambiente desejado (opcional, por padrão aponta para o localhost):
   ```env
   VITE_API_URL=http://localhost:8080/api
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   yarn dev
   ```

A aplicação estará disponível em `http://localhost:5173`.

---

## 🧪 Rodando os Testes

Para executar a suíte de testes unitários com **Vitest**, utilize os comandos abaixo conforme a sua necessidade:

### Comandos Principais (`yarn`)

```bash
# Executar todos os testes uma única vez e encerrar
yarn test run

# Executar testes em modo watch (observação automática de alterações)
yarn test
```

### Comandos Avançados (`yarn vitest`)

Se preferir usar o comando direto do Vitest para cenários específicos:

* **Executar todos os testes uma vez:**
  ```bash
  yarn vitest run
  ```

* **Modo watch (reexecuta automaticamente ao salvar um arquivo):**
  ```bash
  yarn vitest
  ```

* **Rodar apenas um arquivo específico:**
  ```bash
  yarn vitest run src/pages/ConsultarCep.test.tsx
  ```

* **Filtrar testes pelo nome (executa apenas os que contêm o texto):**
  ```bash
  yarn vitest run -t "máscara de CEP"
  ```

* **Gerar relatório de cobertura de código:**
  *(Requer a instalação prévia do pacote `@vitest/coverage-v8`)*
  ```bash
  yarn vitest run --coverage
  ```


---

## 🐳 Docker

Para executar a aplicação containerizada:

1. Construir a imagem:
   ```bash
   docker build -t freteexpress-frontend .
   ```

2. Executar o container:
   ```bash
   docker run -p 80:80 freteexpress-frontend
   ```
*(Ou utilize o `docker-compose.yml` na raiz do projeto principal para subir frontend e backend simultaneamente).*

---

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE).

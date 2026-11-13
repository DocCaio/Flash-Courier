import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home'; 
import ConsultarCep from './pages/ConsultarCep'; 

function Endereco() { 
  return <div className="p-6">Página de Endereço</div>; 
}

function Sobre() { 
  return <div className="p-6">Página Sobre</div>; 
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-white">
      <Navbar />
      
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/endereco" element={<Endereco />} />
          <Route path="/cep" element={<ConsultarCep />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
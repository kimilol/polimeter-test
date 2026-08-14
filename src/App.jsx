import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Servicos from './pages/Servicos';
import Representadas from './pages/Representadas';
import Representantes from './pages/Representantes';
import ContatoPage from './pages/ContatoPage';
import ScrollToHashAndTop from './components/ScrollToHashAndTop';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <ScrollToHashAndTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/produtos/:techId/:subcatId" element={<Produtos />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/representadas" element={<Representadas />} />
            <Route path="/representantes" element={<Representantes />} />
            <Route path="/contato" element={<ContatoPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logoImage from '../assets/logo-pulse.png';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [produtosOpen, setProdutosOpen] = useState(false);
  const [empresaOpen, setEmpresaOpen] = useState(false);
  const lastTouchEmpresa = useRef(0);
  const lastTouchProdutos = useRef(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobile = () => {
    setMobileMenuOpen(false);
  };

  const handleProductSelect = (tabKey) => {
    setProdutosOpen(false);
    setMobileMenuOpen(false);
    const defaultSubcatMap = {
      'correntes-parasitas': 'medidores-condutividade',
      'ultrassom': 'portateis-nodularidade',
      'campo-magnetico': 'inspecao-tubos-barras',
      'particulas-magneticas': 'maquinas-sistemas-trincas',
      'laser': 'inspecao-laser-tubos'
    };
    const subcat = defaultSubcatMap[tabKey] || 'medidores-condutividade';
    navigate(`/produtos/${tabKey}/${subcat}`);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="logo" aria-label="Polimeter Home">
          <img src={logoImage} alt="Polimeter" className="logo-img" />
        </Link>

        <div className="desktop-menu">
          <Link to="/" className="nav-link">Início</Link>

          {/* Dropdown: Institucional */}
          <div
            className="nav-dropdown-wrapper"
            onMouseEnter={() => {
              if (Date.now() - lastTouchEmpresa.current < 500) return;
              setEmpresaOpen(true);
            }}
            onMouseLeave={() => setEmpresaOpen(false)}
            onTouchStart={() => {
              lastTouchEmpresa.current = Date.now();
            }}
          >
            <span 
              className="nav-link dropdown-toggle" 
              role="button" 
              tabIndex={0}
              onClick={(e) => {
                e.preventDefault();
                setEmpresaOpen(!empresaOpen);
              }}
            >
              Institucional <ChevronDown size={14} className={`arrow-icon ${empresaOpen ? 'rotated' : ''}`} />
            </span>
            {empresaOpen && (
              <div className="nav-dropdown glass">
                <Link to="/#sobre" onClick={() => setEmpresaOpen(false)}>Sobre Nós</Link>
                <Link to="/#metodologia" onClick={() => setEmpresaOpen(false)}>Metodologia</Link>
                <Link to="/#faq" onClick={() => setEmpresaOpen(false)}>FAQ</Link>
              </div>
            )}
          </div>

          {/* Dropdown: Produtos */}
          <div
            className="nav-dropdown-wrapper"
            onMouseEnter={() => {
              if (Date.now() - lastTouchProdutos.current < 500) return;
              setProdutosOpen(true);
            }}
            onMouseLeave={() => setProdutosOpen(false)}
            onTouchStart={() => {
              lastTouchProdutos.current = Date.now();
            }}
          >
            <Link 
              to="/produtos" 
              className="nav-link dropdown-toggle"
              onClick={(e) => {
                e.preventDefault();
                setProdutosOpen(!produtosOpen);
              }}
            >
              Produtos <ChevronDown size={14} className={`arrow-icon ${produtosOpen ? 'rotated' : ''}`} />
            </Link>
            {produtosOpen && (
              <div className="nav-dropdown glass">
                <button onClick={() => handleProductSelect('correntes-parasitas')}>Correntes Parasitas</button>
                <button onClick={() => handleProductSelect('ultrassom')}>Ultrassom</button>
                <button onClick={() => handleProductSelect('campo-magnetico')}>Campo Magnético</button>
                <button onClick={() => handleProductSelect('particulas-magneticas')}>Partículas Magnéticas</button>
                <button onClick={() => handleProductSelect('laser')}>Sistemas Laser</button>
              </div>
            )}
          </div>

          <Link to="/servicos" className="nav-link">Serviços & Cursos</Link>
          <Link to="/representadas" className="nav-link">Representadas</Link>
          <Link to="/representantes" className="nav-link">Representantes</Link>
        </div>

        <Link to="/contato" className="btn btn-primary nav-cta">Falar com Consultor</Link>

        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu glass ${mobileMenuOpen ? 'open' : ''}`}>
        <Link to="/" className="mobile-link" onClick={closeMobile}>Início</Link>

        <div className="mobile-section-title">Institucional</div>
        <Link to="/#sobre" className="mobile-link submenu-item" onClick={closeMobile}>Sobre Nós</Link>
        <Link to="/#metodologia" className="mobile-link submenu-item" onClick={closeMobile}>Metodologia</Link>
        <Link to="/#faq" className="mobile-link submenu-item" onClick={closeMobile}>FAQ</Link>

        <div className="mobile-section-divider"></div>

        <div className="mobile-section-title">Produtos</div>
        <button className="mobile-link submenu-item" onClick={() => handleProductSelect('correntes-parasitas')}>Correntes Parasitas</button>
        <button className="mobile-link submenu-item" onClick={() => handleProductSelect('ultrassom')}>Ultrassom</button>
        <button className="mobile-link submenu-item" onClick={() => handleProductSelect('campo-magnetico')}>Campo Magnético</button>
        <button className="mobile-link submenu-item" onClick={() => handleProductSelect('particulas-magneticas')}>Partículas Magnéticas</button>
        <button className="mobile-link submenu-item" onClick={() => handleProductSelect('laser')}>Sistemas Laser</button>

        <div className="mobile-section-divider"></div>

        <Link to="/servicos" className="mobile-link" onClick={closeMobile}>Serviços & Cursos</Link>
        <Link to="/representadas" className="mobile-link" onClick={closeMobile}>Representadas</Link>
        <Link to="/representantes" className="mobile-link" onClick={closeMobile}>Representantes</Link>

        <div className="mobile-section-divider"></div>

        <Link to="/contato" className="btn btn-primary" onClick={closeMobile}>Falar com Consultor</Link>
      </div>
    </nav>
  );
};

export default Navbar;

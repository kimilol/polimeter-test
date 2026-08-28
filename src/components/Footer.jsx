import { Link, useNavigate } from 'react-router-dom';
import logoImage from '../assets/logo-pulse.png';
import './Footer.css';

const Footer = () => {
  const navigate = useNavigate();

  const handleSolutionClick = (tabKey) => {
    const defaultSubcatMap = {
      'correntes-parasitas': 'medidores-condutividade',
      'ultrassom': 'portateis-nodularidade',
      'campo-magnetico': 'inspecao-tubos-barras',
      'particulas-magneticas': 'maquinas-sistemas-trincas',
      'laser': 'inspecao-laser-tubos'
    };
    const subcat = defaultSubcatMap[tabKey] || 'medidores-condutividade';
    navigate(`/produtos/${tabKey}/${subcat}`);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <img src={logoImage} alt="Polimeter" className="logo-img" />
            </Link>
            <p className="footer-desc">
              Mais de 25 anos fornecendo equipamentos de inspeção de alta performance e engenharia consultiva especializada em Ensaios Não Destrutivos (END).
            </p>
          </div>
          
          <div className="footer-links-group">
            <h4>Produtos</h4>
            <ul>
              <li><button onClick={() => handleSolutionClick('ultrassom')} className="footer-btn-link">Ultrassom</button></li>
              <li><button onClick={() => handleSolutionClick('correntes-parasitas')} className="footer-btn-link">Correntes Parasitas</button></li>
              <li><button onClick={() => handleSolutionClick('campo-magnetico')} className="footer-btn-link">Campo Magnético (MFL)</button></li>
              <li><button onClick={() => handleSolutionClick('particulas-magneticas')} className="footer-btn-link">Partículas Magnéticas</button></li>
              <li><button onClick={() => handleSolutionClick('laser')} className="footer-btn-link">Sistemas Laser</button></li>
            </ul>
          </div>
          
          <div className="footer-links-group">
            <h4>Empresa</h4>
            <ul>
              <li><Link to="/#sobre">Sobre Nós</Link></li>
              <li><Link to="/#metodologia">Metodologia</Link></li>
              <li><Link to="/servicos">Serviços & Cursos</Link></li>
              <li><Link to="/representadas">Representadas</Link></li>
              <li><Link to="/representantes">Representantes</Link></li>
              <li><Link to="/#faq">FAQ</Link></li>
              <li><Link to="/contato">Contato</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Polimeter Comércio e Representações Ltda. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

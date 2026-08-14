
import { ChevronRight } from 'lucide-react';
import heroImage from '../assets/scanmaster-hero.png';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero" id="home">
      {/* Background elements */}
      <div className="hero-bg-glow glow-1 animate-float"></div>
      <div className="hero-bg-glow glow-2 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="hero-grid"></div>

      <div className="container hero-container">
        <div className="hero-main-split">
          <div className="hero-content animate-slide-up">
            <h1 className="hero-title">
              SOLUÇÕES COMPLETAS EM ENSAIOS NÃO DESTRUTIVOS (END) <br />
              <span className="gradient-text">PARA INDÚSTRIAS DE ALTA PERFORMANCE.</span>
            </h1>
            
            <p className="hero-subtitle">
              Garanta a integridade estrutural da sua produção com tecnologias globais de Ultrassom Convencional e Phased Array, Correntes Parasitas (Eddy Current), Campo Magnético de Fuga (Magnetic Flux Leakage) e Partículas Magnéticas.
            </p>

            <p className="hero-description">
              Polimeter - Há mais de 25 anos fornecendo equipamentos de inspeção e engenharia consultiva para os setores Automotivo, Aeroespacial, Ferroviário, Siderúrgico e Óleo e Gás. Corpo técnico certificado com Níveis 2 e 3, Treinamento, Instalação, Start-up e Assistência Técnica especializada.
            </p>
            
            <div className="hero-actions">
              <a href="#contato" className="btn btn-primary btn-large">
                Falar com Consultor <ChevronRight size={20} />
              </a>
              <a href="#solucoes" className="btn btn-outline btn-large">
                Conhecer Soluções
              </a>
            </div>
          </div>

          <div className="hero-image-container animate-fade-in">
            <div className="hero-image-wrapper glass-card">
              <img src={heroImage} alt="ScanMaster UT Inspection" className="hero-image" />
            </div>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">+30</span>
            <span className="stat-text">Anos de Liderança em END</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">TOP</span>
            <span className="stat-text">Cobertura Nacional em Vendas e Assistência</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">TOP</span>
            <span className="stat-text">Fornecedor Homologado em Grandes Indústrias</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">N3</span>
            <span className="stat-text">Corpo Técnico Certificado Nível 3 (ABENDI/ASNT)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

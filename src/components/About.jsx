
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="sobre" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content reveal">
            <h2 className="section-heading" style={{ textAlign: 'left' }}>
              Tradição, Engenharia e <span className="gradient-text">Inovação.</span>
            </h2>
            <p className="about-desc">
              Com sede estratégica em Cotia (SP) e atuação em todo o território nacional, a Polimeter consolidou-se em mais de 25 anos como referência em Ensaios Não Destrutivos no Brasil.
            </p>
            <p className="about-desc">
              Mais do que fornecedores, somos parceiros de engenharia. Nossa estrutura conta com laboratório próprio, equipe de engenheiros de aplicação e técnicos especializados, prontos para atender demandas complexas de inspeção automatizada e manual.
            </p>

            <ul className="about-list">
              <li><CheckCircle2 size={20} className="check-icon" /> Fornecedor homologado em grandes indústrias.</li>
              <li><CheckCircle2 size={20} className="check-icon" /> Corpo técnico com certificação Nível 3 (ABENDI/ASNT).</li>
              <li><CheckCircle2 size={20} className="check-icon" /> Representação exclusiva de tecnologias globais.</li>
            </ul>

            <a href="#contato" className="btn btn-primary mt-4">Agendar Reunião de Diagnóstico</a>
          </div>

          <div className="about-image reveal" style={{ transitionDelay: '200ms' }}>
            <div className="image-wrapper glass-card">
              <div className="glass-highlight"></div>
              {/* Using a modern placeholder, user can replace with real image */}
              <div className="placeholder-image">
                <ShieldCheck size={80} color="var(--brand-blue)" opacity={0.5} />
                <p>Equipe Técnica Especializada</p>
              </div>
            </div>
            
            <div className="experience-badge glass">
              <Award size={32} className="award-icon" />
              <div>
                <span className="exp-number">+25</span>
                <span className="exp-text">Anos de Mercado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

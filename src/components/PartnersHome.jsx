import { Link } from 'react-router-dom';
import { ArrowRight, Globe } from 'lucide-react';
import './PartnersHome.css';

const partnersData = [
  { name: 'Magnetic Analysis Corporation (MAC)', origin: 'EUA' },
  { name: 'ScanMaster Systems', origin: 'Israel' },
  { name: 'Rohmann GmbH', origin: 'Alemanha' },
  { name: 'Verimation Technology', origin: 'EUA' },
  { name: 'Xiris Automation Inc.', origin: 'Canadá' }
];

const PartnersHome = () => {
  return (
    <section className="partners-home" id="parceiros">
      <div className="container">
        <h2 className="section-heading reveal">
          Parceiros Tecnológicos de <span className="gradient-text">Classe Mundial</span>
        </h2>
        <p className="section-subheading reveal">
          Representamos exclusivamente os maiores desenvolvedores de tecnologia de inspeção do mundo, garantindo acesso direto a peças de reposição e atualizações de firmware e software.
        </p>

        <div className="partners-grid reveal" style={{ transitionDelay: '150ms' }}>
          {partnersData.map((partner, idx) => (
            <div className="partner-home-card glass-card" key={idx}>
              <div className="partner-home-meta">
                <Globe size={16} className="partner-home-icon" />
                <span>{partner.origin}</span>
              </div>
              <h3 className="partner-home-name">{partner.name}</h3>
            </div>
          ))}
        </div>

        <div className="partners-footer-link reveal" style={{ transitionDelay: '300ms' }}>
          <Link to="/representadas" className="btn btn-outline">
            Ver detalhes das representadas <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PartnersHome;

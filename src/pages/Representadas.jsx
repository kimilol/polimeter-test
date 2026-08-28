import { useEffect } from 'react';
import { ExternalLink, Globe, Landmark } from 'lucide-react';
import './Representadas.css';

const partners = [
  {
    name: 'Magnetic Analysis Corporation (MAC)',
    origin: 'Estados Unidos',
    founded: '1928',
    specialties: ['Correntes Parasitas', 'Ultrassom Phased Array', 'Campo Magnético (MFL)'],
    desc: 'Aparelhos e sistemas de ensaios por correntes parasitas, ultrassom e campo magnético de fuga. Empresa fundada em 1928 e líder em aplicações nas indústrias siderúrgicas (tubos, barras, arames, tarugos e chapas).',
    url: 'https://www.mac-ndt.com/'
  },
  {
    name: 'ScanMaster Systems',
    origin: 'Israel',
    founded: '1986',
    specialties: ['Ultrassom', 'Inspeção de Solda a Ponto', 'Sistemas Ferroviários'],
    desc: 'Aparelhos e sistemas de ensaios por ultrassom para soldas a ponto, indústrias ferroviária e siderúrgica.',
    url: 'https://www.scanmaster-irt.com/'
  },
  {
    name: 'Rohmann GmbH',
    origin: 'Alemanha',
    founded: '1977',
    specialties: ['Correntes Parasitas Portáteis', 'Inspeção Aeronáutica', 'Componentes Giratórios'],
    desc: 'Aparelhos e sistemas de ensaios por correntes parasitas em auto-peças, aeronáutica e estruturas.',
    url: 'https://www.rohmann.de/'
  },
  {
    name: 'Verimation Technology',
    origin: 'Estados Unidos',
    founded: '1968',
    specialties: ['Correntes Parasitas', 'Controle Metalúrgico de Autopeças'],
    desc: 'Aparelhos de ensaios por correntes parasitas em auto-peças.',
    url: 'https://www.verimation.com/'
  },
  {
    name: 'Xiris Automation Inc.',
    origin: 'Canadá',
    founded: '1989',
    specialties: ['Inspeção Geométrica a Laser', 'Câmeras de Monitoramento de Solda'],
    desc: 'Aparelhos laser para controle de qualidade da solda em formadoras de tubos com costura.',
    url: 'https://www.xiris.com/'
  }
];

const sortedPartners = [...partners].sort((a, b) =>
  a.name.localeCompare(b.name, 'pt-BR', { sensitivity: 'base' })
);

const Representadas = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="representadas-page">
      {/* Hero */}
      <div className="representadas-hero">
        <div className="container representadas-hero-inner">
          <h1 className="representadas-title animate-slide-up">
            Nossas <span className="gradient-text">Representadas</span>
          </h1>
          <p className="representadas-subtitle animate-slide-up" style={{ animationDelay: '100ms' }}>
            Parceria de exclusividade e cooperação técnica com os maiores fabricantes de END do mundo.
          </p>
        </div>
      </div>

      <div className="container representadas-content">
        {/* Intro Card */}
        <div className="representadas-intro">
          <div className="representadas-intro-icon">
            <Landmark size={28} />
          </div>
          <div className="representadas-intro-body">
            <h2>Tecnologia Global com Suporte Nacional</h2>
            <p>
              A Polimeter é representante exclusiva no Brasil de fabricantes líderes nos Estados Unidos, Europa, Canadá e Israel — garantindo acesso direto às tecnologias de inspeção mais avançadas do planeta, com suporte local de engenheiros especializados.
            </p>
          </div>
        </div>

        {/* Partners List */}
        <div className="partners-list">
          {sortedPartners.map((partner, idx) => (
            <div className="partner-card" key={idx}>
              <div className="partner-card-left">
                <div className="partner-meta">
                  <span className="partner-origin">
                    <Globe size={14} />
                    {partner.origin}
                  </span>
                  <span className="partner-founded">Desde {partner.founded}</span>
                </div>
                <h2 className="partner-name">{partner.name}</h2>
                <p className="partner-desc">{partner.desc}</p>
              </div>
              <div className="partner-card-right">
                <div className="partner-tags">
                  {partner.specialties.map((spec, i) => (
                    <span className="partner-tag" key={i}>{spec}</span>
                  ))}
                </div>
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="partner-link"
                >
                  Visitar Website <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Representadas;

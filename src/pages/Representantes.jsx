import { useEffect } from 'react';
import { Phone, Mail, MapPin, User, Landmark, MessageSquare } from 'lucide-react';
import './Representantes.css';

const representatives = [
  {
    region: 'Região ABC e Vale do Paraíba (SP)',
    company: 'MLR Comércio e Acess. de Máquinas LTDA',
    contact: 'Francisco Paulo Silva',
    phones: ['(11) 3539-0181', '(11) 3539-1180'],
    mobile: '(11) 96685-6567',
    email: 'francisco@mlrmaquinas.com.br'
  },
  {
    region: 'Estados do Paraná e Santa Catarina (PR / SC)',
    company: 'RZG Representações LTDA.',
    contact: 'Ruy Zoschke',
    phones: ['(47) 3366-4428'],
    mobile: '(47) 99952-5032',
    email: 'vendas@ruzo.com.br',
    emailAlternative: 'ruy@ruzo.com.br'
  },
  {
    region: 'Estado do Rio Grande do Sul (RS)',
    company: 'Chollet Representações Técnicas LTDA.',
    contact: 'Engº Sérgio Chollet',
    phones: ['(51) 3029-4020'],
    email: 'vendas@chollet.com.br'
  }
];

const Representantes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="representantes-page">
      {/* Hero */}
      <div className="representantes-hero">
        <div className="container representantes-hero-inner">
          <h1 className="representantes-title animate-slide-up">
            Nossos <span className="gradient-text">Representantes</span>
          </h1>
          <p className="representantes-subtitle animate-slide-up" style={{ animationDelay: '100ms' }}>
            Rede de atendimento comercial especializada para suporte local em diferentes regiões do Brasil.
          </p>
        </div>
      </div>

      <div className="container representantes-content">
        {/* Intro Card */}
        <div className="representantes-intro">
          <div className="representantes-intro-icon">
            <Landmark size={28} />
          </div>
          <div className="representantes-intro-body">
            <h2>Suporte Comercial Regionalizado</h2>
            <p>
              Para agilizar o seu atendimento, contamos com uma rede de representantes comerciais autorizados e altamente qualificados nas principais regiões industriais do país. Entre em contato com o representante da sua região ou fale diretamente conosco.
            </p>
          </div>
        </div>

        {/* Representatives List */}
        <div className="representantes-list">
          {representatives.map((rep, idx) => (
            <div className="rep-card" key={idx}>
              <div className="rep-card-left">
                <div className="rep-meta">
                  <span className="rep-region-tag">
                    <MapPin size={14} />
                    {rep.region}
                  </span>
                </div>
                <h2 className="rep-company-name">{rep.company}</h2>
                <div className="rep-contact-person">
                  <User size={16} className="rep-icon" />
                  <span><strong>Contato:</strong> {rep.contact}</span>
                </div>
              </div>
              <div className="rep-card-right">
                <div className="rep-contact-details">
                  {rep.phones.map((phone, pIdx) => (
                    <div className="contact-detail-item" key={pIdx}>
                      <Phone size={16} className="rep-icon" />
                      <span>{phone}</span>
                    </div>
                  ))}
                  {rep.mobile && (
                    <div className="contact-detail-item">
                      <MessageSquare size={16} className="rep-icon whatsapp-icon" />
                      <span>{rep.mobile} (WhatsApp)</span>
                    </div>
                  )}
                  <div className="contact-detail-item">
                    <Mail size={16} className="rep-icon" />
                    <a href={`mailto:${rep.email}`} className="rep-email-link">{rep.email}</a>
                  </div>
                  {rep.emailAlternative && (
                    <div className="contact-detail-item">
                      <Mail size={16} className="rep-icon" />
                      <a href={`mailto:${rep.emailAlternative}`} className="rep-email-link">{rep.emailAlternative}</a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Representantes;

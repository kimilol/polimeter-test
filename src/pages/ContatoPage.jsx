import { useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import { Calendar, Clock, MapPin } from 'lucide-react';
import './ContatoPage.css';

const ContatoPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contato-page">
      <div className="contato-hero">
        <div className="container contato-hero-inner">
          <h1 className="contato-title animate-slide-up">
            Fale <span className="gradient-text">Conosco</span>
          </h1>
          <p className="contato-subtitle animate-slide-up" style={{ animationDelay: '100ms' }}>
            Entre em contato direto com a nossa engenharia comercial para tirar dúvidas ou solicitar propostas.
          </p>
        </div>
      </div>

      <div className="container form-section">
        {/* Reusing the beautiful contact form component */}
        <ContactForm />
      </div>

      <div className="container extra-info-section">
        <div className="info-grid">
          <div className="info-box glass-card">
            <Clock size={28} className="box-icon" />
            <h3>Horário de Atendimento</h3>
            <p>Segunda a Sexta-feira</p>
            <p className="highlight-text">08:00h às 17:00h</p>
          </div>

          <div className="info-box glass-card">
            <Calendar size={28} className="box-icon" />
            <h3>Visitas Técnicas</h3>
            <p>Agende uma reunião presencial ou online com nossos engenheiros de aplicação para análise de amostras e demonstrações.</p>
          </div>
        </div>

        <div className="map-wrapper glass-card">
          <div className="map-header">
            <MapPin size={24} className="map-icon" />
            <div>
              <h3>Nossa Sede em Cotia (SP)</h3>
              <p>Rua Frei Caneca, 39 - 1º andar - Granja Viana | CEP 06706-015</p>
            </div>
          </div>
          <div className="map-container">
            {/* Embedded Google Maps showing Cotia, SP */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.4022419266184!2d-46.833535924716766!3d-23.590795462719283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf01fa7d206f65%3A0xe54e60caad8d66ef!2sR.%20Frei%20Caneca%2C%2039%20-%20Vila%20Funda%2C%20Cotia%20-%20SP%2C%2006706-015!5e0!3m2!1spt-BR!2sbr!4v1711200000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="350" 
              style={{ border: 0, borderRadius: '12px' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Polimeter"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContatoPage;

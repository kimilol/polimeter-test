import { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { enviarContato } from '../services/contactService';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    segmento: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await enviarContato(formData);

      alert('Solicitação enviada com sucesso! Entraremos em contato em breve.');

      setFormData({
        nome: '',
        email: '',
        telefone: '',
        empresa: '',
        segmento: '',
        mensagem: '',
      });
    } catch {
      alert('Não foi possível enviar a solicitação. Tente novamente.');
    }
  };

  return (
    <section id="contato" className="contact">
      <div className="container">
        <div className="contact-grid">
          
          <div className="contact-info reveal">
            <h2 className="section-heading" style={{ textAlign: 'left' }}>
              Solicite Contato <span className="gradient-text">Comercial</span>
            </h2>
            <p className="contact-desc">
              Preencha o formulário para direcionarmos sua demanda ao engenheiro responsável pelo seu setor.
            </p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4>Endereço</h4>
                  <p>Rua Frei Caneca, 39 - 1º andar<br />Granja Viana - Cotia - SP</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <Phone size={24} />
                </div>
                <div>
                  <h4>Telefones</h4>
                  <p>+55 11 4612-0699<br />+55 11 9 7622-3283 (WhatsApp)</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Mail size={24} />
                </div>
                <div>
                  <h4>E-mail</h4>
                  <p>polimeter@polimeter.com.br</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper glass-card reveal" style={{ transitionDelay: '200ms' }}>
            <form onSubmit={handleSubmit} className="form">
              <div className="form-group">
                <input 
                  type="text" 
                  name="nome"
                  value={formData.nome} 
                  onChange={handleChange} 
                  required 
                  className="form-control" 
                  placeholder="Nome Completo *" 
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    className="form-control" 
                    placeholder="E-mail Corporativo *" 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="tel" 
                    name="telefone"
                    value={formData.telefone} 
                    onChange={handleChange} 
                    required 
                    className="form-control" 
                    placeholder="Telefone / Celular *" 
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input 
                    type="text" 
                    name="empresa"
                    value={formData.empresa} 
                    onChange={handleChange} 
                    required 
                    className="form-control" 
                    placeholder="Empresa *" 
                  />
                </div>
                <div className="form-group">
                  <select 
                    name="segmento"
                    value={formData.segmento} 
                    onChange={handleChange} 
                    required 
                    className="form-control"
                  >
                    <option value="" disabled>Segmento *</option>
                    <option value="automotivo">Automotivo</option>
                    <option value="aeroespacial">Aeroespacial</option>
                    <option value="siderurgia">Siderurgia</option>
                    <option value="oleo-gas">Óleo e Gás</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <textarea 
                  name="mensagem"
                  value={formData.mensagem} 
                  onChange={handleChange} 
                  className="form-control" 
                  placeholder="Mensagem / Detalhes da Aplicação" 
                  rows="4"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                Enviar Solicitação <Send size={18} />
              </button>
              <p className="privacy-text">
                * Ao enviar, você concorda com nossas políticas de privacidade.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;

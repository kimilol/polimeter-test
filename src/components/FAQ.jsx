import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

const faqs = [
  {
    question: "A Polimeter realiza a instalação e o start-up dos equipamentos de Correntes Parasitas (Eddy Current) e Ultrassom?",
    answer: "Sim. A Polimeter fornece a solução completa turnkey. Nossa equipe técnica realiza a instalação física, o comissionamento (start-up) e a configuração dos parâmetros de inspeção dos equipamentos de Correntes Parasitas (Eddy Current) e Ultrassom, assegurando a operacionalidade imediata na linha do cliente."
  },
  {
    question: "Quais setores industriais a Polimeter atende com suas soluções de END?",
    answer: "Atuamos fortemente nas indústrias de base e manufatura avançada, incluindo os setoresos setores automotivo, aeroespacial, ferroviário, óleo e gás, siderúrgico e metalúrgico em geral."
  },
  {
    question: "Qual é a qualificação do corpo técnico da Polimeter?",
    answer: "Nossa equipe de engenharia e assistência técnica é supervisionada por profissionais qualificados e certificados como Nivel 2 e 3 em métodos como Ultrassom, Correntes Parasitas e Partículas Magnéticas, conforme normas nacionais e internacionais (ABENDI/ASNT), garantindo respaldo técnico em todas as especificações."
  },
  {
    question: "Fornecem aparelhos portáteis ou apenas sistemas automatizados em linha?",
    answer: "Fornecemos ambas as soluções. Temos desde detectores de falhas portáteis com Correntes Parasitas (Eddy Current) e Ultrassom até sistemas automatizados de inspeção em linha para alta produtividade, integrados ao processo fabril do cliente."
  },
  {
    question: "Como funciona o serviço de Assistência Técnica e Calibração?",
    answer: "A Polimeter possui laboratório próprio em Cotia-SP para manutenção preventiva, corretiva e calibração de equipamentos END. Utilizamos padrões rastreáveis para garantir que seu equipamento, seja um equipamento de Correntes Parasitas (Eddy Current), Ultrassom e Partículas Magnéticas, opere dentro das tolerâncias normativas."
  },
  {
    question: "A Polimeter é representante oficial de quais marcas no Brasil?",
    answer: "Somos distribuidores autorizados de líderes globais em tecnologia de inspeção, como a Magnetic Analysis Corp (MAC), Rohmann, VSM (Vogt - Scanmaster), Verimation e Xiris, garantindo acesso a equipamentos de ponta, peças de reposição originais e suporte direto da fábrica."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq">
      <div className="container">
        <h2 className="section-heading reveal">Perguntas <span className="gradient-text">Frequentes</span></h2>
        <p className="section-subheading reveal">Tire suas dúvidas sobre nossas soluções em Ensaios Não Destrutivos.</p>

        <div className="faq-list reveal" style={{ transitionDelay: '200ms' }}>
          {faqs.map((faq, index) => (
            <div 
              className={`faq-item glass-card ${openIndex === index ? 'active' : ''}`} 
              key={index}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <button className="faq-toggle">
                  {openIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </button>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

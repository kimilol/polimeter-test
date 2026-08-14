
import { Settings, Truck, Users, Wrench, BarChart } from 'lucide-react';
import './Methodology.css';

const steps = [
  {
    num: "01",
    icon: <BarChart size={24} />,
    title: "Análise de Engenharia",
    desc: "Avaliação da aplicação, norma técnica aplicável e cadência de produção."
  },
  {
    num: "02",
    icon: <Settings size={24} />,
    title: "Definição da Técnica",
    desc: "Seleção da técnica (US, CP, CMF e PM) e configuração do equipamento."
  },
  {
    num: "03",
    icon: <Truck size={24} />,
    title: "Fornecimento e Instalação",
    desc: "Logística, montagem industrial e integração à linha de produção."
  },
  {
    num: "04",
    icon: <Users size={24} />,
    title: "Treinamento Operacional",
    desc: "Capacitação técnica do time do cliente para operação e interpretação."
  },
  {
    num: "05",
    icon: <Wrench size={24} />,
    title: "Suporte Vitalício",
    desc: "Contratos de calibração, manutenção e atualização tecnológica."
  }
];

const Methodology = () => {
  return (
    <section id="metodologia" className="methodology">
      <div className="container">
        <h2 className="section-heading reveal">
          Metodologia de <span className="gradient-text">Implementação</span>
        </h2>
        <p className="section-subheading reveal">
          Ciclo completo de fornecimento: realizamos a entrega técnica, instalação física e o start-up dos equipamentos em sua planta.
        </p>

        <div className="timeline">
          {steps.map((step, index) => (
            <div className="timeline-item reveal" key={index} style={{ transitionDelay: `${index * 150}ms` }}>
              <div className="timeline-marker">
                <div className="marker-ring"></div>
                <div className="marker-core">{step.icon}</div>
              </div>
              <div className="timeline-content glass-card">
                <span className="step-number">{step.num}</span>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;

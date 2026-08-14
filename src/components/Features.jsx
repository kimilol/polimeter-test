
import { Activity, Magnet, Zap, Target, Settings } from 'lucide-react';
import './Features.css';

const featuresData = [
  {
    icon: <Activity size={32} />,
    title: "Ultrassom Industrial (UT)",
    description: "Sistemas Convencionais e Phased Array (PA) para detecção de defeitos, controle do grau de nodularidade em fundidos, controle metalúrgico e inspeção de soldas.",
  },
  {
    icon: <Zap size={32} />,
    title: "Correntes Parasitas",
    description: "Sistemas Convencionais e Phased Array (PA) para detecção de defeitos, controle do grau de nodularidade em fundidos, controle metalúrgico e inspeção de soldas.",
  },
  {
    icon: <Magnet size={32} />,
    title: "Campo Magnético de Fuga",
    description: "Máquinas e sistemas para detecção de defeitos superficiais e subsuperficiais com máxima precisão.",
  },
  {
    icon: <Target size={32} />,
    title: "Partículas Magnéticas",
    description: "Máquinas e sistemas de partículas magnéticas.",
  },
  {
    icon: <Settings size={32} />,
    title: "Engenharia e Mecanização para Sistemas de END",
    description: "Dispositivos e sistemas mecânicos para automação de END, pista de rolos, mesas de transferência para tubos e barras, estação de testes automáticas entre outros.",
  }
];

const Features = () => {
  return (
    <section id="solucoes" className="features">
      <div className="container">
        <h2 className="section-heading reveal">
          Tecnologias Avançadas para <br/>
          <span className="gradient-text">Controle de Qualidade e Inspeção</span>
        </h2>
        <p className="section-subheading reveal">
          Ciclo completo de fornecimento: realizamos a entrega técnica, instalação física e o comissionamento dos equipamentos em sua planta.
        </p>

        <div className="features-grid">
          {featuresData.map((feature, index) => (
            <div 
              className="feature-card glass-card reveal" 
              key={index}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

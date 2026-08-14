import { Award, Globe, Play, UserCheck } from 'lucide-react';
import './Diferenciais.css';

const diferenciaisData = [
  {
    icon: <Award size={32} />,
    title: "Expertise de Mercado & Certificação",
    description: "Mais de três décadas de atuação liderada por engenheiros certificados como Níveis 2 e 3 em Ensaios Não Destrutivos. Know-how técnico para atender às normas internacionais mais rigorosas (ASTM, ASME, API, ISO)."
  },
  {
    icon: <Globe size={32} />,
    title: "Representação de Tecnologias Globais",
    description: "Representante e Distribuidor autorizado dos maiores fabricantes mundiais de tecnologia de inspeção. Trazemos para o Brasil o estado da arte em Ultrassom Convencional e Phased Array, Correntes Parasitas, Campo Magnético de Fuga e Partículas Magnéticas."
  },
  {
    icon: <Play size={32} />,
    title: "Instalação, Comissionamento e Start-up",
    description: "Ciclo completo de fornecimento: realizamos a entrega técnica, instalação física e o start-up (comissionamento) dos equipamentos em sua planta, garantindo a calibração correta desde o primeiro dia de operação."
  },
  {
    icon: <UserCheck size={32} />,
    title: "Pós-venda e Treinamento Especializado",
    description: "Não apenas fornecemos o hardware; capacitamos sua equipe. Oferecemos treinamentos operacionais in company e suporte técnico contínuo para manutenção preventiva e corretiva."
  }
];

const Diferenciais = () => {
  return (
    <section className="diferenciais" id="diferenciais">
      <div className="container">
        <h2 className="section-heading reveal">
          Diferenciais <span className="gradient-text">Competitivos</span>
        </h2>
        <p className="section-subheading reveal">
          Por que a Polimeter é a parceira estratégica ideal para sua planta industrial.
        </p>

        <div className="diferenciais-grid">
          {diferenciaisData.map((item, idx) => (
            <div 
              className="diferencial-card glass-card reveal" 
              key={idx}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="diferencial-icon">
                {item.icon}
              </div>
              <h3 className="diferencial-title">{item.title}</h3>
              <p className="diferencial-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diferenciais;

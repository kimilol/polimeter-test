import { useEffect } from 'react';
import { Wrench, ShieldCheck, GraduationCap, CheckCircle } from 'lucide-react';
import './Servicos.css';

const serviceItems = [
  {
    icon: <Wrench size={28} />,
    title: 'Calibração & Assistência Técnica',
    description: 'Laboratório próprio de última geração em Cotia (SP) para assistência técnica especializada e calibração periódica.',
    details: [
      'Calibração completa de aparelhos de Correntes Parasitas e Ultrassom das marcas MAC e ScanMaster Systems.',
      'Calibração e ajuste fino de detectores integrados de defeitos em tubos, barras e arames.',
      'Diagnósticos eletrônicos e reparos autorizados com reposição de peças originais.'
    ]
  },
  {
    icon: <ShieldCheck size={28} />,
    title: 'Engenharia de Aplicação & Consultoria',
    description: 'Confiabilidade dos ensaios por meio de engenharia de ponta e desenvolvimento de procedimentos homologados.',
    details: [
      'Identificação e separação rápida de lotes misturados de peças metálicas seriadas.',
      'Emissão de procedimentos formais de END conforme normas aeronáuticas, navais e industriais.',
      'Consultoria e supervisão técnica por engenheiros Nível 3 certificados ASNT / ABENDI.'
    ]
  }
];

const courses = [
  { code: 'PM-C-BAS', name: 'Partículas Magnéticas com Máquinas Estacionárias', level: 'Nível 1', role: 'Operador' },
  { code: 'PM-C-MED', name: 'Partículas Magnéticas – Elaboração de Procedimentos em Autopeças', level: 'Nível 2', role: 'Inspetor' },
  { code: 'CP-C-GER-1', name: 'Correntes Parasitas – Geral', level: 'Nível 1', role: 'Operador' },
  { code: 'CP-C-GER-2', name: 'Correntes Parasitas – Geral', level: 'Nível 2', role: 'Inspetor' },
  { code: 'CP-C-SOL-2', name: 'Correntes Parasitas – Soldas e Chapas', level: 'Nível 2', role: 'Inspetor' },
  { code: 'CP-C-SEP', name: 'Separação de Materiais por Correntes Parasitas', level: 'Nível 2', role: 'Triagem' },
  { code: 'CP-C-TUB', name: 'Defeitos em Tubos por Correntes Parasitas', level: 'Nível 2', role: 'Inspetor' },
  { code: 'CP-C-BAR', name: 'Defeitos em Barras e Arames por Correntes Parasitas', level: 'Nível 2', role: 'Inspetor' },
  { code: 'US-C-SAP', name: 'Ultrassom em Soldas a Ponto', level: 'Nível 2', role: 'Especialista' }
];

const Servicos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="servicos-page">
      {/* Hero */}
      <div className="servicos-hero">
        <div className="container servicos-hero-inner">
          <h1 className="servicos-title animate-slide-up">
            Serviços & <span className="gradient-text">Treinamentos</span>
          </h1>
          <p className="servicos-subtitle animate-slide-up" style={{ animationDelay: '100ms' }}>
            Suporte técnico completo com engenharia consultiva, calibração qualificada e capacitação de equipes in-company.
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="container servicos-content">
        <div className="servicos-cards">
          {serviceItems.map((item, idx) => (
            <div className="servico-card" key={idx}>
              <div className="servico-card-icon">{item.icon}</div>
              <div className="servico-card-body">
                <h2>{item.title}</h2>
                <p className="servico-card-desc">{item.description}</p>
                <ul className="servico-checklist">
                  {item.details.map((detail, i) => (
                    <li key={i}>
                      <CheckCircle size={16} className="check-icon" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Courses */}
        <div className="cursos-section">
          <div className="cursos-header">
            <GraduationCap size={36} className="cursos-header-icon" />
            <div>
              <h2>Treinamentos In-Company</h2>
              <p>Qualificação de pessoal em END conduzida diretamente na sua empresa, conforme diretrizes <strong>SNT-TC 1A da ASNT</strong>.</p>
            </div>
          </div>

          <div className="cursos-grid">
            {courses.map((course, idx) => (
              <div className="curso-card" key={idx}>
                <div className="curso-card-top">
                  <code className="curso-code">{course.code}</code>
                  <span className="curso-level">{course.level}</span>
                </div>
                <h3 className="curso-name">{course.name}</h3>
                <div className="curso-role">{course.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicos;

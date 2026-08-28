import { useState, useEffect } from 'react';
import { useLocation, useParams, useNavigate, Link } from 'react-router-dom';
import { Activity, Zap, Magnet, Target, Cpu, ShieldAlert, FileText, Download, ChevronDown, ChevronRight } from 'lucide-react';
import './Produtos.css';

import elotestM2V3Img from '../assets/produtos/elotest-m2v3.jpg';
import elotestM3Img from '../assets/produtos/elotest-m3.jpg';
import elotestM6Img from '../assets/produtos/elotest-m6.png';
import elotestPL600Img from '../assets/produtos/elotest-pl600.jpg';

import verimetImg from '../assets/produtos/verimet-7700-7710.jpg';
import varimacViImg from '../assets/produtos/varimac-vi.jpg';
import pcviImg from '../assets/produtos/pcvi.jpg';
import minimacIiImg from '../assets/produtos/minimac-ii.png';
import multimacImg from '../assets/produtos/multimac.jpg';

import elotestIs3Img from '../assets/produtos/elotest-is3.jpg';
import multimacSmImg from '../assets/produtos/multimac-sm.jpg';
import rotomacImg from '../assets/produtos/rotomac.jpg';

import hec101Img from '../assets/produtos/hec101.jpg';
import hec102Img from '../assets/produtos/hec102.jpg';
import hec103bImg from '../assets/produtos/hec103b.jpg';

import fd510Img from '../assets/produtos/fd510.jpg';
import fd560Img from '../assets/produtos/fd560.png';
import tanqueImersaoImg from '../assets/produtos/tanque-imersao.jpg';
import demeqQsvImg from '../assets/produtos/demeq-qsv.jpg';

import utxSpotweldImg from '../assets/produtos/utx-spotweld.png';
import utmateImg from '../assets/produtos/utmate.jpg';
import utproImg from '../assets/produtos/utpro.jpg';

import echomacFd4eImg from '../assets/produtos/echomac-fd4e.jpg';
import echomacPaImg from '../assets/produtos/echomac-pa.jpg';
import echomacFd6Img from '../assets/produtos/echomac-fd6.jpg';
import fanucTubosImg from '../assets/produtos/fanuc-tubos.jpg';
import monitorCordaoImg from '../assets/produtos/monitor-cordao.jpg';

import cabecotesRotativosNewImg from '../assets/produtos/cabecotes-rotativos-new.jpg';
import phasedArrayBarrasImg from '../assets/produtos/phased-array-barras.png';

import echomacVmCabinetImg from '../assets/produtos/echomac-vm-cabinet.jpg';
import nodularidadeManualImg from '../assets/produtos/nodularidade-manual.jpg';
import nodularidadeAutomaticoImg from '../assets/produtos/nodularidade-automatico.jpg';

import sfb50Img from '../assets/produtos/sfb50.jpg';
import sfb100Img from '../assets/produtos/sfb100.jpg';
import as220wImg from '../assets/produtos/as220w.jpg';
import as220aImg from '../assets/produtos/as220a.jpg';

import tarugosRedondosImg from '../assets/produtos/tarugos-redondos.jpg';
import chapasTirasAs200pImg from '../assets/produtos/chapas-tiras-as200p.jpg';

import transdutoresImg from '../assets/produtos/transdutores.jpg';
import blocosPadroesImg from '../assets/produtos/blocos-padroes.jpg';

import rotofluxDcImg from '../assets/produtos/rotoflux-dc.jpg';
import rotofluxAcImg from '../assets/produtos/rotoflux-ac.jpg';

import bancadaMpiImg from '../assets/produtos/bancada-mpi.png';
import gaussimetroBst600Img from '../assets/produtos/gaussimetro-bst600.jpg';
import indicadorMagnetismoResidualImg from '../assets/produtos/indicador-magnetismo-residual.jpg';
import medidorLuzNegraMln21Img from '../assets/produtos/medidor-luz-negra-mln21.jpg';
import padraoCx230Img from '../assets/produtos/padrao-cx230.jpg';
import padraoCx4230Img from '../assets/produtos/padrao-cx4-230.jpg';

import xirisLaserTubosImg from '../assets/produtos/xiris-laser-tubos.jpg';

const techData = {
  'correntes-parasitas': {
    title: 'Correntes Parasitas (Eddy Current)',
    icon: <Zap size={32} />,
    description: 'Tecnologia avançada baseada em indução eletromagnética para detecção de defeitos superficiais e subsuperficiais em materiais condutores, além de classificação de ligas metálicas e tratamentos térmicos.',
    applications: [
      {
        id: 'medidores-condutividade',
        name: 'Medidores de Condutividade Elétrica',
        desc: 'Equipamentos dedicados para a medição precisa da condutividade elétrica em ligas não ferrosas, fundamental para controle de liga e tratamento térmico na indústria aeroespacial e de fundição.',
        subcategories: [
          {
            name: 'HEC-101',
            desc: 'Medidor digital de condutividade em % I.A.C.S. e MS/m com compensação automática de temperatura e lift-off, ideal para inspeções rápidas em campo.',
            pdf: '/pdf/hec-101-hec-102.pdf',
            image: hec101Img
          },
          {
            name: 'HEC-102',
            desc: 'Modelo com capacidade de armazenamento de até 1.000 medições e cabo de comunicação PC, mantendo as mesmas frequências e precisão do HEC-101.',
            pdf: '/pdf/hec-101-hec-102.pdf',
            image: hec102Img
          },
          {
            name: 'HEC-103B',
            desc: 'Medidor digital avançado com medição de resistividade elétrica, memória de até 16.000 medições, frequências de 60 KHz ou 500 KHz e interface RS232.',
            pdf: '/pdf/hec-103b.pdf',
            image: hec103bImg
          }
        ]
      },
      {
        id: 'aparelhos-portateis',
        name: 'Aparelhos Portáteis Universais',
        desc: 'Soluções flexíveis e robustas para inspeção em campo, detecção de trincas, medição de condutividade e ensaios não destrutivos manuais em diversas ligas.',
        subcategories: [
          {
            name: 'Elotest M2V3',
            desc: 'Para detecção de defeitos superficiais e sub-superficiais assim como para separação de peças metálicas seriadas em termos de composição química (liga) e condição de tratamento térmico. Pode ser usado com sondas manuais ou rotativas. Pode operar com duas frequências e um mixer para inspeção de tubos não ferromagnéticos instalados em trocadores de calor. Pode ainda medir digitalmente condutividade elétrica em % I.A.C.S. e espessuras de camadas não condutoras sobre materiais base não ferromagnéticos. Fornecido com manual de operação em português.',
            pdf: '/pdf/elotest-m2v3.pdf',
            image: elotestM2V3Img
          },
          {
            name: 'Elotest M3',
            desc: 'Igual ao Elotest M2V3 – versão completa, porém com tela de grandes dimensões (5.7”) e entradas e saídas isoladas opticamente (OPTO I/O). Fornecido com manual de instruções de operação em português.',
            pdf: '/pdf/elotest-m3.pdf',
            image: elotestM3Img
          },
          {
            name: 'Elotest M6',
            desc: 'O estado da arte em ensaios com aparelhos portáteis. Multiplexação de até 256 sensores, com display C-Scan para sondas rotativas e com multi elementos. Faixa de frequências de 10 Hz a 12,5 MHz. Tela de toque de 7”, grau de proteção IP67, peso de apenas 1,2 Kg. com bateria e autonomia de até 8 horas de operação.',
            pdf: '/pdf/elotest-m6.pdf',
            image: elotestM6Img
          }
        ]
      },
      {
        id: 'controle-separacao',
        name: 'Controle e Separação de Peças Metálicas Seriadas',
        desc: 'Sistemas automáticos integrados à linha de produção para triagem e separação de peças por liga, tratamento térmico, dureza ou geometria.',
        subcategories: [
          {
            name: 'Verimet® 7700 / 7710',
            desc: 'Os aparelhos mais vendidos no mercado nacional para separação de peças ferromagnéticas. Podem operar com sondas e bobinas de diversas dimensões. Com modos de separação por amplitude, fase e amplitude e fase em 11 frequências disponíveis. O software determina automaticamente os melhores parâmetros para cada problema de separação. Fornecidos com software e manual de instruções de operação em português. \n\n• Verimet® 7700: para ensaios manuais, opera com baterias recarregáveis ou diretamente da rede elétrica. \n\n• Verimet® 7710: para ensaios manuais ou automáticos estáticos (a peça deve parar dentro da bobina), possui saídas para separação automática de peças aprovadas e reprovadas em até 3 grupos e opera somente da rede elétrica.',
            pdf: '/pdf/verimet-7700-7710.pdf',
            image: verimetImg
          },
          {
            name: 'Varimac® VI',
            desc: 'Para ensaios automáticos dinâmicos (a peça não precisa parar dentro da bobina) a altas velocidades com bobinas envolventes. Para peças ferromagnéticas e não ferromagnéticas. Pode separar até 6 peças por segundo in até três grupos diferentes (ex.: peças com dureza normal, duras e moles). Computador industrial com software em ambiente Windows. Fornecido com software e manual de instruções de operação em português.',
            pdf: '/pdf/varimac-vi.pdf',
            image: varimacViImg
          },
          {
            name: 'Production Comparator PC-VI',
            desc: 'Para ensaios automáticos dinâmicos (a peça não precisa parar dentro da bobina) com bobinas envolventes. Somente para peças ferromagnéticas. Ideal para separar tubos, barras e arames a velocidades normais de produção. Computador industrial com software em ambiente Windows. Fornecido com software e manual de instruções de operação em português.',
            pdf: '/pdf/pcvi-portuguese-2021.pdf',
            image: pcviImg
          }
        ]
      },
      {
        id: 'deteccao-pecas',
        name: 'Detecção de Defeitos em Peças Seriadas',
        desc: 'Inspeção de alta cadência e precisão em componentes automotivos e aeroespaciais de segurança crítica, detectando trincas e porosidades instantaneamente.',
        subcategories: [
          {
            name: 'Elotest IS3',
            desc: 'Aparelho mono-canal com grau de proteção IP54 para ensaios automáticos em linhas de produção, para detectar defeitos ou para controlar e separar peças em termos de composição química (ligas), condição de tratamento térmico ou dureza.',
            pdf: '/pdf/elotest-is-3.pdf',
            image: elotestIs3Img
          },
          {
            name: 'Elotest PL 600',
            desc: 'Aparelho universal de última geração, com processamento de sinais totalmente digitais. Baseado numa plataforma de hardware modular, o aparelho pode ser usado simultaneamente para detecção de defeitos, para detecção de pontos de queimas de retífica e para separação de peças metálicas seriadas em termos de composição química (ligas), condição de tratamento térmico ou dureza. Possibilidade de multiplexação de sensores (sondas e bobinas) e conjuntos de parâmetros para até 64 canais virtuais por canal.',
            pdf: '/pdf/pl600_por.pdf',
            image: elotestPL600Img
          }
        ]
      },
      {
        id: 'deteccao-tubos',
        name: 'Detecção de Defeitos em Tubos, Barras e Arames',
        desc: 'Sistemas industriais completos para inspeção em linha contínua, garantindo conformidade com normas rígidas de fabricação.',
        subcategories: [
          {
            name: 'Minimac® II',
            desc: 'Aparelho digital, compacto e econômico que pode operar com 1 ou 2 canais de teste individualmente configurados. Para inspecionar material contínuo ou cortado, em sistemas na linha ou fora da linha. Fornecido com software e manual de instruções de operação em português. Monitor externo fornecido pelo cliente.',
            pdfs: [
              { name: 'Especificações Minimac 55', path: '/pdf/minimac-55-specification-port-2015.pdf' },
              { name: 'Manual de Instrumento', path: '/pdf/minimac-ii-instrument-2023-portuguese.pdf' }
            ],
            image: minimacIiImg
          },
          {
            name: 'MultiMac® SM',
            desc: 'Pode operar com até dois canais de teste individualmente configurados. Para inspecionar material contínuo ou cortado, em sistemas na linha ou fora da linha. Computador industrial com software em ambiente Windows. Fornecido com software e manual de instruções de operação em português.',
            pdf: '/pdf/multimac_sm_portugues-2015-lr.pdf',
            image: multimacSmImg
          },
          {
            name: 'MultiMac®',
            desc: 'É o aparelho top de linha para esta aplicação. Pode operar com até oito canais de teste individualmente configurados. Para inspecionar material contínuo ou cortado, em sistemas na linha ou fora da linha. Computador industrial com software em ambiente Windows. Fornecido com software e manual de instruções de operação em português.',
            pdf: '/pdf/multimac-002-port-may09.pdf',
            image: multimacImg
          },
          {
            name: 'Cabeçotes com sondas rotativas Rotomac®',
            desc: 'Vários modelos de cabeçotes rotativos com duas, quatro ou seis sondas, com eletrônica de teste MultiMac para inspecionar material redondo, com diâmetros externos de 3 a 180 mm. Ideal para detectar defeitos superficiais longitudinais longos.',
            pdf: '/pdf/rotomac-rotary-2015-port.pdf',
            image: rotomacImg
          }
        ]
      }
    ]
  },
  'ultrassom': {
    title: 'Ultrassom (UT)',
    icon: <Activity size={32} />,
    description: 'Ensaios acústicos de alta frequência para caracterização interna de materiais, detecção de descontinuidades internas (porosidades, trincas, inclusões) e medição de espessura de alta precisão.',
    applications: [
      {
        id: 'portateis-defeitos',
        name: 'Aparelhos Portáteis para Detecção de Defeitos',
        desc: 'Tecnologias convencionais e Phased Array de última geração para inspeções manuais em soldas, forjados e estruturas.',
        subcategories: [
          {
            name: 'FD 510',
            desc: 'Aparelho convencional de ultrassom robusto para detecção de defeitos e medição de espessuras, com carcaça metálica à prova de água, óleo e poeira. Displays do tipo A e B Scan e calibração automática.',
            pdf: '/pdf/fd510.pdf',
            image: fd510Img
          },
          {
            name: 'FD 560',
            desc: 'Similar ao FD 510, representando o estado da arte em aparelhos convencionais de ultrassom. Possui grau de proteção IP65, displays coloridos tipos A e B Scan e bateria com autonomia de até 15 horas.',
            pdf: '/pdf/fd560.pdf',
            image: fd560Img
          }
        ]
      },
      {
        id: 'portateis-nodularidade',
        name: 'Aparelhos Portáteis para Grau de Nodularidade',
        desc: 'Sistemas dedicados para avaliação rápida e não destrutiva do grau de nodularização em peças de ferro fundido nodular.',
        subcategories: [
          {
            name: 'Demeq QSV',
            desc: 'Medidores de velocidade sônica para controle do grau de nodularidade de peças de ferro fundido nodular e vermicular. O aparelho QSV pode ser conectado a um paquímetro digital para medir a espessura da peça, aumentando a produtividade e evitando erros. A velocidade sônica estima a porcentagem de nodularidade do ferro dúctil e sua resistência mecânica. Disponível em 3 versões:\n\n• Modelo QSV B (Básico)\n• Modelo QSV DL (com Data Logger)\n• Modelo QSV DLC (com Data Logger e Paquímetro)',
            pdf: '/pdf/qsv.pdf',
            image: demeqQsvImg
          }
        ]
      },
      {
        id: 'soldas-ponto',
        name: 'Inspeção de Soldas a Ponto',
        desc: 'Equipamentos especializados para verificação e garantia de qualidade de soldas a ponto em chapas sobrepostas (altamente aplicado na indústria automotiva).',
        subcategories: [
          {
            name: 'UT/x Spotweld Phased Array Inspector',
            desc: 'Com 64 canais de teste, opera no Sistema Operacional Windows® 10 (64 Bits). Mede o diâmetro e a área da lentilha, classificando automaticamente o ponto de solda. Suporta migração de planos de inspeção atuais de aparelhos ScanMaster.',
            pdf: '/pdf/utx.pdf',
            image: utxSpotweldImg
          },
          {
            name: 'Interface UT/Mate com notebook',
            desc: 'Software específico para inspeção de soldas a ponto nas indústrias automobilística e ferroviária. Classifica o ponto automaticamente (aprovado/reprovado, ponto fino, pequeno, sem solda, colado, queimado) e gera relatórios estatísticos. Fornecido com software e manual em português.',
            pdf: '/pdf/utmate.pdf',
            image: utmateImg
          },
          {
            name: 'UT/Pro',
            desc: 'Solução robusta e portátil para ambientes industriais severos. Tela sensível ao toque que responde mesmo com mãos molhadas ou luvas, alça ergonômica integrada, peso de 2,3 kg e bateria para mais de 8 horas de uso contínuo.',
            pdf: '/pdf/utpro.pdf',
            image: utproImg
          }
        ]
      },
      {
        id: 'sistemas-tubos-barras',
        name: 'Sistemas Automáticos de Inspeção de Tubos e Barras',
        desc: 'Sistemas industriais integrados e turnkey para inspeção automática volumétrica em alta velocidade na indústria siderúrgica.',
        subcategories: [
          {
            name: 'Echomac FD-4E',
            desc: 'Eletrônica multi-canais para detecção de defeitos e medição de espessuras (em linha ou fora). Até 32 canais independentes por chassi, curvas DAC de 16 pontos e software Echohunter Windows. Utilizado em sistemas de imersão, jatos de água ou cabeçotes rotativos. Software e manual em português.',
            pdf: '/pdf/echomac-fd4e.pdf',
            image: echomacFd4eImg
          },
          {
            name: 'Echomac FD-6 / 6A',
            desc: 'Aparelho de alta performance e top de linha da família Echomac para aplicações siderúrgicas severas.',
            pdf: '/pdf/echomac-fd6.pdf',
            image: echomacFd6Img
          },
          {
            name: 'Echomac PA',
            desc: 'Eletrônica phased array de alta velocidade de processamento. Permite gerar registros completos através de displays tipo A-scan, B-scan e C-scan.',
            pdf: '/pdf/echomac-pa.pdf',
            image: echomacPaImg
          },
          {
            name: 'Cabeçotes rotativos',
            desc: 'Modelos para inspecionar material redondo (Ø 5 a 500 mm) com até 48 elementos de transdutores. Atende aos requisitos normativos das especificações API 5CT e 5L para tubos OCTG e barras.',
            pdf: '/pdf/cabecotes-rotativos.pdf',
            image: cabecotesRotativosNewImg
          },
          {
            name: 'Monitor de remoção do cordão interno de tubos com costura',
            desc: 'Detecta instantaneamente a não remoção do cordão interno de solda na formadora. A eletrônica Echomac mapeia o perfil do cordão e aciona um alarme acústico ou para a formadora na ocorrência do defeito.',
            pdf: '/pdf/monitor-cordao.pdf',
            image: monitorCordaoImg
          },
          {
            name: 'Sistemas phased array para formadoras de tubos com costura',
            desc: 'Para instalação em formadora, monitorando o cordão interno e defeitos típicos. Consiste em uma eletrônica Echomac phased array e robô Fanuc de 5 eixos, com bubbler único e sapatas de troca rápida.',
            pdf: '/pdf/fanuc-tubos.pdf',
            image: fanucTubosImg
          },
          {
            name: 'Sistema phased array para detecção de defeitos em barras redondas',
            desc: 'Detecção de descontinuidades superficiais e internas a velocidades de até 2 m/s. Três opções de sistemas cobrindo a faixa de diâmetros de 10 a 254 mm.',
            pdf: '/pdf/phased-array-barras.pdf',
            image: phasedArrayBarrasImg
          }
        ]
      },
      {
        id: 'tanques-imersao',
        name: 'Sistemas de Tanques de Imersão',
        desc: 'Tanques industriais automatizados para inspeção completa e mapeamento C-Scan de componentes complexos via ultrassom por imersão.',
        subcategories: [
          {
            name: 'Tanques de imersão',
            desc: '• Para inspeção de discos, lâminas e palhetas de turbinas de aviação, rolamentos, peças de materiais compostos, barras/tarugos, placas não ferromagnéticas, etc.\n• Para operação contínua em ambientes de produção e laboratório com ultrassom convencional ou phased array.\n• Aprovado para uso em ambientes de produção e MRO pelas empresas GE Aviation, Rolls Royce, Pratt & Whitney, entre outras.\n• Mecânica de elevada precisão/velocidade e manipuladores motorizados de alta resolução.\n• Software com parada automática na detecção de defeitos e robôs opcionais para carregamento/descarregamento.',
            pdf: '/pdf/tanques-imersao.pdf',
            image: tanqueImersaoImg
          }
        ]
      },
      {
        id: 'controle-nodularidade',
        name: 'Sistemas para controle do grau de nodularidade em ferros fundidos nodular',
        desc: 'Equipamentos industriais automatizados em linha de produção para monitoramento e controle estatístico do grau de nodularização em autopeças e componentes de segurança crítica de ferro fundido nodular.',
        subcategories: [
          {
            name: 'Echomac VM',
            desc: 'Medição de velocidade sônica, espessura e/ou detecção de defeitos. Testa duas peças simultaneamente em estações de teste separadas. Inclui 4 canais de teste (2 para velocidade e 2 para detecção de defeitos) com tempo de avaliação menor de 2 segundos.',
            pdfs: [
              { name: 'Especificações', path: '/pdf/echomac-vm-spec.pdf' },
              { name: 'Folheto', path: '/pdf/echomac-vm.pdf' }
            ],
            image: echomacVmCabinetImg
          },
          {
            name: 'Sistema Manual',
            desc: 'Consiste de um aparelho Echomac VM e um tanque com dispositivo de teste. A carga e descarga das peças é realizada manualmente pelo operador.',
            image: nodularidadeManualImg
          },
          {
            name: 'Sistema Automático',
            desc: 'Controla até 900 peças por hora, realizando a marcação e separação automática de peças aprovadas e reprovadas.',
            image: nodularidadeAutomaticoImg
          }
        ]
      },
      {
        id: 'produtos-ferroviarios',
        name: 'Sistemas para Produtos Ferroviários',
        desc: 'Sistemas de ultrassom automáticos e manuais para detecção de trincas internas em trilhos e rodas de trens.',
        subcategories: [
          {
            name: 'Modelo SFB-50',
            desc: 'Para trilhos ferroviários, projetado para instalação em carros de manutenção, permitindo inspeções a velocidades de até 30 Km/h com registro total de resultados.',
            pdf: '/pdf/sfb50.pdf',
            image: sfb50Img
          },
          {
            name: 'Modelo SFB-100',
            desc: 'Para trilhos ferroviários, totalmente automático, com 1 a 24 canais de teste, permitindo inspeções a velocidades de até 90 Km/h com registro total de resultados.',
            pdf: '/pdf/sfb100.pdf',
            image: sfb100Img
          },
          {
            name: 'Modelo AS-220w',
            desc: 'Sistema dedicado de ultrassom para inspeção de rodas ferroviárias.',
            image: as220wImg
          },
          {
            name: 'Modelo AS-220a',
            desc: 'Sistema dedicado de ultrassom para inspeção de eixos ferroviários.',
            pdf: '/pdf/as220a.pdf',
            image: as220aImg
          }
        ]
      },
      {
        id: 'tarugos-chapas',
        name: 'Sistemas para Tarugos, Chapas e Tiras',
        desc: 'Soluções robustas de portal ou pórticos com múltiplos canais de ultrassom para controle de sanidade volumétrica.',
        subcategories: [
          {
            name: 'Sistema para tarugos redondos',
            desc: 'Sistema especial combinado para detectar defeitos superficiais, sub-superficiais e internos em tarugos redondos. Consiste de um cabeçote rotativo de ensaios por correntes parasitas para detectar defeitos superficiais e um cabeçote rotativo de ultrassom para detectar defeitos sub-superficiais e internos.',
            pdf: '/pdf/tarugos-redondos.pdf',
            image: tarugosRedondosImg
          },
          {
            name: 'Sistema para chapas e tiras metálicas, Modelo AS-200 P',
            desc: 'Sistema robusto de portal para inspeção automática de chapas e tiras metálicas em ambiente siderúrgico de alta performance.',
            pdf: '/pdf/as200p.pdf',
            image: chapasTirasAs200pImg
          }
        ]
      },
      {
        id: 'acessorios-ut',
        name: 'Transdutores, Cabos e Blocos Padrões',
        desc: 'Acessórios e consumíveis de alta performance para reposição e calibração de todos os sistemas END.',
        subcategories: [
          {
            name: 'Transdutores',
            desc: 'Normais, angulares e de duplo cristal, com conectores Lemo, BNC e Microdot, para ensaios manuais e por imersão.',
            image: transdutoresImg
          },
          {
            name: 'Cabos para Transdutores',
            desc: 'Cabos coaxiais de alta performance com conectores Lemo, BNC e Microdot.'
          },
          {
            name: 'Blocos Padrões',
            desc: 'Blocos de calibração tipo V1, V2 e escalonado, fornecidos com estojo protetor e Certificado de Calibração.',
            image: blocosPadroesImg
          }
        ]
      }
    ]
  },
  'campo-magnetico': {
    title: 'Campo Magnético de Fuga (Magnetic Flux Leakage)',
    icon: <Magnet size={32} />,
    description: 'Tecnologia especializada na detecção de descontinuidades volumétricas em materiais ferromagnéticos de alta espessura. Ideal para tubos espessos, barras e chapas onde outros métodos enfrentam limitações.',
    applications: [
      {
        id: 'inspecao-tubos-barras',
        name: 'Sistema para detecção de defeitos em tubos de grandes dimensões',
        desc: 'Equipamentos industriais robustos que magnetizam o material e analisam o fluxo de fuga para determinar com exatidão a profundidade e o tamanho de defeitos internos e externos.',
        subcategories: [
          {
            name: 'Rotoflux DC',
            desc: 'Sistema Rotoflux DC para detecção de defeitos longitudinais e transversais, nos diâmetros externo e interno e em todo o corpo de tubos de materiais ferromagnéticos de grandes diâmetros e espessuras de parede.\n\nExcelente sensibilidade, possibilitando a detecção de defeitos com profundidades a partir de 5% da espessura da parede tanto no diâmetro externo como no diâmetro interno, dependendo do material e suas condições superficiais.\n\nDiferenciação de defeitos detectados nos diâmetros externo e interno. Três sistemas disponíveis para tubos com diâmetros externos de 30 a 500 mm. Eletrônica de teste com base num computador industrial com software em ambiente Windows.\n\nFornecido com software e manual de instruções de operação em português.',
            pdf: '/pdf/rotoflux-dc.pdf',
            image: rotofluxDcImg
          }
        ]
      },
      {
        id: 'sistemas-siderurgicos',
        name: 'Sistema para detecção de defeitos superficiais em barras pretas laminadas a quente',
        desc: 'Desenvolvidos em parceria com a MAC (Magnetic Analysis Corporation), integram-se diretamente ao fluxo fabril de alta velocidade com diagnóstico em tempo real.',
        subcategories: [
          {
            name: 'Rotoflux AC',
            desc: 'Sistema Rotoflux AC para detecção de defeitos superficiais longitudinais a partir de 0,1 mm de profundidade em barras pretas laminadas a quente com diâmetros de 15 a 180 mm.\n\nCabeçote rotativo com 2 sondas com 8 elementos cada uma girando sobre a barra e com cobertura de 160 mm por revolução.\n\nVelocidade de giro de até 1500 rpm, dependendo do diâmetro da barra e velocidade máxima de até 4m/s.\n\nFornecido com software e manual de instruções de operação em português.',
            pdf: '/pdf/rotoflux-ac.pdf',
            image: rotofluxAcImg
          }
        ]
      }
    ]
  },
  'particulas-magneticas': {
    title: 'Partículas Magnéticas (MPI)',
    icon: <Target size={32} />,
    description: 'Método rápido e visual para identificação de descontinuidades superficiais e subsuperficiais em peças ferromagnéticas por meio do acúmulo de partículas ferrosas atraídas por campos magnéticos induzidos.',
    applications: [
      {
        id: 'maquinas-sistemas-trincas',
        name: 'Máquinas e Sistemas Detectores de Trincas',
        desc: 'Bancadas magnéticas estacionárias industriais com controle de corrente para testes rápidos em larga escala (autopeças, forjados e fundidos).',
        subcategories: [
          {
            name: 'Máquinas e sistemas detectoras de trincas',
            desc: 'Para detecção de trincas e outras descontinuidades superficiais em peças de materiais ferromagnéticos.\n\nMáquinas microprocessadas horizontais e verticais:\n• Com magnetização por corrente alternada ou contínua de meia onda ou onda completa\n• Com magnetização por técnica de contato direto, condutor central, bobina e/ou eletroímãs\n• Com ou sem desmagnetização incorporada',
            pdf: '/pdf/ensaios-particulas-magneticas.pdf',
            image: bancadaMpiImg
          }
        ]
      },
      {
        id: 'medidor-campo',
        name: 'Medidor Digital de Campo Magnético (Gaussímetro)',
        desc: 'Instrumentos eletrônicos de precisão para medição e calibração da intensidade do campo magnético induzido.',
        subcategories: [
          {
            name: 'Medidor Digital de Campo Magnético (Gaussímetro)',
            desc: 'Medidor digital de campo magnético (gaussímetro), modelo BST 600, para medir campos magnéticos contínuos e alternados (até 200 Hz) em Gauss (G) ou miliTesla (mT). Escalas de 0 a 2.000 G e de 0 a 20.000 G. Função “hold” para mostrar o valor máximo da medição. Alimentação elétrica por bateria de 9V com autonomia de 20 horas de uso contínuo ou por adaptador de 110/220V. Inclui sonda de efeito Hall, bateria de 9V, adaptador 110/220V, bolsa de transporte, manual de instruções em português e certificado de calibração.',
            pdf: '/pdf/gaussimetro-bst600.pdf',
            image: gaussimetroBst600Img
          }
        ]
      },
      {
        id: 'magnetismo-residual',
        name: 'Indicador de Magnetismo Residual',
        desc: 'Dispositivos de controle para verificar se a peça foi devidamente desmagnetizada pós-ensaio comercial.',
        subcategories: [
          {
            name: 'Indicador de Magnetismo Residual',
            desc: 'Indicador de magnetismo residual, com escala de +/- 10 Gauss e resolução de +/- 1 Gauss.',
            image: indicadorMagnetismoResidualImg
          }
        ]
      },
      {
        id: 'medidor-luz-uv',
        name: 'Medidor Digital de Luz Ultravioleta (Luz Negra)',
        desc: 'Radiômetros calibrados para garantir que as cabines de inspeção fluorescente operem dentro da irradiância normativa mínima.',
        subcategories: [
          {
            name: 'Medidor Digital de Luz Ultravioleta (Luz Negra)',
            desc: 'Medidor digital de luz ultravioleta (luz negra), modelo MLN-21, com escalas de 0 a 1.999 µW/cm2 e de 2.000 a 19.990 µW/cm2. Inclui bateria de 9V, estojo, instruções de operação e Certificado de Calibração em 365 nm.',
            image: medidorLuzNegraMln21Img
          }
        ]
      },
      {
        id: 'padroes-iqq',
        name: 'Padrões Tipo IQQ com Defeitos Artificiais',
        desc: 'Blocos de referência e tiras indicadoras para aferição rápida de sensibilidade e direção do campo magnético.',
        subcategories: [
          {
            name: 'Modelo CX-230',
            desc: 'Defeitos artificiais em forma de cruz e círculo de 15 micra de profundidade em lâmina de 50 micra de espessura.',
            image: padraoCx230Img
          },
          {
            name: 'Modelo CX4-230',
            desc: 'Similar ao CX-230, porém para ser dividido em 4 padrões individuais tamanho miniatura.',
            image: padraoCx4230Img
          }
        ]
      }
    ]
  },
  'laser': {
    title: 'Inspeção Geométrica a Laser',
    icon: <Cpu size={32} />,
    description: 'Tecnologia ótica a laser de alta precisão focada no monitoramento geométrico do cordão de solda em tempo real durante o processo de perfilamento.',
    applications: [
      {
        id: 'inspecao-laser-tubos',
        name: 'Inspeção a Laser em Formadoras de Tubos com Costura',
        desc: 'Sistemas a laser de alta precisão desenvolvidos para o controle de qualidade do cordão de solda em formadoras de tubos em tempo real.',
        subcategories: [
          {
            name: 'Sistema WI 2000 / 3000p',
            desc: 'Sistema de inspeção a laser WI 2000 / 3000p desenvolvido exclusivamente para controlar a qualidade da solda na própria formadora de tubos com costura.\n\nUma câmera de vídeo de alta velocidade em conjunto com a captura e análises rápida de dados possibilita a detecção de defeitos a partir de 0,015 mm, incluindo mordeduras, solda abaulada, cordão de solda muito alto, deflexão, possível junta fria, desencontro de bordas e outros.',
            pdf: '/pdf/xiris-laser-tubos.pdf',
            image: xirisLaserTubosImg
          }
        ]
      }
    ]
  }
};

const Produtos = () => {
  const { techId, subcatId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Set default tech/subcat active keys
  const activeTechKey = techId && techData[techId] ? techId : 'correntes-parasitas';
  const activeTech = techData[activeTechKey];
  const activeSubcat = activeTech.applications.find(app => app.id === subcatId) || activeTech.applications[0];

  const [prevTechKey, setPrevTechKey] = useState(activeTechKey);
  const [expandedCategory, setExpandedCategory] = useState(activeTechKey);

  if (activeTechKey !== prevTechKey) {
    setPrevTechKey(activeTechKey);
    setExpandedCategory(activeTechKey);
  }

  // Auto redirect /produtos to default subcategory
  useEffect(() => {
    if (!techId || !subcatId || !techData[techId] || !techData[techId].applications.find(app => app.id === subcatId)) {
      navigate(`/produtos/${activeTechKey}/${activeTech.applications[0].id}`, { replace: true });
    }
  }, [techId, subcatId, activeTechKey, activeTech, navigate]);

  // Handle location state redirect from navbar/footer
  useEffect(() => {
    if (location.state && location.state.tab && techData[location.state.tab]) {
      const tabKey = location.state.tab;
      const firstSub = techData[tabKey].applications[0];
      if (firstSub) {
        navigate(`/produtos/${tabKey}/${firstSub.id}`, { replace: true });
      }
    }
  }, [location.state, navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [techId, subcatId]);

  const handleCategoryClick = (key) => {
    if (expandedCategory === key) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(key);
    }
  };

  return (
    <div className="produtos-page">
      <div className="produtos-hero">
        <div className="container produtos-hero-inner">
          <h1 className="produtos-title animate-slide-up">
            Nossos <span className="gradient-text">Produtos</span>
          </h1>
          <p className="produtos-subtitle animate-slide-up" style={{ animationDelay: '100ms' }}>
            Portfólio completo de equipamentos para Ensaios Não Destrutivos (END) em parceria com líderes globais.
          </p>
        </div>
      </div>

      <div className="container main-content">
        <div className="tech-nav">
          {Object.keys(techData).map((key) => {
            const isExpanded = expandedCategory === key;
            const isActiveCategory = activeTechKey === key;
            return (
              <div className="tech-nav-group" key={key}>
                <button
                  className={`tech-nav-btn glass ${isActiveCategory ? 'active' : ''}`}
                  onClick={() => handleCategoryClick(key)}
                >
                  <span className="btn-icon">{techData[key].icon}</span>
                  <span className="btn-title">{techData[key].title.split(' (')[0]}</span>
                  <ChevronDown size={16} className={`arrow-indicator ${isExpanded ? 'rotated' : ''}`} />
                </button>
                <div className={`tech-subnav-list ${isExpanded ? 'expanded' : ''}`}>
                  {techData[key].applications.map((app) => (
                    <Link
                      key={app.id}
                      to={`/produtos/${key}/${app.id}`}
                      className={`tech-subnav-item ${subcatId === app.id ? 'active' : ''}`}
                    >
                      <ChevronRight size={12} className="bullet-icon" />
                      <span>{app.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="tech-content-column">
          <div className="tech-details glass-card animate-fade-in">
            <div className="details-header">
              <div className="header-icon-wrapper">
                {activeTech.icon}
              </div>
              <div>
                <div className="category-breadcrumb">
                  {activeTech.title}
                </div>
                <h2 className="tech-title">{activeSubcat.name}</h2>
              </div>
            </div>

            <div className="selected-app-content">
              <p className="tech-desc" style={{ marginBottom: '2rem' }}>{activeSubcat.desc}</p>
              
              {activeSubcat.pdf && !activeSubcat.subcategories && (
                <div className="direct-pdf-banner">
                  <div className="pdf-info">
                    <FileText size={24} className="pdf-icon" />
                    <div>
                      <h4>Catálogo Técnico Completo</h4>
                      <p>Faça o download do arquivo PDF explicativo com as especificações deste produto.</p>
                    </div>
                  </div>
                  <a 
                    href={activeSubcat.pdf} 
                    download 
                    className="btn btn-primary"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                  >
                    <Download size={18} /> Baixar PDF
                  </a>
                </div>
              )}

              {activeSubcat.subcategories && (
                <div className="subcategories-section" style={{ marginTop: '2rem' }}>
                  <h3 className="section-subtitle">Modelos Disponíveis</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {activeSubcat.subcategories.map((sub, idx) => (
                      <div key={idx} className="sub-model-detail-card glass" style={{ display: 'flex', gap: '1.5rem', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.05)', background: 'rgba(10, 25, 47, 0.3)', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                        <div className="product-card-image-wrapper">
                          {sub.image ? (
                            <img src={sub.image} alt={sub.name} className="product-card-img" />
                          ) : (
                            <div className="product-card-img placeholder">
                              <Cpu size={32} className="placeholder-icon" />
                              <span>POLIMITER</span>
                            </div>
                          )}
                        </div>
                        <div className="product-card-content" style={{ flex: '1 1 300px' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '0.75rem' }}>
                            <h4 style={{ margin: 0, color: '#fff', fontSize: '1.1rem', fontWeight: '600' }}>{sub.name}</h4>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                              {sub.pdf && (
                                <a 
                                  href={sub.pdf} 
                                  download 
                                  className="btn btn-outline" 
                                  style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', height: 'auto' }}
                                >
                                  <Download size={14} /> Download PDF
                                </a>
                              )}
                              {sub.pdfs && sub.pdfs.map((item, pIdx) => (
                                <a 
                                  key={pIdx}
                                  href={item.path} 
                                  download 
                                  className="btn btn-outline" 
                                  style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', height: 'auto' }}
                                >
                                  <Download size={14} /> {item.name}
                                </a>
                              ))}
                            </div>
                          </div>
                          <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5', whiteSpace: 'pre-line' }}>{sub.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="compliance-banner glass-card">
            <div className="banner-content">
              <ShieldAlert size={40} className="banner-icon" />
              <div>
                <h3>Garantia Normativa e Calibração</h3>
                <p>
                  Todos os aparelhos fornecidos pela Polimeter atendem estritamente às normas técnicas aplicáveis (ABNT, ASTM, ISO, API, ASME). Oferecemos suporte completo para a validação de procedimentos e assistência de especialistas certificados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produtos;

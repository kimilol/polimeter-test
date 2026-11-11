import { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import './BannerSlider.css';

const DEFAULT_BANNERS = [
  {
    id: 'institucional',
    titleLead: 'Tecnologia e Precisão em',
    titleHighlight: 'Ensaios Não Destrutivos',
    description:
      'Soluções completas em inspeção industrial, qualidade e confiabilidade para os mais diversos segmentos.',
    ctaText: 'Conheça a Polimeter',
    ctaLink: '/#sobre',
    image: '/assets/banners/banner-institucional.webp',
    alt: 'Ambiente industrial moderno de inspeção automatizada com Ensaios Não Destrutivos'
  },
  {
    id: 'correntes-parasitas',
    titleLead: 'Precisão na Inspeção.',
    titleHighlight: 'Confiança nos Resultados.',
    description:
      'Equipamentos e soluções para inspeção por correntes parasitas com alto desempenho.',
    ctaText: 'Ver Produtos',
    ctaLink: '/produtos/correntes-parasitas/medidores-condutividade',
    image: '/assets/banners/banner-correntes-parasitas.webp',
    alt: 'Equipamento de inspeção por correntes parasitas, bobinas envolventes e componentes metálicos'
  },
  {
    id: 'ultrassom',
    titleLead: 'Inspeção Ultrassônica',
    titleHighlight: 'de Alta Performance',
    description:
      'Tecnologia avançada para detectar descontinuidades e garantir a integridade dos materiais.',
    ctaText: 'Conheça as Soluções',
    ctaLink: '/produtos/ultrassom/portateis-nodularidade',
    image: '/assets/banners/banner-ultrassom.webp',
    alt: 'Equipamento industrial portátil de ultrassom e transdutor inspecionando tubulação metálica'
  },
  {
    id: 'servicos-cursos',
    titleLead: 'Conhecimento e Tecnologia',
    titleHighlight: 'para a Indústria',
    description:
      'Capacitação profissional e serviços especializados em ensaios não destrutivos.',
    ctaText: 'Conheça Nossos Serviços',
    ctaLink: '/servicos',
    image: '/assets/banners/banner-servicos-cursos.webp',
    alt: 'Especialista realizando treinamento e demonstração técnica em laboratório de END'
  }
];

const BannerSlider = ({ banners = DEFAULT_BANNERS, autoPlayInterval = 6500 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);
  const totalSlides = banners.length;

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isPaused || totalSlides <= 1) return undefined;

    const timer = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(timer);
  }, [isPaused, totalSlides, goToNext, autoPlayInterval]);

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      goToNext();
    } else if (event.key === 'ArrowLeft') {
      goToPrev();
    }
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(deltaX) > 45) {
      if (deltaX < 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
  };

  if (totalSlides === 0) return null;

  return (
    <section
      className="banner-slider-section"
      aria-roledescription="carousel"
      aria-label="Destaques Polimeter"
    >
      <div
        className="banner-slider"
        tabIndex={0}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={() => setIsPaused(false)}
        onKeyDown={handleKeyDown}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="banner-slides-track">
          {banners.map((slide, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={slide.id}
                className={`banner-slide ${isActive ? 'active' : ''}`}
                aria-hidden={!isActive}
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="banner-bg-image"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  fetchPriority={index === 0 ? 'high' : 'auto'}
                  decoding="async"
                />
                <div className="banner-overlay" />
                <div className="banner-tech-accents" />

                <div className="banner-content-wrapper">
                  <div className="container banner-content-container">
                    <div className="banner-text-block">
                      <h2 className="banner-title">
                        {slide.titleLead}{' '}
                        <span className="banner-title-accent">{slide.titleHighlight}</span>
                      </h2>

                      <div className="banner-pulse-divider" aria-hidden="true">
                        <svg viewBox="0 0 240 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <line x1="0" y1="9" x2="88" y2="9" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.85" />
                          <polyline
                            points="88,9 95,9 99,3 105,15 111,1 116,13 120,9 128,9"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <line x1="128" y1="9" x2="240" y2="9" stroke={`url(#bannerLineFade-${slide.id})`} strokeWidth="1.5" />
                          <defs>
                            <linearGradient id={`bannerLineFade-${slide.id}`} x1="128" y1="9" x2="240" y2="9" gradientUnits="userSpaceOnUse">
                              <stop offset="0%" stopColor="currentColor" stopOpacity="0.85" />
                              <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>

                      <p className="banner-description">{slide.description}</p>

                      <Link
                        to={slide.ctaLink}
                        className="banner-cta"
                        tabIndex={isActive ? 0 : -1}
                      >
                        <span>{slide.ctaText}</span>
                        <ArrowRight size={18} className="banner-cta-icon" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {totalSlides > 1 && (
          <>
            <button
              type="button"
              className="banner-nav-arrow banner-nav-prev"
              onClick={goToPrev}
              aria-label="Banner anterior"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              type="button"
              className="banner-nav-arrow banner-nav-next"
              onClick={goToNext}
              aria-label="Próximo banner"
            >
              <ChevronRight size={22} />
            </button>

            <div className="banner-indicators" role="tablist" aria-label="Selecionar banner">
              {banners.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  role="tab"
                  aria-selected={index === currentIndex}
                  aria-label={`Ir para banner ${index + 1}: ${slide.titleLead}`}
                  className={`banner-indicator ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default BannerSlider;

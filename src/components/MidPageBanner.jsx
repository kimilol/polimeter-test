import { ChevronRight } from 'lucide-react';
import './MidPageBanner.css';

const MidPageBanner = ({ title, subtitle, buttonText, buttonLink, theme = 'default' }) => {
  return (
    <section className={`mid-page-banner ${theme}`}>
      <div className="banner-bg-glow"></div>
      <div className="container banner-container reveal">
        <h2 className="banner-title">{title}</h2>
        {subtitle && <p className="banner-subtitle">{subtitle}</p>}
        {buttonText && buttonLink && (
          <a 
            href={buttonLink} 
            className="btn btn-primary btn-large banner-btn"
            {...(buttonLink.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {buttonText} <ChevronRight size={20} />
          </a>
        )}
      </div>
    </section>
  );
};

export default MidPageBanner;

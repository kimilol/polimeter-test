import { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import Diferenciais from '../components/Diferenciais';
import MidPageBanner from '../components/MidPageBanner';
import Features from '../components/Features';
import Methodology from '../components/Methodology';
import PartnersHome from '../components/PartnersHome';
import About from '../components/About';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';

const Home = () => {
  useEffect(() => {
    // Scroll reveal observer
    const revealCallbacks = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    };

    const revealOptions = {
      root: null,
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(revealCallbacks, revealOptions);
    
    document.querySelectorAll('.reveal').forEach((element) => {
      revealObserver.observe(element);
    });

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  return (
    <>
      <HeroSection />
      
      <Diferenciais />
      
      <MidPageBanner 
        title="A CONFIABILIDADE DO SEU PRODUTO FINAL COMEÇA NA PRECISÃO DO NOSSO SISTEMA DE INSPEÇÃO." 
        theme="default"
      />
      
      <Features />
      
      <MidPageBanner 
        title="MINIMIZE RISCOS OPERACIONAIS E EVITE PARADAS NÃO PROGRAMADAS."
        subtitle="A falha na detecção de defeitos compromete a segurança e gera prejuízos milionários. Implemente sistemas de inspeção validados pelo mercado."
        buttonText="Falar com Consultor Técnico"
        buttonLink="https://wa.me/5511976393318?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20produtos%20da%20Polimeter"
        theme="highlight"
      />
      
      <Methodology />
      
      <PartnersHome />
      
      <MidPageBanner 
        title="O CUSTO DA NÃO-QUALIDADE SUPERA O INVESTIMENTO EM TECNOLOGIA."
        subtitle="Na indústria Aeroespacial, Automotiva, Ferroviário, Siderúrgica e de Óleo e Gás, a tolerância a falhas é zero. Equipamentos obsoletos ou sem calibração adequada expõem sua empresa a recalls, perda de contratos e riscos de segurança. A Polimeter oferece a segurança jurídica e técnica que sua operação exige."
        buttonText="Agendar Reunião de Diagnóstico"
        buttonLink="https://wa.me/5511976393318?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20produtos%20da%20Polimeter"
        theme="accent"
      />
      
      <About />
      
      <ContactForm />
      
      <FAQ />
    </>
  );
};

export default Home;

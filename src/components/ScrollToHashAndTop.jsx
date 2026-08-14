import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHashAndTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Find element by id (hash starts with #)
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Wait briefly for the DOM to render
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  // Global Scroll Reveal Observer for all pages
  useEffect(() => {
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
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(revealCallbacks, revealOptions);
    
    // Give components a small moment to mount before querySelecting
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((element) => {
        revealObserver.observe(element);
      });
    }, 150);

    return () => {
      clearTimeout(timer);
      revealObserver.disconnect();
    };
  }, [pathname]);

  return null;
};

export default ScrollToHashAndTop;

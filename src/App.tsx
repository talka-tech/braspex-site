import React, { useEffect, useState } from 'react';
import './styles/styles.css';

// Componentes
import Header from './components/Header';
import HeroComponent from './components/HeroComponent';
import VantagensComponent from './components/VantagensComponent';
import Parceiros from './components/Parceiros';
import ComparacaoComponent from './components/ComparacaoComponent';
import KitsComponent from './components/KitsComponent';
import FluxoComponent from './components/FluxoComponent';
import QRCodeComponent from './components/QRCodeComponent';
import FooterComponent from './components/FooterComponent';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simula carregamento da página
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    // Adiciona offset para navegação com header fixo
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          const headerHeight = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className={`App ${isLoaded ? 'page-load' : ''}`}>
      <Header />
      <main className="main-content">
        <HeroComponent />
        <Parceiros />
        {/*<ComparacaoComponent />*/}
        <KitsComponent />
        <VantagensComponent />
        <FluxoComponent />
        <QRCodeComponent />
      </main>
      <FooterComponent />
    </div>
  );
};

export default App;
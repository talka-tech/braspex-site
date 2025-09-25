// touched: refresh import resolution
import React, { useState, useEffect } from 'react';
import { Buildings, Leaf, Lightning, Trophy, Shield } from 'phosphor-react';

const HeroComponent: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    '/imagens/hero-reference.png',
    '/imagens/galpao.png',
    '/imagens/chassismetalicos.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => setCurrentSlide(index);

  return (
    <section className="hero-banner hero-unified" style={{ marginTop: 0, paddingTop: 0 }}>
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div key={index} className={`hero-slide ${index === currentSlide ? 'active' : ''}`}>
            <img src={slide} alt={`Slide ${index + 1}`} className="hero-image hero-image-dimmed" />
            <div className="hero-overlay hero-overlay-enhanced"></div>
          </div>
        ))}
      </div>
      <div className="hero-navigation">
        {slides.map((_, index) => (
          <button key={index} className={`nav-dot ${index === currentSlide ? 'active' : ''}`} onClick={() => goToSlide(index)} />
        ))}
      </div>
      <div className="hero-container hero-content-overlay">
        <div className="hero-content hero-content-light">
          <div className="hero-badge" style={{ background: '#22d3ee', color: '#1e293b' }}>
            <Trophy className="badge-icon" />
            Líder em Construções Industriais
          </div>
          <h1 className="hero-title hero-title-light" style={{ color: '#fff', background: 'transparent' }}>
            Construções Industriais com <span style={{ color: '#fff', fontWeight: 'bold', background: 'transparent' }}>Tecnologia Avançada</span>
          </h1>
          <p className="hero-description hero-description-light" style={{ color: '#fff', background: 'transparent' }}>
            Transformamos ideias em realidade através de soluções completas em construção industrial, combinando eficiência, sustentabilidade e inovação tecnológica para criar espaços industriais de alta performance.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" style={{ color: '#fff' }}>Solicitar Orçamento</button>
            <button className="btn-secondary btn-secondary-light" style={{ color: '#fff' }}>Conhecer Projetos</button>
          </div>
        </div>
        <div className="hero-features hero-features-compact">
          <div className="feature-card feature-card-compact" style={{ color: '#fff' }}>
            <Buildings className="feature-icon" color="#22d3ee" />
            <h3 style={{ color: '#fff' }}>Construção Rápida</h3>
            <p style={{ color: '#fff' }}>Estruturas metálicas pré-fabricadas que reduzem o tempo de obra em até 60%, garantindo agilidade sem comprometer a qualidade</p>
          </div>
          <div className="feature-card feature-card-compact" style={{ color: '#fff' }}>
            <Leaf className="feature-icon" color="#22c55e" />
            <h3 style={{ color: '#fff' }}>Sustentabilidade</h3>
            <p style={{ color: '#fff' }}>Materiais ecológicos e processos sustentáveis que respeitam o meio ambiente e reduzem o impacto ambiental</p>
          </div>
          <div className="feature-card feature-card-compact" style={{ color: '#fff' }}>
            <Lightning className="feature-icon" color="#f59e0b" />
            <h3 style={{ color: '#fff' }}>Eficiência Energética</h3>
            <p style={{ color: '#fff' }}>Sistemas inteligentes e isolamento térmico avançado que otimizam o consumo energético e reduzem custos operacionais</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;

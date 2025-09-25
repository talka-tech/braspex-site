import React, { useState } from 'react';
import { Lightning, Drop, Wrench, ArrowRight, X } from 'phosphor-react';

interface Kit {
  image: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ComponentType<any>;
  color: string;
  alt: string;
}

const kits: Kit[] = [
  { 
    image: '/imagens/kitsbraspex.png', 
    title: 'Kit Elétrico Industrial', 
    description: 'Soluções completas para instalações elétricas industriais com alta performance e segurança.',
    features: ['Componentes certificados', 'Instalação rápida', 'Suporte técnico 24h'],
    icon: Lightning,
    color: '#f59e0b',
    alt: 'Kit Elétrico' 
  },
  { 
    image: '/imagens/multicamadaairtecno.png', 
    title: 'Kit Hidráulico Multicamada', 
    description: 'Sistemas hidráulicos com tecnologia multicamada para máxima durabilidade e eficiência.',
    features: ['Tecnologia multicamada', 'Resistente à corrosão', 'Baixa manutenção'],
    icon: Drop,
    color: '#3b82f6',
    alt: 'Kit Hidráulico' 
  },
  { 
    image: '/imagens/imagemppr.jpg.png', 
    title: 'Kit PPR Avançado', 
    description: 'Tubulações em PPR com alta resistência térmica e durabilidade superior.',
    features: ['Alta resistência térmica', 'Durabilidade superior', 'Fácil instalação'],
    icon: Wrench,
    color: '#10b981',
    alt: 'Kit PPR' 
  }
];

const KitsComponent: React.FC = () => {
  return (
    <section id="kits" className="kits-modern kits-gallery">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Nossos Kits Industrializados</h2>
          <p className="section-subtitle">Soluções completas para cada necessidade do seu projeto</p>
        </div>
        <div className="kits-gallery-grid">
          {kits.map((kit, idx) => {
            const IconComponent = kit.icon;
            return (
              <div key={idx} className="kit-gallery-card">
                <div className="kit-gallery-image-wrapper">
                  <img src={kit.image} alt={kit.alt} className="kit-gallery-image" />
                  <div className="kit-gallery-icon" style={{ backgroundColor: `${kit.color}20`, border: `2px solid ${kit.color}30` }}>
                    <IconComponent size={28} color={kit.color} weight="bold" />
                  </div>
                </div>
                <div className="kit-gallery-content">
                  <h3 className="kit-gallery-title">{kit.title}</h3>
                  <p className="kit-gallery-description">{kit.description}</p>
                  <ul className="kit-gallery-features">
                    {kit.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="kit-gallery-feature">
                        <span className="kit-gallery-dot" style={{ backgroundColor: kit.color }}></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KitsComponent;

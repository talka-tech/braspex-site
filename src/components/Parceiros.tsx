import React, { useEffect, useRef } from 'react';

const Parceiros: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  const parceiros = [
    { src: '/imagens/parceiro1.png', alt: 'Parceiro 1' },
    { src: '/imagens/parceiro2.png', alt: 'Parceiro 2' },
    { src: '/imagens/parceria3.png', alt: 'Parceiro 3' },
    { src: '/imagens/parceria4.png', alt: 'Parceiro 4' },
    { src: '/imagens/parceria5.png', alt: 'Parceiro 5' }
  ];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Animation logic for the carousel
    const animateCarousel = () => {
      const scrollWidth = track.scrollWidth / 2; // Half because we duplicate items
      track.style.transform = `translateX(-${scrollWidth}px)`;
      
      setTimeout(() => {
        track.style.transition = 'none';
        track.style.transform = 'translateX(0)';
        setTimeout(() => {
          track.style.transition = 'transform 20s linear';
          animateCarousel();
        }, 50);
      }, 20000);
    };

    track.style.transition = 'transform 20s linear';
    animateCarousel();
  }, []);

  return (
    <section className="parceiros">
      <div className="container">
        <h2 className="section-title">Nossos Parceiros</h2>
        <div className="parceiros-carousel">
          <div className="parceiros-track" ref={trackRef}>
            {/* Render original items */}
            {parceiros.map((parceiro, index) => (
              <img 
                key={index} 
                src={parceiro.src} 
                alt={parceiro.alt} 
                className="parceiro-logo" 
              />
            ))}
            {/* Render duplicate items for seamless loop */}
            {parceiros.map((parceiro, index) => (
              <img 
                key={`duplicate-${index}`} 
                src={parceiro.src} 
                alt={parceiro.alt} 
                className="parceiro-logo" 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Parceiros;
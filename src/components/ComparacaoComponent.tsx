import React, { useEffect, useRef } from 'react';
import { TrendUp, Clock, Recycle, Wrench } from 'phosphor-react';

const ComparacaoComponent: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartData = [
    { label: 'Economia de mão de obra', value: 65, icon: TrendUp, color: '#10b981' },
    { label: 'Redução no cronograma', value: 45, icon: Clock, color: '#3b82f6' },
    { label: 'Redução de perdas', value: 80, icon: Recycle, color: '#22c55e' },
    { label: 'Menos retrabalho', value: 85, icon: Wrench, color: '#f59e0b' }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bars = entry.target.querySelectorAll('.chart-bar-fill');
          bars.forEach((bar, index) => {
            setTimeout(() => {
              const barElement = bar as HTMLElement;
              const targetWidth = barElement.getAttribute('data-width') || '0';
              barElement.style.width = targetWidth;
            }, 300 * index);
          });
        }
      });
    }, { threshold: 0.3 });
    
    if (chartRef.current) observer.observe(chartRef.current);
    return () => { 
      const currentChart = chartRef.current;
      if (currentChart) observer.unobserve(currentChart); 
    };
  }, []);
  
  return (
    <section id="comparacao" className="comparacao-modern">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Vantagens Competitivas</h2>
          <p className="section-subtitle">Resultados comprovados que fazem a diferença</p>
        </div>
        <div className="chart-modern" ref={chartRef}>
          {chartData.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={idx} className="chart-item-modern">
                <div className="chart-item-header">
                  <IconComponent size={24} color={item.color} weight="bold" />
                  <span className="chart-label-modern">{item.label}</span>
                  <span className="chart-value-modern">{item.value}%</span>
                </div>
                <div className="chart-bar-container">
                  <div className="chart-bar-track"></div>
                  <div 
                    className="chart-bar-fill" 
                    style={{ backgroundColor: item.color }}
                    data-width={`${item.value}%`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ComparacaoComponent;

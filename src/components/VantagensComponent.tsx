import React from 'react';
import { Shield, Lightning, Ruler, Factory, Wrench, Recycle, Users, Target } from 'phosphor-react';

const VantagensComponent: React.FC = () => {
  const vantagens = [
    { icon: Shield, title: 'Segurança e Rastreabilidade', description: 'Todos os componentes são rastreáveis e seguem rigorosos padrões de segurança industrial', color: '#ef4444' },
    { icon: Lightning, title: 'Agilidade Extrema', description: 'Instalação até 3x mais rápida que sistemas convencionais, reduzindo tempo de obra', color: '#f59e0b' },
    { icon: Ruler, title: 'Padronização Técnica', description: 'Todos os kits seguem medidas precisas de altura e posicionamento conforme projeto', color: '#3b82f6' },
    { icon: Factory, title: 'Qualidade em Fábrica', description: 'Montagem controlada e testada em ambiente fabril antes da entrega final', color: '#005563' },
    { icon: Wrench, title: 'Menos Retrabalho', description: 'Reduz drasticamente erros de instalação e elimina improvisos desnecessários em campo', color: '#8b5cf6' },
    { icon: Recycle, title: 'Zero Desperdícios', description: 'Cortes milimetricamente exatos, eliminando sobras e perdas de materiais', color: '#22c55e' },
    { icon: Users, title: 'Otimização de Equipe', description: 'Montagem facilitada com treinamento e suporte técnico especializado completo', color: '#06b6d4' },
    { icon: Target, title: 'Suporte 360°', description: 'Acompanhamento técnico completo desde a concepção do projeto até a entrega', color: '#e11d48' }
  ];
  const indicadores = [
    { icon: Recycle, label: 'Economia de mão de obra', value: 65, color: '#22c55e' },
    { icon: Ruler, label: 'Redução no cronograma', value: 45, color: '#3b82f6' },
    { icon: Factory, label: 'Redução de perdas', value: 80, color: '#f59e0b' },
    { icon: Wrench, label: 'Menos retrabalho', value: 85, color: '#f59e0b' }
  ];
  return (
    <section id="sobre" className="vantagens melhorada">
      <div className="container">
        <h2 className="section-title">Vantagens dos Kits Braspex</h2>
        <p className="section-description">Descubra como nossos kits industrializados transformam o processo construtivo, oferecendo soluções inovadoras que combinam eficiência, qualidade e sustentabilidade.</p>
        <div className="vantagens-indicadores">
          {indicadores.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={idx} className="vantagem-indicador-bar">
                <div className="vantagem-indicador-label">
                  <span className="vantagem-indicador-icon"><IconComponent size={22} color={item.color} /></span>
                  <span className="vantagem-indicador-text">{item.label}</span>
                  <span className="vantagem-indicador-value" style={{ color: item.color }}>{item.value}%</span>
                </div>
                <div className="vantagem-indicador-bar-bg">
                  <div className="vantagem-indicador-bar-fill" style={{ width: `${item.value}%`, background: item.color }}></div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="vantagens-grid">
          {vantagens.map((vantagem, index) => {
            const IconComponent = vantagem.icon;
            return (
              <div key={index} className="vantagem-card">
                <IconComponent className="vantagem-icon" size={48} weight="fill" color={vantagem.color} />
                <h3>{vantagem.title}</h3>
                <p>{vantagem.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VantagensComponent;

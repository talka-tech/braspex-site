import React, { useState } from 'react';
import { ClipboardText, Wrench, Truck, CheckCircle } from 'phosphor-react';

interface Step {
  id: number;
  icon: React.ReactNode;
  title: string;
  detailTitle: string;
  description: string;
  points: string[];
}

const steps: Step[] = [
  {
    id: 1,
    icon: <ClipboardText size={48} weight="duotone" />,
    title: 'Recebimento do Projeto',
    detailTitle: 'Recebimento do Projeto Executivo',
    description: 'Recebemos o projeto executivo e analisamos todos os detalhes técnicos.',
    points: ['Análise técnica completa', 'Validação de requisitos', 'Estudo de viabilidade', 'Cronograma personalizado']
  },
  {
    id: 2,
    icon: <Wrench size={48} weight="duotone" />,
    title: 'Montagem dos Kits',
    detailTitle: 'Montagem dos Kits Industrializados',
    description: 'Os kits são montados em ambiente fabril, garantindo qualidade e precisão.',
    points: ['Montagem em fábrica', 'Controle de qualidade rigoroso', 'Testes funcionais', 'Embalagem especializada']
  },
  {
    id: 3,
    icon: <Truck size={48} weight="duotone" />,
    title: 'Entrega e Instalação',
    detailTitle: 'Entrega e Instalação no Cliente',
    description: 'Os kits são entregues e instalados no cliente com acompanhamento técnico.',
    points: ['Entrega programada', 'Instalação assistida', 'Treinamento técnico', 'Suporte pós-instalação']
  }
];

const FluxoComponent: React.FC = () => {
  return (
    <section id="fluxo" className="fluxo-modern py-20" style={{ background: '#f8fafc' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Fluxo de Execução</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nosso processo estruturado garante qualidade e eficiência em cada etapa do seu projeto
          </p>
        </div>
        <div className="fluxo-cards-grid" style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {steps.map((step) => (
            <div key={step.id} className="fluxo-card-minimalista" style={{ background: '#fff', borderRadius: '1.5rem', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', padding: '2rem 1.5rem', width: '320px', display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'transform 0.2s', position: 'relative' }}>
              <div style={{ marginBottom: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f0fdf4', borderRadius: '50%', width: '72px', height: '72px' }}>
                {step.icon}
              </div>
              <h3 style={{ color: '#16a34a', fontWeight: 700, fontSize: '1.25rem', marginBottom: '0.5rem', textAlign: 'center' }}>{step.title}</h3>
              <p style={{ color: '#64748b', fontSize: '1rem', textAlign: 'center', marginBottom: '1.2rem' }}>{step.description}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, width: '100%' }}>
                {step.points.slice(0,2).map((point, idx) => (
                  <li key={idx} style={{ color: '#334155', fontSize: '0.98rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle size={18} style={{ color: '#16a34a' }} weight="fill" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FluxoComponent;

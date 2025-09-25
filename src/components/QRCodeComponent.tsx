import React, { useEffect, useRef } from 'react';
import QRCode from 'qrcode';

const QRCodeComponent: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const generateQRCode = async () => {
      if (canvasRef.current) {
        try {
          await QRCode.toCanvas(canvasRef.current, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', {
            width: 200,
            margin: 2,
            color: {
              dark: '#005563',
              light: '#FFFFFF'
            }
          });
        } catch (error) {
          console.error('Erro ao gerar QR Code:', error);
        }
      }
    };
    generateQRCode();
  }, []);

  return (
    <section className="qr-section">
      <div className="container">
        <h2 className="section-title">Conheça Mais Sobre a Braspex</h2>
        <p className="section-description">
          Escaneie o QR Code para assistir a um vídeo com apresentação da empresa, 
          kits sendo produzidos e depoimentos de clientes.
        </p>
        <div className="qr-container">
          <canvas ref={canvasRef} id="qr-code"></canvas>
        </div>
      </div>
    </section>
  );
};

export default QRCodeComponent;

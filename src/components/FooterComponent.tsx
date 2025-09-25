// touched: refresh import resolution
import React from 'react';
import { House, Info, Package, FlowArrow, Phone, MapPin, Envelope, LinkedinLogo, InstagramLogo, FacebookLogo, WhatsappLogo } from 'phosphor-react';

const FooterComponent: React.FC = () => {
  const footerLinks = [
    { href: '#home', text: 'Home', icon: House },
    { href: '#sobre', text: 'Sobre', icon: Info },
    { href: '#kits', text: 'Nossos Kits', icon: Package },
    { href: '#fluxo', text: 'Fluxo de Execução', icon: FlowArrow },
    { href: '#contato', text: 'Contato', icon: Phone }
  ];
  const socialLinks = [
    { href: '#', icon: LinkedinLogo, label: 'LinkedIn' },
    { href: '#', icon: InstagramLogo, label: 'Instagram' },
    { href: '#', icon: FacebookLogo, label: 'Facebook' },
    { href: '#', icon: WhatsappLogo, label: 'WhatsApp' }
  ];
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/imagens/favicon-braspex.png" alt="BRASPEX Logo" className="logo" />
              <p>Soluções industrializadas que transformam a construção civil com tecnologia, qualidade e agilidade.</p>
            </div>
          </div>
          <div className="footer-section">
            <h4>Navegação</h4>
            <div className="footer-links">
              {footerLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <a key={index} href={link.href} className="footer-link">
                    <IconComponent size={18} />
                    <span>{link.text}</span>
                  </a>
                );
              })}
            </div>
          </div>
          <div className="footer-section">
            <h4>Contato</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <Envelope size={18} />
                <span>contato@braspex.com</span>
              </div>
              <div className="contact-item">
                <Phone size={18} />
                <span>(11) 1234-5678</span>
              </div>
              <div className="contact-item">
                <MapPin size={18} />
                <span>São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>
          <div className="footer-section">
            <h4>Redes Sociais</h4>
            <div className="social-links">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a key={index} href={social.href} className="social-link" aria-label={social.label}>
                    <IconComponent size={24} weight="fill" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 BRASPEX. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;

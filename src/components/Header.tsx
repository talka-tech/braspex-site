import React, { useState, useEffect } from 'react';
import { 
  House, 
  Info, 
  Package, 
  FlowArrow, 
  Phone, 
  CaretDown,
  List,
  X,
  Drop,
  Wind,
  Gear
} from 'phosphor-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Smooth scroll function
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Add event listeners to nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/imagens/logo-braspex.png" alt="BRASPEX Logo" className="logo" />
          </div>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="nav-menu">
            <li>
              <a href="#home" className="nav-link">
                <House size={20} weight="regular" />
                Home
              </a>
            </li>
            <li>
              <a href="#sobre" className="nav-link">
                <Info size={20} weight="regular" />
                Sobre
              </a>
            </li>
            <li className="dropdown">
              <a 
                href="#kits" 
                className="nav-link dropdown-toggle"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown();
                }}
              >
                <Package size={20} weight="regular" />
                Nossos Kits 
                <CaretDown size={16} weight="regular" className="dropdown-arrow" />
              </a>
              <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                <a href="#kit-agua" className="dropdown-item">
                  <Drop size={18} weight="regular" />
                  Água Fria e Quente
                </a>
                <a href="#kit-ar" className="dropdown-item">
                  <Wind size={18} weight="regular" />
                  Ar-Condicionado
                </a>
                <a href="#kit-chassis" className="dropdown-item">
                  <Gear size={18} weight="regular" />
                  Chassis Metálicos
                </a>
              </div>
            </li>
            <li>
              <a href="#fluxo" className="nav-link">
                <FlowArrow size={20} weight="regular" />
                Fluxo de Execução
              </a>
            </li>
            <li>
              <a href="#contato" className="nav-link">
                <Phone size={20} weight="regular" />
                Contato
              </a>
            </li>
          </ul>
          <button className="cta-button">
            Solicitar Cotação
          </button>
          <div 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <List size={24} />}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {
    
    // Menu Mobile
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Animação do hamburger
        const spans = hamburger.querySelectorAll('span');
        spans.forEach((span, index) => {
            if (navMenu.classList.contains('active')) {
                if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                if (index === 1) span.style.opacity = '0';
                if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                span.style.transform = 'none';
                span.style.opacity = '1';
            }
        });
    });

    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const spans = hamburger.querySelectorAll('span');
                spans.forEach(span => {
                    span.style.transform = 'none';
                    span.style.opacity = '1';
                });
            }
        });
    });

    // Smooth scroll para navegação interna
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                 const offsetTop = targetElement.offsetTop - 80; // Compensar altura do header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Transição de imagens na seção de comparação
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    if(img1 && img2) {
        let currentImage = 1;
        function switchImages() {
            if (currentImage === 1) {
                img1.classList.remove('active');
                img2.classList.add('active');
                currentImage = 2;
            } else {
                img2.classList.remove('active');
                img1.classList.add('active');
                currentImage = 1;
            }
        }
        setInterval(switchImages, 3000);
    }

    // Geração do QR Code
    const qrCanvas = document.getElementById('qr-code');
    if (qrCanvas && typeof QRCode !== 'undefined') {
        QRCode.toCanvas(qrCanvas, 'https://www.braspex.com.br/video-apresentacao', {
            width: 200,
            height: 200,
            color: {
                dark: '#005563',
                light: '#FFFFFF'
            }
        }, function(error) {
            if (error) console.error('Erro ao gerar QR Code:', error);
        });
    }

    // Animações on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.vantagem-card, .kit-card, .timeline-item, .section-title, .feature-card, .hero-content');
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Destacar link ativo na navegação
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-menu a.nav-link');
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            if (window.pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Botões CTA com ação de scroll
    const ctaButtons = document.querySelectorAll('.cta-button, .cta-button-large, .btn-secondary');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const contatoSection = document.getElementById('contato');
            if (contatoSection) {
                const offsetTop = contatoSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Efeito hover nos cards
    const cards = document.querySelectorAll('.vantagem-card, .kit-card, .feature-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    console.log('Site BRASPEX carregado com sucesso!');
});


// Funcionalidade das abas de kits
document.addEventListener('DOMContentLoaded', function() {
    const kitTabs = document.querySelectorAll('.kit-tab');
    const kitPanels = document.querySelectorAll('.kit-panel');

    kitTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetKit = this.getAttribute('data-kit');
            
            kitTabs.forEach(t => t.classList.remove('active'));
            kitPanels.forEach(p => p.classList.remove('active'));
            
            this.classList.add('active');
            document.getElementById(`kit-${targetKit}-content`).classList.add('active');
        });
    });
});


// Modal de imagens
function openImageModal(imageSrc, caption) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    
    modalImage.src = imageSrc;
    modalCaption.textContent = caption;
    modal.classList.add('show');
    
    document.body.style.overflow = 'hidden';
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('show');
    
    document.body.style.overflow = 'auto';
}

document.getElementById('imageModal').addEventListener('click', function(e) {
    if (e.target === this || e.target.classList.contains('modal-close')) {
        closeImageModal();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeImageModal();
    }
});


// Funcionalidade interativa do fluxo de trabalho
document.addEventListener('DOMContentLoaded', function() {
    const stepItems = document.querySelectorAll('.step-item');
    const stepDetails = document.querySelectorAll('.step-detail');

    stepItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetStep = this.getAttribute('data-step');
            
            stepItems.forEach(step => step.classList.remove('active'));
            stepDetails.forEach(detail => detail.classList.remove('active'));
            
            this.classList.add('active');
            document.getElementById(`step-${targetStep}`).classList.add('active');
        });
    });
});


// Navegação direta para tipos de kits
document.addEventListener('DOMContentLoaded', function() {
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    
    dropdownItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            
            document.getElementById('kits').scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            setTimeout(() => {
                let tabToActivate = '';
                if (targetId === 'kit-agua') tabToActivate = 'agua';
                else if (targetId === 'kit-ar') tabToActivate = 'ar';
                else if (targetId === 'kit-chassis') tabToActivate = 'chassis';
                
                if (tabToActivate) {
                    const kitTabs = document.querySelectorAll('.kit-tab');
                    const kitPanels = document.querySelectorAll('.kit-panel');
                    
                    kitTabs.forEach(t => t.classList.remove('active'));
                    kitPanels.forEach(p => p.classList.remove('active'));
                    
                    const targetTab = document.querySelector(`[data-kit="${tabToActivate}"]`);
                    const targetPanel = document.getElementById(`kit-${tabToActivate}-content`);
                    
                    if (targetTab && targetPanel) {
                        targetTab.classList.add('active');
                        targetPanel.classList.add('active');
                    }
                }
            }, 700); 
        });
    });
});


// Hero Slider
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.nav-dot');
    let currentSlide = 0;
    const slideInterval = 5000;
    let autoSlideInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        currentSlide = index;
    }

    function nextSlide() {
        const next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, slideInterval);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopAutoSlide();
            showSlide(index);
            startAutoSlide();
        });
    });

    startAutoSlide();
});
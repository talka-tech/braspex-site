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
            navMenu.classList.remove('active');
            const spans = hamburger.querySelectorAll('span');
            spans.forEach(span => {
                span.style.transform = 'none';
                span.style.opacity = '1';
            });
        });
    });

    // Smooth scroll para navegação interna
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Compensar altura do header
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

    // Alternar imagens a cada 3 segundos
    setInterval(switchImages, 3000);

    // Geração do QR Code
    const qrCanvas = document.getElementById('qr-code');
    if (typeof QRCode !== 'undefined') {
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
            }
        });
    }, observerOptions);

    // Elementos para animar
    const animatedElements = document.querySelectorAll('.vantagem-card, .kit-card, .timeline-item, .section-title');
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Efeito parallax sutil no hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroImg = document.querySelector('.hero-img');
        
        if (heroImg && scrolled < window.innerHeight) {
            heroImg.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });

    // Destacar link ativo na navegação
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
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

    // Botões CTA com ação
    const ctaButtons = document.querySelectorAll('.cta-button, .cta-button-large');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Scroll para seção de contato
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

    // Lazy loading para imagens
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        imageObserver.observe(img);
    });

    // Preloader simples
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });

    // Efeito hover nos cards
    const cards = document.querySelectorAll('.vantagem-card, .kit-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Contador animado (se necessário no futuro)
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }
        
        updateCounter();
    }

    // Feedback visual para cliques
    document.addEventListener('click', function(e) {
        if (e.target.matches('button, .nav-link, .footer-links a')) {
            e.target.style.transform = 'scale(0.95)';
            setTimeout(() => {
                e.target.style.transform = '';
            }, 150);
        }
    });

    // Otimização de performance para scroll
    let ticking = false;
    
    function updateOnScroll() {
        // Código de scroll otimizado aqui
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
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
            
            // Remove active class from all tabs and panels
            kitTabs.forEach(t => t.classList.remove('active'));
            kitPanels.forEach(p => p.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding panel
            this.classList.add('active');
            document.getElementById(`kit-${targetKit}`).classList.add('active');
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
    modal.style.display = 'flex';
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('show');
    modal.style.display = 'none';
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
}

// Close modal on click outside
document.getElementById('imageModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeImageModal();
    }
});

// Close modal on ESC key
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
            
            // Remove active class from all steps and details
            stepItems.forEach(step => step.classList.remove('active'));
            stepDetails.forEach(detail => detail.classList.remove('active'));
            
            // Add active class to clicked step and corresponding detail
            this.classList.add('active');
            document.getElementById(`step-${targetStep}`).classList.add('active');
        });
    });

    // Auto-advance steps (optional)
    let currentStep = 1;
    const totalSteps = stepItems.length;
    
    function autoAdvanceSteps() {
        if (document.querySelector('.fluxo').getBoundingClientRect().top < window.innerHeight && 
            document.querySelector('.fluxo').getBoundingClientRect().bottom > 0) {
            
            setTimeout(() => {
                currentStep = currentStep >= totalSteps ? 1 : currentStep + 1;
                
                stepItems.forEach(step => step.classList.remove('active'));
                stepDetails.forEach(detail => detail.classList.remove('active'));
                
                document.querySelector(`[data-step="${currentStep}"]`).classList.add('active');
                document.getElementById(`step-${currentStep}`).classList.add('active');
            }, 5000); // Change step every 5 seconds when in view
        }
    }

    // Uncomment the line below if you want auto-advancing steps
    // setInterval(autoAdvanceSteps, 5000);
});


// Navegação direta para tipos de kits
document.addEventListener('DOMContentLoaded', function() {
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    
    dropdownItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1); // Remove o #
            
            // Navegar para a seção de kits
            document.getElementById('kits').scrollIntoView({ behavior: 'smooth' });
            
            // Aguardar um pouco para a rolagem completar, então ativar a aba correta
            setTimeout(() => {
                // Determinar qual aba ativar baseado no targetId
                let tabToActivate = '';
                if (targetId === 'kit-agua') {
                    tabToActivate = 'agua-fria';
                } else if (targetId === 'kit-ar') {
                    tabToActivate = 'ar-condicionado';
                } else if (targetId === 'kit-chassis') {
                    tabToActivate = 'chassis-metalicos';
                }
                
                if (tabToActivate) {
                    // Remove active class from all tabs and panels
                    const kitTabs = document.querySelectorAll('.kit-tab');
                    const kitPanels = document.querySelectorAll('.kit-panel');
                    
                    kitTabs.forEach(t => t.classList.remove('active'));
                    kitPanels.forEach(p => p.classList.remove('active'));
                    
                    // Add active class to target tab and panel
                    const targetTab = document.querySelector(`[data-kit="${tabToActivate}"]`);
                    const targetPanel = document.getElementById(`kit-${tabToActivate}`);
                    
                    if (targetTab && targetPanel) {
                        targetTab.classList.add('active');
                        targetPanel.classList.add('active');
                    }
                }
            }, 800);
        });
    });
});


// Hero Slider
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.nav-dot');
    let currentSlide = 0;
    const slideInterval = 5000; // 5 segundos

    function showSlide(index) {
        // Remove active class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current slide and dot
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        
        currentSlide = index;
    }

    function nextSlide() {
        const next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }

    // Auto-advance slides
    setInterval(nextSlide, slideInterval);

    // Manual navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });
});


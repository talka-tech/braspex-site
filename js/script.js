/**
 * PARTE 1: O CARREGADOR DE COMPONENTES
 * -------------------------------------
 * Este código é executado primeiro. Ele encontra todos os divs no index.html
 * que têm o atributo 'data-component', busca o arquivo HTML correspondente
 * e injeta o conteúdo na página.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Função assíncrona para buscar e carregar os componentes
    const loadComponents = async () => {
        const components = document.querySelectorAll('[data-component]');
        for (const component of components) {
            const path = component.getAttribute('data-component');
            try {
                const response = await fetch(path); // Busca o arquivo (ex: 'components/header.html')
                if (response.ok) {
                    const html = await response.text(); // Pega o conteúdo do arquivo
                    component.innerHTML = html; // Insere o HTML no div
                } else {
                    component.innerHTML = `<p>Erro ao carregar ${path}</p>`;
                }
            } catch (error) {
                console.error(`Não foi possível carregar o componente: ${path}`, error);
                component.innerHTML = `<p>Não foi possível carregar ${path}</p>`;
            }
        }
    };

    /**
     * PARTE 2: SEU CÓDIGO ORIGINAL
     * ----------------------------
     * Todo o seu código JavaScript anterior foi movido para dentro desta função.
     * Ela só será chamada DEPOIS que todos os componentes da PARTE 1 forem
     * carregados com sucesso.
     */
    const executeScripts = () => {

        // --- INÍCIO DO SEU CÓDIGO ANTIGO ---

        // Menu Mobile
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        
        if (hamburger && navMenu) {
            hamburger.addEventListener('click', function() {
                navMenu.classList.toggle('active');
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
        }

        // Fechar menu ao clicar em um link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu && navMenu.classList.contains('active')) {
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
                if (targetId === '#') return;
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80;
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
        if (img1 && img2) {
            let currentImage = 1;
            setInterval(() => {
                if (currentImage === 1) {
                    img1.classList.remove('active');
                    img2.classList.add('active');
                    currentImage = 2;
                } else {
                    img2.classList.remove('active');
                    img1.classList.add('active');
                    currentImage = 1;
                }
            }, 3000);
        }

        // Geração do QR Code
        const qrCanvas = document.getElementById('qr-code');
        if (qrCanvas && typeof QRCode !== 'undefined') {
            QRCode.toCanvas(qrCanvas, 'https://www.braspex.com.br/video-apresentacao', {
                width: 200,
                height: 200,
                color: { dark: '#005563', light: '#FFFFFF' }
            }, (error) => {
                if (error) console.error('Erro ao gerar QR Code:', error);
            });
        }

        // Animações on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        document.querySelectorAll('.vantagem-card, .kit-card, .timeline-item, .section-title, .feature-card, .hero-content').forEach(el => {
            observer.observe(el);
        });

        // Efeito hover nos cards
        const cards = document.querySelectorAll('.vantagem-card, .kit-card, .feature-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() { this.style.transform = 'translateY(-5px)'; });
            card.addEventListener('mouseleave', function() { this.style.transform = 'translateY(0)'; });
        });
        
        // Funcionalidade das abas de kits
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

        // Navegação direta para tipos de kits
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
                        const targetTab = document.querySelector(`[data-kit="${tabToActivate}"]`);
                        if(targetTab) targetTab.click(); // Simula o clique na aba correta
                    }
                }, 700); 
            });
        });

        // Hero Slider
        const slides = document.querySelectorAll('.hero-slide');
        const dots = document.querySelectorAll('.nav-dot');
        if (slides.length > 0 && dots.length > 0) {
            let currentSlide = 0;
            const slideInterval = 5000;
            let autoSlideInterval;

            const showSlide = (index) => {
                slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
                dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
                currentSlide = index;
            };

            const nextSlide = () => showSlide((currentSlide + 1) % slides.length);
            const startAutoSlide = () => autoSlideInterval = setInterval(nextSlide, slideInterval);
            const stopAutoSlide = () => clearInterval(autoSlideInterval);

            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    stopAutoSlide();
                    showSlide(index);
                    startAutoSlide();
                });
            });

            startAutoSlide();
        }

        console.log('Site BRASPEX e todos os scripts carregados com sucesso!');

        // --- FIM DO SEU CÓDIGO ANTIGO ---
    };

    /**
     * PARTE 3: A EXECUÇÃO
     * -------------------
     * O `.then()` é uma promessa. Ele garante que a função `executeScripts`
     * só será chamada quando a função `loadComponents` terminar seu trabalho.
     * O `setTimeout` é uma segurança extra para garantir que o navegador
     * teve tempo de "renderizar" o HTML injetado antes dos scripts rodarem.
     */
    loadComponents().then(() => {
        setTimeout(executeScripts, 100);
    });
});

// As funções do modal podem ficar fora, pois são chamadas por eventos de clique (onclick)
function openImageModal(imageSrc, caption) {
    const modal = document.getElementById('imageModal');
    if (!modal) return;
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    modalImage.src = imageSrc;
    modalCaption.textContent = caption;
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    if (!modal) return;
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Fechar modal no clique fora ou no 'x'
document.addEventListener('click', function(e) {
    const modal = document.getElementById('imageModal');
    if (modal && e.target.classList.contains('modal') || e.target.classList.contains('modal-close')) {
        closeImageModal();
    }
});

// Fechar modal com a tecla ESC
document.addEventListener('keydown', function(e) {
    const modal = document.getElementById('imageModal');
    if (modal && e.key === 'Escape' && modal.classList.contains('show')) {
        closeImageModal();
    }
});
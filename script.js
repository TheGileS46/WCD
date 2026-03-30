
        document.addEventListener('DOMContentLoaded', () => {

            // --- Lógica del Menú Móvil ---
            const hamburgerBtn = document.getElementById('hamburger-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileLinks = document.querySelectorAll('.mobile-link');
            const body = document.body;

            function toggleMenu() {
                const isOpen = mobileMenu.classList.contains('menu-open');
                
                if (isOpen) {
                    mobileMenu.classList.remove('menu-open');
                    mobileMenu.classList.add('menu-closed');
                    body.style.overflow = 'auto'; // Restaurar scroll
                    hamburgerBtn.innerHTML = '<i class="fas fa-bars text-3xl"></i>';
                } else {
                    mobileMenu.classList.remove('menu-closed');
                    mobileMenu.classList.add('menu-open');
                    body.style.overflow = 'hidden'; // Bloquear scroll de fondo
                    hamburgerBtn.innerHTML = '<i class="fas fa-times text-4xl text-wcd-orange"></i>';
                }
            }

            hamburgerBtn.addEventListener('click', toggleMenu);

            // Cerrar menú al hacer clic en un enlace
            mobileLinks.forEach(link => {
                link.addEventListener('click', toggleMenu);
            });


            // --- Animaciones Scroll Reveal ---
            const revealElements = document.querySelectorAll('.reveal');

            const revealOnScroll = () => {
                const windowHeight = window.innerHeight;
                const revealPoint = 100; // Punto de quiebre responsivo

                revealElements.forEach(element => {
                    const elementTop = element.getBoundingClientRect().top;
                    if (elementTop < windowHeight - revealPoint) {
                        element.classList.add('active');
                    }
                });
            };

            revealOnScroll(); // Trigger inicial
            window.addEventListener('scroll', revealOnScroll);


            // --- Navbar Shadow on Scroll ---
            const navbar = document.getElementById('navbar');
            const handleNavbarScroll = () => {
                if (window.scrollY > 20) {
                    navbar.classList.add('shadow-2xl', 'bg-wcd-darkest');
                    navbar.classList.remove('bg-wcd-darkest/95', 'backdrop-blur-md');
                } else {
                    navbar.classList.remove('shadow-2xl', 'bg-wcd-darkest');
                    navbar.classList.add('bg-wcd-darkest/95', 'backdrop-blur-md');
                }
            };
            window.addEventListener('scroll', handleNavbarScroll);


            // --- Efecto Parpadeo Ocelote Hero ---
            const oceloteHero = document.getElementById('hero-ocelote');
            if (oceloteHero) {
                let opacity = 0.95;
                let increasing = false;

                setInterval(() => {
                    if (increasing) {
                        opacity += 0.005;
                        if (opacity >= 0.98) increasing = false;
                    } else {
                        opacity -= 0.005;
                        if (opacity <= 0.85) increasing = true; // Rango más visible en móvil
                    }
                    oceloteHero.style.opacity = opacity;
                }, 50); 
            }
        });

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {

    // 1. Efecto de aparición al hacer scroll (Scroll Reveal)
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 150; // Punto en pixeles antes de aparecer

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });
    };

    // Ejecutar una vez al cargar para elementos ya visibles
    revealOnScroll();

    // Ejecutar cada vez que se hace scroll
    window.addEventListener('scroll', revealOnScroll);


    // 2. Animación del Navbar al hacer scroll
    const navbar = document.getElementById('navbar');

    const handleNavbarScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-2xl', 'bg-wcd-darkest/95');
            navbar.classList.remove('bg-wcd-darkest/95', 'backdrop-blur-md');
        } else {
            navbar.classList.remove('shadow-2xl', 'bg-wcd-darkest/95');
            navbar.classList.add('bg-wcd-darkest/95', 'backdrop-blur-md');
        }
    };

    window.addEventListener('scroll', handleNavbarScroll);


    // 3. Efecto de parpadeo sutil para el Ocelote en el Hero
    const oceloteHero = document.querySelector('#inicio img');

    if (oceloteHero) {
        let opacity = 0.95;
        let increasing = false;

        setInterval(() => {
            if (increasing) {
                opacity += 0.005;
                if (opacity >= 0.98) increasing = false;
            } else {
                opacity -= 0.005;
                if (opacity <= 0.92) increasing = true;
            }
            oceloteHero.style.opacity = opacity;
        }, 50); // Velocidad del parpadeo
    }

});
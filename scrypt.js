document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Evita el comportamiento predeterminado del enlace
        const targetId = this.getAttribute('href'); // Obtiene el ID de la sección
        const targetSection = document.querySelector(targetId); // Selecciona la sección

        // Desplazamiento suave hacia la sección
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});







// Selecciona todos los enlaces del menú
const enlaces = document.querySelectorAll('nav a');

// Función para resaltar el enlace activo
function resaltarEnlaceActivo() {
    const scrollPos = window.scrollY;

    enlaces.forEach(enlace => {
        const seccion = document.querySelector(enlace.getAttribute('href'));
        if (seccion.offsetTop <= scrollPos + 100 && seccion.offsetTop + seccion.offsetHeight > scrollPos) {
            enlace.classList.add('active');
        } else {
            enlace.classList.remove('active');
        }
    });
}

// Escucha el evento de scroll
window.addEventListener('scroll', resaltarEnlaceActivo);
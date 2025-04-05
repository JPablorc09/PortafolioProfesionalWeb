// Obtener todos los botones de filtro
const filterButtons = document.querySelectorAll('.filter-btn');
// Obtener todas las tarjetas de los proyectos
const projectCards = document.querySelectorAll('.project-card');

// Función para filtrar las tarjetas
function filterProjects(category) {
    // Recorre todas las tarjetas de proyecto
    projectCards.forEach(card => {
        // Si la categoría es 'all', mostramos todas las tarjetas
        if (category === 'all') {
            card.style.display = 'block';
        } else {
            // Si la tarjeta tiene la categoría correspondiente, la mostramos
            if (card.getAttribute('data-category') === category) {
                card.style.display = 'block';
            } else {
                // Si no tiene la categoría, la ocultamos
                card.style.display = 'none';
            }
        }
    });
}

// Añadir eventos a los botones de filtro
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remover la clase 'active' de todos los botones
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Añadir la clase 'active' al botón clickeado
        button.classList.add('active');
        // Obtener la categoría de cada botón
        const category = button.getAttribute('data-category');
        // Filtrar los proyectos según la categoría
        filterProjects(category);
    });
});

// Inicializar con todos los proyectos visibles
filterProjects('all');

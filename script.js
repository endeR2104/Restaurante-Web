// Menú móvil
        const mobileMenu = document.getElementById('mobile-menu');
        const navMenu = document.querySelector('.nav-menu');
        
        mobileMenu.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Filtrar menú por categorías
        const categoryButtons = document.querySelectorAll('.category-btn');
        const menuItems = document.querySelectorAll('.menu-item');
        
        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remover clase active de todos los botones
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                
                // Añadir clase active al botón clickeado
                button.classList.add('active');
                
                // Obtener la categoría seleccionada
                const selectedCategory = button.getAttribute('data-category');
                
                // Mostrar/ocultar items del menú según la categoría
                menuItems.forEach(item => {
                    if (selectedCategory === 'todos' || item.getAttribute('data-category') === selectedCategory) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
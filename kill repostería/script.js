    // Selecciona el botón de menú hamburguesa y el menú
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('header nav ul');

    // Agregar un evento de clic al ícono de menú
    menuIcon.addEventListener('click', () => {
        navMenu.classList.toggle('active');  // Alterna la clase 'active' para mostrar/ocultar el menú
    });

    

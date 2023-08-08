// Obtenemos todos los elementos del menú con clase "dropdown"
const dropdowns = document.querySelectorAll('.dropdown');

// Iteramos sobre los elementos y agregamos un evento click a cada uno
dropdowns.forEach(dropdown => {
  dropdown.addEventListener('click', () => {
    // Alternamos la clase "active" para mostrar u ocultar el submenú
    dropdown.querySelector('.submenu').classList.toggle('active');
  });
});

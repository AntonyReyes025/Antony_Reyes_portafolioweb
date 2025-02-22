// Modo oscuro
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Función para actualizar el modo oscuro
function updateDarkMode(isDark) {
    if (isDark) {
        body.classList.add('dark-mode');
        darkModeToggle.textContent = '☀️ Modo Claro';
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        darkModeToggle.textContent = '🌙 Modo Oscuro';
        localStorage.setItem('theme', 'light');
    }
}

// Event listener para el botón de cambio de modo
darkModeToggle.addEventListener('click', () => {
    const isDark = !body.classList.contains('dark-mode');
    updateDarkMode(isDark);
});

// Cargar tema guardado y preferencias del sistema
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (savedTheme === null && prefersDark)) {
        updateDarkMode(true);
    } else {
        updateDarkMode(false);
    }
});

// Escuchar cambios en las preferencias del sistema
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (localStorage.getItem('theme') === null) {
        updateDarkMode(e.matches);
    }
});
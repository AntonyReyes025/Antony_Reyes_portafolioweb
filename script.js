document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Función para actualizar el modo oscuro
    function updateDarkMode(isDark) {
        if (isDark) {
            body.classList.add('dark-mode');
            darkModeToggle.textContent = '☀️ Modo Claro';
            darkModeToggle.classList.remove('btn-outline-light');
            darkModeToggle.classList.add('btn-outline-warning');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            darkModeToggle.textContent = '🌙 Modo Oscuro';
            darkModeToggle.classList.remove('btn-outline-warning');
            darkModeToggle.classList.add('btn-outline-light');
            localStorage.setItem('theme', 'light');
        }
    }

    // Event listener para el botón de cambio de modo
    darkModeToggle.addEventListener('click', () => {
        const isDark = !body.classList.contains('dark-mode');
        updateDarkMode(isDark);
    });

    // Cargar tema guardado o preferencias del sistema
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (savedTheme === null && prefersDark)) {
        updateDarkMode(true);
    } else {
        updateDarkMode(false);
    }

    // Observer para cambios en las preferencias del sistema
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (localStorage.getItem('theme') === null) {
            updateDarkMode(e.matches);
        }
    });
});

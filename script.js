
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;


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


darkModeToggle.addEventListener('click', () => {
    const isDark = !body.classList.contains('dark-mode');
    updateDarkMode(isDark);
});


document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (savedTheme === null && prefersDark)) {
        updateDarkMode(true);
    } else {
        updateDarkMode(false);
    }
});


window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (localStorage.getItem('theme') === null) {
        updateDarkMode(e.matches);
    }
});

// script.js

// Select the toggle button
const toggleButton = document.getElementById('theme-toggle');

// Function to set the theme
function setTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.style.setProperty('--background-color', '#121212');
    document.documentElement.style.setProperty('--text-color', '#ffffff');
    document.documentElement.style.setProperty('--card-bg-color', '#1e1e1e');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.style.setProperty('--background-color', '#ffffff');
    document.documentElement.style.setProperty('--text-color', '#000000');
    document.documentElement.style.setProperty('--card-bg-color', '#f5f5f5');
    localStorage.setItem('theme', 'light');
  }
}

// Event listener for the toggle button
toggleButton.addEventListener('click', () => {
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark') {
    setTheme('light');
  } else {
    setTheme('dark');
  }
});

// On page load, set the theme from localStorage or default to light
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);
});

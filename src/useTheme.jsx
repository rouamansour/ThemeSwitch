import { useState, useEffect } from 'react';

// Sauvegarde le thème dans localStorage pour qu'il persiste
const getInitialTheme = () => {
  return localStorage.getItem('theme') || 'light';
};

export const useTheme = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.body.className = ''; // Reset les classes pour éviter les conflits
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme); // Sauvegarde le thème
  }, [theme]);

  const updateTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return { theme, updateTheme };
};

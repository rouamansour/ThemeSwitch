import { useState, useEffect } from 'react';

const getInitialTheme = () => {
  return localStorage.getItem('theme') || 'light';
};

export const useTheme = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.body.className = ''; // Reset classes to avoid conflicts
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme); 
  }, [theme]);

  const updateTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return { theme, updateTheme };
}; 
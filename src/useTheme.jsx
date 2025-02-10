import { useState, useEffect } from 'react';
import { themeManager } from './ThemeManager';
import { themeObserver } from './ThemeObserver';

export const useTheme = () => {
  const [theme, setTheme] = useState(themeManager.getTheme());

  useEffect(() => {
    // Appliquer le thème au body
    document.body.className = ''; // Réinitialise les classes pour éviter les conflits
    document.body.classList.add(theme);

    // Abonnement aux changements de thème
    const handleThemeChange = (newTheme) => {
      document.body.className = ''; // Nettoie les classes existantes
      document.body.classList.add(newTheme);
      setTheme(newTheme);
    };

    themeObserver.subscribe(handleThemeChange);
    return () => themeObserver.unsubscribe(handleThemeChange);
  }, [theme]);

  const updateTheme = (newTheme) => {
    themeManager.setTheme(newTheme);
  };

  return { theme, updateTheme };
};

import React from 'react';
import { useTheme } from './useTheme';

const ThemeSelector = () => {
  const { theme, updateTheme } = useTheme();

  return (
    <div>
      <p>Thème actuel : {theme}</p>
      <select value={theme} onChange={(e) => updateTheme(e.target.value)}>
        <option value="light">Clair</option>
        <option value="dark">Sombre</option>
        <option value="blue">Bleu</option>
      </select>
    </div>
  );
};

export default ThemeSelector;

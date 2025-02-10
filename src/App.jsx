import './App.css'
import React from 'react';
import { useTheme } from './useTheme';
import ThemeSelector from './ThemeSelector';


const App = () => {
  const { theme } = useTheme(); // Récupérer le thème actuel

  return (
    <div className='centered-container'>
      <div className={theme}>
        <h4>Changer le thème</h4>
        <ThemeSelector />
    </div>
    </div>
   
  );
};

export default App;


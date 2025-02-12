import './App.css'
import { useTheme } from './useTheme';
import ThemeSelector from './ThemeSelector';


const App = () => {
  const { theme } = useTheme(); // Récupérer le thème actuel

  return (
    <div className='centered-container'>
      <div className={theme}>
        <h3>Change Theme</h3>
        <ThemeSelector />
    </div>
    </div>
  );
};

export default App;


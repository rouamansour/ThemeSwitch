import { useTheme } from './useTheme';

const ThemeSelector = () => {
    const { theme, updateTheme } = useTheme();
  
    return (
      <div>
        <h4>Current Theme : {theme}</h4>
        <select value={theme} onChange={(e) => updateTheme(e.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="blue">Blue</option>
        </select>
      </div>
    );
  };
  
  export default ThemeSelector; 
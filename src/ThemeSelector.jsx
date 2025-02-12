import PropTypes from "prop-types";
import withTheme from "./withTheme";

const ThemeSelector = ({ theme, updateTheme }) => {
  return (
    <div>
      <h4>Current Theme: {theme}</h4>
      <select value={theme} onChange={(e) => updateTheme(e.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="blue">Blue</option>
      </select>
    </div>
  );
};

// Validation des props
ThemeSelector.propTypes = {
  theme: PropTypes.string.isRequired, // theme doit être une string obligatoire
  updateTheme: PropTypes.func.isRequired, // updateTheme doit être une fonction obligatoire
};

export default withTheme(ThemeSelector);
